'use strict';

function logic(){
    if(core_distance({
      'x0': core_entities['_webgl-camera']['translate-x'],
      'y0': core_entities['_webgl-camera']['translate-z'],
      'x1': core_entities['target']['translate-x'],
      'y1': core_entities['target']['translate-z'],
    }) < 5){
        randomize_target();
    }

    if(!core_storage_data['vertical']){
        core_entities['_webgl-camera']['translate-y'] = 0;
    }
}

function repo_init(){
    core_repo_init({
      'events': {
        'start': {
          'onclick': function(){
              webgl_setmode({
                'newgame': true,
              });
          },
        },
      },
      'info': '<input id=start type=button value="Start Training">',
      'keybinds': {
        32: {},
        67: {},
      },
      'mousebinds': {
        'mousedown': {
          'todo': core_requestpointerlock,
        },
        'mousemove': {
          'todo': webgl_camera_first,
        },
      },
      'menu': true,
      'storage': {
        'speed': 1,
        'vertical': true,
      },
      'storage-menu': '<table><tr><td><input id=speed><td>Speed<tr><td><input id=vertical type=checkbox><td>Vertical</table>',
      'title': 'WASD-3D.htm',
      'ui': '<table><tr><td>Lock Mouse<td>Click<tr><td>Move Forward<td id=ui-forward><tr><td>Move Left<td id=ui-left><tr><td>Move Backward<td id=ui-back><tr><td>Move Right<td id=ui-right><tr><td>Move Up<td>Space<tr><td>Move Down<td>C<tr><td>Unlock Mouse<td>ESC</table>',
    });
    webgl_init({
      'fog': false,
    });
}
