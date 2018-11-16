'use strict';

function building_pretodo(){
    return {
      'x': -600 - core_random_number({
        'multiplier': 100,
      }),
      'z': core_random_boolean()
        ? 1
        : -1,
    };
}

function load_data(id){
    data_webgl_cube_3d({
      'color': [
        .2, .2, .2, 1,
        .1, .1, .1, 1,
        .2, .2, .2, 1,
        .1, .1, .1, 1,
      ],
      'dx': .5,
      'exclude': [
        0,
        1,
      ],
      'id': 'building',
      'side': 5,
      'x': -250,
      'y': 2.9,
      'z': 50,
    });

    core_entity_create({
      'id': 'ground',
      'properties': {
        'color': [
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
        ],
        'translate-y': -3,
        'vertices': [
          200, 0, -99,
          -200, 0, -99,
          -200, 0, 99,
          200, 0, 99,
        ],
      },
    });
    core_entity_create({
      'id': 'floor',
      'properties': {
        'collision': true,
        'color': [
          0.5, 0.2, 0, 1,
          0.5, 0.2, 0, 1,
          0.5, 0.2, 0, 1,
          0.5, 0.2, 0, 1,
        ],
        'translate-y': -2,
        'vertices': [
          7, 0, -3,
          -7, 0, -3,
          -7, 0, 3,
          7, 0, 3,
        ],
      },
    });
    core_entity_create({
      'id': 'ceiling',
      'properties': {
        'color': [
          0.5, 0.2, 0, 1,
          0.5, 0.2, 0, 1,
          0.5, 0.2, 0, 1,
          0.5, 0.2, 0, 1,
        ],
        'rotate-x': 180,
        'translate-y': 2,
        'vertices': [
          7, 0, -3,
          -7, 0, -3,
          -7, 0, 3,
          7, 0, 3,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-0',
      'properties': {
        'collision': true,
        'color': [
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-z': 90,
        'translate-x': 7,
        'vertices': [
          2, 0, -3,
          -2, 0, -3,
          -2, 0, 3,
          2, 0, 3,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-1',
      'properties': {
        'collision': true,
        'color': [
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-z': 270,
        'translate-x': -7,
        'vertices': [
          2, 0, -3,
          -2, 0, -3,
          -2, 0, 3,
          2, 0, 3,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-2',
      'properties': {
        'color': [
          0.45, 0.1, 0, 1,
          0.45, 0.1, 0, 1,
          0.45, 0.1, 0, 1,
          0.45, 0.1, 0, 1,
        ],
        'rotate-x': 90,
        'translate-x': -5,
        'translate-z': -3,
        'vertices': [
          3, 0, -2,
          -2, 0, -2,
          -2, 0, 2,
          3, 0, 2,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-3',
      'properties': {
        'color': [
          0.45, 0.1, 0, 1,
          0.45, 0.1, 0, 1,
          0.45, 0.1, 0, 1,
          0.45, 0.1, 0, 1,
        ],
        'rotate-x': 90,
        'translate-x': 5,
        'translate-z': -3,
        'vertices': [
          2, 0, -2,
          -3, 0, -2,
          -3, 0, 2,
          2, 0, 2,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-4',
      'properties': {
        'color': [
          0.45, 0.1, 0, 1,
          0.45, 0.1, 0, 1,
          0.45, 0.1, 0, 1,
          0.45, 0.1, 0, 1,
        ],
        'rotate-x': 270,
        'translate-x': 5,
        'translate-z': 3,
        'vertices': [
          2, 0, -2,
          -3, 0, -2,
          -3, 0, 2,
          2, 0, 2,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-5',
      'properties': {
        'color': [
          0.45, 0.1, 0, 1,
          0.45, 0.1, 0, 1,
          0.45, 0.1, 0, 1,
          0.45, 0.1, 0, 1,
        ],
        'rotate-x': 270,
        'translate-x': -5,
        'translate-z': 3,
        'vertices': [
          3, 0, -2,
          -2, 0, -2,
          -2, 0, 2,
          3, 0, 2,
        ],
      },
    });

    core_entity_create({
      'id': 'wall-front-collision',
      'properties': {
        'collision': true,
        'draw': false,
        'rotate-x': 270,
        'translate-z': 3,
        'vertices': [
          7, 0, -2,
          -7, 0, -2,
          -7, 0, 2,
          7, 0, 2,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-back-collision',
      'properties': {
        'collision': true,
        'draw': false,
        'rotate-x': 90,
        'translate-z': -3,
        'vertices': [
          7, 0, -2,
          -7, 0, -2,
          -7, 0, 2,
          7, 0, 2,
        ],
      },
    });

    for(var i = 0; i < core_storage_data['trees']; i++){
        var id = 'tree-' + i;
        var x = core_random_number({
          'multiplier': 200,
        }) - 100;
        var z = core_random_number({
          'multiplier': 100,
        }) - 50;
        if(z < 10 && z > -10){
            z += 20;
        }

        data_webgl_tree_2d({
          'billboard': true,
          'dx': core_storage_data['speed'],
          'id': id,
          'x': x,
          'y': -3,
          'z': z,
        });
        tree_groups.push(id);
    }
}

function tree_pretodo(){
    var z = core_random_number({
      'multiplier': 100,
    }) - 50;
    if(z < 10 && z > -10){
        z += 20;
    }

    return {
      'x': core_random_number({
        'multiplier': 100,
      }) - 200,
      'z': z,
    };
}
