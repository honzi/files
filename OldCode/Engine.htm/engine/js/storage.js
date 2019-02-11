// No dependencies.

'use strict';

var engine = engine || {};
engine.storage = {
  // Clear storage values saved by the engine.
  // Optional args: type
  'clear': function(args){
      args = args || {};
      args['type'] = args['type'] || 'local';

      for(var key in engine.storage.keys[args['type']]){
          engine.storage.remove({
            'key': key,
            'type': args['type'],
          });
      }

      engine.storage.remove('Engine.htm-' + args['type'] + 'Storage-keys');
      engine.storage.keys[args['type']] = {};
  },

  // Check if a value exists in storage
  //   and return a boolean.
  // Required args: key
  // Optional args: type
  'exists': function(args){
      args['type'] = args['type'] || 'local';

      return Boolean(args['key'] in window[args['type'] + 'Storage']);
  },

  // Get an item from storage
  //   and return the value of the item.
  // Required args: key
  // Optional args: type
  'get': function(args){
      args['type'] = args['type'] || 'local';

      return window[args['type'] + 'Storage'].getItem(args['key']);
  },

  // Load list of keys from window.localStorage.
  'init': function(){
      if(engine.storage.exists({'key': 'Engine.htm-localStorage-keys',})){
          engine.storage.keys['local'] =
            JSON.parse(
              engine.storage.get({
                'key': 'Engine.htm-localStorage-keys',
              })
            );
      }
  },

  // Remove an item from storage.
  // Required args: key
  // Optional args: type
  'remove': function(args){
      args['type'] = args['type'] || 'local';

      window[args['type'] + 'Storage'].removeItem(args['key']);
      delete engine.storage.keys[args['type']][args['key']];
  },

  // Set an item in storage.
  // Required args: key, value
  // Optional args: type
  'set': function(args){
      args['type'] = args['type'] || 'local';

      window[args['type'] + 'Storage'].setItem(
        args['key'],
        args['value']
      );

      engine.storage.keys[args['type']][args['key']] = 1;
      window.localStorage.setItem(
        'Engine.htm-' + args['type'] + 'Storage-keys',
        JSON.stringify(engine.storage.keys[args['type']])
      );
  },

  //-----------------------//

  // An object to hold saved storage keys.
  'keys': {
    // An object to hold window.localStorage keys.
    'local': {
    },

    // An object to hold window.sessionStorage keys.
    'session': {
    },
  },
};
