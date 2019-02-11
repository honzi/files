// Requires:
// * math.js

'use strict';

var engine = engine || {};
engine.camera = {
  // Move the camera forward at the specified speed.
  // Optional args: axis, dy, speed, strafe
  'move': function(args){
      args = args || {};
      args['axis'] = args['axis'] || 'y';
      args['dy'] = args['dy'] !== void 0
        ? args['dy']
        : false;
      args['speed'] = args['speed'] !== void 0
        ? args['speed']
        : 1;
      args['strafe'] = args['strafe'] || false;
      var radians = engine.math.degreesToRadians({
        'degrees': engine.camera.rotation[args['axis']] + (args['strafe'] ? 90 : 0),
      });

      engine.camera.position['x'] += args['speed'] * Math.sin(radians);
      if(args['dy'] !== false){
          engine.camera.position['y'] += args['dy'];
          engine.camera.position['z'] += args['speed'] * Math.cos(radians);

      }else{
          engine.camera.position['y'] += args['speed'] * Math.cos(radians);
      }
  },

  // Reset the camera.
  'reset': function(){
      for(var position in engine.camera.position){
          engine.camera.position[position] = 0;
      }
      for(var rotation in engine.camera.rotation){
          engine.camera.rotation[rotation] = 0;
      }
  },

  // Rotate the camera by the specified values.
  // Required args: dimensions
  'rotate': function(args){
      for(var dimension in args['dimensions']){
          engine.camera.rotation[dimension] = engine.math.clamp({
            'maximum': 360,
            'minimum': 0,
            'value': engine.camera.rotation[dimension] + args['dimensions'][dimension],
            'wrap': true,
          });
      }
  },

  // Set functions.
  'set': {
    // Set the number of dimensions.
    // Required args: dimensions
    'dimensions': function(args){
        engine.camera.position = {};
        engine.camera.rotation = {};

        for(var dimension in args['dimensions']){
            engine.camera.position[dimension] = 0;
            engine.camera.rotation[dimension] = 0;
        }
    },

    // Set the camera to the specified position.
    // Required args: dimensions
    'position': function(dimensions){
        for(var dimension in args['dimensions']){
            engine.camera.position[dimension] = args['dimensions'][dimension];
        }
    },

    // Set the camera to the specified rotation.
    // Required args: dimensions
    'rotation': function(dimensions){
        for(var dimension in args['dimensions']){
            engine.camera.rotation[dimension] = engine.math.clamp({
              'maximum': 360,
              'minimum': 0,
              'value': args['dimensions'][dimension],
              'wrap': true,
            });
        }
    },
  },

  // Move the camera by the specified values.
  // Required args: dimensions
  'translate': function(args){
      for(var dimension in args['dimensions']){
          engine.camera.position[dimension] += args['dimensions'][dimension];
      }
  },

  //-----------------------//

  // An object to hold camera position on each axis.
  'position': {},

  // An object to hold camera rotation around each axis.
  'rotation': {},
};
