'use strict';

function draw_logic(){
    canvas_buffer.save();
    canvas_buffer.translate(
      canvas_properties['width-half'],
      canvas_properties['height-half']
    );

    canvas_setproperties({
      'properties': {
        'fillStyle': '#333',
      },
    });
    canvas_buffer.fillRect(
      -gamearea_width_half,
      -gamearea_height_half,
      core_storage_data['gamearea-width'],
      core_storage_data['gamearea-height']
    );

    // Draw obstacles.
    canvas_setproperties({
      'properties': {
        'fillStyle': '#777',
      },
    });
    entity_group_modify({
      'groups': [
        'obstacle',
      ],
      'todo': function(entity){
          canvas_buffer.fillRect(
            entity_entities[entity]['x'],
            entity_entities[entity]['y'],
            entity_entities[entity]['width'],
            entity_entities[entity]['height']
          );
      },
    });

    // Draw player.
    canvas_setproperties({
      'properties': {
        'fillStyle': core_storage_data['color-positive'],
      },
    });
    canvas_buffer.fillRect(
      entity_entities['player']['x'] - 17,
      entity_entities['player']['y'] - 17,
      34,
      34
    );

    // Draw particles.
    canvas_setproperties({
      'properties': {
        'fillStyle': '#f66',
      },
    });
    entity_group_modify({
      'groups': [
        'particle',
      ],
      'todo': function(entity){
          canvas_buffer.fillRect(
            Math.round(entity_entities[entity]['x']) - core_storage_data['particle-width-half'],
            Math.round(entity_entities[entity]['y']) - core_storage_data['particle-height-half'],
            core_storage_data['particle-width-half'] * 2,
            core_storage_data['particle-height-half'] * 2
          );
      },
    });

    canvas_buffer.restore();
}

function logic(){
    if(core_mode === 0){
        return;
    }

    frame_counter -= 1;
    if(frame_counter < 0){
        audio_start({
          'id': 'boop',
        });

        entity_remove_all({
          'group': 'particle',
        });
        frame_counter = core_storage_data['frames-per-round'];
        entity_entities['player']['x'] = 0;
        entity_entities['player']['y'] = 0;
        score += core_storage_data['particles-per-round'];
    }

    let player_dx = 0;
    let player_dy = 0;

    // Add player key movements to dx and dy, if still within level boundaries.
    if(core_keys[core_storage_data['move-←']]['state']
      && entity_entities['player']['x'] - 2 > -gamearea_width_half){
        player_dx -= 2;
    }

    if(core_keys[core_storage_data['move-→']]['state']
      && entity_entities['player']['x'] + 2 < gamearea_width_half){
        player_dx += 2;
    }

    if(core_keys[core_storage_data['move-↓']]['state']
      && entity_entities['player']['y'] + 2 < gamearea_height_half){
        if(player_dx !== 0){
            const movement = math_move_2d_diagonal({
              'dx': player_dx,
              'dy': 1,
              'speed': 2,
            });
            player_dx = movement['x'];
            player_dy = movement['y'];

        }else{
            player_dy = 2;
        }
    }

    if(core_keys[core_storage_data['move-↑']]['state']
      && entity_entities['player']['y'] - 2 > -gamearea_height_half){
        if(player_dx !== 0){
            const movement = math_move_2d_diagonal({
              'dx': player_dx,
              'dy': -1,
              'speed': 2,
            });
            player_dx = movement['x'];
            player_dy = movement['y'];

        }else{
            player_dy = -2;
        }
    }

    if(player_dx !== 0
      || player_dy !== 0){
        // Check for player collision with foreground obstacles.
        entity_group_modify({
          'groups': [
            'obstacle',
          ],
          'todo': function(entity){
              if(entity_entities['player']['x'] + player_dx - 17 <= entity_entities[entity]['x'] + entity_entities[entity]['width']
                && entity_entities['player']['x'] + player_dx + 17 >= entity_entities[entity]['x']
                && entity_entities['player']['y'] + player_dy - 17 <= entity_entities[entity]['y'] + entity_entities[entity]['height']
                && entity_entities['player']['y'] + player_dy + 17 >= entity_entities[entity]['y']){
                  if(entity_entities['player']['y'] > entity_entities[entity]['y'] - 17
                    && entity_entities['player']['y'] < entity_entities[entity]['y'] + entity_entities[entity]['height'] + 17){
                      if(core_keys[core_storage_data['move-←']]['state']
                        && entity_entities['player']['y'] + player_dy + 17 > entity_entities[entity]['y']
                        && entity_entities['player']['y'] + player_dy - 17 < entity_entities[entity]['y'] + entity_entities[entity]['height']
                        && entity_entities['player']['x'] + player_dx - 17 < entity_entities[entity]['x'] + entity_entities[entity]['width']){
                          player_dx = 0;

                      }else if(core_keys[core_storage_data['move-→']]['state']
                        && entity_entities['player']['y'] + player_dy + 17 > entity_entities[entity]['y']
                        && entity_entities['player']['y'] + player_dy - 17 < entity_entities[entity]['y'] + entity_entities[entity]['height']
                        && entity_entities['player']['x'] + player_dx + 17 > entity_entities[entity]['x']){
                          player_dx = 0;
                      }
                  }

                  if(core_keys[core_storage_data['move-↓']]['state']
                    && entity_entities['player']['x'] + player_dx + 17 > entity_entities[entity]['x']
                    && entity_entities['player']['x'] + player_dx - 17 < entity_entities[entity]['x'] + entity_entities[entity]['width']
                    && entity_entities['player']['y'] + player_dy + 17 > entity_entities[entity]['y']){
                      player_dy = 0;

                  }else if(core_keys[core_storage_data['move-↑']]['state']
                    && entity_entities['player']['x'] + player_dx + 17 > entity_entities[entity]['x']
                    && entity_entities['player']['x'] + player_dx - 17 < entity_entities[entity]['x'] + entity_entities[entity]['width']
                    && entity_entities['player']['y'] + player_dy - 17 < entity_entities[entity]['y'] + entity_entities[entity]['height']){
                      player_dy = 0;
                  }
              }
          },
        });
    }

    entity_entities['player']['x'] += player_dx;
    entity_entities['player']['y'] += player_dy;

    // Create particles.
    if(entity_info['particle']['count'] <= score){
        let loop_counter = core_storage_data['initial-particles'] + score + core_storage_data['particles-per-round'] - 2;
        do{
            const location = safe_location();
            entity_create({
              'properties': {
                'dx': Math.random() * core_storage_data['particle-speed'] - core_storage_data['particle-speed'] / 2,
                'dy': Math.random() * core_storage_data['particle-speed'] - core_storage_data['particle-speed'] / 2,
                'x': location['x'],
                'y': location['y'],
              },
              'types': [
                'particle',
              ],
            });
        }while(loop_counter--);
    }

    entity_group_modify({
      'groups': [
        'particle',
      ],
      'todo': function(entity){
          if(entity_entities[entity]['x'] > entity_entities['player']['x'] - 20 - core_storage_data['particle-width-half']
            && entity_entities[entity]['x'] < entity_entities['player']['x'] + 20 + core_storage_data['particle-width-half']
            && entity_entities[entity]['y'] > entity_entities['player']['y'] - 20 - core_storage_data['particle-height-half']
            && entity_entities[entity]['y'] < entity_entities['player']['y'] + 20 + core_storage_data['particle-height-half']){
              core_mode = 0;
              core_ui_update({
                'ids': {
                  'state': 'YOU LOSE',
                },
              });
          }

          let bounced = false;

          if((entity_entities[entity]['dx'] < 0 && entity_entities[entity]['x'] - core_storage_data['particle-width-half'] <= -gamearea_width_half)
            || (entity_entities[entity]['dx'] > 0 && entity_entities[entity]['x'] + core_storage_data['particle-width-half'] >= gamearea_width_half)){
              entity_entities[entity]['dx'] *= -1;
              bounced = true;
          }
          if((entity_entities[entity]['dy'] < 0 && entity_entities[entity]['y'] - core_storage_data['particle-height-half'] <= -gamearea_height_half)
            || (entity_entities[entity]['dy'] > 0 && entity_entities[entity]['y'] + core_storage_data['particle-height-half'] >= gamearea_height_half)){
              entity_entities[entity]['dy'] *= -1;
              bounced = true;
          }

          // Loop through obstacles to find collisions.
          entity_group_modify({
            'groups': [
              'obstacle',
            ],
            'todo': function(obstacle){
                // X collisions.
                if(entity_entities[entity]['x'] >= entity_entities[obstacle]['x']
                  && entity_entities[entity]['x'] <= entity_entities[obstacle]['x'] + entity_entities[obstacle]['width']){
                    if(entity_entities[entity]['dy'] > 0){
                        if(entity_entities[entity]['y'] > entity_entities[obstacle]['y'] - core_storage_data['particle-height-half']
                          && entity_entities[entity]['y'] < entity_entities[obstacle]['y']){
                            entity_entities[entity]['dy'] *= -1;
                        }

                    }else if(entity_entities[entity]['y'] > entity_entities[obstacle]['y'] + entity_entities[obstacle]['height']
                      && entity_entities[entity]['y'] < entity_entities[obstacle]['y'] + entity_entities[obstacle]['height'] + core_storage_data['particle-height-half']){
                        entity_entities[entity]['dy'] *= -1;
                    }

                // Y collisions.
                }else if(entity_entities[entity]['y'] >= entity_entities[obstacle]['y']
                  && entity_entities[entity]['y'] <= entity_entities[obstacle]['y'] + entity_entities[obstacle]['height']){
                    if(entity_entities[entity]['dx'] > 0){
                        if(entity_entities[entity]['x'] > entity_entities[obstacle]['x'] - core_storage_data['particle-width-half']
                          && entity_entities[entity]['x'] < entity_entities[obstacle]['x']){
                            entity_entities[entity]['dx'] *= -1;
                        }

                    }else if(entity_entities[entity]['x'] > entity_entities[obstacle]['x'] + entity_entities[obstacle]['width']
                      && entity_entities[entity]['x'] < entity_entities[obstacle]['x'] + entity_entities[obstacle]['width'] + core_storage_data['particle-width-half']){
                        entity_entities[entity]['dx'] *= -1;
                    }
                }
            },
          });

          if(bounced){
              entity_entities[entity]['dx'] *= core_storage_data['particle-bounce'];
              entity_entities[entity]['dy'] *= core_storage_data['particle-bounce'];
          }

          // Move entity.
          entity_entities[entity]['x'] += entity_entities[entity]['dx'];
          entity_entities[entity]['y'] += entity_entities[entity]['dy'];
      },
    });

    core_ui_update({
      'ids': {
        'frames': frame_counter,
        'score': score,
      },
    });
}

function repo_escape(){
    if(!entity_entities['player']
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
        'frame_counter': 0,
        'gamearea_height_half': 0,
        'gamearea_width_half': 0,
        'score': 0,
      },
      'info': '<input id=start type=button value="Start New Game">',
      'menu': true,
      'reset': canvas_setmode,
      'storage': {
        'frames-per-round': 250,
        'gamearea-height': 500,
        'gamearea-width': 500,
        'initial-particles': 1,
        'obstacles': 0,
        'particle-bounce': 1,
        'particle-height-half': 5,
        'particle-speed': 4,
        'particle-width-half': 5,
        'particles-per-round': 1,
      },
      'storage-menu': '<table><tr><td><input id=frames-per-round><td>Frames/Round'
        + '<tr><td><input id=gamearea-height><td>Game Height'
        + '<tr><td><input id=gamearea-width><td>Game Width'
        + '<tr><td><input id=initial-particles><td>Initial Particles'
        + '<tr><td><input id=obstacles><td>Obstacles'
        + '<tr><td><input id=particle-bounce><td>Particle Bounce'
        + '<tr><td><input id=particle-height-half><td>*2 Particle Height'
        + '<tr><td><input id=particles-per-round><td>Particles/Round'
        + '<tr><td><input id=particle-speed><td>&gt; Particle Speed'
        + '<tr><td><input id=particle-width-half><td>*2 Particle Width</table>',
      'title': 'Avoidance-2D.htm',
      'ui': 'Frames: <span id=frames></span>/<span id=frame-limit></span><br>'
        + 'Score: <span id=score></span><br>'
        + '<span id=state></span>',
    });
    entity_set({
      'type': 'obstacle',
    });
    entity_set({
      'type': 'particle',
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
