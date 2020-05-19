'use strict';

function load_data(){
    enemy_reload = 100;
    core_mode = 1;
    height_half = core_storage_data['height'] / 2;
    hits = 0;
    width_half = core_storage_data['width'] / 2;

    entity_create({
      'id': 'player',
      'properties': {
        'reload': core_storage_data['weapon-reload'],
      },
      'types': [
        'player',
      ],
    });

    // level: Final Destination
    if(core_storage_data['level'] === 1){
        level_settings = [
          1,
          250,
          250,
        ];

        entity_create({
          'id': 'background',
          'properties': {
            'color': '#333',
            'height': 500,
            'width': 500,
            'x': -250,
            'y': -250,
          },
          'types': [
            'background',
          ],
        });

        entity_entities['player']['x'] = 125;

        entity_create({
          'id': entity_info['enemy']['count'],
          'properties': {
            'target-x': core_random_integer({
              'max': 500,
            }) - 250,
            'target-y': core_random_integer({
              'max': 500,
            }) - 250,
            'x': -125,
          },
          'types': [
            'enemy',
          ],
        });

    // level: Zombie Surround
    }else if(core_storage_data['level'] === 2){
        level_settings = [
          core_storage_data['zombie-amount'],
          400,
          400,
        ];

        entity_create({
          'id': 'background',
          'properties': {
            'color': '#333',
            'height': 800,
            'width': 800,
            'x': -400,
            'y': -400,
          },
          'types': [
            'background',
          ],
        });

        let zombie_x = 0;
        let zombie_y = 0;

        // Vreate proper number of zombies.
        let loop_counter = level_settings[0] - 1;
        do{
            // Calculate new zombie location away from player starting point.
            do{
                zombie_x = core_random_integer({
                  'max': level_settings[1] * 2,
                }) - level_settings[1];
                zombie_y = core_random_integer({
                  'max': level_settings[2] * 2,
                }) - level_settings[2];
            }while(zombie_x > -99
              && zombie_x < 99
              && zombie_y > -99
              && zombie_y < 99);

            entity_create({
              'id': entity_info['enemy']['count'],
              'properties': {
                'target-x': entity_entities['player']['x'],
                'target-y': entity_entities['player']['y'],
                'x': zombie_x,
                'y': zombie_y,
              },
              'types': [
                'enemy',
              ],
            });
        }while(loop_counter--);

    // level: Empty Square Arena
    }else{
        level_settings = [
          1,
          250,
          250,
        ];

        entity_create({
          'id': 'background-0',
          'properties': {
            'color': '#000',
            'height': 100,
            'width': 100,
            'x': -50,
            'y': -50,
          },
          'types': [
            'background',
          ],
        });
        entity_create({
          'id': 'background-1',
          'properties': {
            'color': '#333',
            'height': 500,
            'width': 500,
            'x': -250,
            'y': -250,
          },
          'types': [
            'background',
          ],
        });

        entity_create({
          'id': 'background-2',
          'properties': {
            'collision': true,
            'color': '#777',
            'height': 100,
            'width': 100,
            'x': -50,
            'y': -200,
          },
          'types': [
            'foreground',
          ],
        });
        entity_create({
          'id': 'background-3',
          'properties': {
            'collision': false,
            'color': '#000',
            'height': 64,
            'width': 64,
            'x': -32,
            'y': -32,
          },
          'types': [
            'foreground',
          ],
        });
        entity_create({
          'id': 'background-4',
          'properties': {
            'collision': true,
            'color': '#777',
            'height': 100,
            'width': 100,
            'x': -50,
            'y': 100,
          },
          'types': [
            'foreground',
          ],
        });

        entity_entities['player']['x'] = 125;

        entity_create({
          'id': entity_info['enemy']['count'],
          'properties': {
            'target-x': core_random_integer({
              'max': 500,
            }) - 250,
            'target-y': core_random_integer({
              'max': 500,
            }) - 250,
            'x': -125,
          },
          'types': [
            'enemy',
          ],
        });
    }
}

function set_destination(id){
    entity_entities[id]['target-x'] = core_random_integer({
      'max': level_settings[1],
    }) - level_settings[1] / 2;
    entity_entities[id]['target-y'] = core_random_integer({
      'max': level_settings[2],
    }) - level_settings[2] / 2;
}
