'use strict';

function draw_logic(){
    canvas_setproperties({
      'properties': {
        'font': '200% monospace',
        'textAlign': 'center',
      },
    });

    // Save current buffer state.
    canvas_buffer.save();

    // Translate to camera position.
    const offset_x = canvas_properties['width-half'] + camera_x;
    const offset_y = canvas_properties['height-half'] + camera_y;
    canvas_buffer.translate(
      offset_x,
      offset_y
    );

    // Draw static world objects.
    for(const id in rts_world_static){
        canvas_setproperties({
          'properties': {
            'fillStyle': rts_world_static[id]['color'],
          },
        });
        canvas_buffer.fillRect(
          rts_world_static[id]['x'],
          rts_world_static[id]['y'],
          rts_world_static[id]['width'],
          rts_world_static[id]['height']
        );
    }

    // Draw dynamic world objects.
    for(const id in rts_world_dynamic){
        canvas_setproperties({
          'properties': {
            'fillStyle': rts_world_dynamic[id]['color'],
          },
        });
        canvas_buffer.fillRect(
          rts_world_dynamic[id]['x'],
          rts_world_dynamic[id]['y'],
          rts_world_dynamic[id]['width'],
          rts_world_dynamic[id]['height']
        );
    }

    // Draw player 1 buildings.
    for(const building in rts_players[1]['buildings']){
        canvas_setproperties({
          'properties': {
            'fillStyle': '#600',
          },
        });
        canvas_buffer.fillRect(
          rts_players[1]['buildings'][building]['x'],
          rts_players[1]['buildings'][building]['y'],
          rts_players[1]['buildings'][building]['width'],
          rts_players[1]['buildings'][building]['height']
        );
        canvas_setproperties({
          'properties': {
            'fillStyle': '#0f0',
          },
        });
        canvas_buffer.fillRect(
          rts_players[1]['buildings'][building]['x'],
          rts_players[1]['buildings'][building]['y'] - 10,
          rts_players[1]['buildings'][building]['width']
            * (rts_players[1]['buildings'][building]['health'] / rts_buildings[rts_players[1]['buildings'][building]['type']]['health']),
          5
        );

        canvas_setproperties({
          'properties': {
            'fillStyle': '#fff',
            'font': rts_players[1]['buildings'][building]['labelFont'],
          },
        });
        canvas_buffer.fillText(
          rts_players[1]['buildings'][building]['label'],
          rts_players[1]['buildings'][building]['x'] + rts_players[1]['buildings'][building]['width'] / 2,
          rts_players[1]['buildings'][building]['y'] + rts_players[1]['buildings'][building]['height'] / 2
        );
    }

    // Draw player 0 buildings.
    for(const building in rts_players[0]['buildings']){
        canvas_setproperties({
          'properties': {
            'fillStyle': rts_players[0]['buildings'][building]['selected']
              ? '#1f1'
              : '#060',
          },
        });
        canvas_buffer.fillRect(
          rts_players[0]['buildings'][building]['x'],
          rts_players[0]['buildings'][building]['y'],
          rts_players[0]['buildings'][building]['width'],
          rts_players[0]['buildings'][building]['height']
        );
        canvas_setproperties({
          'properties': {
            'fillStyle': '#0f0',
          },
        });
        canvas_buffer.fillRect(
          rts_players[0]['buildings'][building]['x'],
          rts_players[0]['buildings'][building]['y'] - 10,
          rts_players[0]['buildings'][building]['width']
            * (rts_players[0]['buildings'][building]['health'] / rts_buildings[rts_players[0]['buildings'][building]['type']]['health']),
          5
        );

        canvas_setproperties({
          'properties': {
            'fillStyle': '#fff',
            'font': rts_players[0]['buildings'][building]['labelFont'],
          },
        });
        canvas_buffer.fillText(
          rts_players[0]['buildings'][building]['label'],
          rts_players[0]['buildings'][building]['x'] + rts_players[0]['buildings'][building]['width'] / 2,
          rts_players[0]['buildings'][building]['y'] + rts_players[0]['buildings'][building]['height'] / 2
        );
    }

    // Draw player 1 units.
    for(const unit in rts_players[1]['units']){
        canvas_setproperties({
          'properties': {
            'fillStyle': '#b00',
          },
        });
        canvas_buffer.fillRect(
          rts_players[1]['units'][unit]['x'] - 15,
          rts_players[1]['units'][unit]['y'] - 15,
          30,
          30
        );
        canvas_setproperties({
          'properties': {
            'fillStyle': '#0f0',
          },
        });
        canvas_buffer.fillRect(
          rts_players[1]['units'][unit]['x'] - 15,
          rts_players[1]['units'][unit]['y'] - 25,
          30 * (rts_players[1]['units'][unit]['health'] / 100),
          5
        );
    }

    // Draw player 0 units.
    for(const unit in rts_players[0]['units']){
        canvas_setproperties({
          'properties': {
            'fillStyle': rts_players[0]['units'][unit]['selected']
              ? '#1f1'
              : '#0b0',
          },
        });
        canvas_buffer.fillRect(
          rts_players[0]['units'][unit]['x'] - 15,
          rts_players[0]['units'][unit]['y'] - 15,
          30,
          30
        );
        canvas_setproperties({
          'properties': {
            'fillStyle': '#0f0',
          },
        });
        canvas_buffer.fillRect(
          rts_players[0]['units'][unit]['x'] - 15,
          rts_players[0]['units'][unit]['y'] - 25,
          30 * (rts_players[0]['units'][unit]['health'] / 100),
          5
        );
    }

    // Draw bullets.
    for(const bullet in rts_bullets){
        canvas_setproperties({
          'properties': {
            'fillStyle': rts_bullets[bullet]['color'],
          },
        });
        canvas_buffer.fillRect(
          Math.round(rts_bullets[bullet]['x']) - 5,
          Math.round(rts_bullets[bullet]['y']) - 5,
          10,
          10
        );
    }

    // Draw fog.
    canvas_setproperties({
      'properties': {
        'fillStyle': core_storage_data['fog-color'],
      },
    });
    for(const id in rts_fog){
        if(!rts_fog[id]['display']){
            continue;
        }

        canvas_buffer.fillRect(
          -core_storage_data['level-size'] + rts_fog[id]['x'] - 1,
          -core_storage_data['level-size'] + rts_fog[id]['y'] - 1,
          102,
          102
        );
    }

    // Draw selected building destination and range.
    for(const building in rts_players[0]['buildings']){
        if(!rts_players[0]['buildings'][building]['selected']
          || rts_players[0]['buildings'][building]['destination-x'] === null){
            continue;
        }

        canvas_draw_path({
          'style': 'stroke',
          'vertices': [
            {
              'type': 'moveTo',
              'x': rts_players[0]['buildings'][building]['x'] + rts_players[0]['buildings'][building]['width'] / 2,
              'y': rts_players[0]['buildings'][building]['y'] + rts_players[0]['buildings'][building]['height'] / 2,
            },
            {
              'x': rts_players[0]['buildings'][building]['destination-x'],
              'y': rts_players[0]['buildings'][building]['destination-y'],
            },
          ],
        });

        if(rts_players[0]['buildings'][building]['range'] > 0){
            canvas_draw_path({
              'style': 'stroke',
              'vertices': [
                {
                  'endAngle': math_tau,
                  'radius': rts_players[0]['buildings'][building]['range'],
                  'startAngle': 0,
                  'type': 'arc',
                  'x': rts_players[0]['buildings'][building]['x'] + rts_players[0]['buildings'][building]['width'] / 2,
                  'y': rts_players[0]['buildings'][building]['y'] + rts_players[0]['buildings'][building]['height'] / 2,
                },
              ],
            });
        }
    }

    // Draw selected unit destinations and range.
    for(const unit in rts_players[0]['units']){
        if(!rts_players[0]['units'][unit]['selected']){
            continue;
        }

        if(rts_players[0]['units'][unit]['x'] !== rts_players[0]['units'][unit]['destination-x']
          || rts_players[0]['units'][unit]['y'] !== rts_players[0]['units'][unit]['destination-y']){
            canvas_draw_path({
              'style': 'stroke',
              'vertices': [
                {
                  'type': 'moveTo',
                  'x': rts_players[0]['units'][unit]['x'],
                  'y': rts_players[0]['units'][unit]['y'],
                },
                {
                  'x': rts_players[0]['units'][unit]['destination-x'],
                  'y': rts_players[0]['units'][unit]['destination-y'],
                },
              ],
            });
        }

        canvas_draw_path({
          'style': 'stroke',
          'vertices': [
            {
              'endAngle': math_tau,
              'radius': rts_players[0]['units'][unit]['range'],
              'startAngle': 0,
              'type': 'arc',
              'x': rts_players[0]['units'][unit]['x'],
              'y': rts_players[0]['units'][unit]['y'],
            },
          ],
        });
    }

    // Restore the buffer state.
    canvas_buffer.restore();

    // Draw selection box.
    if(mouse_minimap_drag === 1){
        canvas_buffer.beginPath();
        canvas_buffer.rect(
          core_mouse['down-x'],
          core_mouse['down-y'],
          core_mouse['x'] - core_mouse['down-x'],
          core_mouse['y'] - core_mouse['down-y']
        );
        canvas_buffer.closePath();
        canvas_buffer.stroke();
    }

    // Draw building while in build mode.
    if(rts_build_mode.length > 0){
        canvas_setproperties({
          'properties': {
            'fillStyle': '#1f1',
          },
        });

        let building_x = core_mouse['x'] - rts_buildings[rts_build_mode]['width'] / 2;
        building_x = Math.min(
          building_x,
          core_storage_data['level-size'] + camera_x + canvas_properties['width-half'] - rts_buildings[rts_build_mode]['width']
        );
        building_x = Math.max(
          building_x,
          -core_storage_data['level-size'] + camera_x + canvas_properties['width-half']
        );

        let building_y = core_mouse['y'] - rts_buildings[rts_build_mode]['height'] / 2;
        building_y = Math.min(
          building_y,
          core_storage_data['level-size'] + camera_y + canvas_properties['height-half'] - rts_buildings[rts_build_mode]['height']
        );
        building_y = Math.max(
          building_y,
          -core_storage_data['level-size'] + camera_y + canvas_properties['height-half']
        );

        canvas_buffer.fillRect(
          building_x,
          building_y,
          rts_buildings[rts_build_mode]['width'],
          rts_buildings[rts_build_mode]['height']
        );

        canvas_setproperties({
          'properties': {
            'fillStyle': '#fff',
            'font': rts_buildings[rts_build_mode]['labelFont'],
          },
        });
        canvas_buffer.fillText(
          rts_buildings[rts_build_mode]['cost'],
          building_x + rts_buildings[rts_build_mode]['width'] / 2,
          building_y + rts_buildings[rts_build_mode]['height'] / 2
        );
    }

    // Draw minimap frame.
    canvas_setproperties({
      'properties': {
        'fillStyle': '#222',
      },
    });
    canvas_buffer.fillRect(
      0,
      canvas_properties['height'] - 205,
      205,
      205
    );

    if(rts_selected_type !== ''
      && rts_selected_type !== 'unit'){
        let offset = 0;
        for(const label in rts_buildings[rts_selected_type]['children']){
            canvas_setproperties({
              'properties': {
                'fillStyle': '#222',
              },
            });
            canvas_buffer.fillRect(
              205 + offset,
              canvas_properties['height'] - 70,
              70,
              70
            );

            canvas_setproperties({
              'properties': {
                'fillStyle': '#111',
              },
            });
            canvas_buffer.fillRect(
              205 + offset,
              canvas_properties['height'] - 65,
              65,
              65
            );

            canvas_setproperties({
              'properties': {
                'fillStyle': '#fff',
                'font': '200% monospace',
              },
            });
            canvas_buffer.fillText(
              rts_buildings[rts_selected_type]['children'][label],
              240 + offset,
              canvas_properties['height'] - 30
            );

            offset += 70;
        }
    }

    // Draw minimap background.
    canvas_setproperties({
      'properties': {
        'fillStyle': rts_world_static[0]['color'],
      },
    });
    canvas_buffer.fillRect(
      0,
      canvas_properties['height'] - 200,
      200,
      200
    );

    // Draw dynamic world_objects on minimap.
    for(const id in rts_world_dynamic){
        canvas_setproperties({
          'properties': {
            'fillStyle': rts_world_dynamic[id]['color'],
          },
        });
        canvas_buffer.fillRect(
          100 + rts_world_dynamic[id]['x'] / rts_math[0],
          canvas_properties['height'] - 100 + rts_world_dynamic[id]['y'] / rts_math[0],
          rts_math[2],
          rts_math[2]
        );
    }

    // Draw player 1 buildings on minimap.
    canvas_setproperties({
      'properties': {
        'fillStyle': '#600',
      },
    });
    for(const building in rts_players[1]['buildings']){
        const minimap = rts_math[rts_buildings[rts_players[1]['buildings'][building]['type']]['minimap']];
        canvas_buffer.fillRect(
          100 + rts_players[1]['buildings'][building]['x'] / rts_math[0],
          canvas_properties['height'] - 100 + rts_players[1]['buildings'][building]['y'] / rts_math[0],
          minimap,
          minimap
        );
    }

    // Draw player 0 buildings on minimap.
    for(const building in rts_players[0]['buildings']){
        const minimap = rts_math[rts_buildings[rts_players[0]['buildings'][building]['type']]['minimap']];
        canvas_setproperties({
          'properties': {
            'fillStyle': rts_players[0]['buildings'][building]['selected']
              ? '#1f1'
              : '#060',
          },
        });
        canvas_buffer.fillRect(
          100 + rts_players[0]['buildings'][building]['x'] / rts_math[0],
          canvas_properties['height'] - 100 + rts_players[0]['buildings'][building]['y'] / rts_math[0],
          minimap,
          minimap
        );
    }

    // Draw player 1 units on minimap.
    canvas_setproperties({
      'properties': {
        'fillStyle': '#b00',
      },
    });
    for(const unit in rts_players[1]['units']){
        canvas_buffer.fillRect(
          100 + (rts_players[1]['units'][unit]['x'] - 15) / rts_math[0],
          canvas_properties['height'] - 100 + (rts_players[1]['units'][unit]['y'] - 15) / rts_math[0],
          rts_math[1],
          rts_math[1]
        );
    }

    // Draw player 0 units on minimap.
    for(const unit in rts_players[0]['units']){
        canvas_setproperties({
          'properties': {
            'fillStyle': rts_players[0]['units'][unit]['selected']
              ? '#1f1'
              : '#0b0',
          },
        });
        canvas_buffer.fillRect(
          100 + (rts_players[0]['units'][unit]['x'] - 15) / rts_math[0],
          canvas_properties['height'] - 100 + (rts_players[0]['units'][unit]['y'] - 15) / rts_math[0],
          rts_math[1],
          rts_math[1]
        );
    }

    // Draw fog on minimap.
    canvas_setproperties({
      'properties': {
        'fillStyle': core_storage_data['fog-color'],
      },
    });
    for(const id in rts_fog){
        if(!rts_fog[id]['display']){
            continue;
        }

        canvas_buffer.fillRect(
          rts_fog[id]['x'] / rts_math[0],
          canvas_properties['height'] - 200 + rts_fog[id]['y'] / rts_math[0],
          rts_math[2],
          rts_math[2]
        );
    }

    // Draw building destination on minimap.
    for(const building in rts_players[0]['buildings']){
        // Only draw if building is selected.
        if(!rts_players[0]['buildings'][building]['selected']
          || rts_players[0]['buildings'][building]['destination-x'] === null){
            continue;
        }

        canvas_draw_path({
          'style': 'stroke',
          'vertices': [
            {
              'type': 'moveTo',
              'x': 100 + (rts_players[0]['buildings'][building]['x']
                + rts_players[0]['buildings'][building]['width'] / 2) / rts_math[0],
              'y': canvas_properties['height'] - 100 + (rts_players[0]['buildings'][building]['y']
                + rts_players[0]['buildings'][building]['height'] / 2) / rts_math[0],
            },
            {
              'x': 100 + (rts_players[0]['buildings'][building]['destination-x']
                + rts_players[0]['buildings'][building]['width'] / 2) / rts_math[0],
              'y': canvas_properties['height'] - 100 + (rts_players[0]['buildings'][building]['destination-y']
                + rts_players[0]['buildings'][building]['height'] / 2) / rts_math[0],
            },
          ],
        });
    }

    // Draw selected unit destination and range on minimap.
    for(const unit in rts_players[0]['units']){
        if(!rts_players[0]['units'][unit]['selected']){
            continue;
        }

        // Draw destination if the unit has one.
        if(rts_players[0]['units'][unit]['x'] !== rts_players[0]['units'][unit]['destination-x']
          || rts_players[0]['units'][unit]['y'] !== rts_players[0]['units'][unit]['destination-y']){
            canvas_draw_path({
              'style': 'stroke',
              'vertices': [
                {
                  'type': 'moveTo',
                  'x': 100 + rts_players[0]['units'][unit]['x'] / rts_math[0],
                  'y': canvas_properties['height'] - 100 + rts_players[0]['units'][unit]['y'] / rts_math[0],
                },
                {
                  'x': 100 + rts_players[0]['units'][unit]['destination-x'] / rts_math[0],
                  'y': canvas_properties['height'] - 100 + rts_players[0]['units'][unit]['destination-y'] / rts_math[0],
                },
              ],
            });
        }

        // Draw range circle.
        canvas_draw_path({
          'style': 'stroke',
          'vertices': [
            {
              'endAngle': math_tau,
              'radius': rts_math[3],
              'startAngle': 0,
              'type': 'arc',
              'x': 100 + rts_players[0]['units'][unit]['x'] / rts_math[0],
              'y': canvas_properties['height'] - 100 + rts_players[0]['units'][unit]['y'] / rts_math[0],
            },
          ],
        });
    }

    let temp_height = 0;
    let temp_width = 0;
    let temp_x = 0;
    let temp_y = 0;

    // Draw selection box on minimap.
    if(mouse_minimap_drag === 1){
        // Make sure box cannot go past right edge.
        temp_x = 100 - (offset_x - core_mouse['down-x']) / rts_math[0];
        temp_width = (core_mouse['x'] - core_mouse['down-x']) / rts_math[0];
        // Box past right edge? Decrease width to fix.
        if(temp_x > 200 - temp_width){
            temp_width = 200 - temp_x;
        }

        // Make sure box can't go past top edge.
        temp_y = canvas_properties['height'] - 100 - (offset_y - core_mouse['down-y']) / rts_math[0];
        temp_height = (core_mouse['y'] - core_mouse['down-y']) / rts_math[0];

        // Box past top edge? Decrease height and make sure height isn't negative.
        if(temp_y + temp_height < canvas_properties['height'] - 200){
            temp_height = canvas_properties['height'] - 200 - temp_y;
        }
        if(temp_y < canvas_properties['height'] - 200){
            temp_height -= canvas_properties['height'] - 200 - temp_y;
            if(temp_height < 0){
                temp_height = 0;
            }

            // Adjust box starting Y position.
            temp_y = canvas_properties['height'] - 200;
        }

        canvas_buffer.beginPath();
        canvas_buffer.rect(
          temp_x,
          temp_y,
          temp_width,
          temp_height
        );
        canvas_buffer.closePath();
        canvas_buffer.stroke();
    }

    // Draw camera boundaries on minimap.
    // Make sure box cannot go past right edge.
    temp_x = 100 - canvas_properties['width-half'] / rts_math[0] - camera_x / rts_math[0];
    temp_width = canvas_properties['width'] / rts_math[0];
    // Box past right edge? Decrease width to fix.
    if(temp_x > 200 - temp_width){
        temp_width = 200 - temp_x;
    }

    // Make sure box can't go past top edge.
    temp_y = canvas_properties['height'] - 100 - canvas_properties['height-half'] / rts_math[0] - camera_y / rts_math[0];
    temp_height = canvas_properties['height'] / rts_math[0];
    // Box past top edge? decrease height and make sure height isn't negative.
    if(temp_y < canvas_properties['height'] - 200){
        temp_height -= canvas_properties['height'] - 200 - temp_y;
        if(temp_height < 0){
            temp_height = 0;
        }

        // Adjust box starting Y position.
        temp_y = canvas_properties['height'] - 200;
    }

    canvas_buffer.beginPath();
    canvas_buffer.rect(
      temp_x,
      temp_y,
      temp_width,
      temp_height
    );
    canvas_buffer.closePath();
    canvas_buffer.stroke();

    // Draw win/lose text if win/lose conditions met.
    if((rts_players[0]['buildings'].length < 1 && rts_players[0]['units'].length < 1)
      || (rts_players[1]['buildings'].length < 1 && rts_players[1]['units'].length < 1)){

        if(rts_players[0]['buildings'].length < 1){
            canvas_setproperties({
              'properties': {
                'fillStyle': '#f00',
              },
            });
            canvas_buffer.fillText(
              'YOU LOSE! ☹',
              canvas_properties['width-half'],
              canvas_properties['height-half'] / 2
            );

        }else{
            canvas_setproperties({
              'properties': {
                'fillStyle': '#0f0',
              },
            });
            canvas_buffer.fillText(
              'YOU WIN! ☺' ,
              canvas_properties['width-half'],
              canvas_properties['height-half'] / 2
            );
        }
    }

    core_ui_update({
      'ids': {
        'ui-money': rts_players[0]['money'],
      },
    });
}

function logic(){
    if(!rts_players[0]){
        return;
    }

    // If infinite fog is selected, reset fog.
    if(core_storage_data['fog-type'] === 2){
        for(const id in rts_fog){
            rts_fog[id]['display'] = true;
        }
    }

    if(rts_money_timer < 0){
        rts_money_timer = core_storage_data['income-frames'];
    }

    // Move camera left.
    if(core_keys[core_storage_data['move-←']]['state']
      && camera_x < core_storage_data['level-size']){
        camera_x += core_storage_data['scroll-speed'];
        core_mouse['down-x'] += core_storage_data['scroll-speed'];
    }

    // Move camera right.
    if(core_keys[core_storage_data['move-→']]['state']
      && camera_x > -core_storage_data['level-size']){
        camera_x -= core_storage_data['scroll-speed'];
        core_mouse['down-x'] -= core_storage_data['scroll-speed'];
    }

    // Move camera down.
    if(core_keys[core_storage_data['move-↓']]['state']
      && camera_y > -core_storage_data['level-size']){
        camera_y -= core_storage_data['scroll-speed'];
        core_mouse['down-y'] -= core_storage_data['scroll-speed'];
    }

    // Move camera up.
    if(core_keys[core_storage_data['move-↑']]['state']
      && camera_y < core_storage_data['level-size']){
        camera_y += core_storage_data['scroll-speed'];
        core_mouse['down-y'] += core_storage_data['scroll-speed'];
    }

    // Handle selection box.
    if(mouse_minimap_drag === 1){
        rts_select();
    }

    rts_players_handle();

    rts_building_handle();
    rts_unit_handle();
    rts_bullet_handle();

    // Only update building fog removal
    //   if infinite fog is selected.
    if(core_storage_data['fog-type'] === 2){
        rts_building_fog();
    }
}

function repo_escape(){
    if(!rts_players[0]
      && !core_menu_open){
        canvas_setmode();
    }
}

function repo_init(){
    core_repo_init({
      'events': {
        'start': {
          'onclick': canvas_setmode,
        },
      },
      'globals': {
        'camera_x': 0,
        'camera_y': 0,
        'mouse_minimap_drag': 0,
      },
      'info': '<input id=start type=button value="Start Skirmish vs AI">',
      'keybinds': {
        27: {
          'todo': repo_escape_custom,
        },
        70: {
          'todo': function(){
              if(rts_selected_type === 'HQ'){
                  rts_build_mode = rts_buildings['F']['label'];
              }
          },
        },
        71: {
          'todo': function(){
              if(rts_selected_type === 'HQ'){
                  rts_build_mode = rts_buildings['G']['label'];
              }
          },
        },
        76: {
          'todo': function(){
              if(rts_selected_type === 'HQ'){
                  rts_build_mode = rts_buildings['L']['label'];
              }
          },
        },
        82: {
          'todo': function(){
              if(rts_selected_type === 'F'){
                  rts_unit_build({
                    'player': 0,
                    'type': 'Robot',
                  });
              }
          },
        },
        84: {
          'todo': function(){
              if(rts_selected_type === 'HQ'){
                  rts_build_mode = rts_buildings['T']['label'];
              }
          },
        },
      },
      'menu': true,
      'mousebinds': {
        'mousedown': {
          'preventDefault': true,
          'todo': function(event){
              // If not clicking on minimap.
              if(core_mouse['x'] > 200
                || core_mouse['y'] < canvas_properties['height'] - 200){

                  // Check if in buildling mode.
                  if(rts_build_mode.length > 0){
                      // Attempt to build a building.
                      rts_building_build({
                        'player': 0,
                        'type': rts_build_mode,
                        'x': core_mouse['x'] - camera_x - canvas_properties['width-half'] - rts_buildings[rts_build_mode]['width'] / 2,
                        'y': core_mouse['y'] - camera_y - canvas_properties['height-half'] - rts_buildings[rts_build_mode]['height'] / 2,
                      });

                  // If unit selected or not clicking on build robot button.
                  }else if(rts_selected_type === ''
                    || rts_selected_type === 'unit'
                    || core_mouse['y'] < canvas_properties['height'] - 65
                    || core_mouse['x'] > 270){
                      // Left click: start dragging.
                      if(event.button === 0){
                          mouse_minimap_drag = 1;

                      // Right click: try to set selected building/unit destination.
                      }else if(event.button === 2){
                          rts_destionation_set();
                      }

                  // Else if HQ is selected, activate build mode.
                  }else if(rts_selected_type === 'HQ'){
                      rts_build_mode = 'F';

                  // Else if factory is selected, build robot.
                  }else if(rts_selected_type === 'F'){
                      rts_unit_build({
                        'player': 0,
                        'type': 'Robot',
                      });
                  }

              // Right clicking on minimap.
              }else if(event.button === 2){
                  rts_destionation_set({
                    'minimap': true,
                  });

              // Other clicks: move camera.
              }else{
                  mouse_minimap_drag = 2;

                  rts_camera_validatemove({
                    'x': core_mouse['x'],
                    'y': core_mouse['y'],
                  });
              }
          },
        },
        'mousemove': {
          'todo': function(event){
              if(event.buttons === 2){
                  rts_destionation_set({
                    'minimap': core_mouse['x'] <= 200
                      && core_mouse['y'] >= canvas_properties['height'] - 200,
                  });
              }

              // Dragging after click was not on minimap.
              if(mouse_minimap_drag === 1){
                  rts_select();

              // Dragging after click was on minimap.
              }else if(mouse_minimap_drag === 2){
                  rts_camera_validatemove({
                    'x': core_mouse['x'],
                    'y': core_mouse['y'],
                  });
              }
          },
        },
        'mouseup': {
          'todo': function(){
              mouse_minimap_drag = 0;
          },
        },
      },
      'storage': {
        'fog-color': '#000000',
        'fog-type': 1,
        'income-base': 1,
        'income-frames': 100,
        'level-size': 1600,
        'money': 1000,
        'scroll-speed': 25,
      },
      'storage-menu': '<table><tr><td><select id=fog-type><option value=1>Finite</option><option value=2>Infinite</option><option value=0>No</option></select><td>Fog'
        + '<tr><td><input id=fog-color type=color><td>Fog Color'
        + '<tr><td><input id=income-frames><td>Frames/Income'
        + '<tr><td><input id=income-base><td>Income Base Amount'
        + '<tr><td><input id=level-size><td>*2 Level Size'
        + '<tr><td><input id=money><td>Money'
        + '<tr><td><input id=scroll-speed><td>Scroll Speed</table>',
      'title': 'RTS-2D.htm',
      'ui': 'Money: <span id=ui-money></span>',
    });
    canvas_init({
      'contextmenu': false,
    });
}
