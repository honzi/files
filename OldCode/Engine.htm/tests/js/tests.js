'use strict';

engine.test({
  'expected': 42,
  'log': 'engine.math.average()',
  'todo': function(){
      return engine.math.average({
        'numbers': [
          23,
          45,
          58,
        ],
      });
  },
});

engine.test({
  'expected': 16796,
  'log': 'engine.math.catalan()',
  'todo': function(){
      return engine.math.catalan({
        'integer': 10,
      });
  },
});

engine.test({
  'expected': 42,
  'log': 'engine.math.clamp() with wrap',
  'todo': function(){
      return engine.math.clamp({
        'maximum': 100,
        'minimum': 0,
        'value': 142,
        'wrap': true,
      });
  },
});

engine.test({
  'expected': 100,
  'log': 'engine.math.clamp() without wrap',
  'todo': function(){
      return engine.math.clamp({
        'maximum': 100,
        'minimum': 0,
        'value': 142,
      });
  },
});

engine.test({
  'expected': true,
  'log': 'two dimensional engine.math.collision.circle()',
  'todo': function(){
      return engine.math.collision.circle({
        'radius0': 5,
        'radius1': 5,
        'axes0': {
          'x': 0,
          'y': 0,
        },
        'axes1': {
          'x': 4,
          'y': 0,
        },
      });
  },
});

engine.test({
  'expected': true,
  'log': 'two dimensional engine.math.collision.rectangle()',
  'todo': function(){
      return engine.math.collision.rectangle({
        'rectangle0': {
          'position': {
            'x': 0,
            'y': 0,
          },
          'size': {
            'x': 5,
            'y': 5,
          },
        },
        'rectangle1': {
          'position': {
            'x': 4,
            'y': 4,
          },
          'size': {
            'x': 5,
            'y': 5,
          },
        },
      });
  },
});

engine.test({
  'expected': true,
  'log': 'three dimensional engine.math.collision.rectangle()',
  'todo': function(){
      return engine.math.collision.rectangle({
        'rectangle0': {
          'position': {
            'x': 0,
            'y': 0,
            'z': 0,
          },
          'size': {
            'x': 5,
            'y': 5,
            'z': 5,
          },
        },
        'rectangle1': {
          'position': {
            'x': 4,
            'y': 4,
            'z': 4,
          },
          'size': {
            'x': 5,
            'y': 5,
            'z': 5,
          },
        },
      });
  },
});

engine.test({
  'expected': '2s',
  'log': 'engine.math.convertBase()',
  'todo': function(){
      return engine.math.convertBase({
        'newbase': 36,
        'oldbase': 10,
        'value': 100,
      });
  },
});

engine.test({
  'expected': 4.2236968,
  'log': 'engine.math.degreesToRadians()',
  'todo': function(){
      return engine.math.degreesToRadians({
        'degrees': 242,
      });
  },
});

engine.test({
  'expected': 5,
  'log': 'one dimensional engine.math.disance()',
  'todo': function(){
      return engine.math.distance({
        'point0': {
          'x': 0,
        },
        'point1': {
          'x': 5,
        },
      });
  },
});

engine.test({
  'expected': 7.0710678,
  'log': 'two dimensional engine.math.disance()',
  'todo': function(){
      return engine.math.distance({
        'point0': {
          'x': 0,
          'y': 0,
        },
        'point1': {
          'x': 5,
          'y': 5,
        },
      });
  },
});

engine.test({
  'expected': 3628800,
  'log': 'engine.math.factorial()',
  'todo': function(){
      return engine.math.factorial({
        'integer': 10,
      });
  },
});

engine.test({
  'expected': 55,
  'log': 'engine.math.fibonacci()',
  'todo': function(){
      return engine.math.fibonacci({
        'integer': 10,
      });
  },
});

engine.test({
  'expected': [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  'log': 'addition engine.math.matrix.add()',
  'todo': function(){
      var matrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.setValues({
        'matrix': matrix,
        'value': 3,
      });

      var newmatrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.setValues({
        'matrix': newmatrix,
        'value': 2,
      });

      engine.math.matrix.add({
        'from': matrix,
        'matrix': newmatrix,
      });

      return newmatrix['value'];
  },
});

engine.test({
  'expected': [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  'log': 'multiplication engine.math.matrix.add()',
  'todo': function(){
      var matrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.setValues({
        'matrix': matrix,
        'value': 3,
      });

      var newmatrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.add({
        'from': matrix,
        'matrix': newmatrix,
        'multiplier': 2,
      });

      return newmatrix['value'];
  },
});

engine.test({
  'expected': [0.3125, 0, 0, 0, 0, 0.625, 0, 0, 0, 0, -1, -1, 0, 0, -2, 0],
  'log': 'engine.math.matrix.camera()',
  'todo': function(){
      var matrix = engine.math.matrix.camera({
        'height': 1280,
        'width': 800,
      });

      return matrix['value'];
  },
});

engine.test({
  'expected': [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  'log': 'engine.math.matrix.clone()',
  'todo': function(){
      var matrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.setValues({
        'matrix': matrix,
        'value': 2,
      });

      var newmatrix = engine.math.matrix.clone({
        'matrix': matrix,
      });

      return newmatrix['value'];
  },
});

engine.test({
  'expected': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  'log': 'engine.math.matrix.copy()',
  'todo': function(){
      var matrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.identity({
        'matrix': matrix,
      });

      var newmatrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.copy({
        'from': matrix,
        'matrix': newmatrix,
      });

      return newmatrix['value'];
  },
});

engine.test({
  'expected': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'log': 'engine.math.matrix.create()',
  'todo': function(){
      var matrix = engine.math.matrix.create({
        'length': 16,
      });

      return matrix['value'];
  },
});

engine.test({
  'expected': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  'log': 'engine.math.matrix.identity()',
  'todo': function(){
      var matrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.identity({
        'matrix': matrix,
      });

      return matrix['value'];
  },
});

engine.test({
  'expected': [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  'log': 'engine.math.matrix.multiply()',
  'todo': function(){
      var matrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.identity({
        'matrix': matrix,
      });

      var newmatrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.setValues({
        'matrix': newmatrix,
        'value': 5,
      });

      engine.math.matrix.multiply({
        'from': matrix,
        'matrix': newmatrix,
      });

      return newmatrix['value'];
  },
});

engine.test({
  'expected': [-1.9615310264953223e-8, -2.6794898744242346e-8, -1, 0, -1, -4.641020723283873e-8, 1.9615312041310062e-8, 0, -4.641020723283873e-8, 1, -2.6794896967885506e-8, -0, 0, 0, 0, 1],
  'log': 'engine.math.matrix.rotate()',
  'todo': function(){
      var matrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.identity({
        'matrix': matrix,
      });

      engine.math.matrix.rotate({
        'dimensions': [
          engine.math.degreesToRadians({
            'degrees': 90,
          }),
          engine.math.degreesToRadians({
            'degrees': 180,
          }),
          engine.math.degreesToRadians({
            'degrees': 270,
          }),
        ],
        'matrix': matrix,
      });

      return matrix['value'];
  },
});

engine.test({
  'expected': [5, 0, 0, 0, 0, 4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 2],
  'log': 'engine.math.matrix.scale()',
  'todo': function(){
      var matrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.identity({
        'matrix': matrix,
      });

      engine.math.matrix.scale({
        'dimensions': [
          5,
          4,
          3,
          2,
        ],
        'matrix': matrix,
      });

      return matrix['value'];
  },
});

engine.test({
  'expected': [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  'log': 'engine.math.matrix.setValues()',
  'todo': function(){
      var matrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.setValues({
        'matrix': matrix,
        'value': 2,
      });

      return matrix['value'];
  },
});

engine.test({
  'expected': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -11, -11, -11, -11],
  'log': 'engine.math.matrix.translate()',
  'todo': function(){
      var matrix = engine.math.matrix.create({
        'length': 16,
      });

      engine.math.matrix.setValues({
        'matrix': matrix,
        'value': 1,
      });

      engine.math.matrix.translate({
        'dimensions': [
          5,
          4,
          3,
        ],
        'matrix': matrix,
      });

      return matrix['value'];
  },
});

engine.test({
  'expected': [0.3125, 0, 0, 0, 0, 0.625, 0, 0, 0, 0, -1, -2, 0, 0, -1, 0],
  'log': 'engine.math.matrix.transpose()',
  'todo': function(){
      var matrix = engine.math.matrix.camera({
        'height': 1280,
        'width': 800,
      });

      engine.math.matrix.transpose({
        'matrix': matrix,
      });

      return matrix['value'];
  },
});

engine.test({
  'expected': 1023,
  'log': 'engine.math.mersenne()',
  'todo': function(){
      return engine.math.mersenne({
        'value': 10,
      });
  },
});

engine.test({
  'expected': 242,
  'log': 'engine.math.radiansToDegrees()',
  'todo': function(){
      return engine.math.radiansToDegrees({
        'radians': 4.223696789826278,
      });
  },
});

engine.test({
  'expected': 5.6,
  'log': 'engine.math.round() of type "ceil"',
  'todo': function(){
      return engine.math.round({
        'decimals': 1,
        'type': 'ceil',
        'value': 5.54,
      });
  },
});

engine.test({
  'expected': 5.5,
  'log': 'engine.math.round() of type "floor"',
  'todo': function(){
      return engine.math.round({
        'decimals': 1,
        'type': 'floor',
        'value': 5.56,
      });
  },
});

engine.test({
  'expected': 5.6,
  'log': 'engine.math.round() of type "round"',
  'todo': function(){
      return engine.math.round({
        'decimals': 1,
        'value': 5.55,
      });
  },
});

engine.test({
  'expected': 31.4159265,
  'log': '1 radius engine.math.volume.cone()',
  'todo': function(){
      return engine.math.volume.cone({
        'height': 10,
        'radius0': 1,
      });
  },
});

engine.test({
  'expected': 324.6312409,
  'log': '2 radii engine.math.volume.cone()',
  'todo': function(){
      return engine.math.volume.cone({
        'height': 10,
        'radius0': 1,
        'radius1': 5,
      });
  },
});

engine.test({
  'expected': 50,
  'log': 'two dimensional engine.math.volume.rectangle()',
  'todo': function(){
      return engine.math.volume.rectangle({
        'axes': {
          'x': 5,
          'y': 10,
        },
      });
  },
});
