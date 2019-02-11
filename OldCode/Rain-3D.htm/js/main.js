'use strict';

function logic(){
    for(var drop in core_entities){
        if(core_entities[drop]['translate-y'] < -7){
            core_entities[drop]['translate-x'] = core_random_number({
              'multiplier': 10,
            }) - 5;
            core_entities[drop]['translate-y'] = core_random_number({
              'multiplier': 4,
            }) + 5;
            core_entities[drop]['translate-z'] = core_random_number({
              'multiplier': 10,
            }) - 5;
        }
    }
}

function repo_init(){
    core_repo_init({
      'entities': {
        'drop': {
          'properties': {
            'color': [
              .66, .66, 1, 1,
              .66, .66, 1, 1,
            ],
            'dy': -.2,
            'mode': 'LINES',
            'vertices': [
              0, 0, 0,
              0, .1, 0,
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
      'title': 'Rain-3D.htm',
    });
    webgl_init({
      'camera': false,
      'fog': -0.1,
    });
}
