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
          + 'h, '
          + engine.canvas.canvases['buffer'].viewportWidth
          + ' '
          + engine.canvas.canvases['buffer'].viewportHeight,
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
        'text': engine.variables['Engine.htm-webgl-localStorageExample'],
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
          + 'y, '
          + engine.camera.position['z'].toFixed(1)
          + 'z ',
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
        'text': engine.camera.rotation['x'].toFixed(1)
          + 'xR, '
          + engine.camera.rotation['y'].toFixed(1)
          + 'yR, '
          + engine.camera.rotation['z'].toFixed(1)
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
      'key': 'Engine.htm-webgl-localStorageExample',
      'value': 'localStorage!',
    });
    engine.variables['Engine.htm-webgl-localStorageExample'] =
      engine.storage.get({
        'key': 'Engine.htm-webgl-localStorageExample',
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

    // Create default entities.
    engine.object.defaults['Engine.htm-webgl-rectangle'] = {
      /*
      'color': [
        1.0, 0.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,
      ],
      */
      'cull': false,
      'index': [
        0, 1, 2, 0, 2, 3,
      ],
      'mode': 'TRIANGLE_FAN',
      'position': {
        'x': 0,
        'y': 0,
        'z': 0,
      },
      'rotate': {
        'x': 0,
        'y': 0,
        'z': 0,
      },
      'scale': {
        'x': 1,
        'y': 1,
        'z': 1,
      },
      'target': 'buffer',
      'vertices': [
        -1, 0, -1,
        1, 0, -1,
        1, 0, 1,
        -1, 0, 1,
      ],
    };
    engine.object.defaults['Engine.htm-webgl-triangle'] = {
      'index': [
        0, 1, 2, 0, 2, 3,
      ],
      'mode': 'TRIANGLES',
      'position': {
        'x': 0,
        'y': 0,
        'z': 0,
      },
      'rotate': {
        'x': 0,
        'y': 0,
        'z': 0,
      },
      'scale': {
        'x': 1,
        'y': 1,
        'z': 1,
      },
      'target': 'buffer',
    };

    // Create some debug entities.
    engine.object.entity.set({
      'default': 'Engine.htm-webgl-rectangle',
      'key': 'test-rectangle-0',
      'properties': {
        'logic': function(){
            this['rotate']['x'] =
              engine.math.clamp({
                'maximum': 360,
                'minimum': 0,
                'value': this['rotate']['x'] + 1,
                'wrap': true,
              });
        },
        'position': {
          'z': 5,
        },
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-webgl-rectangle',
      'key': 'test-rectangle-1',
      'properties': {
        'logic': function(){
            this['rotate']['y'] =
              engine.math.clamp({
                'maximum': 360,
                'minimum': 0,
                'value': this['rotate']['y'] + 1,
                'wrap': true,
              });
        },
        'position': {
          'x': 2,
          'z': 5,
        },
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-webgl-rectangle',
      'key': 'test-rectangle-2',
      'properties': {
        'logic': function(){
            this['rotate']['z'] =
              engine.math.clamp({
                'maximum': 360,
                'minimum': 0,
                'value': this['rotate']['z'] + 1,
                'wrap': true,
              });
        },
        'position': {
          'x': 4,
          'z': 5,
        },
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-webgl-rectangle',
      'key': 'test-rectangle-3',
      'properties': {
        'logic': function(){
            this['rotate']['x'] =
              engine.math.clamp({
                'maximum': 360,
                'minimum': 0,
                'value': this['rotate']['x'] + 1,
                'wrap': true,
              });
            this['rotate']['y'] =
              engine.math.clamp({
                'maximum': 360,
                'minimum': 0,
                'value': this['rotate']['y'] + 1,
                'wrap': true,
              });
        },
        'position': {
          'x': 6,
          'z': 5,
        },
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-webgl-rectangle',
      'key': 'test-rectangle-4',
      'properties': {
        'logic': function(){
            this['rotate']['x'] =
              engine.math.clamp({
                'maximum': 360,
                'minimum': 0,
                'value': this['rotate']['x'] + 1,
                'wrap': true,
              });
            this['rotate']['z'] =
              engine.math.clamp({
                'maximum': 360,
                'minimum': 0,
                'value': this['rotate']['z'] + 1,
                'wrap': true,
              });
        },
        'position': {
          'x': 8,
          'z': 5,
        },
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-webgl-rectangle',
      'key': 'test-rectangle-5',
      'properties': {
        'logic': function(){
            this['rotate']['y'] =
              engine.math.clamp({
                'maximum': 360,
                'minimum': 0,
                'value': this['rotate']['y'] + 1,
                'wrap': true,
              });
            this['rotate']['z'] =
              engine.math.clamp({
                'maximum': 360,
                'minimum': 0,
                'value': this['rotate']['z'] + 1,
                'wrap': true,
              });
        },
        'position': {
          'x': 10,
          'z': 5,
        },
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-webgl-rectangle',
      'key': 'test-rectangle-6',
      'properties': {
        'logic': function(){
            this['rotate']['x'] =
              engine.math.clamp({
                'maximum': 360,
                'minimum': 0,
                'value': this['rotate']['x'] + 1,
                'wrap': true,
              });
            this['rotate']['y'] =
              engine.math.clamp({
                'maximum': 360,
                'minimum': 0,
                'value': this['rotate']['y'] + 1,
                'wrap': true,
              });
            this['rotate']['z'] =
              engine.math.clamp({
                'maximum': 360,
                'minimum': 0,
                'value': this['rotate']['z'] + 1,
                'wrap': true,
              });
        },
        'position': {
          'x': 12,
          'z': 5,
        },
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-webgl-triangle',
      'key': 'test-triangle-0',
      'properties': {
        /*
        'color': [
          1.0, 0.0, 0.0, 1.0,
          0.0, 1.0, 0.0, 1.0,
          0.0, 0.0, 1.0, 1.0,
        ],
        */
        'position': {
          'z': 1,
        },
        'scale': {
          'x': 2,
        },
        'vertices': [
          0, 0, 0,
          1, 0, 0,
          0, 1, 0,
        ],
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-webgl-triangle',
      'key': 'test-triangle-1',
      'properties': {
        /*
        'color': [
          1.0, 0.0, 0.0, 1.0,
          0.0, 1.0, 0.0, 1.0,
          0.0, 0.0, 1.0, 1.0,
        ],
        */
        'mode': 'LINE_LOOP',
        'position': {
          'z': 1.1,
        },
        'rotate': {
          'z': 25,
        },
        'scale': {
          'x': 2,
        },
        'vertices': [
          0, 0, 0,
          -1, 0, 0,
          0, 1, 0,
        ],
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-webgl-triangle',
      'key': 'test-triangle-2',
      'properties': {
        /*
        'color': [
          1.0, 0.0, 0.0, 1.0,
          0.0, 1.0, 0.0, 1.0,
          0.0, 0.0, 1.0, 1.0,
        ],
        */
        'position': {
          'z': 1.2,
        },
        'scale': {
          'y': 2,
        },
        'vertices': [
          0, 0, 0,
          -1, 0, 0,
          0, -1, 0,
        ],
      },
    });
    engine.object.entity.set({
      'default': 'Engine.htm-webgl-triangle',
      'key': 'test-triangle-3',
      'properties': {
        /*
        'color': [
          1.0, 0.0, 0.0, 1.0,
          0.0, 1.0, 0.0, 1.0,
          0.0, 0.0, 1.0, 1.0,
        ],
        */
        'mode': 'LINE_LOOP',
        'position': {
          'z': 1.3,
        },
        'rotate': {
          'z': 25,
        },
        'scale': {
          'y': 2,
        },
        'vertices': [
          0, 0, 0,
          1, 0, 0,
          0, -1, 0,
        ],
      },
    });

    for(var entity in engine.object.entities){
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
        engine.webgl.set.texture2D({
          'entity': entity,
          'image': engine.variables['_default.png'],
          'target': 'buffer',
        });
    }
};
