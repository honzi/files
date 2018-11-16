'use strict';

function load_data(id){
    core_entity_create({
      'id': 'base',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'translate-y': -2,
        'vertices': [
          60, 0, -40,
          -60, 0, -40,
          -60, 0, 60,
          60, 0, 60,
        ],
      },
    });
    core_entity_create({
      'id': 'grate-0',
      'properties': {
        'collision': true,
        'color': [
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
        ],
        'translate-x': -57,
        'translate-y': -1.99,
        'translate-z': -50,
        'vertices': [
          3, 0, -10,
          -3, 0, -10,
          -3, 0, 10,
          3, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'grate-1',
      'properties': {
        'collision': true,
        'color': [
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
        ],
        'translate-x': -50,
        'translate-y': -1.99,
        'translate-z': -57,
        'vertices': [
          5, 0, -3,
          -6, 0, -3,
          -6, 0, 3,
          5, 0, 3,
        ],
      },
    });
    core_entity_create({
      'id': 'grate-2',
      'properties': {
        'collision': true,
        'color': [
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
        ],
        'translate-x': -50,
        'translate-y': -1.99,
        'translate-z': -43,
        'vertices': [
          5, 0, -3,
          -6, 0, -3,
          -6, 0, 3,
          5, 0, 3,
        ],
      },
    });
    core_entity_create({
      'id': 'grate-entrance-0',
      'properties': {
        'collision': true,
        'color': [
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
        ],
        'rotate-z': 270,
        'translate-x': -54,
        'translate-y': -9.99,
        'translate-z': -50,
        'vertices': [
          8, 0, -4,
          -8, 0, -4,
          -8, 0, 4,
          8, 0, 4,
        ],
      },
    });
    core_entity_create({
      'id': 'grate-entrance-1',
      'properties': {
        'collision': true,
        'color': [
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
        ],
        'rotate-z': 90,
        'translate-x': -45,
        'translate-y': -9.99,
        'translate-z': -50,
        'vertices': [
          8, 0, -4,
          -8, 0, -4,
          -8, 0, 4,
          8, 0, 4,
        ],
      },
    });
    core_entity_create({
      'id': 'grate-entrance-2',
      'properties': {
        'collision': true,
        'color': [
          0.14, 0.14, 0.14, 1,
          0.14, 0.14, 0.14, 1,
          0.14, 0.14, 0.14, 1,
          0.14, 0.14, 0.14, 1,
        ],
        'rotate-x': 90,
        'translate-x': -50,
        'translate-y': -9.99,
        'translate-z': -54,
        'vertices': [
          5, 0, -8,
          -5, 0, -8,
          -5, 0, 8,
          5, 0, 8,
        ],
      },
    });
    core_entity_create({
      'id': 'grate-entrance-3',
      'properties': {
        'collision': true,
        'color': [
          0.14, 0.14, 0.14, 1,
          0.14, 0.14, 0.14, 1,
          0.14, 0.14, 0.14, 1,
          0.14, 0.14, 0.14, 1,
        ],
        'rotate-x': 270,
        'translate-x': -50,
        'translate-y': -9.99,
        'translate-z': -46,
        'vertices': [
          5, 0, -8,
          -5, 0, -8,
          -5, 0, 8,
          5, 0, 8,
        ],
      },
    });
    core_entity_create({
      'id': 'sidewalk-base',
      'properties': {
        'collision': true,
        'color': [
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
        ],
        'translate-y': -1.99,
        'translate-z': -50,
        'vertices': [
          60, 0, -10,
          -45, 0, -10,
          -45, 0, 10,
          60, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-0-base',
      'properties': {
        'color': [
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
        ],
        'translate-x': -30,
        'translate-y': -1.99,
        'translate-z': 20,
        'vertices': [
          15, 0, -30,
          -30, 0, -30,
          -30, 0, 40,
          15, 0, 40,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-0-wall-outer-front-top',
      'properties': {
        'color': [
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
        ],
        'rotate-z': 270,
        'translate-x': -25,
        'translate-y': 26,
        'translate-z': 30,
        'vertices': [
          22, 0, -30,
          -22, 0, -30,
          -22, 0, 30,
          22, 0, 30,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-0-wall-outer-front-left',
      'properties': {
        'collision': true,
        'color': [
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
        ],
        'rotate-z': 270,
        'translate-x': -25,
        'translate-y': 1,
        'translate-z': 45,
        'vertices': [
          3, 0, -15,
          -3, 0, -15,
          -3, 0, 15,
          3, 0, 15,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-0-wall-outer-front-right',
      'properties': {
        'collision': true,
        'color': [
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
        ],
        'rotate-z': 270,
        'translate-x': -25,
        'translate-y': 1,
        'translate-z': 10,
        'vertices': [
          3, 0, -10,
          -3, 0, -10,
          -3, 0, 10,
          3, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-0-wall-outer-street',
      'properties': {
        'collision': true,
        'color': [
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
        ],
        'rotate-x': 270,
        'translate-x': -40,
        'translate-y': 23,
        'vertices': [
          15, 0, -25,
          -20, 0, -25,
          -20, 0, 25,
          15, 0, 25,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-bridge-bottom',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-x': 180,
        'translate-y': 20,
        'translate-z': 20,
        'vertices': [
          25, 0, -5,
          -25, 0, -5,
          -25, 0, 5,
          25, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-bridge-back',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-x': 270,
        'translate-y': 25,
        'translate-z': 15,
        'vertices': [
          25, 0, -5,
          -25, 0, -5,
          -25, 0, 5,
          25, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-bridge-front',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-x': 90,
        'translate-y': 25,
        'translate-z': 25,
        'vertices': [
          25, 0, -5,
          -25, 0, -5,
          -25, 0, 5,
          25, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-1-wall-outer-alley',
      'properties': {
        'collision': true,
        'color': [
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
        ],
        'rotate-x': 90,
        'translate-x': 40,
        'translate-y': 23,
        'translate-z': 40,
        'vertices': [
          20, 0, -25,
          -15, 0, -25,
          -15, 0, 25,
          20, 0, 25,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-1-base',
      'properties': {
        'color': [
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
          0.2, 0.2, 0.2, 1,
        ],
        'translate-x': 30,
        'translate-y': -1.99,
        'translate-z': 20,
        'vertices': [
          30, 0, -30,
          -15, 0, -30,
          -15, 0, 40,
          30, 0, 40,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-1-wall-outer-front-top',
      'properties': {
        'color': [
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
        ],
        'rotate-z': 90,
        'translate-x': 25,
        'translate-y': 26,
        'translate-z': 20,
        'vertices': [
          22, 0, -20,
          -22, 0, -20,
          -22, 0, 20,
          22, 0, 20,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-1-wall-outer-front-left',
      'properties': {
        'collision': true,
        'color': [
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
        ],
        'rotate-z': 90,
        'translate-x': 25,
        'translate-y': 1,
        'translate-z': 10,
        'vertices': [
          3, 0, -10,
          -3, 0, -10,
          -3, 0, 10,
          3, 0, 10,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-1-wall-outer-front-right',
      'properties': {
        'collision': true,
        'color': [
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
        ],
        'rotate-z': 90,
        'translate-x': 25,
        'translate-y': 1,
        'translate-z': 35,
        'vertices': [
          3, 0, -5,
          -3, 0, -5,
          -3, 0, 5,
          3, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'tower-1-wall-outer-street',
      'properties': {
        'collision': true,
        'color': [
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
          0.15, 0.15, 0.15, 1,
        ],
        'rotate-x': 270,
        'translate-x': 40,
        'translate-y': 23,
        'vertices': [
          20, 0, -25,
          -15, 0, -25,
          -15, 0, 25,
          20, 0, 25,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-0',
      'properties': {
        'collision': true,
        'color': [
          0.05, 0.05, 0.05, 1,
          0.05, 0.05, 0.05, 1,
          0.05, 0.05, 0.05, 1,
          0.05, 0.05, 0.05, 1,
        ],
        'rotate-x': 90,
        'translate-y': 3,
        'translate-z': -60,
        'vertices': [
          60, 0, -5,
          -60, 0, -5,
          -60, 0, 5,
          60, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-1',
      'properties': {
        'collision': true,
        'color': [
          0.05, 0.05, 0.05, 1,
          0.05, 0.05, 0.05, 1,
          0.05, 0.05, 0.05, 1,
          0.05, 0.05, 0.05, 1,
        ],
        'rotate-z': 90,
        'translate-x': 60,
        'translate-y': 3,
        'vertices': [
          5, 0, -60,
          -5, 0, -60,
          -5, 0, 60,
          5, 0, 60,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-2',
      'properties': {
        'collision': true,
        'color': [
          0.05, 0.05, 0.05, 1,
          0.05, 0.05, 0.05, 1,
          0.05, 0.05, 0.05, 1,
          0.05, 0.05, 0.05, 1,
        ],
        'rotate-x': 270,
        'translate-y': 3,
        'translate-z': 60,
        'vertices': [
          60, 0, -5,
          -60, 0, -5,
          -60, 0, 5,
          60, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-3',
      'properties': {
        'collision': true,
        'color': [
          0.05, 0.05, 0.05, 1,
          0.05, 0.05, 0.05, 1,
          0.05, 0.05, 0.05, 1,
          0.05, 0.05, 0.05, 1,
        ],
        'rotate-z': 270,
        'translate-x': -60,
        'translate-y': 3,
        'vertices': [
          5, 0, -60,
          -5, 0, -60,
          -5, 0, 60,
          5, 0, 60,
        ],
      },
    });
};
