'use strict';

function load_data(){
    for(var i = 0; i < 150; i++){
        core_entity_create({
          'properties': {
            'translate-x': core_random_number({
              'multiplier': 10,
            }) - 5,
            'translate-y': core_random_number({
              'multiplier': 10,
            }) - 5,
            'translate-z': core_random_number({
              'multiplier': 10,
            }) - 5,
          },
          'types': [
            'drop',
          ],
        });
    }
}
