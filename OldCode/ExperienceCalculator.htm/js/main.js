'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'custom-xp': {
          'oninput': calculate,
        },
        'xp': {
          'oninput': calculate,
        },
      },
      'storage': {
        'custom-xp': '0',
        'xp': '0',
      },
      'title': 'ExperienceCalculator.htm',
    });

    core_storage_update();
    calculate();
}
