'use strict';

function logic(){
}

function repo_init(){
    core_repo_init({
      'mousebinds': {
        'mousedown': {
          'todo': core_requestpointerlock,
        },
        'mousemove': {
          'todo': webgl_camera_first,
        },
      },
      'title': 'DesertStreetMarket.htm',
    });
    webgl_init({
      'camera-type': 'gravity',
      'clear-blue': .1,
      'clear-green': .5,
      'clear-red': .7,
      'fog': false,
    });
}
