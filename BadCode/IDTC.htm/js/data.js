'use strict';

function load_data(id){
    core_entity_info['webgl']['default']['color'] = [
      .1, .1, .1, 1,
      .1, .1, .1, 1,
      .1, .1, .1, 1,
      .1, .1, .1, 1,
    ];

    data_webgl_cube_3d({
      'color': [
        .1, .1, .1, 1,
        .1, .1, .1, 1,
        .1, .1, .1, 1,
        .1, .1, .1, 1,
      ],
      'id': 'room-0',
      'side': 8,
      'x': -75,
      'z': -30,
    });
    data_webgl_cube_3d({
      'color': [
        .1, .1, .1, 1,
        .1, .1, .1, 1,
        .1, .1, .1, 1,
        .1, .1, .1, 1,
      ],
      'id': 'room-1',
      'side': 4,
      'x': -75,
      'z': -45,
    });
    data_webgl_cube_3d({
      'color': [
        .1, .1, .1, 1,
        .1, .1, .1, 1,
        .1, .1, .1, 1,
        .1, .1, .1, 1,
      ],
      'exclude': [
        0,
      ],
      'id': 'room-3-back',
      'side': 8,
      'x': -35,
      'y': -10,
      'z': -39,
    });

    core_entity_create({
      'properties': {
        'color': [
          1, 1, 0, 1,
          1, 1, 0, 1,
          1, 1, 0, 1,
          1, 1, 0, 1,
        ],
        'rotate-x': 180,
        'translate-x': -20,
        'translate-y': 80,
        'translate-z': 55,
        'vertices': [
          10, 0, -10,
          -10, 0, -10,
          -10, 0, 10,
          10, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-floor',
      'properties': {
        'translate-y': -2,
        'vertices': [
          20, 0, -20,
          -20, 0, -20,
          -20, 0, 20,
          20, 0, 20,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-floor-back',
      'properties': {
        'rotate-x': 180,
        'translate-y': -2,
        'vertices': [
          20, 0, -20,
          -20, 0, -20,
          -20, 0, 20,
          20, 0, 20,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-wall-0',
      'properties': {
        'rotate-x': 270,
        'translate-y': 8,
        'translate-z': 20,
        'vertices': [
          20, 0, -10,
          -20, 0, -10,
          -20, 0, 10,
          20, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-wall-0-back',
      'properties': {
        'rotate-x': 90,
        'translate-y': 8,
        'translate-z': 20,
        'vertices': [
          20, 0, -10,
          -20, 0, -10,
          -20, 0, 10,
          20, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-wall-1',
      'properties': {
        'rotate-x': 90,
        'translate-y': 8,
        'translate-z': -20,
        'vertices': [
          20, 0, -10,
          -5, 0, -10,
          -5, 0, 10,
          20, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-wall-1-back',
      'properties': {
        'rotate-x': 270,
        'translate-y': 8,
        'translate-z': -20,
        'vertices': [
          20, 0, -10,
          -5, 0, -10,
          -5, 0, 10,
          20, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-wall-2',
      'properties': {
        'rotate-x': 90,
        'translate-x': -15,
        'translate-y': 13,
        'translate-z': -20,
        'vertices': [
          10, 0, -5,
          -5, 0, -5,
          -5, 0, 5,
          10, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-wall-2-back',
      'properties': {
        'rotate-x': 270,
        'translate-x': -15,
        'translate-y': 13,
        'translate-z': -20,
        'vertices': [
          10, 0, -5,
          -5, 0, -5,
          -5, 0, 5,
          10, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-wall-3',
      'properties': {
        'rotate-x': 90,
        'translate-x': -19,
        'translate-y': 3,
        'translate-z': -20,
        'vertices': [
          1, 0, -5,
          -1, 0, -5,
          -1, 0, 5,
          1, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-wall-3-back',
      'properties': {
        'rotate-x': 270,
        'translate-x': -19,
        'translate-y': 3,
        'translate-z': -20,
        'vertices': [
          1, 0, -5,
          -1, 0, -5,
          -1, 0, 5,
          1, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-wall-4',
      'properties': {
        'rotate-z': 270,
        'translate-x': -20,
        'translate-y': 8,
        'translate-z': -2,
        'vertices': [
          10, 0, -22,
          -10, 0, -22,
          -10, 0, 22,
          10, 0, 22,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-wall-4-back',
      'properties': {
        'rotate-z': 90,
        'translate-x': -20,
        'translate-y': 8,
        'translate-z': -2,
        'vertices': [
          10, 0, -22,
          -10, 0, -22,
          -10, 0, 22,
          10, 0, 22,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-wall-5',
      'properties': {
        'rotate-z': 90,
        'translate-x': 20,
        'translate-y': 8,
        'vertices': [
          10, 0, -20,
          -10, 0, -20,
          -10, 0, 20,
          10, 0, 20,
        ],
      },
    });
    core_entity_create({
      'id': 'courtyard-wall-5-back',
      'properties': {
        'rotate-z': 270,
        'translate-x': 20,
        'translate-y': 8,
        'vertices': [
          10, 0, -20,
          -10, 0, -20,
          -10, 0, 20,
          10, 0, 20,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-roof-0',
      'properties': {
        'rotate-x': 180,
        'translate-x': -9,
        'translate-y': 18,
        'translate-z': -40,
        'vertices': [
          19, 0, -20,
          -19, 0, -20,
          -19, 0, 20,
          19, 0, 20,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-roof-0-back',
      'properties': {
        'translate-x': -9,
        'translate-y': 18,
        'translate-z': -40,
        'vertices': [
          19, 0, -20,
          -19, 0, -20,
          -19, 0, 20,
          19, 0, 20,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-roof-1',
      'properties': {
        'rotate-x': 180,
        'translate-x': -35,
        'translate-y': 18,
        'translate-z': -15,
        'vertices': [
          15, 0, -5,
          -15, 0, -5,
          -15, 0, 5,
          15, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-roof-1-back',
      'properties': {
        'translate-x': -35,
        'translate-y': 18,
        'translate-z': -15,
        'vertices': [
          15, 0, -5,
          -15, 0, -5,
          -15, 0, 5,
          15, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-roof-2',
      'properties': {
        'rotate-x': 180,
        'translate-x': -35,
        'translate-y': 18,
        'translate-z': -55,
        'vertices': [
          15, 0, -25,
          -15, 0, -25,
          -15, 0, 25,
          15, 0, 25,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-roof-2-back',
      'properties': {
        'translate-x': -35,
        'translate-y': 18,
        'translate-z': -55,
        'vertices': [
          15, 0, -25,
          -15, 0, -25,
          -15, 0, 25,
          15, 0, 25,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-roof-3',
      'properties': {
        'rotate-x': 180,
        'translate-x': -46,
        'translate-y': 18,
        'translate-z': -25,
        'vertices': [
          4, 0, -5,
          -4, 0, -5,
          -4, 0, 5,
          4, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-roof-3-back',
      'properties': {
        'translate-x': -46,
        'translate-y': 18,
        'translate-z': -25,
        'vertices': [
          4, 0, -5,
          -4, 0, -5,
          -4, 0, 5,
          4, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-floor-0',
      'properties': {
        'translate-x': -10,
        'translate-y': -2,
        'translate-z': -40,
        'vertices': [
          20, 0, -20,
          -20, 0, -20,
          -20, 0, 20,
          20, 0, 20,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-floor-0-back',
      'properties': {
        'rotate-x': 180,
        'translate-x': -10,
        'translate-y': -2,
        'translate-z': -40,
        'vertices': [
          20, 0, -20,
          -20, 0, -20,
          -20, 0, 20,
          20, 0, 20,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-floor-1',
      'properties': {
        'translate-x': -35,
        'translate-y': -2,
        'translate-z': -21,
        'vertices': [
          15, 0, -11,
          -15, 0, -11,
          -15, 0, 11,
          15, 0, 11,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-floor-1-back',
      'properties': {
        'rotate-x': 180,
        'translate-x': -35,
        'translate-y': -2,
        'translate-z': -21,
        'vertices': [
          15, 0, -11,
          -15, 0, -11,
          -15, 0, 11,
          15, 0, 11,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-floor-2',
      'properties': {
        'translate-x': -35,
        'translate-y': -2,
        'translate-z': -63,
        'vertices': [
          15, 0, -17,
          -15, 0, -17,
          -15, 0, 17,
          15, 0, 17,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-floor-2-back',
      'properties': {
        'rotate-x': 180,
        'translate-x': -35,
        'translate-y': -2,
        'translate-z': -63,
        'vertices': [
          15, 0, -17,
          -15, 0, -17,
          -15, 0, 17,
          15, 0, 17,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-floor-3',
      'properties': {
        'translate-x': -45,
        'translate-y': -2,
        'translate-z': -39,
        'vertices': [
          5, 0, -7,
          -5, 0, -7,
          -5, 0, 7,
          5, 0, 7,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-floor-3-back',
      'properties': {
        'rotate-x': 180,
        'translate-x': -45,
        'translate-y': -2,
        'translate-z': -39,
        'vertices': [
          5, 0, -7,
          -5, 0, -7,
          -5, 0, 7,
          5, 0, 7,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-0',
      'properties': {
        'rotate-x': 270,
        'translate-x': -35,
        'translate-y': 8,
        'translate-z': -10,
        'vertices': [
          15, 0, -10,
          -15, 0, -10,
          -15, 0, 10,
          15, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-0-back',
      'properties': {
        'rotate-x': 90,
        'translate-x': -35,
        'translate-y': 8,
        'translate-z': -10,
        'vertices': [
          15, 0, -10,
          -15, 0, -10,
          -15, 0, 10,
          15, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-1a',
      'properties': {
        'rotate-x': 90,
        'translate-x': -35,
        'translate-y': 8,
        'translate-z': -80,
        'vertices': [
          15, 0, -10,
          -15, 0, -10,
          -15, 0, 10,
          15, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-1a-back',
      'properties': {
        'rotate-x': 270,
        'translate-x': -35,
        'translate-y': 8,
        'translate-z': -80,
        'vertices': [
          15, 0, -10,
          -15, 0, -10,
          -15, 0, 10,
          15, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-1b',
      'properties': {
        'rotate-x': 90,
        'translate-x': -5,
        'translate-y': 8,
        'translate-z': -60,
        'vertices': [
          15, 0, -10,
          -15, 0, -10,
          -15, 0, 10,
          15, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-1b-back',
      'properties': {
        'rotate-x': 270,
        'translate-x': -5,
        'translate-y': 8,
        'translate-z': -60,
        'vertices': [
          15, 0, -10,
          -15, 0, -10,
          -15, 0, 10,
          15, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-2',
      'properties': {
        'rotate-z': 270,
        'translate-x': -50,
        'translate-y': 8,
        'translate-z': -45,
        'vertices': [
          10, 0, -35,
          -10, 0, -35,
          -10, 0, 35,
          10, 0, 35,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-2-back',
      'properties': {
        'rotate-z': 90,
        'translate-x': -50,
        'translate-y': 8,
        'translate-z': -45,
        'vertices': [
          10, 0, -35,
          -10, 0, -35,
          -10, 0, 35,
          10, 0, 35,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-3a',
      'properties': {
        'rotate-z': 90,
        'translate-x': 10,
        'translate-y': 8,
        'translate-z': -40,
        'vertices': [
          10, 0, -20,
          -10, 0, -20,
          -10, 0, 20,
          10, 0, 20,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-3a-back',
      'properties': {
        'rotate-z': 270,
        'translate-x': 10,
        'translate-y': 8,
        'translate-z': -40,
        'vertices': [
          10, 0, -20,
          -10, 0, -20,
          -10, 0, 20,
          10, 0, 20,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-3b',
      'properties': {
        'rotate-z': 90,
        'translate-x': -20,
        'translate-y': 8,
        'translate-z': -67,
        'vertices': [
          10, 0, -13,
          -10, 0, -13,
          -10, 0, 13,
          10, 0, 13,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-3b-back',
      'properties': {
        'rotate-z': 270,
        'translate-x': -20,
        'translate-y': 8,
        'translate-z': -67,
        'vertices': [
          10, 0, -13,
          -10, 0, -13,
          -10, 0, 13,
          10, 0, 13,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-interior-0',
      'properties': {
        'rotate-z': 270,
        'translate-x': -20,
        'translate-y': 8,
        'translate-z': -39,
        'vertices': [
          10, 0, -5,
          -10, 0, -5,
          -10, 0, 5,
          10, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-interior-0-back',
      'properties': {
        'rotate-z': 90,
        'translate-x': -20,
        'translate-y': 8,
        'translate-z': -39,
        'vertices': [
          10, 0, -5,
          -10, 0, -5,
          -10, 0, 5,
          10, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-interior-1',
      'properties': {
        'rotate-x': 270,
        'translate-x': -25,
        'translate-y': 8,
        'translate-z': -39,
        'vertices': [
          5, 0, -10,
          -5, 0, -10,
          -5, 0, 10,
          5, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-interior-1-back',
      'properties': {
        'rotate-x': 90,
        'translate-x': -25,
        'translate-y': 8,
        'translate-z': -39,
        'vertices': [
          5, 0, -10,
          -5, 0, -10,
          -5, 0, 10,
          5, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-interior-2',
      'properties': {
        'rotate-x': 270,
        'translate-x': -45,
        'translate-y': 8,
        'translate-z': -39,
        'vertices': [
          5, 0, -10,
          -5, 0, -10,
          -5, 0, 10,
          5, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-interior-2-back',
      'properties': {
        'rotate-x': 90,
        'translate-x': -45,
        'translate-y': 8,
        'translate-z': -39,
        'vertices': [
          5, 0, -10,
          -5, 0, -10,
          -5, 0, 10,
          5, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-interior-3',
      'properties': {
        'rotate-x': 270,
        'translate-x': -35,
        'translate-y': 13,
        'translate-z': -39,
        'vertices': [
          5, 0, -5,
          -5, 0, -5,
          -5, 0, 5,
          5, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-interior-3-back',
      'properties': {
        'rotate-x': 90,
        'translate-x': -35,
        'translate-y': 13,
        'translate-z': -39,
        'vertices': [
          5, 0, -5,
          -5, 0, -5,
          -5, 0, 5,
          5, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-interior-4',
      'properties': {
        'rotate-z': 270,
        'translate-x': -20,
        'translate-y': 13,
        'translate-z': -39,
        'vertices': [
          5, 0, -15,
          -5, 0, -15,
          -5, 0, 15,
          5, 0, 15,
        ],
      },
    });
    core_entity_create({
      'id': 'interior-wall-interior-4-back',
      'properties': {
        'rotate-z': 90,
        'translate-x': -20,
        'translate-y': 13,
        'translate-z': -39,
        'vertices': [
          5, 0, -15,
          -5, 0, -15,
          -5, 0, 15,
          5, 0, 15,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-bottom',
      'properties': {
        'rotate-x': 180,
        'translate-x': -35,
        'translate-y': 30,
        'translate-z': -25,
        'vertices': [
          8, 0, -6,
          -8, 0, -6,
          -8, 0, 6,
          8, 0, 6,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-0',
      'properties': {
        'rotate-x': 90,
        'translate-x': -42,
        'translate-y': 24,
        'translate-z': -19,
        'vertices': [
          1, 0, -6,
          -1, 0, -6,
          -1, 0, 6,
          1, 0, 6,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-0-back',
      'properties': {
        'rotate-x': 270,
        'translate-x': -42,
        'translate-y': 24,
        'translate-z': -19,
        'vertices': [
          1, 0, -6,
          -1, 0, -6,
          -1, 0, 6,
          1, 0, 6,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-1',
      'properties': {
        'rotate-x': 90,
        'translate-x': -28,
        'translate-y': 24,
        'translate-z': -19,
        'vertices': [
          1, 0, -6,
          -1, 0, -6,
          -1, 0, 6,
          1, 0, 6,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-1-back',
      'properties': {
        'rotate-x': 270,
        'translate-x': -28,
        'translate-y': 24,
        'translate-z': -19,
        'vertices': [
          1, 0, -6,
          -1, 0, -6,
          -1, 0, 6,
          1, 0, 6,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-2',
      'properties': {
        'rotate-x': 90,
        'translate-x': -42,
        'translate-y': 24,
        'translate-z': -31,
        'vertices': [
          1, 0, -6,
          -1, 0, -6,
          -1, 0, 6,
          1, 0, 6,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-2-back',
      'properties': {
        'rotate-x': 270,
        'translate-x': -42,
        'translate-y': 24,
        'translate-z': -31,
        'vertices': [
          1, 0, -6,
          -1, 0, -6,
          -1, 0, 6,
          1, 0, 6,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-3',
      'properties': {
        'rotate-x': 90,
        'translate-x': -28,
        'translate-y': 24,
        'translate-z': -31,
        'vertices': [
          1, 0, -6,
          -1, 0, -6,
          -1, 0, 6,
          1, 0, 6,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-3-back',
      'properties': {
        'rotate-x': 270,
        'translate-x': -28,
        'translate-y': 24,
        'translate-z': -31,
        'vertices': [
          1, 0, -6,
          -1, 0, -6,
          -1, 0, 6,
          1, 0, 6,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-4',
      'properties': {
        'rotate-z': 90,
        'translate-x': -43,
        'translate-y': 24,
        'translate-z': -20,
        'vertices': [
          6, 0, -1,
          -6, 0, -1,
          -6, 0, 1,
          6, 0, 1,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-4-back',
      'properties': {
        'rotate-z': 270,
        'translate-x': -43,
        'translate-y': 24,
        'translate-z': -20,
        'vertices': [
          6, 0, -1,
          -6, 0, -1,
          -6, 0, 1,
          6, 0, 1,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-5',
      'properties': {
        'rotate-z': 90,
        'translate-x': -27,
        'translate-y': 24,
        'translate-z': -20,
        'vertices': [
          6, 0, -1,
          -6, 0, -1,
          -6, 0, 1,
          6, 0, 1,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-5-back',
      'properties': {
        'rotate-z': 270,
        'translate-x': -27,
        'translate-y': 24,
        'translate-z': -20,
        'vertices': [
          6, 0, -1,
          -6, 0, -1,
          -6, 0, 1,
          6, 0, 1,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-6',
      'properties': {
        'rotate-z': 90,
        'translate-x': -43,
        'translate-y': 24,
        'translate-z': -30,
        'vertices': [
          6, 0, -1,
          -6, 0, -1,
          -6, 0, 1,
          6, 0, 1,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-6-back',
      'properties': {
        'rotate-z': 270,
        'translate-x': -43,
        'translate-y': 24,
        'translate-z': -30,
        'vertices': [
          6, 0, -1,
          -6, 0, -1,
          -6, 0, 1,
          6, 0, 1,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-7',
      'properties': {
        'rotate-z': 90,
        'translate-x': -27,
        'translate-y': 24,
        'translate-z': -30,
        'vertices': [
          6, 0, -1,
          -6, 0, -1,
          -6, 0, 1,
          6, 0, 1,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-pillar-7-back',
      'properties': {
        'rotate-z': 270,
        'translate-x': -27,
        'translate-y': 24,
        'translate-z': -30,
        'vertices': [
          6, 0, -1,
          -6, 0, -1,
          -6, 0, 1,
          6, 0, 1,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-top-0',
      'properties': {
        'translate-x': -35,
        'translate-y': 30,
        'translate-z': -25,
        'vertices': [
          0, 10, 0,
          0, 10, 0,
          -8, 0, 6,
          8, 0, 6,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-top-1',
      'properties': {
        'translate-x': -35,
        'translate-y': 30,
        'translate-z': -25,
        'vertices': [
          -8, 0, -6,
          0, 10, 0,
          0, 10, 0,
          8, 0, -6,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-top-2',
      'properties': {
        'translate-x': -35,
        'translate-y': 30,
        'translate-z': -25,
        'vertices': [
          -8, 0, -6,
          -8, 0, 6,
          0, 10, 0,
          0, 10, 0,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-top-3',
      'properties': {
        'translate-x': -35,
        'translate-y': 30,
        'translate-z': -25,
        'vertices': [
          8, 0, -6,
          0, 10, 0,
          0, 10, 0,
          8, 0, 6,
        ],
      },
    });
    core_entity_create({
      'id': 'room-3-floor',
      'properties': {
        'translate-x': -35,
        'translate-y': -18,
        'translate-z': -39,
        'vertices': [
          8, 0, -8,
          -8, 0, -8,
          -8, 0, 8,
          8, 0, 8,
        ],
      },
    });
    core_entity_create({
      'id': 'room-3-wall-0',
      'properties': {
        'rotate-x': 90,
        'translate-x': -35,
        'translate-y': -10,
        'translate-z': -47,
        'vertices': [
          8, 0, -8,
          -8, 0, -8,
          -8, 0, 8,
          8, 0, 8,
        ],
      },
    });
    core_entity_create({
      'id': 'room-3-wall-2',
      'properties': {
        'rotate-x': 270,
        'translate-x': -35,
        'translate-y': -10,
        'translate-z': -31,
        'vertices': [
          8, 0, -8,
          -8, 0, -8,
          -8, 0, 8,
          8, 0, 8,
        ],
      },
    });
    core_entity_create({
      'id': 'room-3-wall-3',
      'properties': {
        'rotate-z': 90,
        'translate-x': -27,
        'translate-y': -10,
        'translate-z': -39,
        'vertices': [
          8, 0, -8,
          -8, 0, -8,
          -8, 0, 8,
          8, 0, 8,
        ],
      },
    });
    core_entity_create({
      'id': 'room-3-wall-4',
      'properties': {
        'rotate-z': 270,
        'translate-x': -43,
        'translate-y': -10,
        'translate-z': -39,
        'vertices': [
          8, 0, -8,
          -8, 0, -8,
          -8, 0, 8,
          8, 0, 8,
        ],
      },
    });
};
