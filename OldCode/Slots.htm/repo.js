'use strict';

function play_round(){
    let coins = 0;
    let result = '';
    const value1 = core_random_integer(10);
    const value2 = core_random_integer(10);
    const value3 = core_random_integer(10);

    if(value1 === value2
      && value2 === value3){
        coins = (value1 * 3) * core_storage_data.multiplier;
        result = 'Three Match! +' + coins + ' coins!';

    }else if(value1 === value2
      || value1 === value3){
        coins = value1 * core_storage_data.multiplier;
        result = 'Two Match. +' + coins + ' coins.';

    }else if(value2 === value3){
        coins = value2 * core_storage_data.multiplier;
        result = 'Two Match. +' + coins + ' coins.';

    }else{
        coins = -2 * core_storage_data.multiplier;
        result = 'No Match... ' + coins + ' coins...';
    }

    core_storage_data.coins += coins;
    core_storage_data.total += 1;

    core_ui_update({
      'ids': {
        'value1': value1,
        'value2': value2,
        'value3': value3,
        'result': result,
      },
    });
    core_storage_update();
}

function repo_init(){
    core_repo_init({
      'events': {
        'play': {
          'onclick': play_round,
        },
      },
      'keybinds': {
        'Enter': {
          'down': play_round,
        },
      },
      'storage': {
        'coins': 100,
        'multiplier': 1,
        'total': 0,
      },
      'storage_menu': '<table><tr><td><input class=mini id=multiplier step=any type=number><td>Multiplier</table>',
      'title': 'Slots.htm',
    });
}
