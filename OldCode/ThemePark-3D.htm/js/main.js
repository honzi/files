'use strict';

function logic(){
}

function repo_init(){
    core_repo_init({
      'events': {
        'attach': {
          'onclick': ride_attach,
        },
        'unattach': {
          'onclick': ride_unattach,
        },
      },
      'globals': {
        'rides': {
          'ride-tower': {
            'unattach': {
              'x': -20,
              'y': 2,
              'z': -45,
            },
          },
        },
      },
      'info': '<select id=ride-select><option value=ride-tower>Tower</option></select><input id=attach type=button value=Ride><br><input id=unattach type=button value=Unattach>',
      'mousebinds': {
        'mousedown': {
          'todo': core_requestpointerlock,
        },
        'mousemove': {
          'todo': webgl_camera_first,
        },
      },
      'title': 'ThemePark-3D.htm',
    });
    webgl_init({
      'camera': 'gravity',
      'fog': false,
    });
}
