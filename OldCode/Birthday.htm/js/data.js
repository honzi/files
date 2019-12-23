'use strict';

function set_date(){
    birthday = time_from_inputs();
}

function update(){
    let date = timestamp_to_date();

    document.getElementById('date-display').innerHTML = time_format({
      'date': date,
    });
    document.getElementById('diff').innerHTML = time_diff({
      'target': birthday,
    });

    let diff = date['timestamp'] - birthday;
    let diffs = {
      'days': 86400000,
      'weeks': 604800000,
      'years': 31556908800,
    };
    for(let id in diffs){
        document.getElementById('diff-' + id).innerHTML = core_number_format({
          'number': diff / diffs[id],
        });
    }
}
