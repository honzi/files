'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'calculate': {
          'onclick': calculate,
        },
      },
      'info': '<input id=calculate type=button value="Calculate [ENTER]"><input id=result>',
      'keybinds': {
        13: {
          'todo': calculate
        },
      },
      'menu': true,
      'storage': {
        'compound': false,
        'decimals-min': 2,
        'interest': 0,
        'principal': 0,
        'time': 0,
      },
      'storage-menu': '<table><tr><td><input id=compound type=checkbox><td>Compound'
        + '<tr><td><input id=interest><td>Interest'
        + '<tr><td><input id=decimals-min><td>Minimum Decimals'
        + '<tr><td><input id=principal><td>Principal'
        + '<tr><td><input id=time><td>Time</table>',
      'title': 'InterestCalculator.htm',
    });

    calculate();
}
