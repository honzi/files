'use strict';

function draw_logic(){
    // Save current buffer.
    canvas_buffer.save();

    // Camera translation.
    canvas_buffer.translate(
      canvas_properties['width-half'] - platform_players['player']['x'],
      canvas_properties['height-half'] - platform_players['player']['y']
    );

    // Draw scenery.
    for(const object in scenery){
        canvas_draw_path({
          'properties': {
            'fillStyle': scenery[object]['color'],
          },
          'translate': true,
          'vertices': scenery[object]['vertices'],
          'x': scenery[object]['x'],
          'y': scenery[object]['y'],
        });
    }

    for(const object in world_dynamic){
        // If object has a texture, draw texture. else draw rect.
        if(world_dynamic[object]['type'] !== 'locked-wall'){
            // Save current buffer.
            canvas_buffer.save();

            // Translate to object location.
            canvas_buffer.translate(
              world_dynamic[object]['x'],
              world_dynamic[object]['y']
            );

            canvas_setproperties({
              'properties': {
                'fillStyle': canvas_buffer.createPattern(
                  core_images[world_dynamic[object]['type'] + '.png'],
                  'repeat'
                ),
              },
            });
            canvas_buffer.fillRect(
              0,
              0,
              world_dynamic[object]['width'],
              world_dynamic[object]['height']
            );

            // Restore buffer.
            canvas_buffer.restore();

        }else{
            canvas_setproperties({
              'properties': {
                'fillStyle': world_dynamic[object]['color'] || '#444',
              },
            });
            canvas_buffer.fillRect(
              world_dynamic[object]['x'],
              world_dynamic[object]['y'],
              world_dynamic[object]['width'],
              world_dynamic[object]['height']
            );
        }
    }

    // Restore buffer.
    canvas_buffer.restore();

    // Draw player.
    canvas_setproperties({
      'properties': {
        'fillStyle': core_storage_data['color-positive'],
      },
    });
    canvas_buffer.fillRect(
      canvas_properties['width-half'] - 12,
      canvas_properties['height-half'] - 20,
      24,
      40
    );

    // Draw level end text.
    if(platform_players['player']['done']){
        canvas_setproperties({
          'properties': {
            'fillStyle': platform_players['player']['lives'] > 0
              ? '#2d8930'
              : '#e02d30',
          },
        });
        canvas_buffer.fillText(
          platform_players['player']['lives'] > 0
            ? 'Complete! ☺'
            : 'Failed! ☹',
          5,
          125
        );
    }
}

function logic(){
    if(!platform_players['player']
      || platform_players['player']['lives'] < 1){
        return;
    }

    let player_dx = 0;

    if(core_keys[core_storage_data['move-←']]['state']){
        player_dx -= core_storage_data['player-speed'];
    }

    if(core_keys[core_storage_data['move-→']]['state']){
        player_dx += core_storage_data['player-speed'];
    }

    platform_players['player']['can-jump'] = false;

    for(const object in world_dynamic){
        // X movement.
        if(world_dynamic[object]['x-speed'] !== void 0){
            if(world_dynamic[object]['x'] < world_dynamic[object]['x-target-min']){
                world_dynamic[object]['x-speed'] = Math.abs(world_dynamic[object]['x-speed']);

            }else if(world_dynamic[object]['x'] > world_dynamic[object]['x-target-max']
              && world_dynamic[object]['x-speed'] > 0){
                world_dynamic[object]['x-speed'] = -world_dynamic[object]['x-speed'];
            }

            world_dynamic[object]['x'] += world_dynamic[object]['x-speed'];
        }

        // Y movement.
        if(world_dynamic[object]['y-speed'] !== void 0){
            if(world_dynamic[object]['y'] < world_dynamic[object]['y-target-min']){
                world_dynamic[object]['y-speed'] = Math.abs(world_dynamic[object]['y-speed']);

            }else if(world_dynamic[object]['y'] > world_dynamic[object]['y-target-max']
              && world_dynamic[object]['y-speed'] > 0){
                world_dynamic[object]['y-speed'] = -world_dynamic[object]['y-speed'];
            }

            world_dynamic[object]['y'] += world_dynamic[object]['y-speed'];
        }

        // If player and object aren't moving, no collision checks.
        if(player_dx === 0
          && platform_players['player']['y-velocity'] === 0
          && world_dynamic[object]['x-speed'] === void 0
          && world_dynamic[object]['y-speed'] === void 0){
            continue;
        }

        const temp_object_right_x = world_dynamic[object]['x'] + world_dynamic[object]['width'];
        const temp_object_right_y = world_dynamic[object]['y'] + world_dynamic[object]['height'];

        // Check if player position + movement is within bounds of object.
        if(platform_players['player']['x'] + player_dx - 12 > temp_object_right_x
          || platform_players['player']['x'] + player_dx + 12 < world_dynamic[object]['x']
          || platform_players['player']['y'] + platform_players['player']['y-velocity'] - 20 > temp_object_right_y
          || platform_players['player']['y'] + platform_players['player']['y-velocity'] + 20 < world_dynamic[object]['y']){
            continue;
        }

        // Collide with platform or key-locked wall.
        if(world_dynamic[object]['type'] === 'stone'
          || world_dynamic[object]['type'] === 'locked-wall'){
            // Handle collisions with platforms while jumping or falling.
            if(platform_players['player']['y-velocity'] !== 0
              && platform_players['player']['x'] !== world_dynamic[object]['x'] - 12
              && platform_players['player']['x'] !== temp_object_right_x + 12){
                if(platform_players['player']['y-velocity'] > 0){
                    if(platform_players['player']['y'] + platform_players['player']['y-velocity'] <= world_dynamic[object]['y'] - 10
                      && platform_players['player']['y'] + platform_players['player']['y-velocity'] > world_dynamic[object]['y'] - 20){
                        platform_players['player']['can-jump'] = true;
                        platform_players['player']['y-velocity'] = world_dynamic[object]['y'] - platform_players['player']['y'] - 20;

                        if(world_dynamic[object]['x-speed'] !== void 0){
                            player_dx += world_dynamic[object]['x-speed'];
                        }
                    }

                }else if(platform_players['player']['y'] + platform_players['player']['y-velocity'] < temp_object_right_y + 20
                  && platform_players['player']['y'] + platform_players['player']['y-velocity'] >= temp_object_right_y + 10){
                    platform_players['player']['y-velocity'] = temp_object_right_y - platform_players['player']['y'] + 20;
                }
            }

            // Handle collisions with platforms while moving left/right.
            if(core_keys[core_storage_data['move-←']]['state']
              && platform_players['player']['y'] + 20 > world_dynamic[object]['y']
              && platform_players['player']['y'] - 20 < temp_object_right_y
              && platform_players['player']['x'] !== world_dynamic[object]['x'] - 12
              && platform_players['player']['x'] > world_dynamic[object]['x']){
                player_dx = temp_object_right_x - platform_players['player']['x'] + 12;
            }

            if(core_keys[core_storage_data['move-→'] ]['state']
              && platform_players['player']['y'] + 20 > world_dynamic[object]['y']
              && platform_players['player']['y'] - 20 < temp_object_right_y
              && platform_players['player']['x'] !== temp_object_right_x + 12
              && platform_players['player']['x'] < world_dynamic[object]['x']){
                player_dx = world_dynamic[object]['x'] - platform_players['player']['x'] - 12;
            }

        // Collided with booster.
        }else if(world_dynamic[object]['type'] === 'boost'){
            platform_players['player']['y-velocity'] = world_dynamic[object]['boost'];

        // Collided with coin.
        }else if(world_dynamic[object]['type'] === 'goal'){
            world_dynamic.splice(
              object,
              1
            );
            platform_coin_collide();

        // Collided with lava.
        }else if(world_dynamic[object]['type'] === 'lavaleaf'){
            platform_players['player']['lives'] -= 1;
            if(platform_players['player']['lives'] < 1){
                platform_players['player']['done'] = true;
            }

        // Collided with a key.
        }else if(world_dynamic[object]['type'] === 'key'){
            world_dynamic.splice(
              object,
              1
            );

            for(object in world_dynamic){
                if(world_dynamic[object]['type'] === 'locked-wall'){
                    world_dynamic.splice(
                      object,
                      1
                    );
                }
            }

            audio_start({
              'id': 'boop',
            });
        }
    }

    platform_players['player']['x'] += Math.round(player_dx);
    platform_players['player']['y'] += Math.round(platform_players['player']['y-velocity']);

    if(platform_players['player']['can-jump']){
        if(core_keys[core_storage_data['jump']]['state']){
            platform_jump({
              'velocity': core_storage_data['player-jump'],
            });

        }else{
            platform_players['player']['y-velocity'] = 0;
        }

    }else{
        platform_players['player']['y-velocity'] = Math.min(
          platform_players['player']['y-velocity'] + core_storage_data['gravity'],
          core_storage_data['terminal-velocity']
        );
    }

    core_ui_update({
      'ids': {
        'coins': platform_players['player']['coins'] + '/' + platform_score_goal,
      },
    });
}

function repo_escape(){
    if(!platform_players['player']
      && !core_menu_open){
        core_repo_reset();
    }
}

function repo_init(){
    core_repo_init({
      'events': {
        'start': {
          'onclick': core_repo_reset,
        },
      },
      'globals': {
        'scenery': [],
        'world_dynamic': [],
      },
      'info': '<select id=level><option value=0>0 - Map</option><option value=1>1 - Randomized</option><option value=2>2 - Lava Corridor</option></select><input id=start type=button value="Start Level">',
      'menu': true,
      'reset': canvas_setmode,
      'storage': {
        'corridor-speed': 3,
        'gravity': .5,
        'level': 0,
        'player-jump': -10,
        'player-speed': 4,
        'random-tiles': 9,
        'terminal-velocity': 9,
      },
      'storage-menu': '<table><tr><td><input id=gravity><td>Gravity'
        + '<tr><td><input id=corridor-speed><td>Lava Corridor Speed'
        + '<tr><td><input id=player-jump><td>Player Jump Height'
        + '<tr><td><input id=player-speed><td>Player Speed'
        + '<tr><td><input id=random-tiles><td>*2>= Randomized Level Tiles'
        + '<tr><td><input id=terminal-velocity><td>Terminal Velocity</table>',
      'title': 'Platform-2D.htm',
      'ui': 'Coins: <span id=coins></span>',
    });
    audio_create({
      'audios': {
        'boop': {
          'duration': .1,
        },
      },
    });

    canvas_init();
}
