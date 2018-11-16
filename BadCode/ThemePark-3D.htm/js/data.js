'use strict';

function load_data(id){
    core_entity_create({
      'id': 'grass-start',
      'properties': {
        'color': [
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
        ],
        'translate-y': -2.01,
        'vertices': [
          37, 0, -55,
          -26, 0, -55,
          -26, 0, 5,
          37, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'water-food',
      'properties': {
        'color': [
          0.2, 0.2, 0.4, 1,
          0.2, 0.2, 0.4, 1,
          0.2, 0.2, 0.4, 1,
          0.2, 0.2, 0.4, 1,
        ],
        'translate-y': -6,
        'translate-z': -60,
        'vertices': [
          40, 0, -5,
          -40, 0, -5,
          -40, 0, 5,
          40, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'water-food-wall-0',
      'properties': {
        'color': [
          0.2, 0.08, 0, 1,
          0.2, 0.08, 0, 1,
          0.2, 0.08, 0, 1,
          0.2, 0.08, 0, 1,
        ],
        'rotate-x': 270,
        'translate-y': -4,
        'translate-z': -55,
        'vertices': [
          40, 0, -2,
          -40, 0, -2,
          -40, 0, 2,
          40, 0, 2,
        ],
      },
    });
    core_entity_create({
      'id': 'water-food-wall-1',
      'properties': {
        'color': [
          0.2, 0.08, 0, 1,
          0.2, 0.08, 0, 1,
          0.2, 0.08, 0, 1,
          0.2, 0.08, 0, 1,
        ],
        'rotate-x': 90,
        'translate-y': -4,
        'translate-z': -65,
        'vertices': [
          40, 0, -2,
          -40, 0, -2,
          -40, 0, 2,
          40, 0, 2,
        ],
      },
    });
    core_entity_create({
      'id': 'path-food',
      'properties': {
        'collision': true,
        'color': [
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
        ],
        'translate-x': 20,
        'translate-y': -2,
        'translate-z': -40,
        'vertices': [
          16, 0, -14,
          -15, 0, -14,
          -15, 0, 15,
          16, 0, 15,
        ],
      },
    });
    core_entity_create({
      'id': 'path-fork-0',
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
          14, 0, -5,
          -25, 0, -5,
          -25, 0, 5,
          14, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'path-ride-tower',
      'properties': {
        'collision': true,
        'color': [
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
        ],
        'translate-x': -20,
        'translate-y': -2,
        'translate-z': -50,
        'vertices': [
          5, 0, -25,
          -5, 0, -25,
          -5, 0, 25,
          5, 0, 25,
        ],
      },
    });
    core_entity_create({
      'id': 'path-start',
      'properties': {
        'collision': true,
        'color': [
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
          0.4, 0.15, 0, 1,
        ],
        'translate-y': -2,
        'vertices': [
          4, 0, -15,
          -4, 0, -15,
          -4, 0, 5,
          4, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'ride-tower',
      'properties': {
        'color': [
          0.4, 0.15, 0.4, 1,
          0.4, 0.15, 0.4, 1,
          0.4, 0.15, 0.4, 1,
          0.4, 0.15, 0.4, 1,
        ],
        'dy': .1,
        'logic': function(){
            if(this['dy'] > 0){
                if(this['translate-y'] > 42){
                    this['dy'] = -.1;
                }

            }else if(this['translate-y'] < 0){
                this['dy'] = .1;
            }
        },
        'rotate-x': 90,
        'translate-x': -5,
        'translate-z': -45,
        'vertices': [
          1, 0, -1,
          -1, 0, -1,
          -1, 0, 1,
          1, 0, 1,
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
        1,
      ],
      'id': 'shop-0',
      'side': 5,
      'x': 20,
      'y': 3,
      'z': -20,
    });
    data_webgl_cube_3d({
      'collision': true,
      'color': [
        .24, .15, .07, 1,
        .24, .15, .07, 1,
        .24, .15, .07, 1,
        .24, .15, .07, 1,
      ],
      'exclude': [
        1,
      ],
      'id': 'shop-1',
      'side': 5,
      'x': 31,
      'y': 3,
      'z': -20,
    });

    data_webgl_tree_3d({
      'x': -9,
      'y': -2,
      'z': -10,
    });
    data_webgl_tree_3d({
      'x': -9,
      'y': -2,
      'z': -30,
    });
    data_webgl_tree_3d({
      'y': -2,
      'z': -30,
    });
    data_webgl_tree_3d({
      'x': 9,
      'y': -2,
      'z': -10,
    });

    core_entity_create({
      'id': 'wall-start-0',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-x': 270,
        'translate-y': -1,
        'translate-z': 5,
        'vertices': [
          5, 0, -1,
          -5, 0, -1,
          -5, 0, 0,
          5, 0, 0,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-start-1',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-z': 270,
        'translate-x': -5,
        'translate-y': -1,
        'vertices': [
          1, 0, -14,
          0, 0, -14,
          0, 0, 5,
          1, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-start-2',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-z': 90,
        'translate-x': 5,
        'translate-y': -1,
        'vertices': [
          0, 0, -14,
          -1, 0, -14,
          -1, 0, 5,
          0, 0, 5,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-start-3',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-x': 90,
        'translate-x': -5,
        'translate-y': -1,
        'translate-z': -26,
        'vertices': [
          9, 0, 0,
          -9, 0, 0,
          -9, 0, 1,
          9, 0, 1,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-food-0',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-x': 270,
        'translate-x': 10,
        'translate-y': -1,
        'translate-z': -14,
        'vertices': [
          5, 0, -1,
          -5, 0, -1,
          -5, 0, 0,
          5, 0, 0,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-food-1',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-z': 270,
        'translate-x': 4,
        'translate-y': -1,
        'translate-z': -35,
        'vertices': [
          1, 0, -20,
          0, 0, -20,
          0, 0, 9,
          1, 0, 9,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-food-2',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-z': 90,
        'translate-x': 37,
        'translate-y': -1,
        'translate-z': -35,
        'vertices': [
          0, 0, -20,
          -1, 0, -20,
          -1, 0, 11,
          0, 0, 11,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-back',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-x': 90,
        'translate-x': 12,
        'translate-y': -1,
        'translate-z': -55,
        'vertices': [
          25, 0, 0,
          -26, 0, 0,
          -26, 0, 1,
          25, 0, 1,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-tower-0',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-x': 270,
        'translate-x': -15,
        'translate-y': -1,
        'translate-z': -14,
        'vertices': [
          10, 0, -1,
          -11, 0, -1,
          -11, 0, 0,
          10, 0, 0,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-tower-1',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-z': 270,
        'translate-x': -26,
        'translate-y': -1,
        'translate-z': -35,
        'vertices': [
          1, 0, -20,
          0, 0, -20,
          0, 0, 21,
          1, 0, 21,
        ],
      },
    });
    core_entity_create({
      'id': 'wall-tower-2',
      'properties': {
        'collision': true,
        'color': [
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
          0.1, 0.1, 0.1, 1,
        ],
        'rotate-z': 90,
        'translate-x': -14,
        'translate-y': -1,
        'translate-z': -35,
        'vertices': [
          0, 0, -20,
          -1, 0, -20,
          -1, 0, 9,
          0, 0, 9,
        ],
      },
    });
};

function ride_attach(){
    webgl_attach({
      'base': document.getElementById('ride-select').value,
    });
    core_escape();
}

function ride_unattach(){
    var attached = core_entities['_webgl-camera']['attach']['to'];
    if(attached === void 0){
        return;
    }
    core_entities['_webgl-camera']['attach'] = false;
    core_entities['_webgl-camera']['translate-x'] = rides[attached]['unattach']['x'];
    core_entities['_webgl-camera']['translate-y'] = rides[attached]['unattach']['y'];
    core_entities['_webgl-camera']['translate-z'] = rides[attached]['unattach']['z'];
    core_escape();
}
