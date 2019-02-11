// No dependencies.

'use strict';

var engine = engine || {};
engine.mouse = {
  // Get functions.
  'get': {
    // Check if an event function executes every frame
    //   and return a boolean.
    // Required args: button, event
    'loop': function(args){
        return Boolean(
          engine.mouse.buttonBinds[args['button']] !== void 0
          && engine.mouse.buttonBinds[args['button']][args['event']] !== void 0
          && engine.mouse.buttonBinds[args['button']][args['event']]['loop']
        );
    },

    // Get mouse movement in pixels
    //   and return an integer.
    // Required args: dimension, event
    'movement': function(args){
        return Number(
          args['event']['movement' + args['dimension']]
          || 0
        );
    },

    // Check if any mouse button is being pressed
    //   or if a specific mouse button is being pressed,
    //   and return a boolean.
    // Optional args: specificButton
    'mouseDown': function(args){
        args = args || {};
        args['specificButton'] = args['specificButton'] || false;
        var result = false;

        if(args['specificButton'] !== false){
            result = engine.mouse.buttonId > -1;

        }else{
            result = engine.mouse.buttonId == args['specificButton'];
        }

        return Boolean(result);
    },

    // If id arg supplied, check if the pointer is currently locked to the specified element
    //   and return a boolean.
    // If id arg not supplied,
    //   return document.pointerLockElement.
    // Optional args: id
    'pointerLock': function(args){
        args = args || {};
        args['id'] = args['id'] || false;

        if(args['id'] !== false){
            return Boolean(
              document.getElementById(args['id'])
              && document.pointerLockElement === document.getElementById(args['id'])
            );
        }

        return document.pointerLockElement;
    },

    // Get event.wheelDelta or -event.detail from an event
    //   and return an integer.
    'wheelDelta': function(event){
        return Number(
          event.wheelDelta
          || -event.detail
        );
    },
  },

  // Handling functions.
  'handle': {
    // Handle bound event functions.
    // Required args: button, event
    // Optional args: cache
    'functions': function(args){
        args['cache'] = args['cache'] || false;

        if(engine.mouse.buttonBinds[args['button']] !== void 0
          && engine.mouse.buttonBinds[args['button']][args['event']] !== void 0){
            if(engine.mouse.buttonBinds[args['button']][args['event']]['cache']){
                engine.mouse.buttonBinds[args['button']][args['event']](args['cache']);

            }else{
                engine.mouse.buttonBinds[args['button']][args['event']]();
            }

        }else if(args['button'] !== 'any'){
            engine.mouse.handle.functions({
              'button': 'any',
              'cache': args['cache'],
              'event': args['event'],
            });
        }
    },

    // Handle the oncontextmenu event.
    'oncontextmenu': function(event){
        if(!engine.mouse.oncontextmenu){
            return false;
        }
    },

    // Handle the ondblclick event.
    'ondoubleclick': function(event){
    },

    // Handle the onmousedown event.
    'onmousedown': function(event){
        engine.mouse.buttonId = event.button;
        for(var dimension in engine.mouse.click){
            engine.mouse.click[dimension] = event['page' + dimension.toUpperCase()];
        }

        if(!engine.mouse.get.loop({'button': engine.mouse.buttonId, 'event': 'mousedown',})){
            engine.mouse.handle.functions({
              'button': engine.mouse.buttonId,
              'event': 'mousedown',
            });
        }
    },

    // Handle the onmouseenter event.
    'onmouseenter': function(event){
    },

    // Handle the onmouseleave event.
    'onmouseleave': function(event){
    },

    // Handle the onmousemove event.
    'onmousemove': function(event){
        for(var dimension in engine.mouse.position){
            var dimensionUpperCase = dimension.toUpperCase();
            engine.mouse.movement[dimension] = engine.mouse.get.movement({
              'dimension': dimensionUpperCase,
              'event': event,
            });
            engine.mouse.position[dimension] = event['page' + dimensionUpperCase];
        }

        if(engine.mouse.get.mouseDown()){
            for(var dimension in engine.mouse.drag){
                engine.mouse.drag[dimension] = event['page' + dimension.toUpperCase()] - engine.mouse.click[dimension];
            }
        }

        if(!engine.mouse.get.loop({'button': engine.mouse.buttonId, 'event': 'mousemove',})){
            engine.mouse.handle.functions({
              'button': engine.mouse.buttonId,
              'event': 'mousemove',
            });
        }
    },

    // Handle the onmouseout event.
    'onmouseout': function(event){
    },

    // Handle the onmouseover event.
    'onmouseover': function(event){
    },

    // Handle the onmouseup event.
    'onmouseup': function(event){
        engine.mouse.buttonId = -1;
        for(var dimension in engine.mouse.drag){
            engine.mouse.drag[dimension] = 0;
        }

        if(!engine.mouse.get.loop({'button': engine.mouse.buttonId, 'event': 'mouseup',})){
            engine.mouse.handle.functions({
              'button': engine.mouse.buttonId,
              'event': 'mouseup',
            });
        }
    },

    // Handle the onmousewheel event.
    'onmousewheel': function(event){
        engine.mouse.wheelDelta = engine.mouse.get.wheelDelta(event);
    },

    // Handle the onpointerlockchange event.
    'onpointerlockchange': function(event){
        engine.mouse.pointerLock = engine.mouse.get.pointerLock({
          'id': 'canvas',
        });
    },

    // Handle the ontouchcancel event.
    'ontouchcancel': function(event){
        engine.mouse.handle.onmouseup(event);
    },

    // Handle the ontouchend event.
    'ontouchend': function(event){
        engine.mouse.handle.onmouseup(event);
    },

    // Handle the ontouchenter event.
    'ontouchenter': function(event){
        engine.mouse.handle.onmouseenter(event);
    },

    // Handle the ontouchleave event.
    'ontouchleave': function(event){
        engine.mouse.handle.onmouseleave(event);
    },

    // Handle the ontouchmove event.
    'ontouchmove': function(event){
        engine.mouse.handle.onmousemove(event);
    },

    // Handle the ontouchstart event.
    'ontouchstart': function(event){
        engine.mouse.handle.onmousedown(event);
    },
  },

  // Initialize mouse events.
  'init': function(){
      if('onmousewheel' in window){
          window.onmousewheel = engine.mouse.handle.onmousewheel;

      }else{
          document.addEventListener(
            'DOMMouseScroll',
            engine.mouse.handle.onmousewheel,
            false
          );
      }

      document.onpointerlockchange = engine.mouse.handle.onpointerlockchange;
      window.oncontextmenu = engine.mouse.handle.oncontextmenu;
      window.ondblclick = engine.mouse.handle.ondoubleclick;
      window.onmousedown = engine.mouse.handle.onmousedown;
      window.onmouseenter = engine.mouse.handle.onmouseenter;
      window.onmouseleave = engine.mouse.handle.onmouseleave;
      window.onmousemove = engine.mouse.handle.onmousemove;
      window.onmouseout = engine.mouse.handle.onmouseout;
      window.onmouseover = engine.mouse.handle.onmouseover;
      window.onmouseup = engine.mouse.handle.onmouseup;
      window.ontouchcancel = engine.mouse.handle.ontouchcancel;
      window.ontouchend = engine.mouse.handle.ontouchend;
      window.ontouchenter = engine.mouse.handle.ontouchenter;
      window.onteachleave = engine.mouse.handle.ontouchleave;
      window.ontouchmove = engine.mouse.handle.ontouchmove;
      window.ontouchstart = engine.mouse.handle.ontouchstart;
  },

  // Repeat events.
  'repeatEvents': function(){
      for(var button in engine.mouse.buttonBinds){
          for(var event in engine.mouse.buttonBinds[button]){
              if(engine.mouse.buttonBinds[button][event] !== void 0
                && engine.mouse.buttonId === button
                && engine.mouse.buttonBinds[button][event]['loop']){
                  engine.mouse.buttonBinds[button][event]();
              }
          }
      }
  },

  // Set functions.
  'set': {
    // Set the number of dimensions.
    // Required args: dimensions
    'dimensions': function(args){
        engine.mouse.click = {};
        engine.mouse.drag = {};
        engine.mouse.movement = {};
        engine.mouse.multiplier = {};
        engine.mouse.position = {};

        for(var dimension in args['dimensions']){
            engine.mouse.click[dimension] = 0;
            engine.mouse.drag[dimension] = 0;
            engine.mouse.movement[dimension] = 0;
            engine.mouse.multiplier[dimension] = 1;
            engine.mouse.position[dimension] = 0;
        }
    },

    // Bind a function to a mouse button.
    // Required args: button, cache, event, loop, todo
    'mouseButtonBind': function(args){
        if(engine.mouse.buttonBinds[args['button']] === void 0){
            engine.mouse.buttonBinds[args['button']] = {};
        }

        engine.mouse.buttonBinds[args['button']][args['event']] = args['todo'];
        engine.mouse.buttonBinds[args['button']][args['event']]['cache'] = args['cache'];
        engine.mouse.buttonBinds[args['button']][args['event']]['loop'] = args['loop'];
    },

    // Set the pointerLock state of the specified element.
    // Required args: id, state
    'pointerLock': function(args){
        engine.mouse.buttonId = -1;
        var todo = 'exitPointerLock';

        if(args['state']){
            todo = 'requestPointerLock';
        }

        document.getElementById(args['id'])[todo]();
    },
  },

  //-----------------------//

  // An object to hold code bound to mouse buttons.
  'buttonBinds': {},

  // Stores which mouse button is currently pressed.
  'buttonId': -1,

  // An object to hold last mouse click position on each axis.
  'click': {},

  // An object to hold mouse drag distance along each axis.
  'drag': {},

  // An object to hold mouse movement since last onmousemove along each axis.
  'movement': {},

  // An object to hold mouse axis multipliers.
  'multiplier': {},

  // A boolean to check if the oncontextmenu event runs normally.
  'oncontextmenu': true,

  // A boolean to check if the pointer is locked.
  'pointerLock': false,

  // An object to hold mouse position on each axis.
  'position': {},

  // The most recent amount the mousewheel was scrolled.
  'wheelDelta': 0,
};
