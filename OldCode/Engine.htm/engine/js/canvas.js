// Requires:
// * camera.js
// * engine.js
// * object.js

'use strict';

var engine = engine || {};
engine.canvas = {
  // Clear the target canvas.
  // Optional args: target
  'clear': function(args){
      args = args || {};
      args['target'] = args['target'] || 'canvas';

      engine.canvas.canvases[args['target']].clearRect(
        0,
        0,
        engine.canvas.width,
        engine.canvas.height
      );
  },

  // Draw functions.
  'draw': {
    // Draw a circle onto the target canvas.
    // Required args: circle
    // Optional args: target
    'circle': function(args){
        args['target'] = args['target'] || args['circle']['target'] || 'canvas';
        var texture = args['circle']['texture'] || false;

        var fillstyle = texture !== false
          ? engine.canvas.canvases[args['target']].createPattern(
              texture,
              'repeat'
            )
          : args['circle']['color'];

        engine.canvas.canvases[args['target']].beginPath();
            engine.canvas.canvases[args['target']].arc(
              args['circle']['x'],
              args['circle']['y'],
              args['circle']['radius'],
              0,
              engine.math.tau,
              false
            );
        engine.canvas.canvases[args['target']].closePath();

        engine.canvas.canvases[args['target']].fillStyle = fillstyle;
        engine.canvas.canvases[args['target']].strokeStyle = args['circle']['color'];
        engine.canvas.canvases[args['target']][
          !engine.canvas.wireframe && args['circle']['fill']
            ? 'fill'
            : 'stroke'
        ]();
    },

    // Draw all entities.
    // Optional args: targetOverride
    'entities': function(args){
        args = args || {};
        args['targetOverride'] = args['targetOverride'] || void 0;

        for(var entity in engine.object.entities){
            var target = args['targetOverride'] || engine.object.entities[entity]['target'];

            engine.canvas.canvases[target].save();

            engine.canvas.canvases[target].translate(
              engine.object.entities[entity]['position']['x'],
              engine.object.entities[entity]['position']['y']
            );

            engine.canvas.canvases[target].scale(
              engine.object.entities[entity]['scale']['x'],
              engine.object.entities[entity]['scale']['y']
            );

            engine.canvas.canvases[target].rotate(
              engine.math.degreesToRadians({
                'degrees': engine.object.entities[entity]['rotate']['y'],
              })
            );

            var entityObject = {
              'target': target,
            };
            var type = engine.object.entities[entity]['type'];
            entityObject[type] = engine.object.entities[entity];
            engine.canvas.draw[type](entityObject);

            engine.canvas.canvases[target].restore();
        }
    },

    // Draw alpha-transparent fade.
    // Optional args: target
    'fade': function(args){
        args = args || {};
        args['target'] = args['target'] || 'canvas';

        var alphaCache = engine.canvas.canvases[args['target']].globalAlpha;

        engine.canvas.canvases[args['target']].globalAlpha = engine.canvas.fade['alpha'];
        engine.canvas.canvases[args['target']].fillStyle = engine.canvas.fade['color'];
        engine.canvas.canvases[args['target']].fillRect(
          0,
          0,
          engine.canvas.width,
          engine.canvas.height
        );

        engine.canvas.canvases[args['target']].globalAlpha = alphaCache;
    },

    // Draw the contents of the buffer onto the target canvas.
    // Optional args: target
    'fromBuffer': function(args){
        args = args || {};
        args['target'] = args['target'] || 'canvas';

        engine.canvas.canvases[args['target']].drawImage(
          document.getElementById('buffer'),
          0,
          0
        );
    },

    // Draw a polygon onto the target canvas.
    // Required args: polygon
    // Optional args: target
    'polygon': function(args){
        args['target'] = args['target'] || args['polygon']['target'] || 'canvas';
        var texture = args['polygon']['texture'] || false;

        var fillstyle = texture !== false
          ? engine.canvas.canvases[args['target']].createPattern(
              texture,
              'repeat'
            )
          : args['polygon']['color'];

        engine.canvas.canvases[args['target']].beginPath();
            var verticesLength = args['polygon']['vertices'].length;
            if(verticesLength === 1){
                engine.canvas.canvases[args['target']].rect(
                  args['polygon']['vertices'][0][0],
                  args['polygon']['vertices'][0][1],
                  1,
                  1
                );

            }else{
                engine.canvas.canvases[args['target']].moveTo(
                  args['polygon']['vertices'][0][0],
                  args['polygon']['vertices'][0][1]
                );
                for(var loopCounter = 1; loopCounter < verticesLength; loopCounter++){
                    engine.canvas.canvases[args['target']].lineTo(
                      args['polygon']['vertices'][loopCounter][0],
                      args['polygon']['vertices'][loopCounter][1]
                    );
                }
            }
        engine.canvas.canvases[args['target']].closePath();

        engine.canvas.canvases[args['target']].fillStyle = fillstyle;
        engine.canvas.canvases[args['target']].strokeStyle = args['polygon']['color'];
        engine.canvas.canvases[args['target']][
          !engine.canvas.wireframe && args['polygon']['fill']
            ? 'fill'
            : 'stroke'
        ]();
    },

    // fillText() replacement function for the target canvas.
    // Required args: text
    // Optional args: target
    'text': function(args){
        args['target'] = args['target'] || args['text']['target'] || 'canvas';

        engine.canvas.canvases[args['target']].direction = args['text']['direction'] || 'inherit';
        engine.canvas.canvases[args['target']].fillStyle = args['text']['color'] || '#fff';
        engine.canvas.canvases[args['target']].font = args['text']['font'] || '10px monospace';
        engine.canvas.canvases[args['target']].textAlign = args['text']['align'] || 'start';
        engine.canvas.canvases[args['target']].textBaseline = args['text']['baseline'] || 'alphabetic';

        engine.canvas.canvases[args['target']].fillText(
          args['text']['text'],
          args['text']['position']['x'],
          args['text']['position']['y']
        );
    },
  },

  // Setup the canvas.
  // Optional args: buffer, canvas, options
  'init': function(args){
      args = args || {};
      args['buffer'] = args['buffer'] || 'buffer';
      args['canvas'] = args['canvas'] || 'canvas';
      args['options'] = args['options'] || {
        'alpha': false,
      };

      engine.canvas.canvases['buffer'] =
        document.getElementById(args['buffer']).getContext('2d', args['options']);
      engine.canvas.canvases['canvas'] =
        document.getElementById(args['canvas']).getContext('2d', args['options']);

      engine.canvas.resize();
      window.onresize = engine.canvas.resize;
  },

  // Resize the canvas and the buffer.
  'resize': function(){
      engine.canvas.height = window.innerHeight;
      document.getElementById('buffer').height = engine.canvas.height;
      document.getElementById('canvas').height = engine.canvas.height;

      engine.canvas.width = window.innerWidth;
      document.getElementById('buffer').width = engine.canvas.width;
      document.getElementById('canvas').width = engine.canvas.width;
  },

  // Convert the target canvas into image data
  //   and return a data URI.
  // Optional args: format, quality, target
  'screenshot': function(args){
      args = args || {};
      args['format'] = args['format'] || 'image/png';
      args['quality'] = args['quality'] || 1;
      args['target'] = args['target'] || 'canvas';

      return document.getElementById(args['target']).toDataURL(
        args['format'],
        args['quality']
      );
  },

  // Set functions.
  'set': {
    // Create and store a linear color gradient.
    // Required args: colorStops, key, x0, x1, y0, y1
    // Optional args: target
    'linearGradient': function(args){
        args['target'] = args['target'] || 'canvas';

        var gradient = engine.canvas.canvases[args['target']].createLinearGradient(
          args['x0'],
          args['y0'],
          args['x1'],
          args['y1']
        );

        for(var stop in args['colorStops']){
            gradient.addColorStop(
              stop,
              args['colorStops'][stop]
            );
        }

        engine.variables[args['key']] = gradient;
    },

    // Create and store a radial color gradient.
    // Required args: colorStops, key, r0, r1 x0, x1, y0, y1
    // Optional args: target
    'radialGradient': function(args){
        args['target'] = args['target'] || 'canvas';

        var gradient = engine.canvas.canvases[args['target']].createRadialGradient(
          args['x0'],
          args['y0'],
          args['r0'],
          args['x1'],
          args['y1'],
          args['r1']
        );

        for(var stop in args['colorStops']){
            gradient.addColorStop(
              stop,
              args['colorStops'][stop]
            );
        }

        engine.variables[args['key']] = gradient;
    },
  },

  //-----------------------//

  // An object to hold canvases.
  'canvases': {},

  // An object to hold fade information.
  'fade': {
    'alpha': 0,
    'color': '#fff',
  },

  // The height of the main canvas.
  'height': 0,

  // The width the main canvas.
  'width': 0,

  // Wireframe display boolean.
  'wireframe': false,
};
