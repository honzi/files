// Requires:
// * engine.js
// * math.js
// * object.js

'use strict';

var engine = engine || {};
engine.webgl = {
  // Clear WebGL.
  // Optional args: target
  'clear': function(args){
      args = args || {};
      args['target'] = args['target'] || 'canvas';

      engine.canvas.canvases[args['target']].clear(
        engine.canvas.canvases[args['target']].COLOR_BUFFER_BIT
        | engine.canvas.canvases[args['target']].DEPTH_BUFFER_BIT
      );
  },

  // Draw functions.
  'draw': {
    // Draw all entities.
    // Optional args: targetOverride
    'entities': function(args){
        args = args || {};
        args['targetOverride'] = args['targetOverride'] || void 0;

        for(var entity in engine.object.entities){
            var cameraMatrixCache = engine.math.matrix.clone({
              'matrix': engine.variables['_camera'],
            });
            var target = args['targetOverride'] || engine.object.entities[entity]['target'] || 'canvas';

            if(engine.object.entities[entity]['cull'] === false){
                engine.webgl.set.property({
                  'property': 'CULL_FACE',
                  'state': false,
                  'target': target,
                });
            }

            engine.math.matrix.translate({
              'dimensions': [
                -engine.object.entities[entity]['position']['x'],
                -engine.object.entities[entity]['position']['y'],
                engine.object.entities[entity]['position']['z'],
              ],
              'matrix': engine.variables['_camera'],
            });

            engine.math.matrix.scale({
              'dimensions': [
                engine.object.entities[entity]['scale']['x'],
                engine.object.entities[entity]['scale']['y'],
                -engine.object.entities[entity]['scale']['z'],
              ],
              'matrix': engine.variables['_camera'],
            });

            engine.math.matrix.rotate({
              'dimensions': [
                engine.math.degreesToRadians({
                  'degrees': engine.object.entities[entity]['rotate']['x'],
                }),
                engine.math.degreesToRadians({
                  'degrees': engine.object.entities[entity]['rotate']['y'],
                }),
                engine.math.degreesToRadians({
                  'degrees': engine.object.entities[entity]['rotate']['z'],
                }),
              ],
              'matrix': engine.variables['_camera'],
            });

            /*
            engine.canvas.canvases[target].bindBuffer(
              engine.canvas.canvases[target].ARRAY_BUFFER,
              engine.object.entities[entity]['buffer']['color']
            );
            engine.canvas.canvases[target].vertexAttribPointer(
              engine.webgl.attributes['vec_vertexColor'],
              4,
              engine.canvas.canvases[target].FLOAT,
              false,
              0,
              0
            );
            */

            engine.canvas.canvases[target].bindBuffer(
              engine.canvas.canvases[target].ARRAY_BUFFER,
              engine.object.entities[entity]['buffer']['vertex']
            );
            engine.canvas.canvases[target].vertexAttribPointer(
              engine.webgl.attributes['vec_vertexPosition'],
              3,
              engine.canvas.canvases[target].FLOAT,
              false,
              0,
              0
            );

            engine.canvas.canvases[target].bindBuffer(
              engine.canvas.canvases[target].ARRAY_BUFFER,
              engine.object.entities[entity]['buffer']['texture']
            );
            engine.canvas.canvases[target].vertexAttribPointer(
              engine.webgl.attributes['vec_texturePosition'],
              2,
              engine.canvas.canvases[target].FLOAT,
              false,
              0,
              0
            );

            engine.canvas.canvases[target].activeTexture(engine.canvas.canvases[target].TEXTURE0);
            engine.canvas.canvases[target].bindTexture(
              engine.canvas.canvases[target].TEXTURE_2D,
              engine.object.entities[entity]['texture']
            );
            engine.canvas.canvases[target].uniform1i(
              engine.canvas.canvases[target].getUniformLocation(
                engine.webgl.programs['shaders'],
                'sampler'
              ),
              0
            );

            engine.canvas.canvases[target].bindBuffer(
              engine.canvas.canvases[target].ARRAY_BUFFER,
              engine.object.entities[entity]['buffer']['index']
            );

            engine.canvas.canvases[target].uniformMatrix4fv(
              engine.canvas.canvases[target].getUniformLocation(
                engine.webgl.programs['shaders'],
                'mat_perspectiveMatrix'
              ),
              0,
              engine.variables['_perspective']['value']
            );

            engine.canvas.canvases[target].uniformMatrix4fv(
              engine.canvas.canvases[target].getUniformLocation(
                engine.webgl.programs['shaders'],
                'mat_cameraMatrix'
              ),
              0,
              engine.variables['_camera']['value']
            );

            engine.canvas.canvases[target].drawArrays(
              engine.canvas.canvases[target][engine.webgl.mode || engine.object.entities[entity]['mode']],
              0,
              Math.floor(engine.object.entities[entity]['vertices'].length / 3)
            );

            if(engine.object.entities[entity]['cull'] === false){
                engine.webgl.set.property({
                  'property': 'CULL_FACE',
                  'target': target,
                });
            }

            engine.math.matrix.copy({
              'from': cameraMatrixCache,
              'matrix': engine.variables['_camera'],
            });
        }
    },
  },

  // Setup the WebGL rendering instance.
  // Optional args: buffer, canvas, options, target
  'init': function(args){
      args = args || {};
      args['buffer'] = args['buffer'] || 'buffer';
      args['canvas'] = args['canvas'] || 'canvas';
      args['options'] = args['options'] || {
        'alpha': false,
        'antialias': true,
        'depth': true,
        'preserveDrawingBuffer': false,
        'premultipliedAlpha': false,
        'stencil': false,
      };
      args['target'] = args['target'] || 'canvas';

      engine.canvas.canvases['buffer'] =
        document.getElementById(args['buffer']).getContext('webgl', args['options']);
      engine.canvas.canvases['canvas'] =
        document.getElementById(args['canvas']).getContext('2d', args['options']);

      engine.webgl.resize({
        'target': args['target'],
      });
      eval(
        'window.onresize = function(event){'
        +   'engine.webgl.resize({'
        +     '\'target\': \'' + args['target'] + '\','
        +   '});'
        + '}'
      );

      engine.variables['_perspective'] = engine.math.matrix.camera({
        'height': engine.canvas.height,
        'width': engine.canvas.width,
      });

      engine.webgl.set.clearColor({
        'alpha': 1,
        'blue': 0,
        'green': 0,
        'red': 0,
        'target': args['target'],
      });

      engine.canvas.canvases[args['target']].clearDepth(1);
      engine.webgl.set.property({
        'property': 'CULL_FACE',
        'target': args['target'],
      });
      engine.webgl.set.property({
        'property': 'DEPTH_TEST',
        'target': args['target'],
      });
      engine.canvas.canvases[args['target']].depthFunc(
        engine.canvas.canvases[args['target']].LEQUAL
      );

      engine.webgl.set.fragmentShader({
        'target': args['target'],
      });
      engine.webgl.set.vertexShader({
        'target': args['target'],
      });

      engine.webgl.set.program({
        'key': 'shaders',
        'shaders': [
          engine.webgl.shaders['fragment'],
          engine.webgl.shaders['vertex'],
        ],
        'target': args['target'],
        'use': true,
      });

      /*
      engine.webgl.set.vertexAttribArray({
        'attribute': 'vec_vertexColor',
        'program': engine.webgl.programs['shaders'],
        'target': args['target'],
      });
      */

      engine.webgl.set.vertexAttribArray({
        'attribute': 'vec_vertexPosition',
        'program': engine.webgl.programs['shaders'],
        'target': args['target'],
      });

      engine.webgl.set.vertexAttribArray({
        'attribute': 'vec_texturePosition',
        'program': engine.webgl.programs['shaders'],
        'target': args['target'],
      });
  },

  // Pick something at x,y on screen.
  // Required args: x, y
  // Optional args: target
  'pick': function(args){
      args['target'] = args['target'] || 'canvas';

      // Picking code here.
  },

  // Resize the canvas and WebGL rendering instance.
  // Optional args: target
  'resize': function(args){
      args = args || {};
      args['target'] = args['target'] || 'canvas';

      engine.canvas.resize();

      engine.canvas.canvases[args['target']].viewportHeight = engine.canvas.height;
      engine.canvas.canvases[args['target']].viewportWidth = engine.canvas.width;

      engine.webgl.set.viewport({
        'target': args['target'],
      });
  },

  // Set functions.
  'set': {
    // Generate a buffer using
    //   gl.bindBuffer() and gl.bufferData() for vertex and color
    //   and return an object.
    // Required args: bufferType, colorData, textureData, vertexData
    // Optional args: target
    'buffer': function(args){
        args['target'] = args['target'] || 'canvas';

        /*
        var colorBuffer = engine.canvas.canvases[args['target']].createBuffer();
        engine.canvas.canvases[args['target']].bindBuffer(
          args['bufferType'],
          colorBuffer
        );
        engine.canvas.canvases[args['target']].bufferData(
          args['bufferType'],
          new Float32Array(args['colorData']),
          engine.canvas.canvases[args['target']].STATIC_DRAW
        );
        */

        var vertexBuffer = engine.canvas.canvases[args['target']].createBuffer();
        engine.canvas.canvases[args['target']].bindBuffer(
          args['bufferType'],
          vertexBuffer
        );
        engine.canvas.canvases[args['target']].bufferData(
          args['bufferType'],
          new Float32Array(args['vertexData']),
          engine.canvas.canvases[args['target']].STATIC_DRAW
        );

        var textureBuffer = engine.canvas.canvases[args['target']].createBuffer();
        engine.canvas.canvases[args['target']].bindBuffer(
          args['bufferType'],
          textureBuffer
        );
        engine.canvas.canvases[args['target']].bufferData(
          args['bufferType'],
          new Float32Array(args['textureData']),
          engine.canvas.canvases[args['target']].STATIC_DRAW
        );

        var indexBuffer = engine.canvas.canvases[args['target']].createBuffer();
        engine.canvas.canvases[args['target']].bindBuffer(
          args['bufferType'],
          indexBuffer
        );
        engine.canvas.canvases[args['target']].bufferData(
          args['bufferType'],
          new Uint16Array(args['indexData']),
          engine.canvas.canvases[args['target']].STATIC_DRAW
        );

        return {
          //'color': colorBuffer,
          'index': indexBuffer,
          'texture': textureBuffer,
          'vertex': vertexBuffer,
        }
    },

    // Set and store the current WebGL clearColor.
    // Required args: alpha, blue, green, red
    // Optional args: target
    'clearColor': function(args){
        args['target'] = args['target'] || 'canvas';

        engine.webgl.clearColor[args['target']] = [
          args['red'],
          args['green'],
          args['blue'],
          args['alpha'],
        ];
        engine.canvas.canvases[args['target']].clearColor(
          args['red'],
          args['green'],
          args['blue'],
          args['alpha']
        );
    },

    // Setup the fragment shader.
    // Optional args: target
    'fragmentShader': function(args){
        args = args || {};
        args['target'] = args['target'] || 'canvas';

        var source =
            'precision mediump float;'
        //+ 'varying float float_fogDistance;'
        //+ 'varying vec4 vec_fragmentColor;'
          + 'varying vec2 vec_textureCoord;'
          + 'uniform sampler2D sampler;'
          + 'void main(void){'
        /*
          +   'gl_FragColor = mix('
          +     'vec4('
          +       engine.webgl.clearColor[args['target']][0].toFixed(1) + ','
          +       engine.webgl.clearColor[args['target']][1].toFixed(1) + ','
          +       engine.webgl.clearColor[args['target']][2].toFixed(1) + ','
          +       engine.webgl.clearColor[args['target']][3].toFixed(1)
          +     '),'
          +     'vec_fragmentColor,'
          +     'clamp(exp(-0.001 * float_fogDistance * float_fogDistance), 0.0, 1.0)'
          +   ');'
        */
          +   'gl_FragColor = texture2D('
          +     'sampler,'
          +     'vec_textureCoord'
          +   ');'
          + '}';
        engine.webgl.set.shader({
          'key': 'fragment',
          'source': source,
          'target': args['target'],
          'type': engine.canvas.canvases[args['target']].FRAGMENT_SHADER,
        });
    },

    // Create, potentially use, and store a program.
    // Required args: key, shaders
    // Optional args: target, use
    'program': function(args){
        args['target'] = args['target'] || 'canvas';
        args['use'] = args['use'] || false;

        var program = engine.canvas.canvases[args['target']].createProgram();

        for(var shader in args['shaders']){
            engine.canvas.canvases[args['target']].attachShader(
              program,
              args['shaders'][shader]
            );
        }

        engine.canvas.canvases[args['target']].linkProgram(program);

        if(args['use']){
            engine.canvas.canvases[args['target']].useProgram(program);
        }

        engine.webgl.programs[args['key']] = program;
    },

    // Enable or disable a GL property.
    // Required args: property
    // Optional args: state, target
    'property': function(args){
        args['state'] = args['state'] === false
          ? 'disable'
          : 'enable';
        args['target'] = args['target'] || 'canvas';

        engine.canvas.canvases[args['target']][args['state']](
          engine.canvas.canvases[args['target']][args['property']]
        );
    },

    // Create and store a shader.
    // Required args: key, source, type
    // Optional args: target
    'shader': function(args){
        args['target'] = args['target'] || 'canvas';

        var shader = engine.canvas.canvases[args['target']].createShader(args['type']);
        engine.canvas.canvases[args['target']].shaderSource(
          shader,
          args['source']
        );
        engine.canvas.canvases[args['target']].compileShader(shader);

        engine.webgl.shaders[args['key']] = shader;
    },

    // Create a texture from a loaded Image().
    // Required args: entity
    // Optional args: image, target
    'texture2D': function(args){
        args['image'] = args['image'] || engine.variables['_fff.png'];
        args['target'] = args['target'] || 'canvas';

        engine.object.entities[args['entity']]['texture'] = engine.canvas.canvases[args['target']].createTexture();

        engine.object.entities[args['entity']]['image'] = new Image();
        engine.object.entities[args['entity']]['image'].onload = function(){
            engine.canvas.canvases[args['target']].bindTexture(
              engine.canvas.canvases[args['target']].TEXTURE_2D,
              engine.object.entities[args['entity']]['texture']
            );
            engine.canvas.canvases[args['target']].texImage2D(
              engine.canvas.canvases[args['target']].TEXTURE_2D,
              0,
              engine.canvas.canvases[args['target']].RGBA,
              engine.canvas.canvases[args['target']].RGBA,
              engine.canvas.canvases[args['target']].UNSIGNED_BYTE,
              engine.object.entities[args['entity']]['image']
            );
            engine.canvas.canvases[args['target']].texParameteri(
              engine.canvas.canvases[args['target']].TEXTURE_2D,
              engine.canvas.canvases[args['target']].TEXTURE_MAG_FILTER,
              engine.canvas.canvases[args['target']].NEAREST
            );
            engine.canvas.canvases[args['target']].texParameteri(
              engine.canvas.canvases[args['target']].TEXTURE_2D,
              engine.canvas.canvases[args['target']].TEXTURE_MIN_FILTER,
              engine.canvas.canvases[args['target']].NEAREST
            );
            /*
            engine.canvas.canvases[args['target']].generateMipmap(
              engine.canvas.canvases[args['target']].TEXTURE_2D
            );
            */

            engine.canvas.canvases[args['target']].bindTexture(
              engine.canvas.canvases[args['target']].TEXTURE_2D,
              void 0
            );
        }
        engine.object.entities[args['entity']]['image'].src = args['image'];
    },

    // gl.enableVertexAttribArray()
    // Required args: attribute, program
    // Optional args: target
    'vertexAttribArray': function(args){
        args['target'] = args['target'] || 'canvas';

        engine.webgl.attributes[args['attribute']] = engine.canvas.canvases[args['target']].getAttribLocation(
          args['program'],
          args['attribute']
        );
        engine.canvas.canvases[args['target']].enableVertexAttribArray(engine.webgl.attributes[args['attribute']]);
    },

    // Setup the vertex shader.
    // Optional args: target
    'vertexShader': function(args){
        args = args || {};
        args['target'] = args['target'] || 'canvas';

        var source =
            'attribute vec3 vec_vertexPosition;'
        //+ 'attribute vec4 vec_vertexColor;'
          + 'attribute vec2 vec_texturePosition;'
          + 'uniform mat4 mat_cameraMatrix;'
          + 'uniform mat4 mat_perspectiveMatrix;'
        //+ 'varying float float_fogDistance;'
        //+ 'varying vec4 vec_fragmentColor;'
          + 'varying vec2 vec_textureCoord;'
          + 'void main(void){'
          +   'gl_Position = mat_perspectiveMatrix * mat_cameraMatrix * vec4(vec_vertexPosition, 1.0);'
        //+   'vec_fragmentColor = vec_vertexColor;'
        //+   'float_fogDistance = length(gl_Position.xyz);'
          +   'vec_textureCoord = vec_texturePosition;'
          + '}';
        engine.webgl.set.shader({
          'key': 'vertex',
          'source': source,
          'target': args['target'],
          'type': engine.canvas.canvases[args['target']].VERTEX_SHADER,
        });
    },

    // gl.viewport()
    // Optional args: target
    'viewport': function(args){
        args = args || {};
        args['target'] = args['target'] || 'canvas';

        engine.canvas.canvases[args['target']].viewport(
          0,
          0,
          engine.canvas.canvases[args['target']].viewportWidth,
          engine.canvas.canvases[args['target']].viewportHeight
        );
    },
  },

  //-----------------------//

  // An object to hold WebGL attributes.
  'attributes': {},

  // An object to hold RGBA clearColor arrays.
  'clearColor': {},

  // Current rendering mode.
  'mode': false,

  // An object to hold programs.
  'programs': {},

  // An object to hold shaders.
  'shaders': {},
};
