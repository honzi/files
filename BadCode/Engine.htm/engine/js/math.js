// No dependencies.

'use strict';

var engine = engine || {};
engine.math = {
  // Calculate the average of n numbers
  //   and return a number.
  // Required args: numbers
  'average': function(args){
      var result = 0;
      for(var number in args['numbers']){
          result += args['numbers'][number];
      }
      result /= args['numbers'].length;

      return Number(result);
  },

  // Calculate the nth catalan number
  //   and return a number.
  // Required args: integer
  'catalan': function(args){
      if(args['integer'] <= 1){
          return 1;
      }

      var result = Math.floor(
        engine.math.factorial({'integer': args['integer'] * 2})
          / engine.math.factorial({'integer': args['integer'] + 1})
          / engine.math.factorial({'integer': args['integer']})
          + .5
      );

      return Number(result);
  },

  // Clamp a number to wrap between `minimum` and `maximum`
  // optionally wrap it
  //   and return a number.
  // Required args: maximum, minimum, value
  // Optional args: wrap
  'clamp': function(args){
      var difference = args['maximum'] - args['minimum'];
      args['wrap'] = args['wrap'] || false;

      if(args['wrap']){
          while(args['value'] < args['minimum']){
              args['value'] += difference;
          }
          while(args['value'] >= args['maximum']){
              args['value'] -= difference;
          }

      }else{
          args['value'] = Math.max(
            args['minimum'],
            args['value']
          );
          args['value'] = Math.min(
            args['maximum'],
            args['value']
          );
      }

      return Number(args['value']);
  },

  // Collision functions.
  'collision': {
    // Check if two circles are overlapping
    //   and return a boolean.
    // Required args: radius0, radius1, axes0, axes1
    'circle': function(args){
        var point0 = {};
        var point1 = {};
        for(var axis in args['axes0']){
            point0[axis] = args['axes0'][axis];
            point1[axis] = args['axes1'][axis];
        }

        var distance = engine.math.distance({
          'point0': point0,
          'point1': point1,
        });

        return Boolean(distance < args['radius0'] + args['radius1']);
    },

    // Check if two aligned rectangles are overlapping
    //   and return a boolean.
    // Required args: rectangle0, rectangle1
    'rectangle': function(args){
        var boolean = true;

        for(var axis in args['rectangle0']['position']){
            boolean = !(args['rectangle0']['position'][axis]
              + args['rectangle0']['size'][axis]
              <= args['rectangle1']['position'][axis]);
            if(boolean === false){
                break;
            }

            boolean = !(args['rectangle1']['position'][axis]
              + args['rectangle1']['size'][axis]
              <= args['rectangle0']['position'][axis]);
            if(boolean === false){
                break;
            }
        }

        return Boolean(boolean);
    },
  },

  // Convert one base to another base
  //   and return a string.
  // Required args: newbase, oldbase, value
  'convertBase': function(args){
      return String(Number.parseInt(args['value'], args['oldbase']).toString(args['newbase']));
  },

  // Convert degrees to radians
  //   and return a number.
  // Required args: degrees
  // Optional args: decimals
  'degreesToRadians': function(args){
      args['decimals'] = args['decimals'] !== void 0
        ? args['decimals']
        : engine.math.decimals;

      return engine.math.round({
        'decimals': args['decimals'],
        'value': Number(args['degrees'] * engine.math.degree),
      });
  },

  // Calculate the distance between two points
  //   and return a number.
  // Required args: point0, point1
  // Optional args: decimals
  'distance': function(args){
      args['decimals'] = args['decimals'] !== void 0
        ? args['decimals']
        : engine.math.decimals;

      var result = 0;

      for(var axis in args['point0']){
          result += Math.pow(
            args['point1'][axis] - args['point0'][axis],
            2
          );
      }

      return engine.math.round({
        'decimals': args['decimals'],
        'value': Number(Math.sqrt(result)),
      });
  },

  // Calculate the factorial of an integer
  //   and return an integer.
  // Required args: integer
  'factorial': function(args){
      var result = 1;

      for(var loopCounter = 2; loopCounter <= args['integer']; loopCounter++){
          result *= loopCounter;
      }

      return Number(result);
  },

  // Calculate the nth value of the Fibonacci sequence
  //   and return an integer.
  // Required args: integer
  'fibonacci': function(args){
      if(args['integer'] === 0){
          return 0;
      }

      var negative = false;
      if(args['integer'] < 0
        && args['integer'] % 2 === 0){
          negative = true;
      }
      args['integer'] = Math.abs(args['integer']);

      var values = [0, 1];
      var valuesCache = 0;

      var loopCounter = 0;
      while(loopCounter < args['integer'] - 1){
          valuesCache = values[1];
          values[1] = values[1] + values[0];
          values[0] = valuesCache;
          loopCounter++;
      }

      if(negative){
          values[1] *= -1;
      }

      return Number(values[1]);
  },

  // Matrix functions.
  'matrix': {
    // Add values from a matrix to another matrix,
    //   optionally multiplied by some value, such as -1.
    // Required args: from, matrix
    // Optional args: multiplier
    'add': function(args){
        if(!engine.math.matrix.compare({
            'from': args['from'],
            'matrix': args['matrix'],
          })){
            return false;
        }

        if(args['multiplier'] === void 0){
            args['multiplier'] = 1;
        }

        for(var key in args['from']['value']){
            args['matrix']['value'][key] += args['from']['value'][key] * args['multiplier'];
        }
    },

    // Create a 3D camera matrix
    //   and return an object.
    // Required args: height, width
    'camera': function(args){
        var matrix = engine.math.matrix.create({
          'length': 16,
        });
        var ratio = args['width'] / args['height'];

        engine.math.matrix.setValues({
          'matrix': matrix,
          'value': 0,
        });

        matrix['value'][0] = ratio / 2;
        matrix['value'][5] = ratio;
        matrix['value'][10] = -1;
        matrix['value'][11] = -1;
        matrix['value'][14] = -2;

        engine.math.matrix.round({
          'matrix': matrix,
        });

        return matrix;
    },

    // Clone an existing matrix
    //   and return an object.
    // Required args: matrix
    'clone': function(args){
        var newMatrix = engine.math.matrix.create({
          'length': args['matrix']['value'].length,
        });

        engine.math.matrix.copy({
          'from': args['matrix'],
          'matrix': newMatrix,
        });

        return newMatrix;
    },

    // Check if too matrices are equal
    //   and return a boolean.
    // Required args: from, matrix
    // Optional args: swapped
    'compare': function(args){
        args['swapped'] = args['swapped'] || false;

        var from_first = 'height';
        var from_last = 'width';

        if(args['swapped']){
            from_first = 'width';
            from_last = 'height';
        }

        return Boolean(
          args['matrix']['height'] === args['from'][from_first]
            && args['matrix']['width'] === args['from'][from_last]
        );
    },

    // Copy the values from an existing matrix onto another existing matrix.
    // Required args: from, matrix
    'copy': function(args){
        if(!engine.math.matrix.compare({
            'from': args['from'],
            'matrix': args['matrix'],
          })){
            return false;
        }

        for(var key in args['from']['value']){
            args['matrix']['value'][key] = args['from']['value'][key];
        }
    },

    // Create a new matrix
    //   and return an object.
    // Required args: length
    'create': function(args){
        return {
          'height': Math.sqrt(args['length']),
          'value': new Float32Array(args['length']),
          'width': Math.sqrt(args['length']),
        };
    },

    // Get a value at a specific height and width
    //   and return a number.
    // Required args: matrix
    // Optional args: x, y
    'getValue': function(args){
        args['x'] = args['x'] || 0;
        args['y'] = args['y'] || 0;

        if(args['x'] < args['matrix']['width']
          && args['y'] < args['matrix']['height']){
            return Number(
              args['matrix']['value'][
                args['y'] * args['matrix']['height']
                  + args['x']
              ]
            );
        }
    },

    // Identityify a matrix.
    // Required args: matrix
    'identity': function(args){
        for(var key in args['matrix']['value']){
            args['matrix']['value'][key] =
              key % (args['matrix']['width'] + 1) === 0
                ? 1
                : 0;
        }
    },

    // Multiply values from a matrix with/to another matrix.
    // Required args: from, matrix
    'multiply': function(args){
        if(!engine.math.matrix.compare({
            'from': args['from'],
            'matrix': args['matrix'],
            'swapped': true,
          })){
            return false;
        }

        var matrixCache = engine.math.matrix.clone({
          'matrix': args['matrix'],
        });

        /* 2x2 matrix. */
        if(args['matrix']['width'] === 2){
            args['matrix']['value'][0] =
              args['from']['value'][0] * matrixCache['value'][0]
              + args['from']['value'][1] * matrixCache['value'][2];
            args['matrix']['value'][1] =
              args['from']['value'][0] * matrixCache['value'][1]
              + args['from']['value'][1] * matrixCache['value'][3];

            args['matrix']['value'][2] =
              args['from']['value'][2] * matrixCache['value'][0]
              + args['from']['value'][3] * matrixCache['value'][2];
            args['matrix']['value'][3] =
              args['from']['value'][2] * matrixCache['value'][1]
              + args['from']['value'][3] * matrixCache['value'][3];

        /* 3x3 matrix. */
        }else if (args['matrix']['width'] === 3){
            args['matrix']['value'][0] =
              args['from']['value'][0] * matrixCache['value'][0]
              + args['from']['value'][1] * matrixCache['value'][3]
              + args['from']['value'][2] * matrixCache['value'][6];
            args['matrix']['value'][1] =
              args['from']['value'][0] * matrixCache['value'][1]
              + args['from']['value'][1] * matrixCache['value'][4]
              + args['from']['value'][2] * matrixCache['value'][7];
            args['matrix']['value'][2] =
              args['from']['value'][0] * matrixCache['value'][2]
              + args['from']['value'][1] * matrixCache['value'][5]
              + args['from']['value'][2] * matrixCache['value'][8];

            args['matrix']['value'][3] =
              args['from']['value'][3] * matrixCache['value'][0]
              + args['from']['value'][4] * matrixCache['value'][3]
              + args['from']['value'][5] * matrixCache['value'][6];
            args['matrix']['value'][4] =
              args['from']['value'][3] * matrixCache['value'][1]
              + args['from']['value'][4] * matrixCache['value'][4]
              + args['from']['value'][5] * matrixCache['value'][7];
            args['matrix']['value'][5] =
              args['from']['value'][3] * matrixCache['value'][2]
              + args['from']['value'][4] * matrixCache['value'][5]
              + args['from']['value'][5] * matrixCache['value'][8];

            args['matrix']['value'][6] =
              args['from']['value'][6] * matrixCache['value'][0]
              + args['from']['value'][7] * matrixCache['value'][3]
              + args['from']['value'][8] * matrixCache['value'][6];
            args['matrix']['value'][7] =
              args['from']['value'][6] * matrixCache['value'][1]
              + args['from']['value'][7] * matrixCache['value'][4]
              + args['from']['value'][8] * matrixCache['value'][7];
            args['matrix']['value'][8] =
              args['from']['value'][6] * matrixCache['value'][2]
              + args['from']['value'][7] * matrixCache['value'][5]
              + args['from']['value'][8] * matrixCache['value'][8];

        /* 4x4 matrix. */
        }else if (args['matrix']['width'] === 4){
            args['matrix']['value'][0] =
              args['from']['value'][0] * matrixCache['value'][0]
              + args['from']['value'][1] * matrixCache['value'][4]
              + args['from']['value'][2] * matrixCache['value'][8]
              + args['from']['value'][3] * matrixCache['value'][12];
            args['matrix']['value'][1] =
              args['from']['value'][0] * matrixCache['value'][1]
              + args['from']['value'][1] * matrixCache['value'][5]
              + args['from']['value'][2] * matrixCache['value'][9]
              + args['from']['value'][3] * matrixCache['value'][13];
            args['matrix']['value'][2] =
              args['from']['value'][0] * matrixCache['value'][2]
              + args['from']['value'][1] * matrixCache['value'][6]
              + args['from']['value'][2] * matrixCache['value'][10]
              + args['from']['value'][3] * matrixCache['value'][14];
            args['matrix']['value'][3] =
              args['from']['value'][0] * matrixCache['value'][3]
              + args['from']['value'][1] * matrixCache['value'][7]
              + args['from']['value'][2] * matrixCache['value'][11]
              + args['from']['value'][3] * matrixCache['value'][15];

            args['matrix']['value'][4] =
              args['from']['value'][4] * matrixCache['value'][0]
              + args['from']['value'][5] * matrixCache['value'][4]
              + args['from']['value'][6] * matrixCache['value'][8]
              + args['from']['value'][7] * matrixCache['value'][12];
            args['matrix']['value'][5] =
              args['from']['value'][4] * matrixCache['value'][1]
              + args['from']['value'][5] * matrixCache['value'][5]
              + args['from']['value'][6] * matrixCache['value'][9]
              + args['from']['value'][7] * matrixCache['value'][13];
            args['matrix']['value'][6] =
              args['from']['value'][4] * matrixCache['value'][2]
              + args['from']['value'][5] * matrixCache['value'][6]
              + args['from']['value'][6] * matrixCache['value'][10]
              + args['from']['value'][7] * matrixCache['value'][14];
            args['matrix']['value'][7] =
              args['from']['value'][4] * matrixCache['value'][3]
              + args['from']['value'][5] * matrixCache['value'][7]
              + args['from']['value'][6] * matrixCache['value'][11]
              + args['from']['value'][7] * matrixCache['value'][15];

            args['matrix']['value'][8] =
              args['from']['value'][8] * matrixCache['value'][0]
              + args['from']['value'][9] * matrixCache['value'][4]
              + args['from']['value'][10] * matrixCache['value'][8]
              + args['from']['value'][11] * matrixCache['value'][12];
            args['matrix']['value'][9] =
              args['from']['value'][8] * matrixCache['value'][1]
              + args['from']['value'][9] * matrixCache['value'][5]
              + args['from']['value'][10] * matrixCache['value'][9]
              + args['from']['value'][11] * matrixCache['value'][13];
            args['matrix']['value'][10] =
              args['from']['value'][8] * matrixCache['value'][2]
              + args['from']['value'][9] * matrixCache['value'][6]
              + args['from']['value'][10] * matrixCache['value'][10]
              + args['from']['value'][11] * matrixCache['value'][14];
            args['matrix']['value'][11] =
              args['from']['value'][8] * matrixCache['value'][3]
              + args['from']['value'][9] * matrixCache['value'][7]
              + args['from']['value'][10] * matrixCache['value'][11]
              + args['from']['value'][11] * matrixCache['value'][15];

            args['matrix']['value'][12] =
              args['from']['value'][12] * matrixCache['value'][0]
              + args['from']['value'][13] * matrixCache['value'][4]
              + args['from']['value'][14] * matrixCache['value'][8]
              + args['from']['value'][15] * matrixCache['value'][12];
            args['matrix']['value'][13] =
              args['from']['value'][12] * matrixCache['value'][1]
              + args['from']['value'][13] * matrixCache['value'][5]
              + args['from']['value'][14] * matrixCache['value'][9]
              + args['from']['value'][15] * matrixCache['value'][13];
            args['matrix']['value'][14] =
              args['from']['value'][12] * matrixCache['value'][2]
              + args['from']['value'][13] * matrixCache['value'][6]
              + args['from']['value'][14] * matrixCache['value'][10]
              + args['from']['value'][15] * matrixCache['value'][14];
            args['matrix']['value'][15] =
              args['from']['value'][12] * matrixCache['value'][3]
              + args['from']['value'][13] * matrixCache['value'][7]
              + args['from']['value'][14] * matrixCache['value'][11]
              + args['from']['value'][15] * matrixCache['value'][15];
        }

        engine.math.matrix.round({
          'matrix': args['matrix'],
        });
    },

    // Rotatify a matrix.
    // Required args: dimensions, matrix
    'rotate': function(args){
        /* Rotate X axis. */
        var matrixCache = engine.math.matrix.clone({
          'matrix': args['matrix'],
        });
        var cosine = Math.cos(args['dimensions'][0]);
        var sine = Math.sin(args['dimensions'][0]);

        args['matrix']['value'][4] = matrixCache['value'][4] * cosine + matrixCache['value'][8] * sine;
        args['matrix']['value'][5] = matrixCache['value'][5] * cosine + matrixCache['value'][9] * sine;
        args['matrix']['value'][6] = matrixCache['value'][6] * cosine + matrixCache['value'][10] * sine;
        args['matrix']['value'][7] = matrixCache['value'][7] * cosine + matrixCache['value'][11] * sine;
        args['matrix']['value'][8] = matrixCache['value'][8] * cosine - matrixCache['value'][4] * sine;
        args['matrix']['value'][9] = matrixCache['value'][9] * cosine - matrixCache['value'][5] * sine;
        args['matrix']['value'][10] = matrixCache['value'][10] * cosine - matrixCache['value'][6] * sine;
        args['matrix']['value'][11] = matrixCache['value'][11] * cosine - matrixCache['value'][7] * sine;

        /* Rotate Y axis. */
        engine.math.matrix.copy({
          'from': args['matrix'],
          'matrix': matrixCache,
        });
        cosine = Math.cos(args['dimensions'][1]);
        sine = Math.sin(args['dimensions'][1]);

        args['matrix']['value'][0] = matrixCache['value'][0] * cosine - matrixCache['value'][8] * sine;
        args['matrix']['value'][1] = matrixCache['value'][1] * cosine - matrixCache['value'][9] * sine;
        args['matrix']['value'][2] = matrixCache['value'][2] * cosine - matrixCache['value'][10] * sine;
        args['matrix']['value'][3] = matrixCache['value'][3] * cosine - matrixCache['value'][11] * sine;
        args['matrix']['value'][8] = matrixCache['value'][8] * cosine + matrixCache['value'][0] * sine;
        args['matrix']['value'][9] = matrixCache['value'][9] * cosine + matrixCache['value'][1] * sine;
        args['matrix']['value'][10] = matrixCache['value'][10] * cosine + matrixCache['value'][2] * sine;
        args['matrix']['value'][11] = matrixCache['value'][11] * cosine + matrixCache['value'][3] * sine;

        /* Rotate Z axis. */
        engine.math.matrix.copy({
          'from': args['matrix'],
          'matrix': matrixCache,
        });
        cosine = Math.cos(args['dimensions'][2]);
        sine = Math.sin(args['dimensions'][2]);

        args['matrix']['value'][0] = matrixCache['value'][0] * cosine + matrixCache['value'][4] * sine;
        args['matrix']['value'][1] = matrixCache['value'][1] * cosine + matrixCache['value'][5] * sine;
        args['matrix']['value'][2] = matrixCache['value'][2] * cosine + matrixCache['value'][6] * sine;
        args['matrix']['value'][3] = matrixCache['value'][3] * cosine + matrixCache['value'][7] * sine;
        args['matrix']['value'][4] = matrixCache['value'][4] * cosine - matrixCache['value'][0] * sine;
        args['matrix']['value'][5] = matrixCache['value'][5] * cosine - matrixCache['value'][1] * sine;
        args['matrix']['value'][6] = matrixCache['value'][6] * cosine - matrixCache['value'][2] * sine;
        args['matrix']['value'][7] = matrixCache['value'][7] * cosine - matrixCache['value'][3] * sine;
    },

    // Round all values in a matrix.
    // Required args: matrix
    // Optional args: decimals
    'round': function(args){
        args['decimals'] = args['decimals'] !== void 0
          ? args['decimals']
          : engine.math.decimals;

        for(var key in args['matrix']['value']){
            args['matrix']['value'][key] = engine.math.round({
              'decimals': args['decimals'],
              'value': args['matrix']['value'][key],
            });
        }
    },

    // Scalify a matrix.
    // Required args: dimensions, matrix
    'scale': function(args){
        for(var dimension in args['dimensions']){
            var loopCounter = 0;
            var offset = dimension * args['matrix']['width'];
            while(loopCounter < args['matrix']['width']){
                args['matrix']['value'][loopCounter + offset] *= args['dimensions'][dimension];
                loopCounter++;
            }
        }

        engine.math.matrix.round({
          'matrix': args['matrix'],
        });
    },

    // Set all values in a matrix to the specified value.
    // Required args: matrix, value
    'setValues': function(args){
        for(var key in args['matrix']['value']){
            args['matrix']['value'][key] = args['value'];
        }
    },

    // Translatify a matrix.
    // Required args: dimensions, matrix
    'translate': function(args){
        args['matrix']['value'][12] -= args['matrix']['value'][0] * args['dimensions'][0]
          + args['matrix']['value'][4] * args['dimensions'][1]
          + args['matrix']['value'][8] * args['dimensions'][2];
        args['matrix']['value'][13] -= args['matrix']['value'][1] * args['dimensions'][0]
          + args['matrix']['value'][5] * args['dimensions'][1]
          + args['matrix']['value'][9] * args['dimensions'][2];
        args['matrix']['value'][14] -= args['matrix']['value'][2] * args['dimensions'][0]
          + args['matrix']['value'][6] * args['dimensions'][1]
          + args['matrix']['value'][10] * args['dimensions'][2];
        args['matrix']['value'][15] -= args['matrix']['value'][3] * args['dimensions'][0]
          + args['matrix']['value'][7] * args['dimensions'][1]
          + args['matrix']['value'][11] * args['dimensions'][2];

        engine.math.matrix.round({
          'matrix': args['matrix'],
        });
    },

    // Transposify a matrix.
    // Required args: matrix
    'transpose': function(args){
        var matrixCache = engine.math.matrix.clone({
          'matrix': args['matrix'],
        });

        /* 2x2 matrix. */
        if(args['matrix']['width'] === 2){
            /* args['matrix']['value'][0] = matrixCache['value'][0]; */
            args['matrix']['value'][1] = matrixCache['value'][2];
            args['matrix']['value'][2] = matrixCache['value'][1];
            /* args['matrix']['value'][3] = matrixCache['value'][3]; */

        /* 3x3 matrix. */
        }else if (args['matrix']['width'] === 3){
            /* args['matrix']['value'][0] = matrixCache['value'][0]; */
            args['matrix']['value'][1] = matrixCache['value'][3];
            args['matrix']['value'][2] = matrixCache['value'][6];
            args['matrix']['value'][3] = matrixCache['value'][1];
            /* args['matrix']['value'][4] = matrixCache['value'][4]; */
            args['matrix']['value'][5] = matrixCache['value'][7];
            args['matrix']['value'][6] = matrixCache['value'][2];
            args['matrix']['value'][7] = matrixCache['value'][5];
            /* args['matrix']['value'][8] = matrixCache['value'][8]; */

        /* 4x4 matrix. */
        }else if (args['matrix']['width'] === 4){
            /* args['matrix']['value'][0] = matrixCache['value'][0]; */
            args['matrix']['value'][1] = matrixCache['value'][4];
            args['matrix']['value'][2] = matrixCache['value'][8];
            args['matrix']['value'][3] = matrixCache['value'][12];
            args['matrix']['value'][4] = matrixCache['value'][1];
            /* args['matrix']['value'][5] = matrixCache['value'][5]; */
            args['matrix']['value'][6] = matrixCache['value'][9];
            args['matrix']['value'][7] = matrixCache['value'][13];
            args['matrix']['value'][8] = matrixCache['value'][2];
            args['matrix']['value'][9] = matrixCache['value'][6];
            /* args['matrix']['value'][10] = matrixCache['value'][10]; */
            args['matrix']['value'][11] = matrixCache['value'][14];
            args['matrix']['value'][12] = matrixCache['value'][3];
            args['matrix']['value'][13] = matrixCache['value'][7];
            args['matrix']['value'][14] = matrixCache['value'][11];
            /* args['matrix']['value'][15] = matrixCache['value'][15]; */
        }
    },
  },

  // Calculate the Mersenne number of a number
  //   and return an integer.
  // Required args: value
  'mersenne': function(args){
      return Number(Math.pow(2, args['value']) - 1);
  },

  // Convert radians to degrees
  //   and return a number.
  // Required args: radians
  // Optional args: decimals
  'radiansToDegrees': function(args){
      args['decimals'] = args['decimals'] !== void 0
        ? args['decimals']
        : engine.math.decimals;

      return engine.math.round({
        'decimals': args['decimals'],
        'value': Number(args['radians'] * engine.math.radian),
      });
  },

  // Round a number to a specific decimal place.
  // Required args: value
  // Optional args: decimals, type
  'round': function(args){
      args['decimals'] = args['decimals'] !== void 0
        ? args['decimals']
        : engine.math.decimals;
      args['type'] = args['type'] || 'round';

      if(String(args['value']).indexOf('e') >= 0){
          args['value'] = Number(args['value'].toFixed(args['decimals']));
      }

      return Number(
        Math[args['type']](args['value'] + 'e+' + args['decimals'])
          + 'e-' + args['decimals']
      );
  },

  // Volume functions.
  'volume': {
    // Calculate the volume of a cone
    //   and return a number.
    // Required args: height, radius0
    // Optional args: decimals, radius1
    'cone': function(args){
        args['decimals'] = args['decimals'] !== void 0
          ? args['decimals']
          : engine.math.decimals;
        args['radius1'] = args['radius1'] || args['radius0'];

        return engine.math.round({
          'decimals': args['decimals'],
          'value': Number(
            (Math.PI * args['height']) / 3
              * (
                Math.pow(args['radius0'], 2)
                + args['radius0'] * args['radius1']
                + Math.pow(args['radius1'], 2)
              )
          ),
        });
    },

    // Calculate the volume of a rectangle
    //   and return a number.
    // Required args: axes
    // Optional args: decimals
    'rectangle': function(args){
        args['decimals'] = args['decimals'] !== void 0
          ? args['decimals']
          : engine.math.decimals;

        var result = 0;

        for(var axis in args['axes']){
            if(result === 0){
                result = args['axes'][axis];

            }else{
                result *= args['axes'][axis];
            }
        }

        return engine.math.round({
          'decimals': args['decimals'],
          'value': Number(result),
        });
    },
  },

  //-----------------------//

  // Default number of decimals to round to.
  'decimals': 7,

  // Degree constant.
  'degree': Math.PI / 180,

  // Radian constant.
  'radian': 180 / Math.PI,

  // Tau constant.
  'tau': Math.PI * 2,
};
