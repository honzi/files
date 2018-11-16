'use strict';

function load_data(id){
    webgl_properties['camera']['speed'] = core_storage_data['speed'];

    core_entity_create({
      'id': 'ground',
      'properties': {
        'color': [
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
        ],
        'translate-y': -10.01,
        'vertices': [
          50, 0, -50,
          -50, 0, -50,
          -50, 0, 50,
          50, 0, 50,
        ],
      },
    });
    core_entity_create({
      'id': 'target',
      'properties': {
        'color': [
          .1, .1, .4, 1,
          .1, .1, .4, 1,
          .1, .1, .4, 1,
          .1, .1, .4, 1,
        ],
        'translate-y': -10,
        'vertices': [
          5, 0, -5,
          -5, 0, -5,
          -5, 0, 5,
          5, 0, 5,
        ],
      },
    });

    randomize_target();

    core_ui_update({
      'ids': {
        'back': String.fromCharCode(core_storage_data['move-↓']),
        'forward': String.fromCharCode(core_storage_data['move-↑']),
        'left': String.fromCharCode(core_storage_data['move-←']),
        'right': String.fromCharCode(core_storage_data['move-→']),
      },
    });
};

function randomize_target(){
    core_entities['target']['translate-x'] = core_random_integer({
      'max': 50,
    }) - 25;
    core_entities['target']['translate-z'] = core_random_integer({
      'max': 50,
    }) - 25;
}
