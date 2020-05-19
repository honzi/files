'use strict';

function load_data(id){
    rpg_unload();

    canvas_properties['clearColor'] = '#020';

    rpg_character_create({
      'properties': {
        'color': core_storage_data['color-positive'],
        'height': 34,
        'inventory': [
          rpg_item_create({
            'properties': {
              'cursor': 'pointer',
              'label': 'Scroll of Manabolt',
              'spell': {
                'color': '#00f',
                'cost': 1,
                'damage': 1,
                'reload': 10,
              },
            },
          }),
          rpg_item_create({
            'properties': {
              'cursor': 'pointer',
              'label': 'Scroll of Healthbolt',
              'spell': {
                'color': '#0f0',
                'cost': 1,
                'costs': 'health',
                'damage': 1,
                'reload': 10,
              },
            },
          }),
          rpg_item_create({
            'properties': {
              'cursor': 'pointer',
              'label': 'Barricade',
              'spell': {
                'color': '#00f',
                'cost': 10,
                'reload': 10,
                'type': 'character',
              },
            },
          }),
          rpg_item_create({
            'properties': {
              'cursor': 'pointer',
              'label': 'Heal',
              'spell': {
                'color': '#00f',
                'cost': 1,
                'damage': -1,
                'reload': 10,
                'type': 'stat',
              },
            },
          }),
        ],
        'player': true,
        'width': 24,
      },
    });

    rpg_world_static.push({
      'color': '#333',
      'height': 250,
      'width': 200,
      'x': -150,
      'y': -125,
    });

    rpg_world_static.push({
      'color': '#321',
      'height': 250,
      'width': 300,
      'x': -150,
      'y': 575,
    });
    rpg_world_static.push({
      'color': '#321',
      'height': 50,
      'width': 450,
      'x': 50,
      'y': 75,
    });
    rpg_world_static.push({
      'color': '#321',
      'height': 50,
      'width': 350,
      'x': 150,
      'y': 725,
    });
    rpg_world_static.push({
      'color': '#321',
      'height': 700,
      'width': 50,
      'x': 500,
      'y': 75,
    });

    rpg_world_dynamic_create({
      'properties': {
        'color': '#222',
        'height': 1000,
        'width': 25,
        'x': -175,
        'y': -150,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#222',
        'height': 25,
        'width': 950,
        'x': -150,
        'y': -150,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#222',
        'height': 25,
        'width': 300,
        'x': -150,
        'y': 575,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#222',
        'height': 25,
        'width': 950,
        'x': -150,
        'y': 825,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#222',
        'height': 150,
        'width': 25,
        'x': 150,
        'y': 575,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#222',
        'height': 50,
        'width': 25,
        'x': 150,
        'y': 775,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#222',
        'height': 1000,
        'width': 25,
        'x': 800,
        'y': -150,
      },
    });

    rpg_world_dynamic_create({
      'properties': {
        'collision': false,
        'color': '#700',
        'effect': 1,
        'height': 50,
        'width': 50,
        'x': -150,
        'y': -50,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'collision': false,
        'color': '#66f',
        'effect': 1,
        'effect-stat': 'mana',
        'height': 50,
        'width': 50,
        'x': -150,
        'y': 0,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'collision': false,
        'color': '#0f0',
        'effect-dx': 55,
        'height': 25,
        'width': 25,
        'x': -150,
        'y': 75,
      },
    });

    rpg_character_create({
      'properties': {
        'team': 0,
        'x': -125,
        'y': -100,
      },
    });

    rpg_spawner_create({
      'properties': {
        'character': {
          'color': core_storage_data['color-negative'],
          'inventory': [
            rpg_item_create({
              'properties': {
                'label': 'Scroll of Manabolt',
                'owner': 2,
                'spell': {
                  'color': '#00f',
                  'damage': 1,
                  'reload': 10,
                },
              },
            }),
          ],
        },
        'x': -100,
        'y': 650,
      },
    });
}
