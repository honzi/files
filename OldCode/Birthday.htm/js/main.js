'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'set': {
          'onclick': set_date,
        },
      },
      'globals': {
        'birthday': {},
      },
      'keybinds': {
        13: {
          'todo': set_date,
        },
      },
      'title': 'Birthday.htm',
    });

    let date = timestamp_to_date();
    for(let portion in date){
        core_html_modify({
          'id': portion,
          'properties': {
            'value': core_digits_min({
              'number': date[portion],
            }),
          },
        });
    }

    set_date();
    update();

    core_interval_modify({
      'id': 'birthday',
      'interval': 1000,
      'sync': true,
      'todo': update,
    });
}
