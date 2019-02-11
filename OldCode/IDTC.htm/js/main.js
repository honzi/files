'use strict';

function logic(){
}

function repo_init(){
    core_repo_init({
      'github': 'honzi',
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
      'title': 'IDTC.htm',
    });
    webgl_init({
      'ambient-blue': 0,
      'ambient-green': 0,
      'ambient-red': 0,
      'clear-blue': .3,
      'fog': false,
      'direction-vector': '0, 1, -.8',
      'speed': .2,
    });
}
