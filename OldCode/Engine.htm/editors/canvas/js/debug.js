'use strict';

engine.debugProject = function(){
    // Offset is pixel distance from y = 0.
    var offset = 10;

    // Display Engine.htm version
    engine.canvas.draw.text({
      'text': {
        'font': '8pt monospace',
        'position': {
          'x': 0,
          'y': offset,
        },
        'text': 'v' + engine.version,
      },
    });

    offset += 10;

    // Display main canvas height and width.
    engine.canvas.draw.text({
      'text': {
        'font': '8pt monospace',
        'position': {
          'x': 0,
          'y': offset,
        },
        'text': engine.canvas.width
          + 'w '
          + engine.canvas.height
          + 'h',
      },
    });

    offset += 10;

    // Display time since last frame started.
    engine.canvas.draw.text({
      'text': {
        'font': '8pt monospace',
        'position': {
          'x': 0,
          'y': offset,
        },
        'text': engine.time.date.format() - engine.variables['_framestart']
          + 'ms',
      },
    });

    offset += 10;

    // Display current timestamp.
    engine.canvas.draw.text({
      'text': {
        'font': '8pt monospace',
        'position': {
          'x': 0,
          'y': offset,
        },
        'text': engine.time.date.format(),
      },
    });

    offset += 10;

    // Display number of pressed keys.
    engine.canvas.draw.text({
      'text': {
        'font': '8pt monospace',
        'position': {
          'x': 0,
          'y': offset,
        },
        'text': Object.keys(engine.keyboard.keyStates).length,
      },
    });

    offset += 10;

    // Display mouse position, pressed button,
    //   and scrollwheel delta.
    engine.canvas.draw.text({
      'text': {
        'font': '8pt monospace',
        'position': {
          'x': 0,
          'y': offset,
        },
        'text': engine.mouse.position['x']
          + 'x, '
          + engine.mouse.position['y']
          + 'y, '
          + engine.mouse.buttonId
          + ', '
          + engine.mouse.wheelDelta,
      },
    });

    offset += 10;

    // Display x and y position of last click.
    engine.canvas.draw.text({
      'text': {
        'font': '8pt monospace',
        'position': {
          'x': 0,
          'y': offset,
        },
        'text': engine.mouse.click['x']
          + 'x, '
          + engine.mouse.click['y']
          + 'y',
      },
    });

    offset += 10;

    // Display how far mouse has been dragged
    //   after being clicked.
    engine.canvas.draw.text({
      'text': {
        'font': '8pt monospace',
        'position': {
          'x': 0,
          'y': offset,
        },
        'text': engine.mouse.drag['x']
          + 'xd, '
          + engine.mouse.drag['y']
          + 'yd',
      },
    });

    offset += 10;

    // Display mouse movement since last onmousemove.
    engine.canvas.draw.text({
      'text': {
        'font': '8pt monospace',
        'position': {
          'x': 0,
          'y': offset,
        },
        'text': engine.mouse.movement['x']
          + 'dx, '
          + engine.mouse.movement['y']
          + 'dy',
      },
    });

    offset += 10;

    // Draw a debug rectangle to show select area.
    if(engine.mouse.get.mouseDown(0)
      && engine.mouse.drag['x'] != 0
      && engine.mouse.drag['y'] != 0){
        engine.canvas.draw.polygon({
          'polygon': {
            'color': '#fff',
            'fill': false,
            'vertices': [
              [engine.mouse.click['x'], engine.mouse.click['y']],
              [engine.mouse.click['x'] + engine.mouse.drag['x'], engine.mouse.click['y']],
              [engine.mouse.click['x'] + engine.mouse.drag['x'], engine.mouse.click['y'] + engine.mouse.drag['y']],
              [engine.mouse.click['x'], engine.mouse.click['y'] + engine.mouse.drag['y']],
            ],
          },
        });
    }

    // Display value from storage.
    engine.canvas.draw.text({
      'text': {
        'font': '8pt monospace',
        'position': {
          'x': 0,
          'y': offset,
        },
        'text': engine.variables['Engine.htm-canvas-localStorageExample'],
      },
    });

    offset += 10;

    engine.canvas.draw.text({
      'text': {
        'font': '8pt monospace',
        'position': {
          'x': 0,
          'y': offset,
        },
        'text': engine.camera.position['x'].toFixed(1)
          + 'x, '
          + engine.camera.position['y'].toFixed(1)
          + 'y',
      },
    });

    offset += 10;

    engine.canvas.draw.text({
      'text': {
        'font': '8pt monospace',
        'position': {
          'x': 0,
          'y': offset,
        },
        'text': engine.camera.rotation['z']
          + 'zR',
      },
    });

    offset += 10;

    // Display filled debug square.
    engine.canvas.draw.polygon({
      'polygon': {
        'color': engine.variables['debug-linearGradient'],
        'fill': true,
        'vertices': [
          [0, offset - 5],
          [10, offset - 5],
          [10, offset + 5],
          [0, offset + 5],
        ],
      },
    });

    // Display filled debug triangle.
    engine.canvas.draw.polygon({
      'polygon': {
        'color': engine.variables['debug-linearGradient'],
        'fill': true,
        'vertices': [
          [10, offset + 5],
          [15, offset - 5],
          [20, offset + 5],
        ],
      },
    });

    // Display filled debug circle.
    engine.canvas.draw.circle({
      'circle': {
        'color': engine.variables['debug-linearGradient'],
        'fill': true,
        'radius': 5,
        'x': 25,
        'y': offset,
      },
    });

    // Display empty debug square.
    engine.canvas.draw.polygon({
      'polygon': {
        'color': engine.variables['debug-linearGradient'],
        'fill': false,
        'vertices': [
          [30, offset - 5],
          [40, offset - 5],
          [40, offset + 5],
          [30, offset + 5],
        ],
      },
    });

    // Display empty debug triangle.
    engine.canvas.draw.polygon({
      'polygon': {
        'color': engine.variables['debug-linearGradient'],
        'fill': false,
        'vertices': [
          [40, offset + 5],
          [45, offset - 5],
          [50, offset + 5],
        ],
      },
    });

    // Display empty debug circle.
    engine.canvas.draw.circle({
      'circle': {
        'color': engine.variables['debug-linearGradient'],
        'fill': false,
        'radius': 5,
        'x': 55,
        'y': offset,
      },
    });
};

engine.debugInit = function(){
    // Set test storage value and "global" variable of result.
    engine.storage.set({
      'key': 'Engine.htm-canvas-localStorageExample',
      'value': 'localStorage!',
    });
    engine.variables['Engine.htm-canvas-localStorageExample'] =
      engine.storage.get({
        'key': 'Engine.htm-canvas-localStorageExample',
      });

    // Create randomized debug-linearGradient for later use.
    var color0 = engine.random.color.rgb();
    var color1 = engine.random.color.rgb();
    engine.canvas.set.linearGradient({
      'colorStops': {
        0: 'rgb('
          + color0.red
          + ', '
          + color0.green
          + ', '
          + color0.blue
          + ')',
        1: 'rgb('
          + color1.red
          + ', '
          + color1.green
          + ', '
          + color1.blue
          + ')',
      },
      'key': 'debug-linearGradient',
      'x0': 0,
      'x1': 50,
      'y0': 0,
      'y1': 0,
    });

    // Create default entity.
    engine.object.defaults['Engine.htm-canvas-defaultentity'] = {
      'color': '#fff',
      'position': {
        'x': 0,
        'y': 0,
      },
      'rotate': {
        'y': 0,
      },
      'scale': {
        'x': 1,
        'y': 1,
      },
      'target': 'buffer',
    };

    // Create some debug entities.
    engine.object.entity.set({
      'default': 'Engine.htm-canvas-defaultentity',
      'key': 'debug-bufferpolygon-rectangle',
      'properties': {
        'color': '#0f0',
        'fill': true,
        'type': 'polygon',
        'vertices': [
          [-50, 50],
          [50, 50],
          [50, -50],
          [-50, -50],
        ],
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-canvas-defaultentity',
      'key': 'debug-bufferpolygon-rectangle-color',
      'properties': {
        'color': '#009900',
        'fill': true,
        'logic': function(){
            this['color'] =
              '#00'
              + engine.math.clamp({
                'maximum': 99,
                'minimum': 0,
                'value': Number.parseInt(
                  this['color'][3] + this['color'][4],
                  10
                ) + 1,
                'wrap': true,
              }) + '00';
        },
        'position': {
          'y': -100,
        },
        'type': 'polygon',
        'vertices': [
          [-50, 50],
          [50, 50],
          [50, -50],
          [-50, -50],
        ],
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-canvas-defaultentity',
      'key': 'debug-bufferpolygon-rectangle-texture',
      'properties': {
        'color': '#009900',
        'fill': true,
        'position': {
          'x': -100,
          'y': -100,
        },
        'texture': engine.html.set.image(),
        'type': 'polygon',
        'vertices': [
          [-50, 50],
          [50, 50],
          [50, -50],
          [-50, -50],
        ],
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-canvas-defaultentity',
      'key': 'debug-bufferpolygon-rectangle-rotate',
      'properties': {
        'color': '#f00',
        'fill': true,
        'logic': function(){
            this['rotate']['y'] =
              engine.math.clamp({
                'maximum': 90,
                'minimum': 0,
                'value': this['rotate']['y'] + .9,
                'wrap': true,
              });
        },
        'position': {
          'x': -100,
        },
        'type': 'polygon',
        'vertices': [
          [-50, 50],
          [50, 50],
          [50, -50],
          [-50, -50],
        ],
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-canvas-defaultentity',
      'key': 'debug-bufferpolygon-rectangle-scale',
      'properties': {
        'color': '#00f',
        'fill': true,
        'logic': function(){
            this['scale']['x'] =
              engine.math.clamp({
                'maximum': 1,
                'minimum': 0,
                'value': this['scale']['x'] + .01,
                'wrap': true,
              });
            this['scale']['y'] =
              engine.math.clamp({
                'maximum': 1,
                'minimum': 0,
                'value': this['scale']['y'] + .01,
                'wrap': true,
              });
        },
        'position': {
          'y': 100,
        },
        'type': 'polygon',
        'vertices': [
          [-50, 50],
          [50, 50],
          [50, -50],
          [-50, -50],
        ],
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-canvas-defaultentity',
      'key': 'debug-bufferpolygon-particle',
      'properties': {
        'fill': true,
        'type': 'polygon',
        'vertices': [
          [60, -60],
        ],
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-canvas-defaultentity',
      'key': 'debug-buffertext',
      'properties': {
        'align': 'left',
        'baseline': 'middle',
        'font': '23pt monospace',
        'position': {
          'x': 30,
        },
        'rotate': {
          'y': 10,
        },
        'scale': {
          'y': 2,
        },
        'text': 'debug-buffertext',
        'type': 'text',
      },
    });
};
