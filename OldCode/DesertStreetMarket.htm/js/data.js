'use strict';

function load_data(id){
    core_entity_create({
      'id': 'ground-inside',
      'properties': {
        'collision': true,
        'color': [
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
        ],
        'translate-y': -2,
        'translate-z': -20,
        'vertices': [
          25, 0, -12,
          -12, 0, -12,
          -12, 0, 25,
          25, 0, 25,
        ],
      },
    });
    core_entity_create({
      'id': 'ground-outside-0',
      'properties': {
        'color': [
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
          0.5882, 0.4196, 0.0863, 1,
          0.5882, 0.4196, 0.0863, 1,
        ],
        'translate-y': -1.99,
        'vertices': [
          15, 0, -5,
          -15, 0, -5,
          -15, 0, 5,
          25, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'ground-outside-1',
      'properties': {
        'color': [
          0.5882, 0.4196, 0.0863, 1,
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
          0.5882, 0.4196, 0.0863, 1,
        ],
        'translate-x': 20,
        'translate-y': -1.99,
        'translate-z': -20,
        'vertices': [
          5, 0, -15,
          -5, 0, -15,
          -5, 0, 15,
          5, 0, 25,
        ],
      },
    });

    core_entity_create({
      'id': 'sand-0',
      'properties': {
        'color': [
          0.5882, 0.4196, 0.0863, 1,
          0.5882, 0.4196, 0.0863, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
        ],
        'translate-y': -2,
        'translate-z': 10,
        'vertices': [
          25, 0, -5,
          -15, 0, -5,
          -15, 0, 20,
          45, 0, 20,
        ],
      },
    });
    core_entity_create({
      'id': 'sand-1',
      'properties': {
        'color': [
          0.7, 0.5, 0.1, 1,
          0.5882, 0.4196, 0.0863, 1,
          0.5882, 0.4196, 0.0863, 1,
          0.7, 0.5, 0.1, 1,
        ],
        'translate-x': 30,
        'translate-y': -2,
        'translate-z': -20,
        'vertices': [
          15, 0, -15,
          -5, 0, -15,
          -5, 0, 25,
          15, 0, 50,
        ],
      },
    });
    core_entity_create({
      'id': 'sand-2',
      'properties': {
        'collision': true,
        'color': [
          0.5882, 0.4196, 0.0863, 1,
          0.5882, 0.4196, 0.0863, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
        ],
        'rotate-z': 270,
        'translate-x': -15,
        'translate-y': -2,
        'vertices': [
          5, 0, -5,
          -10, 0, -5,
          -10, 0, 30,
          5, 0, 30,
        ],
      },
    });
    core_entity_create({
      'id': 'sand-3',
      'properties': {
        'collision': true,
        'color': [
          0.7, 0.5, 0.1, 1,
          0.5882, 0.4196, 0.0863, 1,
          0.5882, 0.4196, 0.0863, 1,
          0.7, 0.5, 0.1, 1,
        ],
        'rotate-x': 90,
        'translate-x': 20,
        'translate-y': -2,
        'translate-z': -35,
        'vertices': [
          30, 0, -10,
          -5, 0, -10,
          -5, 0, 5,
          30, 0, 5,
        ],
      },
    });

    core_entity_create({
      'id': 'wall-back',
      'properties': {
        'collision': true,
        'color': [
          0.38, 0.12, 0, 1,
          0.38, 0.12, 0, 1,
          0.38, 0.12, 0, 1,
          0.38, 0.12, 0, 1,
        ],
        'rotate-x': 90,
        'translate-y': 4,
        'translate-z': -32,
        'vertices': [
          5, 0, -6,
          -5, 0, -6,
          -5, 0, 6,
          5, 0, 6,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-left',
      'properties': {
        'collision': true,
        'color': [
          0.38, 0.12, 0, 1,
          0.38, 0.12, 0, 1,
          0.38, 0.12, 0, 1,
          0.38, 0.12, 0, 1,
        ],
        'rotate-z': 270,
        'translate-x': -12,
        'translate-y': 3,
        'translate-z': -20,
        'vertices': [
          5, 0, -5,
          -5, 0, -5,
          -5, 0, 5,
          5, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-invisible-behind',
      'properties': {
        'collision': true,
        'draw': false,
        'rotate-z': 270,
        'translate-x': 5,
        'translate-y': -2,
        'translate-z': 5,
        'vertices': [
          20, 0, 0,
          -20, 0, 0,
          -20, 0, 15,
          20, 0, 15,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-invisible-right',
      'properties': {
        'collision': true,
        'draw': false,
        'rotate-z': 90,
        'translate-x': 25,
        'translate-y': -2,
        'translate-z': -15,
        'vertices': [
          15, 0, -20,
          0, 0, -20,
          0, 0, 20,
          15, 0, 20,
        ],
      },
    });

    core_entity_create({
      'id': 'pillar-0-back',
      'properties': {
        'collision': true,
        'color': [
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
        ],
        'rotate-x': 270,
        'translate-x': 10,
        'translate-y': 19,
        'translate-z': -15,
        'vertices': [
          5, 0, -21,
          -5, 0, -21,
          -5, 0, 21,
          5, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-0-front',
      'properties': {
        'collision': true,
        'color': [
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-x': 90,
        'translate-x': 10,
        'translate-y': 19,
        'translate-z': -5,
        'vertices': [
          5, 0, -21,
          -5, 0, -21,
          -5, 0, 21,
          5, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-0-left',
      'properties': {
        'collision': true,
        'color': [
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
        ],
        'rotate-z': 90,
        'translate-x': 5,
        'translate-y': 19,
        'translate-z': -10,
        'vertices': [
          21, 0, -5,
          -21, 0, -5,
          -21, 0, 5,
          21, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-0-right',
      'properties': {
        'collision': true,
        'color': [
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-z': 270,
        'translate-x': 15,
        'translate-y': 19,
        'translate-z': -10,
        'vertices': [
          21, 0, -5,
          -21, 0, -5,
          -21, 0, 5,
          21, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-1-back',
      'properties': {
        'collision': true,
        'color': [
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
        ],
        'rotate-x': 270,
        'translate-x': -10,
        'translate-y': 19,
        'translate-z': -15,
        'vertices': [
          5, 0, -21,
          -5, 0, -21,
          -5, 0, 21,
          5, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-1-front',
      'properties': {
        'collision': true,
        'color': [
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-x': 90,
        'translate-x': -10,
        'translate-y': 19,
        'translate-z': -5,
        'vertices': [
          5, 0, -21,
          -5, 0, -21,
          -5, 0, 21,
          5, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-1-right',
      'properties': {
        'collision': true,
        'color': [
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-z': 270,
        'translate-x': -5,
        'translate-y': 19,
        'translate-z': -10,
        'vertices': [
          21, 0, -5,
          -21, 0, -5,
          -21, 0, 5,
          21, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-2-front',
      'properties': {
        'collision': true,
        'color': [
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-x': 90,
        'translate-x': 10,
        'translate-y': 19,
        'translate-z': -25,
        'vertices': [
          5, 0, -21,
          -5, 0, -21,
          -5, 0, 21,
          5, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-2-left',
      'properties': {
        'collision': true,
        'color': [
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
        ],
        'rotate-z': 90,
        'translate-x': 5,
        'translate-y': 19,
        'translate-z': -30,
        'vertices': [
          21, 0, -5,
          -21, 0, -5,
          -21, 0, 5,
          21, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-2-right',
      'properties': {
        'collision': true,
        'color': [
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-z': 270,
        'translate-x': 15,
        'translate-y': 19,
        'translate-z': -30,
        'vertices': [
          21, 0, -5,
          -21, 0, -5,
          -21, 0, 5,
          21, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-3-front',
      'properties': {
        'collision': true,
        'color': [
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-x': 90,
        'translate-x': -10,
        'translate-y': 19,
        'translate-z': -25,
        'vertices': [
          5, 0, -21,
          -5, 0, -21,
          -5, 0, 21,
          5, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-3-right',
      'properties': {
        'collision': true,
        'color': [
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-z': 270,
        'translate-x': -5,
        'translate-y': 19,
        'translate-z': -30,
        'vertices': [
          21, 0, -5,
          -21, 0, -5,
          -21, 0, 5,
          21, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-4-back',
      'properties': {
        'color': [
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
        ],
        'rotate-x': 270,
        'translate-x': -30,
        'translate-y': 19,
        'translate-z': -15,
        'vertices': [
          5, 0, -21,
          -5, 0, -21,
          -5, 0, 21,
          5, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-4-front',
      'properties': {
        'color': [
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-x': 90,
        'translate-x': -30,
        'translate-y': 19,
        'translate-z': -5,
        'vertices': [
          5, 0, -21,
          -5, 0, -21,
          -5, 0, 21,
          5, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-4-right',
      'properties': {
        'color': [
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-z': 270,
        'translate-x': -25,
        'translate-y': 19,
        'translate-z': -10,
        'vertices': [
          21, 0, -5,
          -21, 0, -5,
          -21, 0, 5,
          21, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-5-front',
      'properties': {
        'color': [
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-x': 90,
        'translate-x': -30,
        'translate-y': 19,
        'translate-z': -25,
        'vertices': [
          5, 0, -21,
          -5, 0, -21,
          -5, 0, 21,
          5, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-5-right',
      'properties': {
        'color': [
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-z': 270,
        'translate-x': -25,
        'translate-y': 19,
        'translate-z': -30,
        'vertices': [
          21, 0, -5,
          -21, 0, -5,
          -21, 0, 5,
          21, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-6-front',
      'properties': {
        'color': [
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-x': 90,
        'translate-x': 10,
        'translate-y': 19,
        'translate-z': -45,
        'vertices': [
          5, 0, -21,
          -5, 0, -21,
          -5, 0, 21,
          5, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-6-left',
      'properties': {
        'color': [
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-x': 90,
        'rotate-z': 90,
        'translate-x': 5,
        'translate-y': 19,
        'translate-z': -50,
        'vertices': [
          5, 0, -21,
          -5, 0, -21,
          -5, 0, 21,
          5, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-6-right',
      'properties': {
        'color': [
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-z': 270,
        'translate-x': 15,
        'translate-y': 19,
        'translate-z': -50,
        'vertices': [
          21, 0, -5,
          -21, 0, -5,
          -21, 0, 5,
          21, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-7-front',
      'properties': {
        'color': [
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-x': 90,
        'translate-x': -10,
        'translate-y': 19,
        'translate-z': -45,
        'vertices': [
          5, 0, -21,
          -5, 0, -21,
          -5, 0, 21,
          5, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'pillar-7-right',
      'properties': {
        'color': [
          0.4, 0.1, 0, 1,
          0.7, 0.5, 0.1, 1,
          0.7, 0.5, 0.1, 1,
          0.4, 0.1, 0, 1,
        ],
        'rotate-z': 270,
        'translate-x': -5,
        'translate-y': 19,
        'translate-z': -50,
        'vertices': [
          21, 0, -5,
          -21, 0, -5,
          -21, 0, 5,
          21, 0, 5,
        ],
      },
    });

    data_webgl_cube_3d({
      'collision': true,
      'color': [
        .25, .16, .08, 1,
        .25, .16, .08, 1,
        .25, .16, .08, 1,
        .25, .16, .08, 1,
      ],
      'exclude': [
        1, 3,
      ],
      'id': 'crate-0',
      'side': 1,
      'x': -10,
      'y': -1,
      'z': -23,
    });
};
