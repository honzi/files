'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'add-result': {
          'onclick': add_result,
        },
        'asterisk': {
          'onclick': function(){
              add('*');
          },
        },
        'calculate': {
          'onclick': calculate,
        },
        'clear-last': {
          'onclick': clear_last,
        },
        'minus': {
          'onclick': function(){
              add('-');
          },
        },
        'percent': {
          'onclick': function(){
              add('%');
          },
        },
        'parenthesis-left': {
          'onclick': function(){
              add('(');
          },
        },
        'parenthesis-right': {
          'onclick': function(){
              add(')');
          },
        },
        'pi': {
          'onclick': function(){
              add('π');
          },
        },
        'point': {
          'onclick': function(){
              add('.');
          },
        },
        'plus': {
          'onclick': function(){
              add('+');
          },
        },
        'slash': {
          'onclick': function(){
              add('/');
          },
        },
      },
      'keybinds': {
        13: {
          'todo': function(event){
              if(document.getElementById('to-calculate') === document.activeElement){
                  event.preventDefault();
              }

              calculate();
          },
        },
      },
      'storage': {
        'to-calculate': '',
      },
      'title': 'Calculator.htm',
    });

    core_storage_update();
    calculate();

    let loop_counter = 9;
    do{
        document.getElementById(String(loop_counter)).onclick = function(){
            add(this.id);
        };
    }while(loop_counter--);
}
