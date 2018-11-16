'use strict';

function load_data(){
    race_checkpoints.length = 0;

    core_entity_create({
      'id': 'ground',
      'properties': {
        'color': [
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
        ],
        'translate-y': -2.1,
        'vertices': [
          50, 0, -50,
          -50, 0, -50,
          -50, 0, 50,
          50, 0, 50,
        ],
      },
    });

    var racers = {
      'player': {
        'color': [
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1,
        ],
        'speed-max': 1,
        'vertices': [
          1, 0, -2,
          -1, 0, -2,
          -1, 0, 2,
          1, 0, 2,
        ],
        'y': -2,
      },
    };
    for(var racer in racers){
        core_entity_create({
          'id': racer,
          'properties': racers[racer],
          'types': [
            'webgl',
            'racer',
          ],
        });

        core_group_add({
          'entities': [
            racer,
          ],
          'group': racer,
        });
    }

    webgl_camera_rotate({
      'x': 30,
    });
    webgl_attach({
      'base': 'player',
      'offset-y': 7,
    });
}
