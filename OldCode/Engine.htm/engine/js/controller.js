// No dependencies.

'use strict';

var engine = engine || {};
engine.controller = {
  // Handling functions.
  'handle': {
    // Handle the gamepadconnected event.
    'gamepadconnected': function(event){
    },

    // Handle the gamepaddisconnected event.
    'gamepaddisconnected': function(event){
    },
  },

  // Initialize controller events.
  'init': function(){
      window.addEventListener(
        'gamepadconnected',
        engine.controller.handle.gamepadconnected
      );
      window.addEventListener(
        'gamepaddisconnected',
        engine.controller.handle.gamepaddisconnected
      );
  },

  //-----------------------//

  // An object to hold connected controllers.
  'controllers': {},
};
