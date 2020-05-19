'use strict';

function draw_logic(){
    // Save and translate buffer canvas.
    canvas_buffer.save();
    canvas_buffer.translate(
      canvas_properties['width-half'],
      canvas_properties['height-half']
    );

    // Draw environment.
    entity_group_modify({
      'groups': [
        'background',
        'foreground',
      ],
      'todo': function(entity){
          canvas_setproperties({
            'properties': {
              'fillStyle': entity_entities[entity]['color'],
            },
          });
          canvas_buffer.fillRect(
            -entity_entities['player']['x'] + entity_entities[entity]['x'],
            -entity_entities['player']['y'] + entity_entities[entity]['y'],
            entity_entities[entity]['width'],
            entity_entities[entity]['height']
          );
      },
    });

    // Draw player and targeting direction.
    canvas_setproperties({
      'properties': {
        'fillStyle': core_storage_data['color-positive'],
      },
    });
    canvas_buffer.fillRect(
      -width_half,
      -height_half,
      core_storage_data['width'],
      core_storage_data['height']
    );
    const endpoint = math_fixed_length_line({
      'length': 25,
      'x0': 0,
      'x1': core_mouse['x'] - canvas_properties['width-half'],
      'y0': 0,
      'y1': core_mouse['y'] - canvas_properties['height-half'],
    });
    canvas_draw_path({
      'properties': {
        'strokeStyle': '#fff',
      },
      'style': 'stroke',
      'vertices': [
        {
          'type': 'moveTo',
        },
        {
          'x': endpoint['x'],
          'y': endpoint['y'],
        },
      ],
    });

    // Translate to camera position.
    canvas_buffer.translate(
      -entity_entities['player']['x'],
      -entity_entities['player']['y']
    );

    // Draw enemies.
    canvas_setproperties({
      'properties': {
        'fillStyle': core_storage_data['color-negative'],
      },
    });
    entity_group_modify({
      'groups': [
        'enemy',
      ],
      'todo': function(entity){
          canvas_buffer.fillRect(
            entity_entities[entity]['x'] - width_half,
            entity_entities[entity]['y'] - height_half,
            core_storage_data['width'],
            core_storage_data['height']
          );
      },
    });

    // Draw bullets.
    entity_group_modify({
      'groups': [
        'bullet',
      ],
      'todo': function(entity){
          canvas_setproperties({
            'properties': {
              'fillStyle': entity_entities[entity]['player'] === 0
                ? core_storage_data['color-positive']
                : core_storage_data['color-negative'],
            },
          });
          canvas_buffer.fillRect(
            entity_entities[entity]['x'] - 5,
            entity_entities[entity]['y'] - 5,
            10,
            10
          );
      },
    });

    // Restore buffer.
    canvas_buffer.restore();

    if(core_mode === 0){
        canvas_setproperties({
          'properties': {
            'fillStyle': entity_info['enemy']['count'] > 0
              ? '#f00'
              : '#0f0',
          },
        });
        canvas_buffer.fillText(
          entity_info['enemy']['count'] > 0
            ? 'YOU ARE DEAD'
            : 'You Win!',
          0,
          125
        );
    }
}

function logic(){
    if(entity_info['enemy']['count'] <= 0){
        core_mode = 0;
    }

    if(core_mode === 0){
        return;
    }

    let player_dx = 0;
    let player_dy = 0;

    // Add player key movements to dx and dy, if still within level boundaries.
    if(core_keys[core_storage_data['move-←']]['state']
      && entity_entities['player']['x'] - core_storage_data['speed'] > -level_settings[1]){
        player_dx -= core_storage_data['speed'];
    }

    if(core_keys[core_storage_data['move-→']]['state']
      && entity_entities['player']['x'] + core_storage_data['speed'] < level_settings[1]){
        player_dx += core_storage_data['speed'];
    }

    if(core_keys[core_storage_data['move-↓']]['state']
      && entity_entities['player']['y'] + core_storage_data['speed'] < level_settings[2]){
        if(player_dx !== 0){
            const movement = math_move_2d_diagonal({
              'dx': player_dx,
              'dy': 1,
              'speed': core_storage_data['speed'],
            });
            player_dx = movement['x'];
            player_dy = movement['y'];

        }else{
            player_dy = core_storage_data['speed'];
        }
    }

    if(core_keys[core_storage_data['move-↑']]['state']
      && entity_entities['player']['y'] - core_storage_data['speed'] > -level_settings[2]){
        if(player_dx !== 0){
            const movement = math_move_2d_diagonal({
              'dx': player_dx,
              'dy': -1,
              'speed': core_storage_data['speed'],
            });
            player_dx = movement['x'];
            player_dy = movement['y'];

        }else{
           player_dy = -core_storage_data['speed'];
        }
    }

    // Check if player weapon can be fired, else update reload.
    if(entity_entities['player']['reload'] >= core_storage_data['weapon-reload']){
        // If weapon being fired...
        if(core_mouse['down-0']){
            entity_entities['player']['reload'] = 0;

            // ...calculate bullet movement...
            const speeds = math_move_2d({
              'speed': core_storage_data['weapon-speed'],
              'x0': entity_entities['player']['x'],
              'x1': entity_entities['player']['x'] + core_mouse['x'] - canvas_properties['width-half'],
              'y0': entity_entities['player']['y'],
              'y1': entity_entities['player']['y'] + core_mouse['y'] - canvas_properties['height-half'],
            });

            // ...and add bullet with movement pattern, tied to player.
            entity_create({
              'properties': {
                'dx': speeds['x'],
                'dy': speeds['y'],
                'player': 0,
                'x': entity_entities['player']['x'],
                'y': entity_entities['player']['y'],
              },
              'types': [
                'bullet',
              ],
            });

            // If level is not Zombie Surround, update AI destinations.
            if(core_storage_data['level'] !== zombie_surround){
                set_destination(0);
            }
        }

    }else{
        entity_entities['player']['reload'] += 1;
    }

    // If level is not Zombie Surround.
    if(core_storage_data['level'] !== zombie_surround){
        // Update reload and fire weapon if possible.
        enemy_reload += 1;
        if(enemy_reload > core_storage_data['weapon-reload']){
            enemy_reload = 0;

            // Calculate bullet destination based on player position...
            const speeds = math_move_2d({
              'speed': core_storage_data['weapon-speed'],
              'x0': entity_entities[0]['x'],
              'x1': entity_entities['player']['x'],
              'y0': entity_entities[0]['y'],
              'y1': entity_entities['player']['y'],
            });

            // ...and add bullet with movement pattern, tied to enemy.
            entity_create({
              'properties': {
                'dx': speeds['x'],
                'dy': speeds['y'],
                'player': 1,
                'x': entity_entities[0]['x'],
                'y': entity_entities[0]['y'],
              },
              'types': [
                'bullet',
              ],
            });
        }
    }

    // Check for player collision with foreground obstacles.
    entity_group_modify({
      'groups': [
        'foreground',
      ],
      'todo': function(entity){
          if(entity_entities['player']['x'] + player_dx - width_half <= entity_entities[entity]['x'] + entity_entities[entity]['width']
            && entity_entities['player']['x'] + player_dx + width_half >= entity_entities[entity]['x']
            && entity_entities['player']['y'] + player_dy - height_half <= entity_entities[entity]['y'] + entity_entities[entity]['height']
            && entity_entities['player']['y'] + player_dy + height_half >= entity_entities[entity]['y']){
              if(entity_entities['player']['y'] > entity_entities[entity]['y'] - height_half
                && entity_entities['player']['y'] < entity_entities[entity]['y'] + entity_entities[entity]['height'] + height_half){
                  if(core_keys[core_storage_data['move-←']]['state']
                    && entity_entities['player']['y'] + player_dy + height_half > entity_entities[entity]['y']
                    && entity_entities['player']['y'] + player_dy - height_half < entity_entities[entity]['y'] + entity_entities[entity]['height']
                    && entity_entities['player']['x'] + player_dx - width_half < entity_entities[entity]['x'] + entity_entities[entity]['width']){
                      player_dx = 0;

                  }else if(core_keys[core_storage_data['move-→']]['state']
                    && entity_entities['player']['y'] + player_dy + height_half > entity_entities[entity]['y']
                    && entity_entities['player']['y'] + player_dy - height_half < entity_entities[entity]['y'] + entity_entities[entity]['height']
                    && entity_entities['player']['x'] + player_dx + width_half > entity_entities[entity]['x']){
                      player_dx = 0;
                  }
              }

              if(core_keys[core_storage_data['move-↓']]['state']
                && entity_entities['player']['x'] + player_dx + width_half > entity_entities[entity]['x']
                && entity_entities['player']['x'] + player_dx - width_half < entity_entities[entity]['x'] + entity_entities[entity]['width']
                && entity_entities['player']['y'] + player_dy + height_half > entity_entities[entity]['y']){
                  player_dy = 0;

              }else if(core_keys[core_storage_data['move-↑']]['state']
                && entity_entities['player']['x'] + player_dx + width_half > entity_entities[entity]['x']
                && entity_entities['player']['x'] + player_dx - width_half < entity_entities[entity]['x'] + entity_entities[entity]['width']
                && entity_entities['player']['y'] + player_dy - height_half < entity_entities[entity]['y'] + entity_entities[entity]['height']){
                  player_dy = 0;
              }
          }
      },
    });

    // Update actual player position.
    entity_entities['player']['x'] += player_dx;
    entity_entities['player']['y'] += player_dy;

    // Handle enemies.
    entity_group_modify({
      'groups': [
        'enemy',
      ],
      'todo': function(entity){
          // If level === Zombie Surround,
          //   update zombie target.
          if(core_storage_data['level'] === zombie_surround){
              entity_entities[entity]['target-x'] = entity_entities['player']['x'];
              entity_entities[entity]['target-y'] = entity_entities['player']['y'];
          }

          // Calculate enemy movement.
          const speeds = math_move_2d({
            'speed': core_storage_data['speed'],
            'x0': entity_entities[entity]['x'],
            'x1': entity_entities[entity]['target-x'],
            'y0': entity_entities[entity]['y'],
            'y1': entity_entities[entity]['target-y'],
          });

          // Move enemy towards target.
          entity_entities[entity]['x'] += speeds['x'];
          entity_entities[entity]['y'] += speeds['y']

          // If level is not Zombie Surround,
          //   increase enemy speed and check for new target.
          if(core_storage_data['level'] !== zombie_surround){
              // Check if enemy AI should pick new destination.
              const double_speed = core_storage_data['speed'] * 2;
              if(entity_entities[entity]['target-x'] > entity_entities[entity]['x'] - double_speed
                && entity_entities[entity]['target-x'] < entity_entities[entity]['x'] + double_speed
                && entity_entities[entity]['target-y'] > entity_entities[entity]['y'] - double_speed
                && entity_entities[entity]['target-y'] < entity_entities[entity]['y'] + double_speed){
                  set_destination(entity);
              }

          // Check if player collides with zombie.
          }else if(entity_entities[entity]['x'] - entity_entities['player']['x'] > -core_storage_data['width']
            && entity_entities[entity]['x'] - entity_entities['player']['x'] < core_storage_data['width']
            && entity_entities[entity]['y'] - entity_entities['player']['y'] > -core_storage_data['height']
            && entity_entities[entity]['y'] - entity_entities['player']['y'] < core_storage_data['height']){
              core_mode = 0;
              return;
          }
      },
    });

    // Handle bullets.
    entity_group_modify({
      'groups': [
        'bullet',
      ],
      'todo': function(entity){
          entity_entities[entity]['x'] += entity_entities[entity]['dx'] * 5;
          entity_entities[entity]['y'] += entity_entities[entity]['dy'] * 5;

          if(entity_entities[entity]['x'] < -level_settings[1]
            || entity_entities[entity]['x'] > level_settings[1]
            || entity_entities[entity]['y'] < -level_settings[2]
            || entity_entities[entity]['y'] > level_settings[2]){
              entity_remove({
                'entities': [
                  entity,
                ],
              });
              return;
          }

          let hit_foreground = false;
          let remove = false;

          entity_group_modify({
            'groups': [
              'foreground',
            ],
            'todo': function(foreground){
                if(!entity_entities[entity]){
                    return;
                }

                if(entity_entities[foreground]['collision']
                  && entity_entities[entity]['x'] > entity_entities[foreground]['x']
                  && entity_entities[entity]['x'] < entity_entities[foreground]['x'] + entity_entities[foreground]['width']
                  && entity_entities[entity]['y'] > entity_entities[foreground]['y']
                  && entity_entities[entity]['y'] < entity_entities[foreground]['y'] + entity_entities[foreground]['height']){
                    entity_remove({
                      'entities': [
                        entity,
                      ],
                    });
                    hit_foreground = true;
                }
            },
          });

          if(!hit_foreground){
              entity_group_modify({
                'groups': [
                  'enemy',
                ],
                'todo': function(enemy){
                    if(remove){
                        return;
                    }

                    if(entity_entities[entity]['player'] === 0){
                        if(entity_entities[entity]['x'] <= entity_entities[enemy]['x'] - width_half
                          || entity_entities[entity]['x'] >= entity_entities[enemy]['x'] + width_half
                          || entity_entities[entity]['y'] <= entity_entities[enemy]['y'] - height_half
                          || entity_entities[entity]['y'] >= entity_entities[enemy]['y'] + height_half){
                            return;
                        }

                        remove = true;

                        // If mode is not Zombie Surround or zombies should respawn,
                        //   pick new enemy location...
                        if(core_storage_data['level'] !== zombie_surround
                          || core_storage_data['zombie-respawn']){
                            let enemy_x = 0;
                            let enemy_y = 0;

                            do{
                                enemy_x = core_random_integer({
                                  'max': level_settings[1] * 2,
                                }) - level_settings[1];
                                enemy_y = core_random_integer({
                                  'max': level_settings[1] * 2,
                                }) - level_settings[1];
                            }while(enemy_x > entity_entities['player']['x'] - 50
                              && enemy_x < entity_entities['player']['x'] + 50
                              && enemy_y > entity_entities['player']['y'] - 50
                              && enemy_y < entity_entities['player']['y'] + 50);

                            entity_entities[enemy]['x'] = enemy_x;
                            entity_entities[enemy]['y'] = enemy_y;

                        }else{
                            entity_remove({
                              'entities': [
                                enemy,
                              ],
                            });
                        }

                        hits += 1;
                        audio_start({
                          'id': 'boop',
                        });

                    }else if(entity_entities[entity]['x'] > entity_entities['player']['x'] - width_half
                      && entity_entities[entity]['x'] < entity_entities['player']['x'] + width_half
                      && entity_entities[entity]['y'] > entity_entities['player']['y'] - height_half
                      && entity_entities[entity]['y'] < entity_entities['player']['y'] + height_half){
                        core_mode = 0;
                    }
                },
              });
          }

          if(remove){
              entity_remove({
                'entities': [
                  entity,
                ],
              });
          }
      },
    });

    core_ui_update({
      'ids': {
        'hits': hits,
        'reload': entity_entities['player']['reload'] + '/' + core_storage_data['weapon-reload'],
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
        'duel': {
          'onclick': core_repo_reset,
        },
      },
      'globals': {
        'enemy_reload': 0,
        'height_half': 0,
        'hits': 0,
        'level_settings': [],
        'width_half': 0,
        'zombie_surround': 2,
      },
      'info': '<select id=level>'
          + '<option value=0>0 - 1v1 Empty Square Arena</option>'
          + '<option value=1>1 - 1v1 Final Destination</option>'
          + '<option value=2>2 - Zombie Surround</option>'
        + '</select><input id=duel type=button value="Start">',
      'menu': true,
      'reset': canvas_setmode,
      'storage': {
        'height': 34,
        'level': 0,
        'speed': 2,
        'weapon-reload': 50,
        'weapon-speed': 1,
        'width': 34,
        'zombie-amount': 25,
        'zombie-respawn': false,
      },
      'storage-menu': '<table><tr><td><input id=height><td>Height'
        + '<tr><td><input id=speed><td>Speed'
        + '<tr><td><input id=weapon-reload><td>Weapon Reload'
        + '<tr><td><input id=weapon-speed><td>Weapon Speed'
        + '<tr><td><input id=width><td>Width'
        + '<tr><td><input id=zombie-amount><td>Zombies'
        + '<tr><td><input id=zombie-respawn type=checkbox><td>Zombie Respawn</table>',
      'title': 'Shooter-2D.htm',
      'ui': 'Hits: <span id=hits></span><br>Reload: <span id=reload></span>',
    });
    entity_set({
      'type': 'background',
    });
    entity_set({
      'type': 'foreground',
    });
    entity_set({
      'type': 'bullet',
    });
    entity_set({
      'type': 'enemy',
    });
    entity_set({
      'type': 'player',
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
