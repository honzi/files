'use strict';

function calculate(){
    core_storage_save();

    let result = '';
    let steps = 0;
    for(let i = core_storage_data['step-start']; i <= core_storage_data['max']; i+= core_storage_data['step-interval']){
        if(core_storage_data['step-limit'] > 0){
            steps++;

            if(steps > core_storage_data['step-limit']){
                result += '<tr><td colspan=3>Step Limit Reached';

                break;
            }
        }

        const step_percent = i === 0
          ? 0
          : core_round({
              'number': (core_storage_data['step-interval'] / (core_storage_data['max'] - i + core_storage_data['step-interval'])) * 100,
            });

        result += '<tr><td>' + core_round({
            'number': i,
          })
          + '<td>' + step_percent + '%'
          + '<td>' + core_round({
            'number': (i / core_storage_data['max']) * 100,
          }) + '%';
    }
    document.getElementById('result').innerHTML = result;
}
