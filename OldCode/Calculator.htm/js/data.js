'use strict';

function add(character){
    document.getElementById('to-calculate').value += character;
}

function add_result(){
    const element = document.getElementById('to-calculate');
    element.value =
      element.value.substring(
        0,
        element.selectionStart
      ) + document.getElementById('result').textContent
      + element.value.substring(
        element.selectionStart
      );

    core_storage_save();
}

function calculate(){
    core_storage_save();

    let to_calculate = document.getElementById('to-calculate').value.replace(
      /\s/g,
      ''
    );
    if(to_calculate.length === 0){
        return;
    }

    to_calculate = to_calculate.replace(
      /,/g,
      ''
    );
    to_calculate = to_calculate.replace(
      /π/g,
      'Math.PI'
    );

    let result = '';

    try{
        result = core_round({
          'number': eval(to_calculate),
        });

    }catch(error){
        document.getElementById('result').textContent = 'SYNTAX ERROR';
        document.getElementById('result-formatted').textContent = '';
        return;
    }

    document.getElementById('result').textContent = result;

    let decimals = 0;
    const result_string = result.toString();
    if(result_string.includes('.')){
        decimals = result_string.split('.')[1].length;
    }
    document.getElementById('result-formatted').textContent = core_number_format({
      'decimals-min': decimals,
      'number': result,
    });
}

function clear_last(){
    const element = document.getElementById('to-calculate');
    element.value =
      element.value.slice(
        0,
        -1
      );
}
