'use strict';

function logic(){
    for(var star in core_entities){
        if(core_entities[star]['translate-z'] > 7){
            core_entities[star]['translate-x'] = core_random_number({
              'multiplier': 10,
            }) - 5;
            core_entities[star]['translate-y'] = core_random_number({
              'multiplier': 10,
            }) - 5;
            core_entities[star]['translate-z'] = core_random_number({
              'multiplier': 5,
            }) - 15;
        }
    }
}

function repo_init(){
    core_repo_init({
      'entities': {
        'star': {
          'properties': {
            'color': [
              1, 1, 1, 1,
              1, 1, 1, 1,
            ],
            'dz': .2,
            'mode': 'LINES',
            'vertices': [
              0, 0, 0,
              0, 0, .1,
            ],
          },
        },
      },
      'mousebinds': {
        'mousemove': {
          'todo': function(){
              if(core_mouse['down']){
                  webgl_camera_rotate({
                    'x': core_mouse['movement-y'] / 10,
                    'y': core_mouse['movement-x'] / 10,
                  });
              }
          },
        },
      },
      'title': 'Starfield-3D.htm',
    });
    webgl_init({
      'camera': false,
      'fog': -0.1,
    });
}
