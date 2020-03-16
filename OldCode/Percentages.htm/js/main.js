'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'calculate': {
          'onclick': calculate,
        },
      },
      'info': '<input id=calculate type=button value="Calculate [ENTER]">',
      'keybinds': {
        13: {
          'todo': calculate,
        },
      },
      'menu': true,
      'menu-block-events': false,
      'storage': {
        'max': 10,
        'step-interval': 1,
        'step-limit': 100,
        'step-start': 0,
      },
      'storage-menu': '<table><tr><td><input id=max><td>Max'
        + '<tr><td><input id=step-interval><td>Step Interval'
        + '<tr><td><input id=step-limit><td>Step Limit'
        + '<tr><td><input id=step-start><td>Step Start</table>',
      'title': 'Percentages.htm',
    });

    calculate();
}
