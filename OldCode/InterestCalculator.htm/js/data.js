'use strict';

function calculate(){
    core_storage_save();

    let loop_counter = core_storage_data['time'] - 1;
    let result = 0;
    if(loop_counter >= 0){
        const interest = core_storage_data['interest'] / 100;
        let principal = core_storage_data['principal'];

        do{
            result += principal * interest;

            if(core_storage_data['compound']){
                principal += principal * interest;
            }
        }while(loop_counter--);
        result += principal;
    }

    document.getElementById('result').value = core_number_format({
      'decimals-min': core_storage_data['decimals-min'],
      'number': result,
    });
}
