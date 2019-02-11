'use strict';

function load_data(id){
    var colors = {
      'ground-0': Math.random(),
      'ground-1': Math.random(),
      'ground-2': Math.random(),
      'ground-3': Math.random(),
      'ground-4': Math.random(),
      'ground-5': Math.random(),
      'sky-0': Math.random(),
      'sky-1': Math.random(),
      'sky-2': Math.random(),
      'sky-3': Math.random(),
      'sky-4': Math.random(),
      'sky-5': Math.random(),
    };

    core_entity_create({
      'id': 'sky-0',
      'properties': {
        'color': [
          colors['sky-0'], colors['sky-1'], colors['sky-2'], 1,
          colors['sky-3'], colors['sky-4'], colors['sky-5'], 1,
          0,0, 0, 1,
          0,0, 0, 1,
        ],
        'rotate-x': 350,
        'rotate-z': 180,
        'translate-z': -500,
        'vertices': [
          -1000, 0, 500,
          1000, 0, 500,
          1000, 0, 0,
          -1000, 0, 0,
        ],
      },
    });

    core_entity_create({
      'id': 'ground-0',
      'properties': {
        'color': [
          colors['ground-0'], colors['ground-1'], colors['ground-2'], 1,
          colors['ground-3'], colors['ground-4'], colors['ground-5'], 1,
          0,0, 0, 1,
          0,0, 0, 1,
        ],
        'rotate-x': 10,
        'translate-z': -500,
        'vertices': [
          -1000, 0, 500,
          1000, 0, 500,
          1000, 0, 0,
          -1000, 0, 0,
        ],
      },
    });

    var cubes = core_random_number({
      'multiplier': 19,
    }) + 1;
    var side = 35 - cubes;

    for(var i = 0; i < cubes; i++){
        data_webgl_cube_3d({
          'color': [
            colors['sky-0'], colors['sky-1'], colors['sky-2'], 1,
            colors['sky-3'], colors['sky-4'], colors['sky-5'], 1,
            colors['ground-0'], colors['ground-1'], colors['ground-2'], 1,
            colors['ground-3'], colors['ground-4'], colors['ground-5'], 1,
          ],
          'exclude': [
            1,
            5,
          ],
          'side': core_random_number({
            'multiplier': side,
          }) / side,
          'x': core_random_number({
            'multiplier': 10,
          }) - 5,
          'y': -1,
          'z': core_random_number({
            'multiplier': 6,
          }) - 9,
        });
    }

    core_entities['_webgl-camera']['rotate-x'] = core_random_number({
      'multiplier': 20,
    }) - 15;
}
