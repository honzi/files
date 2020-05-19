'use strict';

function draw_logic(){
    canvas_buffer.save();
    canvas_buffer.translate(
      canvas_properties['width-half'],
      canvas_properties['height-half']
    );
    canvas_buffer.rotate(-entity_entities['player']['angle'] - 1.5708);
    canvas_buffer.translate(
      -entity_entities['player']['x'],
      -entity_entities['player']['y']
    );

    // Draw background.
    canvas_setproperties({
      'properties': {
        'fillStyle': '#333',
      },
    });
    canvas_buffer.fillRect(
      -300,
      -200,
      600,
      400
    );

    /*
    // Draw walls.
    canvas_setproperties({
      'properties': {
        'fillStyle': '#555',
      },
    });
    for(const wall in race_walls){
        canvas_buffer.fillRect(
          race_walls[wall]['x'],
          race_walls[wall]['y'],
          race_walls[wall]['width'],
          race_walls[wall]['height']
        );
    }
    */

    // Draw racers.
    for(const racer in entity_entities){
        canvas_setproperties({
          'properties': {
            'fillStyle': entity_entities[racer]['color'],
          },
        });
        canvas_buffer.save();
        canvas_buffer.translate(
          entity_entities[racer]['x'],
          entity_entities[racer]['y']
        );
        canvas_buffer.rotate(entity_entities[racer]['angle']);

        canvas_buffer.fillRect(
          -15,
          -10,
          30,
          20
        );

        canvas_buffer.restore();
    }

    canvas_buffer.restore();
}

function logic(){
    if(!entity_entities['player']){
        return;
    }

    // Move the player.
    let movement = 0;
    if(core_keys[core_storage_data['move-↓']]['state']
      && entity_entities['player']['speed'] > -entity_entities['player']['speed-max'] / 2){
        movement = -entity_entities['player']['acceleration'];
    }
    if(core_keys[core_storage_data['move-↑']]['state']
      && entity_entities['player']['speed'] < entity_entities['player']['speed-max']){
        movement = entity_entities['player']['acceleration'];
    }
    entity_entities['player']['speed'] = entity_entities['player']['speed'] + movement;

    if(entity_entities['player']['speed'] !== 0){
        if(movement === 0){
            if(Math.abs(entity_entities['player']['speed']) > .001){
                entity_entities['player']['speed'] = core_round({
                  'number': entity_entities['player']['speed'] * .95,
                });

            }else{
                entity_entities['player']['speed'] = 0;
            }
        }

        let rotation = false;
        if(core_keys[core_storage_data['move-←']]['state']){
            rotation = 1 / (1 / entity_entities['player']['speed']) * entity_entities['player']['turn'];
        }
        if(core_keys[core_storage_data['move-→']]['state']){
            rotation = 1 / (1 / entity_entities['player']['speed']) * -entity_entities['player']['turn'];
        }
        if(rotation !== false){
            entity_entities['player']['angle'] -= rotation;
        }

        const camera_movement = math_move_3d({
          'angle': math_radians_to_degrees({
            'radians': entity_entities['player']['angle'],
          }) - 90,
          'speed': entity_entities['player']['speed'],
        });
        entity_entities['player']['x'] += camera_movement['x'];
        entity_entities['player']['y'] += camera_movement['z'];
    }

    // Move ai.
    for(const racer in entity_entities){
        if(!entity_entities[racer]['ai']){
            continue;
        }

        if(entity_entities[racer]['speed'] < entity_entities[racer]['speed-max']){
            entity_entities[racer]['speed'] += entity_entities[racer]['acceleration'];
        }

        if(math_distance({
          'x0': entity_entities[racer]['x'],
          'x1': race_checkpoints[entity_entities[racer]['target']]['x'],
          'y0': entity_entities[racer]['y'],
          'y1': race_checkpoints[entity_entities[racer]['target']]['y'],
        }) < 50){
            if(race_checkpoints[entity_entities[racer]['target']]['lap']){
                entity_entities[racer]['lap'] += 1;
            }
            entity_entities[racer]['target'] = race_checkpoints[entity_entities[racer]['target']]['next'];
        }

        let angle = Math.atan2(
          race_checkpoints[entity_entities[racer]['target']]['y'] - entity_entities[racer]['y'],
          race_checkpoints[entity_entities[racer]['target']]['x'] - entity_entities[racer]['x']
        );
        if(angle < 0){
            angle += math_tau;

        }else if(angle > math_tau){
            angle -= math_tau;
        }

        if(entity_entities[racer]['angle'] > angle){
          entity_entities[racer]['angle'] -= entity_entities[racer]['turn'];

        }else if(entity_entities[racer]['angle'] < angle){
          entity_entities[racer]['angle'] += entity_entities[racer]['turn'];
        }

        entity_entities[racer]['x'] += Math.cos(entity_entities[racer]['angle']) * entity_entities[racer]['speed'];
        entity_entities[racer]['y'] += Math.sin(entity_entities[racer]['angle']) * entity_entities[racer]['speed'];
    }
}

function repo_escape(){
    if(!entity_entities['player']
      && !entity_entities['ai']
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
      'info': '<select id=level><option value=0>Test Track</option></select><input id=start type=button value="Start New Race">',
      'menu': true,
      'reset': canvas_setmode,
      'storage': {
        'level': 0,
      },
      'title': 'Race-2D.htm',
    });
    race_init();
    canvas_init();
}
