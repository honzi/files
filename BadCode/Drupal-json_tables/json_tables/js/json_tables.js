;(function ($) {
  'use strict';

  Drupal.behaviors.iterami_json_tables = {
    attach: function(context) {

      function add_row(id, data) {
        data = data || false;

        var table_id = id.substring(0, id.length - 5);
        var tbody_id = table_id + '-body';

        var rowstring = '<tr>';
        var columnlist = columns[table_id];
        for (var column in columnlist) {
          rowstring += '<td>';

          if (columnlist[column]['prefix'] !== void 0) {
            rowstring += columnlist[column]['prefix'];
          }

          rowstring += create_input(
            column,
            columnlist[column]['type'],
            {
              'data': columnlist[column]['data'] || false,
              'value': data === false
                ? column_default(columnlist, column)
                : data[column],
            }
          ) + '</td>';
        }
        rowstring += '<td class="operations"><input class="delete form-submit" type="button" value="Delete"><input class="clone form-submit" type="button" value="Duplicate"></td></tr>';

        $('#' + tbody_id).append(rowstring);
        update_events(tbody_id);
        update_json(table_id);
      }

      function clone_row(row) {
        row = $(row).closest('tr');
        $(row).after($(row).clone());
        update_events($(row).closest('tbody').attr('id'));
      }

      function column_default(columnlist, column) {
        var defaultvalue = '';

        if ('default' in columnlist[column]) {
          defaultvalue = columnlist[column]['default'];
        }
        else if ('data' in columnlist[column]) {
          defaultvalue = jsondata['extra'][columnlist[column]['data']]['value'];
        }

        return defaultvalue === void 0
          ? ''
          : defaultvalue;
      }

      function create_input(column, type, data) {
        data = data || {};
        if (typeof data['value'] !== 'object') {
            data['value'] = [data['value']];
        }

        if (type === void 0) {
          type = 'text';
        }

        var classes = 'class="json-tables-input ' + column + ' form-' + type + '"';

        if (type === 'select') {
          var selected = data['data'];
          var options = jsondata['extra'][data['data']]['value'];

          var select = '<select ' + classes + '>';
          for (var option in options) {
            select += '<option ';
            if (selected !== false && selected in jsondata['extra'] && options[option] === data['value'][0]) {
              select += 'selected ';
            }
            select += 'value="' + options[option] + '">' + options[option] + '</option>';
          }
          select += '</select>';
          return select;
        }
        else if (type === 'text') {
          return '<input ' + classes + ' value="' + data['value'][0] + '" type="text">';
        }
        else if (type === 'textarea') {
          return '<textarea ' + classes + '>' + data['value'][0] + '</textarea>';
        }
      }

      function create_table(id, data) {
        var add_id = id + '-addd';
        var table_id = id + '-tabl';
        var tbody_id = id + '-body';
        var thead_id = id + '-head';

        $('#' + id).parent().parent().after('<table id="' + table_id + '"><thead id="' + thead_id + '"></thead><tbody id="' + tbody_id + '"></tbody></table>');

        var columnstring = '<tr>';
        for (var column in columns[id]) {
          columnstring += '<th>' + column + '</th>';
        }
        columnstring += '<th>Operations</th></tr>';
        $('#' + thead_id).html(columnstring);
        for (var row in data) {
          add_row(
            table_id,
            data[row]
          );
        }
        $('#' + table_id).after('<input class="form-submit" id="' + add_id + '" type="button" value="Add Row">');

        $('#' + add_id).click(function () {
          add_row(this.id);
        });
      }

      function remove_row(row) {
        var row = $(row).closest('tr');
        var id = $(row).closest('table').attr('id');
        if (id === void 0) {
          return;
        }
        id = id.substring(0, id.length - 5);
        $(row).remove();
        update_json(id);
      }

      function update_events(tbody_id) {
        $('.json-tables-input').off();
        $('#' + tbody_id + ' .delete').off();
        $('#' + tbody_id + ' .clone').off();

        $('.json-tables-input').on('input', function () {
          update_json(this);
        });
        $('#' + tbody_id + ' .delete').click(function () {
          remove_row(this);
        });
        $('#' + tbody_id + ' .clone').click(function () {
          clone_row(this);
          update_json(this);
        });
      }

      function update_json(id) {
        if (typeof id !== 'string') {
          id = $(id).closest('table').attr('id');
          id = id.substring(0, id.length - 5);
        }

        var oldjson = JSON.parse($('#' + id).val());
        var json = {
          'cols': oldjson['cols'],
          'data': [],
        };
        $('#' + id + '-body tr').each(function () {
          var datarow = {};
          for (var column in json['cols']) {
            datarow[column] = $(this).find('.' + column).val();
            if (datarow[column] === void 0) {
              datarow[column] = column_default(json['cols'], column);
            }
            else if ('data' in json['cols'][column]) {
              for (var logic in jsondata['extra'][json['cols'][column]['data']]['logic']) {
                var logic_object = jsondata['logic'][jsondata['extra'][json['cols'][column]['data']]['logic'][logic]];

                var passed = logic_object['type-data'].includes(datarow[column]);

                if (logic_object['type'] === 'hide') {
                    passed = !passed;
                }

                for (var resultid in logic_object['result-data']) {
                  document.getElementById(logic_object['result-data'][resultid]).style.display = passed
                    ? 'block'
                    : 'none';
                }
              }
            }
          }
          json['data'].push(datarow);
        });
        $('#' + id).val(JSON.stringify(json));
      }

      var columns = {};
      var configuring = false;
      var jsondata = {
        'extra': {},
        'logic': {},
      };

      $(document).ready(function () {
        // Load extra JSON.
        if ('json_tables' in Drupal.settings) {
          var extrajson = '';
          var json = '';

          if ('extra' in Drupal.settings.json_tables) {
            extrajson = JSON.parse(Drupal.settings.json_tables.extra);
            for (json in extrajson) {
              jsondata['extra'][json] = extrajson[json];

              if (jsondata['extra'][json]['type'] === 'select') {
                jsondata['extra'][json]['value'] = jsondata['extra'][json]['value'].split(',');
              }

              jsondata['extra'][json]['logic'] = ('logic' in jsondata['extra'][json])
                ? jsondata['extra'][json]['logic'].split(',')
                : [];
            }
          }

          if ('logic' in Drupal.settings.json_tables) {
            extrajson = JSON.parse(Drupal.settings.json_tables.logic);
            for (json in extrajson) {
              jsondata['logic'][json] = extrajson[json];

              jsondata['logic'][json]['result-data'] = jsondata['logic'][json]['result-data'].split(',');
              jsondata['logic'][json]['type-data'] = jsondata['logic'][json]['type-data'].split(',');
            }
          }
        }

        $('.iterami-json-tables-textarea').each(function () {
          var textarea = $(this).find('textarea');
          //$(textarea).parent().css('display', 'none');
          var json = JSON.parse($(textarea).val());
          var table_id = $(textarea).attr('id');
          columns[table_id] = json['cols'];
          create_table(
            table_id,
            json['data']
          );
        });
      });
    },
  };
})(jQuery);
