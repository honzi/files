'use strict';

// Draw function for updating the buffer.
engine.draw = function(){
    engine.time.date.format({
      'key': '_framestart',
    });

    engine.canvas.clear({
      'target': 'buffer',
    });
    engine.canvas.canvases['buffer'].save();
    engine.canvas.canvases['buffer'].translate(
      engine.canvas.width / 2,
      engine.canvas.height / 2
    );
    engine.canvas.canvases['buffer'].rotate(
      engine.math.degreesToRadians({
        'degrees': engine.camera.rotation['z'],
      })
    );
    engine.canvas.canvases['buffer'].translate(
      engine.camera.position['x'],
      engine.camera.position['y']
    );
    engine.canvas.draw.entities();
    engine.canvas.canvases['buffer'].restore();

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

    engine.canvas.init();

    engine.keyboard.set.keyBind({
      'event': 'keydown',
      'key': 'A',
      'loop': true,
      'todo': function(){
          engine.camera.move({
            'axis': 'z',
            'speed': 1,
            'strafe': true,
          });
      },
    });
    engine.keyboard.set.keyBind({
      'event': 'keydown',
      'key': 'D',
      'loop': true,
      'todo': function(){
          engine.camera.move({
            'axis': 'z',
            'speed': -1,
            'strafe': true,
          });
      },
    });
    engine.keyboard.set.keyBind({
      'event': 'keydown',
      'key': 'E',
      'loop': true,
      'todo': function(){
          engine.camera.rotate({
            'dimensions': {
              'z': -5,
            },
          });
      },
    });
    engine.keyboard.set.keyBind({
      'event': 'keydown',
      'key': 'Q',
      'loop': true,
      'todo': function(){
          engine.camera.rotate({
            'dimensions': {
              'z': 5,
            },
          });
      },
    });
    engine.keyboard.set.keyBind({
      'event': 'keydown',
      'key': 'S',
      'loop': true,
      'todo': function(){
          engine.camera.move({
            'axis': 'z',
            'speed': -1,
          });
      },
    });
    engine.keyboard.set.keyBind({
      'event': 'keydown',
      'key': 'W',
      'loop': true,
      'todo': function(){
          engine.camera.move({
            'axis': 'z',
            'speed': 1,
          });
      },
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
