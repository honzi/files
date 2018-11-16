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
      'title': 'CityMaze.htm',
    });
    webgl_init({
      'camera-type': 'gravity',
    });
}
