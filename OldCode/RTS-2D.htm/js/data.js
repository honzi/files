'use strict';

function load_data(){
    canvas_setproperties({
      'properties': {
        'strokeStyle': '#ddd',
        'textBaseline': 'middle',
      },
    });

    rts_bullets = [];
    rts_fog = [];
    rts_math = [];
    rts_players = {};
    rts_world_dynamic = [];
    rts_world_static = [];

    // Precalculate stuff.
    rts_math = [
      core_storage_data['level-size'] / 100,
      15 / (core_storage_data['level-size'] / 200),
      50 / (core_storage_data['level-size'] / 200),
      120 / (core_storage_data['level-size'] / 200),
    ];

    camera_x = 0;
    camera_y = 0;
    rts_money_timer = core_storage_data['income-frames'];
    rts_selected_type = '';

    // Add fog, if settings allow it.
    if(core_storage_data['fog-type'] > 0){
        let temp_x = 0;
        let temp_y = 0;
        const times = Math.max(
          Math.floor(core_storage_data['level-size'] / 50),
          1
        );

        let loop_counter = Math.pow(times, 2) - 1;
        do{
            rts_fog.push({
              'display': true,
              'x': temp_x * 100,
              'y': temp_y,
            });

            // Add next fog unit one fog unit space to the right.
            temp_x += 1;

            // Done with this row, move on to the next.
            if(loop_counter % times === 0){
                temp_y += 100;
                temp_x = 0;
            }
        }while(loop_counter--);
    }

    load_tech();

    rts_world_dynamic = [
      {
        'color': '#222',
        'height': 100,
        'width': 100,
        'x': -50,
        'y': -50,
      },
    ];
    rts_world_static = [
      {
        'color': '#333',
        'height': core_storage_data['level-size'] * 2,
        'width': core_storage_data['level-size'] * 2,
        'x': -core_storage_data['level-size'],
        'y': -core_storage_data['level-size'],
      },
    ];

    // Setup players.
    rts_players = {
      0: {
        'ai': false,
        'buildings': [],
        'income': core_storage_data['income-base'],
        'money': core_storage_data['money'],
        'units': [],
      },
      1: {
        'ai': {
          'building': 'F',
          'unit': 'Robot',
        },
        'buildings': [],
        'income': core_storage_data['income-base'],
        'money': core_storage_data['money'],
        'units': [],
      },
    };

    const hq_x = core_random_boolean()
      ? -core_storage_data['level-size'] + 25
      : core_storage_data['level-size'] - 125;
    const hq_y = core_random_boolean()
      ? core_storage_data['level-size'] - 125
      : -core_storage_data['level-size'] + 25;

    rts_building_build({
      'fog': true,
      'player': 0,
      'type': 'HQ',
      'x': hq_x,
      'y': hq_y,
    });
    rts_building_build({
      'player': 1,
      'type': 'HQ',
      'x': -hq_x - 100,
      'y': -hq_y - 100,
    });

    camera_x -= hq_x;
    camera_y -= hq_y;
}

function load_tech(id){
    id = id || 'default';

    const tech = {
      'default': {
        'buildings': {
          'F': {
            'children': [
              'R',
            ],
            'cost': 250,
            'health': 500,
            'height': 100,
            'key': 70,
            'label': 'F',
            'labelFont': '300% monospace',
            'minimap': 2,
            'name': 'Factory',
            'width': 100,
          },
          'G': {
            'children': [],
            'cost': 100,
            'health': 300,
            'height': 50,
            'income': 1,
            'key': 71,
            'label': 'G',
            'labelFont': '300% monospace',
            'minimap': 1,
            'name': 'Generator',
            'width': 50,
          },
          'HQ': {
            'children': [
              'F',
              'G',
              'L',
              'T',
            ],
            'cost': 0,
            'health': 1000,
            'height': 100,
            'label': 'HQ',
            'labelFont': '300% monospace',
            'minimap': 2,
            'name': 'HQ',
            'width': 100,
          },
          'L': {
            'children': [],
            'cost': 1000,
            'health': 400,
            'height': 75,
            'key': 76,
            'label': 'L',
            'labelFont': '300% monospace',
            'minimap': 2,
            'name': 'Lab',
            'width': 75,
          },
          'T': {
            'children': [],
            'cost': 150,
            'damage': 50,
            'fog-radius': 400,
            'health': 250,
            'height': 25,
            'key': 84,
            'label': 'T',
            'labelFont': '200% monospace',
            'minimap': 1,
            'name': 'Turret',
            'range': 300,
            'reload': 100,
            'width': 25,
          },
        },
        'units': {
          'Robot': {
            'cost': 100,
            'key': 82,
          },
        },
      },
    };

    rts_buildings = tech[id]['buildings'];
    rts_units = tech[id]['units'];
}

function repo_escape_custom(){
    if(rts_build_mode.length > 0){
        rts_build_mode = '';

    }else{
        core_escape();
    }
}
