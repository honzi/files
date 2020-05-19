'use strict';

function draw_logic(){
    if(!rpg_characters[0]){
        return;
    }

    canvas_buffer.save();
    canvas_buffer.translate(
      canvas_properties['width-half'],
      canvas_properties['height-half']
    );

    canvas_buffer.save();
    canvas_buffer.translate(
      -rpg_characters[0]['x'],
      -rpg_characters[0]['y']
    );

    // Draw static world objects.
    for(const object in rpg_world_static){
        canvas_setproperties({
          'properties': {
            'fillStyle': rpg_world_static[object]['color'],
          },
        });
        canvas_buffer.fillRect(
          rpg_world_static[object]['x'],
          rpg_world_static[object]['y'],
          rpg_world_static[object]['width'],
          rpg_world_static[object]['height']
        );
    }

    // Draw dynamic world objects.
    for(const object in rpg_world_dynamic){
        canvas_setproperties({
          'properties': {
            'fillStyle': rpg_world_dynamic[object]['color'],
          },
        });
        canvas_buffer.fillRect(
          rpg_world_dynamic[object]['x'],
          rpg_world_dynamic[object]['y'],
          rpg_world_dynamic[object]['width'],
          rpg_world_dynamic[object]['height']
        );
    }

    // Draw characters.
    for(const character in rpg_characters){
        canvas_setproperties({
          'properties': {
            'fillStyle': rpg_characters[character]['color'],
          },
        });
        canvas_buffer.fillRect(
          rpg_characters[character]['x'] - rpg_characters[character]['width-half'],
          rpg_characters[character]['y'] - rpg_characters[character]['height-half'],
          rpg_characters[character]['width'],
          rpg_characters[character]['height']
        );
    }

    // Draw particles.
    for(const particle in rpg_particles){
        canvas_setproperties({
          'properties': {
            'fillStyle': rpg_particles[particle]['color'],
          },
        });
        canvas_buffer.fillRect(
          rpg_particles[particle]['x'] - rpg_particles[particle]['width-half'],
          rpg_particles[particle]['y'] - rpg_particles[particle]['height-half'],
          rpg_particles[particle]['width'],
          rpg_particles[particle]['height']
        );
    }

    canvas_buffer.restore();

    // Draw player targeting direction.
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

    canvas_buffer.restore();
}

function logic(){
    if(!rpg_characters[0]){
        return;
    }

    if(!rpg_characters[0]['dead']){
        // Add player key movements to character velocity.
        if(core_keys[core_storage_data['move-←']]['state']){
            rpg_characters[0]['x-velocity'] -= 2;
        }

        if(core_keys[core_storage_data['move-→']]['state']){
            rpg_characters[0]['x-velocity'] += 2;
        }
    }

    // Check for character collision with dynamic world objects.
    for(const character in rpg_characters){
        rpg_characters[character]['can-jump'] = false;

        for(const object in rpg_world_dynamic){
            if(rpg_world_dynamic[object]['effect'] === 0
              && !rpg_world_dynamic[object]['collision']){
                continue;
            }

            // If character and object aren't moving, and object has no effect, no collision checks.
            if(rpg_characters[character]['x-velocity'] === 0
              && rpg_characters[character]['y-velocity'] === 0
              && rpg_world_dynamic[object]['effect-dx'] === 0
              && rpg_world_dynamic[object]['effect-dy'] === 0
              && rpg_world_dynamic[object]['effect'] === 0){
                continue;
            }

            const temp_object_right_x = rpg_world_dynamic[object]['x'] + rpg_world_dynamic[object]['width'];
            const temp_object_right_y = rpg_world_dynamic[object]['y'] + rpg_world_dynamic[object]['height'];

            // Check if character position + movement is within bounds of object.
            if(rpg_characters[character]['x'] + rpg_characters[character]['x-velocity'] - rpg_characters[character]['width-half'] > temp_object_right_x
              || rpg_characters[character]['x'] + rpg_characters[character]['x-velocity'] + rpg_characters[character]['width-half'] < rpg_world_dynamic[object]['x']
              || rpg_characters[character]['y'] + rpg_characters[character]['y-velocity'] - rpg_characters[character]['height-half'] > temp_object_right_y
              || rpg_characters[character]['y'] + rpg_characters[character]['y-velocity'] + rpg_characters[character]['height-half'] < rpg_world_dynamic[object]['y']){
                continue;
            }

            if(rpg_world_dynamic[object]['effect'] > 0){
                rpg_character_affect({
                  'character': character,
                  'effect': rpg_world_dynamic[object]['effect'],
                  'stat': rpg_world_dynamic[object]['effect-stat'],
                });
            }

            rpg_characters[character]['x-velocity'] += rpg_world_dynamic[object]['effect-dx'];
            rpg_characters[character]['y-velocity'] += rpg_world_dynamic[object]['effect-dy'];

            if(!rpg_world_dynamic[object]['collision']){
                continue;
            }

            // Handle collisions with platforms while jumping or falling.
            if(rpg_characters[character]['y-velocity'] !== 0
              && rpg_characters[character]['x'] > rpg_world_dynamic[object]['x'] - rpg_characters[character]['width-half']
              && rpg_characters[character]['x'] < temp_object_right_x + rpg_characters[character]['width-half']){
                if(rpg_characters[character]['y-velocity'] > 0){
                    if(rpg_characters[character]['y'] + rpg_characters[character]['y-velocity'] <= rpg_world_dynamic[object]['y']
                      && rpg_characters[character]['y'] + rpg_characters[character]['y-velocity'] > rpg_world_dynamic[object]['y'] - rpg_characters[character]['height-half']){
                        rpg_characters[character]['can-jump'] = true;
                        rpg_characters[character]['y-velocity'] = 0;
                    }

                }else if(rpg_characters[character]['y'] + rpg_characters[character]['y-velocity'] < temp_object_right_y + rpg_characters[character]['height-half']
                  && rpg_characters[character]['y'] + rpg_characters[character]['y-velocity'] >= temp_object_right_y){
                    rpg_characters[character]['y-velocity'] = temp_object_right_y - rpg_characters[character]['y'] + rpg_characters[character]['height-half'];
                }
            }

            // Handle collisions with platforms while moving left/right.
            if(rpg_characters[character]['x-velocity'] !== 0
              && rpg_characters[character]['y'] + rpg_characters[character]['height-half'] > rpg_world_dynamic[object]['y']
              && rpg_characters[character]['y'] - rpg_characters[character]['height-half'] < temp_object_right_y){
                if(rpg_characters[character]['x-velocity'] < 0
                  && rpg_characters[character]['x'] - rpg_characters[character]['width-half'] < temp_object_right_x
                  && rpg_characters[character]['x'] > rpg_world_dynamic[object]['x']){
                    rpg_characters[character]['x'] = temp_object_right_x + rpg_characters[character]['width-half'];
                    rpg_characters[character]['x-velocity'] = 0;

                }else if(rpg_characters[character]['x'] + rpg_characters[character]['width-half'] < temp_object_right_x
                  && rpg_characters[character]['x'] < rpg_world_dynamic[object]['x']){
                    rpg_characters[character]['x'] = rpg_world_dynamic[object]['x'] - rpg_characters[character]['width-half'];
                    rpg_characters[character]['x-velocity'] = 0;
                }
            }
        }

        // Update character position.
        rpg_characters[character]['x'] += Math.round(rpg_characters[character]['x-velocity']);
        rpg_characters[character]['y'] += Math.round(rpg_characters[character]['y-velocity']);

        if(rpg_characters[character]['can-jump']
          && !rpg_characters[character]['dead']){
            if(character === 0
              && core_keys[core_storage_data['jump']]['state']){
                rpg_characters[character]['y-velocity'] = -rpg_characters[character]['stats']['jump-velocity'];
                rpg_characters[character]['can-jump'] = false;

            }else{
                rpg_characters[character]['y-velocity'] = 0;
            }

        }else{
            rpg_characters[character]['y-velocity'] = Math.min(
              rpg_characters[character]['y-velocity'] + 1,
              5
            );
        }

        rpg_characters[character]['x-velocity'] *= .3;
    }

    rpg_handle_all();
}

function repo_init(){
    core_repo_init({
      'events': {
        'enter': {
          'onclick': canvas_setmode,
        },
      },
      'info': '<input id=enter type=button value="Enter Map">',
      'menu': true,
      'mousebinds': {
        'mousewheel': {
          'todo': function(event){
              rpg_item_select({
                'id': rpg_characters[0]['selected']
                  + (
                    (event.wheelDelta || -event.detail) > 0
                      ? -1
                      : 1
                  ),
              });
          },
        },
      },
      'title': 'RPG-Side.htm',
      'ui': '<table><tr><td>Health<td id=health><tr><td>Mana<td id=mana></table><span id=selected></span>',
    });
    canvas_init();
}
