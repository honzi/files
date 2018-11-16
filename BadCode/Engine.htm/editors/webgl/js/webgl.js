'use strict';

// Draw function for updating the buffer.
engine.draw = function(){
    engine.time.date.format({
      'key': '_framestart',
    });

    engine.webgl.set.viewport({
      'target': 'buffer',
    });
    engine.webgl.clear({
      'target': 'buffer',
    });

    engine.math.matrix.identity({
      'matrix': engine.variables['_camera'],
    });

    engine.math.matrix.rotate({
      'dimensions': [
        engine.math.degreesToRadians({
          'degrees': engine.camera.rotation['x'],
        }),
        engine.math.degreesToRadians({
          'degrees': engine.camera.rotation['y'],
        }),
        engine.math.degreesToRadians({
          'degrees': engine.camera.rotation['z'],
        }),
      ],
      'matrix': engine.variables['_camera'],
    });
    engine.math.matrix.translate({
      'dimensions': [
        engine.camera.position['x'],
        engine.camera.position['y'],
        -engine.camera.position['z'],
      ],
      'matrix': engine.variables['_camera'],
    });

    engine.webgl.draw.entities();

    engine.canvas.clear();
    engine.canvas.draw.fromBuffer();

    engine.debugProject();

    engine.time.requestAnimationFrame({
      'key': 'draw',
    });
};

// Init function to setup the engine for this project.
engine.init = function(){
    engine.camera.set.dimensions({
      'dimensions': {
        'x': 0,
        'y': 0,
        'z': 0,
      },
    });
    engine.controller.init();
    engine.keyboard.init();
    engine.mouse.init();
    engine.mouse.set.dimensions({
      'dimensions': {
        'x': 0,
        'y': 0,
      },
    });
    engine.mouse.oncontextmenu = false;
    engine.storage.init();
    engine.variables['_framestart'] = 0;

    engine.html.set.element({
      'classes': [
        'hidden',
      ],
      'id': 'buffer',
      'type': 'canvas',
    });
    engine.html.set.element({
      'id': 'canvas',
      'type': 'canvas',
    });

    engine.webgl.init({
      'target': 'buffer',
    });

    engine.keyboard.set.keyBind({
      'event': 'keydown',
      'key': 'A',
      'loop': true,
      'todo': function(){
          engine.camera.move({
            'dy': 0,
            'speed': -.1,
            'strafe': true,
          });
      },
    });
    engine.keyboard.set.keyBind({
      'event': 'keydown',
      'key': 'C',
      'loop': true,
      'todo': function(){
          engine.camera.move({
            'dy': -.1,
            'speed': 0,
          });
      },
    });
    engine.keyboard.set.keyBind({
      'event': 'keydown',
      'key': 'D',
      'loop': true,
      'todo': function(){
          engine.camera.move({
            'dy': 0,
            'speed': .1,
            'strafe': true,
          });
      },
    });
    engine.keyboard.set.keyBind({
      'event': 'keydown',
      'key': 'S',
      'loop': true,
      'todo': function(){
          engine.camera.move({
            'dy': 0,
            'speed': -.1,
          });
      },
    });
    engine.keyboard.set.keyBind({
      'event': 'keydown',
      'key': 32,/* Space */
      'loop': true,
      'todo': function(){
          engine.camera.move({
            'dy': .1,
            'speed': 0,
          });
      },
    });
    engine.keyboard.set.keyBind({
      'event': 'keydown',
      'key': 'W',
      'loop': true,
      'todo': function(){
          engine.camera.move({
            'dy': 0,
            'speed': .1,
          });
      },
    });

    engine.mouse.set.mouseButtonBind({
      'button': 0,
      'event': 'mousedown',
      'todo': function(){
          engine.mouse.set.pointerLock({
            'id': 'canvas',
            'state': true,
          });
      },
    });
    engine.mouse.set.mouseButtonBind({
      'button': 'any',
      'event': 'mousemove',
      'todo': function(){
          if(engine.mouse.pointerLock){
              engine.camera.rotate({
                'dimensions': {
                  'x': engine.mouse.movement['y'] / 10 * engine.mouse.multiplier['y'],
                  'y': engine.mouse.movement['x'] / 10 * engine.mouse.multiplier['x'],
                },
              });
          }
      },
    });

    // Fix any existing entities.
    for(var entity in engine.object.entities){
        engine.object.entity.set({
          'default': engine.object.entities['default'] || false,
          'key': entity,
          'properties': engine.object.entities[entity],
        });

        engine.object.entities[entity]['buffer'] = engine.webgl.set.buffer({
          'bufferType': engine.canvas.canvases['buffer'].ARRAY_BUFFER,
          //'colorData': engine.object.entities[entity]['color'],
          'indexData': engine.object.entities[entity]['index'],
          'target': engine.object.entities[entity]['target'],
          'textureData': [
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
          ],
          'vertexData': engine.object.entities[entity]['vertices'],
        });

        /*
        engine.object.entities[entity]['buffer']['color'] =
          new Float32Array(engine.object.entities[entity]['buffer']['color']);
        */
        engine.object.entities[entity]['buffer']['vertex'] =
          new Float32Array(engine.object.entities[entity]['buffer']['vertex']);
    }

    engine.variables['_camera'] = engine.math.matrix.create({
      'length': 16,
    });

    engine.time.set.animationFrame({
      'key': 'draw',
      'todo': engine.draw,
    });
    engine.time.set.interval({
      'interval': 50,
      'key': 'logic',
      'todo': 'engine.logic()',
    });

    engine.debugInit();
};

engine.logic = function(){
    engine.keyboard.repeatEvents();
    engine.mouse.repeatEvents();

    engine.object.entity.logic();
};

// Init and begin running the project.
window.onload = engine.init;
