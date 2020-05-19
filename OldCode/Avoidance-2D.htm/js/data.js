'use strict';

function load_data(id){
    entity_create({
      'id': 'player',
    });

    frame_counter = core_storage_data['frames-per-round'];
    core_mode = 1;
    core_ui_update({
      'ids': {
        'state': '',
      },
    });
    gamearea_height_half = core_storage_data['gamearea-height'] / 2;
    gamearea_width_half = core_storage_data['gamearea-width'] / 2;
    score = 0;

    while(entity_info['obstacle']['count'] < core_storage_data['obstacles']){
        const location = safe_location({
          'offset': 60,
        });
        const height = core_random_integer({
          'max': 100,
        }) + 10;
        const width = core_random_integer({
          'max': 100,
        }) + 10;;
        entity_create({
          'properties': {
            'height': height,
            'width': width,
            'x': location['x'] - width / 2,
            'y': location['y'] - height / 2,
          },
          'types': [
            'obstacle',
          ],
        });
    }

    core_ui_update({
      'ids': {
        'frame-limit': core_storage_data['frames-per-round'],
      },
    });
}

function safe_location(args){
    args = core_args({
      'args': args,
      'defaults': {
        'offset': 0,
      },
    });

    let location_x = 0;
    let location_y = 0;

    const safe_x = Math.min(
      gamearea_width_half,
      50
    );
    const safe_y = Math.min(
      gamearea_height_half,
      50
    );

    while(location_x < safe_x + args['offset']
      && location_x > -safe_x - args['offset']
      && location_y < safe_y + args['offset']
      && location_y > -safe_y - args['offset']){
        location_x = core_random_integer({
          'max': core_storage_data['gamearea-width'],
        }) - gamearea_width_half;
        location_y = core_random_integer({
          'max': core_storage_data['gamearea-height'],
        }) - gamearea_height_half;
    }

    return {
      'x': location_x,
      'y': location_y,
    };
}
