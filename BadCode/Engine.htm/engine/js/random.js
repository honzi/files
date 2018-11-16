// No dependencies.

'use strict';

var engine = engine || {};
engine.random = {
  // Generate a random boolean
  //   and return a boolean.
  'boolean': function(){
      return Boolean(engine.random.number({
        'decimals': 0,
        'minimum': 0,
        'range': 2,
        'seed': void 0,
      }) === 1);
  },

  // Random color functions.
  'color': {
    // Generate a random hexadecimal color
    //   and return a string.
    // Optional args: seed
    'hex': function(args){
        args = args || {};
        args['seed'] = args['seed'] || void 0;

        var color = engine.random.color.rgb({
          'seed': args['seed'],
        });

        var blue = '0' + color['blue'].toString(16);
        var green = '0' + color['green'].toString(16);
        var red = '0' + color['red'].toString(16);

        var result = red.slice(-2) + green.slice(-2) + blue.slice(-2);

        return String(result);
    },

    // Generate a random RedGreenBlue color
    //   and return an object.
    // Optional args: seed
    'rgb': function(args){
        var args = args || {};
        args['seed'] = args['seed'] || void 0;

        return {
          blue: engine.random.number({
            'decimals': 0,
            'minimum': 0,
            'range': 256,
            'seed': args['seed'],
          }),
          green: engine.random.number({
            'decimals': 0,
            'minimum': 0,
            'range': 256,
            'seed': args['seed'],
          }),
          red: engine.random.number({
            'decimals': 0,
            'minimum': 0,
            'range': 256,
            'seed': args['seed'],
          }),
        };
    },
  },

  // Get a random item in an array
  //   and return the selected item.
  // Required args: array
  // Optional args: seed
  'item': function(args){
      args['seed'] = args['seed'] || void 0;

      return args['array'][engine.random.number({
        'decimals': 0,
        'minimum': 0,
        'range': args['array'].length - 1,
        'seed': args['seed'],
      })];
  },

  // Get the key of a random property in an object
  //   and return a string.
  // Required args: object
  // Optional args: seed
  'key': function(args){
      args['seed'] = args['seed'] || void 0;
      var keys = Object.keys(args['object']);

      return String(
        keys[engine.random.number({
          'decimals': 0,
          'minimum': 0,
          'range': keys.length - 1,
          'seed': args['seed'],
        })]
      );
  },

  // Generate a random number
  //   and return a number.
  // Required args: decimals, minimum, range
  // Optional args: seed
  'number': function(args){
      var number = 0;

      if(args['seed'] !== void 0){
          number = Math.sin(args['seed']++) * 10000;
          number -= Math.floor(number);

      }else{
          number = Math.random();
      }

      return Number(
        Number.parseFloat((args['minimum'] + number * args['range']).toFixed(args['decimals']))
      );
  },

  // Generate a random project.
  'project': function(){
      for(var property in engine){
          /* Generate project stuff here. */
      }
  },

  // Get a random property in an object.
  //   and return the selected property.
  // Required args: object
  // Optional args: seed
  'property': function(args){
      args['seed'] = args['seed'] || void 0;

      return args['object'][engine.random.key({
        'object': args['object'],
        'seed': args['seed'],
      })];
  },

  // Generate a random string.
  //   and return a string.
  // Required args: characters, length
  // Optional args: seed
  'string': function(args){
      args['seed'] = args['seed'] || void 0;
      var string = '';

      for(var loopCounter = 0; loopCounter < args['length']; loopCounter++){
          string += args['characters'][engine.random.number({
            'decimals': 0,
            'minimum': 0,
            'range': args['characters'].length - 1,
            'seed': args['seed']
          })];
      }

      return String(string);
  },
};
