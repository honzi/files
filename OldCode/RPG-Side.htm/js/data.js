'use strict';

function load_data(id){
    rpg_unload();

    canvas_properties['clearColor'] = '#222';

    rpg_character_create({
      'properties': {
        'can-jump': false,
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
        'stats': {
          'jump-velocity': 8,
        },
        'width': 24,
      },
    });

    rpg_world_static.push({
      'color': '#333',
      'height': 50,
      'width': 250,
      'x': -150,
      'y': -25,
    });

    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 100,
        'width': 25,
        'x': -175,
        'y': -50,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 25,
        'width': 225,
        'x': -150,
        'y': -50,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 25,
        'width': 275,
        'x': -150,
        'y': 25,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 175,
        'width': 25,
        'x': 0,
        'y': 50,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 25,
        'width': 1075,
        'x': 25,
        'y': 200,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 200,
        'width': 25,
        'x': 75,
        'y': -225,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 25,
        'width': 1000,
        'x': 100,
        'y': -225,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 25,
        'width': 75,
        'x': 100,
        'y': -100,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 25,
        'width': 100,
        'x': 175,
        'y': 25,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 150,
        'width': 25,
        'x': 275,
        'y': -200,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 200,
        'width': 25,
        'x': 275,
        'y': 0,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 25,
        'width': 50,
        'x': 300,
        'y': -150,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 25,
        'width': 50,
        'x': 475,
        'y': 75,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 300,
        'width': 25,
        'x': 550,
        'y': -75,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 25,
        'width': 250,
        'x': 575,
        'y': -75,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 25,
        'width': 75,
        'x': 625,
        'y': 75,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'color': '#444',
        'height': 450,
        'width': 25,
        'x': 1100,
        'y': -225,
      },
    });

    rpg_world_dynamic_create({
      'properties': {
        'collision': false,
        'color': '#700',
        'effect': 1,
        'height': 25,
        'width': 250,
        'x': 25,
        'y': 175,
      },
    });
    rpg_world_dynamic_create({
      'properties': {
        'collision': false,
        'color': '#700',
        'effect': 1,
        'height': 25,
        'width': 525,
        'x': 575,
        'y': 175,
      },
    });

    rpg_world_dynamic_create({
      'properties': {
        'collision': false,
        'color': '#66f',
        'effect': 1,
        'effect-stat': 'mana',
        'height': 25,
        'width': 25,
        'x': 100,
        'y': -125,
      },
    });

    rpg_world_dynamic_create({
      'properties': {
        'color': '#0f0',
        'effect-dy': -30,
        'height': 25,
        'width': 250,
        'x': 300,
        'y': 175,
      },
    });

    rpg_character_create({
      'properties': {
        'can-jump': false,
        'team': 0,
        'x': -125,
        'y': 0,
      },
    });

    rpg_spawner_create({
      'properties': {
        'character': {
          'can-jump': false,
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
        'x': 650,
        'y': 25,
      },
    });
}
