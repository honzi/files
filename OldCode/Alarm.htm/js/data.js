'use strict';

function clear_alarm(element, id){
    document.getElementById('table').removeChild(
      element.parentElement.parentElement
    );

    entity_remove({
      'entities': [
        id,
      ],
    });

    core_storage_data['alarms'] = JSON.stringify(entity_entities);
    core_storage_update();
}

function create(args){
    args = core_args({
      'args': args,
      'defaults': {
        'label': document.getElementById('label').value,
        'remake': false,
        'target': date_to_timestamp() + Number.parseInt(document.getElementById('seconds').value, 10) * 1000,
      },
    });

    if(!args['remake']
      && JSON.parse(core_storage_data['alarms'])[args['label']]){
        return;
    }

    entity_create({
      'id': args['label'],
      'properties': {
        'label': args['label'],
        'target': args['target'],
      },
      'types': [
        'alarm',
      ],
    });

    document.getElementById('table').insertAdjacentHTML(
      'beforeend',
      '<tr id="' + args['label'] + '">'
        + '<td>' + args['label']
        + '<td>'
        + '<td>' + time_format({
          'date': timestamp_to_date({
            'timestamp': entity_entities[args['label']]['target'],
          }),
        })
        + '<td><input checked type=checkbox><input id="' + args['label'] + '-button" type=button value=X>'
    );
    document.getElementById(args['label'] + '-button').onclick = function(){
        clear_alarm(
          this,
          args['label']
        );
    };

    core_storage_data['alarms'] = JSON.stringify(entity_entities);
    core_storage_update();
}

function second(){
    document.getElementById('date').textContent = time_format();

    let play_alarm_sound = false;
    entity_group_modify({
      'groups': [
        'alarm',
      ],
      'todo': function(entity){
          const element = document.getElementById(entity);
          const remaining = (entity_entities[entity]['target'] - date_to_timestamp()) / 1000;

          element.childNodes[1].textContent = time_diff({
            'target': remaining * 1000 + date_to_timestamp(),
          });

          if(remaining < 0){
              element.style.background = '#f00';

              if(element.childNodes[3].childNodes[0].checked){
                  play_alarm_sound = true;
              }
          }
      },
    });

    if(play_alarm_sound){
        audio_start({
          'id': 'alarm',
        });
    }
}
