// No dependencies.

'use strict';

var engine = engine || {};
engine.keyboard = {
  // Get functions.
  'get': {
    // Check if an event function executes every frame
    //   and return a boolean.
    // Required args: event, key
    'loop': function(args){
        return Boolean(
          engine.keyboard.keyBinds[args['key']] !== void 0
          && engine.keyboard.keyBinds[args['key']][args['event']] !== void 0
          && engine.keyboard.keyBinds[args['key']][args['event']]['loop']
        );
    },

    // Get the key code from a key event
    //   and return an integer.
    'keyCode': function(event){
        return Number(
          event.keyCode
          || event.which
        );
    },
  },

  // Handling functions.
  'handle': {
    // Handle bound event functions.
    // Required args: event, key
    'functions': function(args){
        if(engine.keyboard.keyBinds[args['key']] !== void 0
          && engine.keyboard.keyBinds[args['key']][args['event']] !== void 0){
            engine.keyboard.keyBinds[args['key']][args['event']]();
        }
    },

    // Handle the onkeydown event.
    'onkeydown': function(event){
        var key = engine.keyboard.get.keyCode(event);

        engine.keyboard.keyStates[key] = true;

        if(!engine.keyboard.get.loop({'event': 'keydown', 'key': key,})){
            engine.keyboard.handle.functions({
              'event': 'keydown',
              'key': key,
            });
        }
    },

    // Handle the onkeypress event.
    'onkeypress': function(event){
        var key = engine.keyboard.get.keyCode(event);

        if(!engine.keyboard.get.loop({'event': 'keypress', 'key': key,})){
            engine.keyboard.handle.functions({
              'event': 'keypress',
              'key': key,
            });
        }
    },

    // Handle the onkeyup event.
    'onkeyup': function(event){
        var key = engine.keyboard.get.keyCode(event);

        delete engine.keyboard.keyStates[key];

        if(!engine.keyboard.get.loop({'event': 'keyup', 'key': key,})){
            engine.keyboard.handle.functions({
              'event': 'keyup',
              'key': key,
            });
        }
    },
  },

  // Initialize keyboard events.
  'init': function(){
      window.onkeydown = engine.keyboard.handle.onkeydown;
      window.onkeypress = engine.keyboard.handle.onkeypress;
      window.onkeyup = engine.keyboard.handle.onkeyup;
  },

  // Repeat events.
  'repeatEvents': function(){
      for(var event in engine.keyboard.events){
          if(engine.keyboard.events[event] !== true){
              continue;
          }

          for(var key in engine.keyboard.keyBinds){
              if(engine.keyboard.keyBinds[key][event] !== void 0
                && engine.keyboard.keyStates[key] !== void 0){
                  engine.keyboard.keyBinds[key][event]();
              }
          }
      }
  },

  // Set functions.
  'set': {
    // Bind a function to a key.
    // Required args: event, key, loop, todo
    'keyBind': function(args){
        if(typeof args['key'] === 'string'){
            var temp = args['key'];
            args['key'] = temp.charCodeAt(0);
        }

        if(engine.keyboard.keyBinds[args['key']] === void 0){
            engine.keyboard.keyBinds[args['key']] = {};
        }

        engine.keyboard.keyBinds[args['key']][args['event']] = args['todo'];
        engine.keyboard.keyBinds[args['key']][args['event']]['loop'] = args['loop'];
        engine.keyboard.events[args['event']] = args['loop'];
    },
  },

  //-----------------------//

  // An object to hold currently used events.
  'events': {},

  // An object to hold code bound to keys.
  'keyBinds': {},

  // An object to hold key states.
  'keyStates': {},
};
