// Requires:
// * engine.js

'use strict';

var engine = engine || {};
engine.time = {
  // Clear functions.
  'clear': {
    // Stop running everything.
    'all': function(){
        engine.time.clear.allAnimationFrames();
        engine.time.clear.allIntervals();
        engine.time.clear.allTimeouts();
    },

    // Stop running all animationFrames.
    'allAnimationFrames': function(){
        for(var key in engine.time.animationFrames){
            engine.time.clear.animationFrame({
              'key': key,
            });
        }
    },

    // Stop running all intervals.
    'allIntervals': function(){
        for(var key in engine.time.intervals){
            engine.time.clear.interval({
              'key': key,
            });
        }
    },

    // Stop running all timeouts.
    'allTimeouts': function(){
        for(var key in engine.time.timeouts){
            engine.time.clear.timeout({
              'key': key,
            });
        }
    },

    // Stop running a specific animationFrame.
    // Required args: key
    'animationFrame': function(args){
        window.cancelAnimationFrame(engine.time.animationFrames[args['key']]);
        delete engine.time.animationFrames[args['key']];
    },

    // Stop running a specific interval.
    // Required args: key
    'interval': function(args){
        window.clearInterval(engine.time.intervals[args['key']]);
        delete engine.time.intervals[args['key']];
    },

    // Stop running a specific timeout.
    // Required args: key
    'timeout': function(args){
        window.clearTimeout(engine.time.timeouts[args['key']]);
        delete engine.time.timeouts[args['key']];
    },
  },

  // Date functions.
  'date': {
    // Construct a timestamp in the specified format
    //   and return a number.
    // Optional args: date, format, key
    'format': function(args){
        args = args || {};
        args['date'] = new Date(args['date'] || Date.now());
        args['key'] = args['key'] || false;
        args['format'] = args['format'] || 'getTime';

        var result = args['date'][args['format']]();

        if(args['key'] !== false){
            engine.variables[args['key']] = result;
        }

        return Number(result);
    },

    // Check if a year is a leap year
    //   and return a boolean.
    // Optional args: year
    'leapYear': function(args){
        args = args || {};
        args['year'] = args['year'] !== void 0
          ? args['year']
          : new Date().getFullYear();

        return Boolean(
          (args['year'] % 4 === 0 && args['year'] % 100 !== 0)
          || args['year'] % 400 === 0
        );
    },
  },

  // Request an animation frame.
  // Required args: key
  'requestAnimationFrame': function(args){
      window.requestAnimationFrame(
        engine.time.animationFrames[args['key']]
      );
  },

  // Set functions.
  'set': {
    // Create and start a new animationFrame.
    // Required args: key, todo
    'animationFrame': function(args){
        engine.time.clear.animationFrame({
          'key': args['key'],
        });
        engine.time.animationFrames[args['key']] = args['todo'];
        window.requestAnimationFrame(args['todo']);
    },

    // Create and start a new interval.
    // Required args: interval, key, todo
    'interval': function(args){
        engine.time.clear.interval({
          'key': args['key'],
        });
        engine.time.intervals[args['key']] = window.setInterval(
          args['todo'],
          args['interval']
        );
    },

    // Create and start a new timeout.
    // Required args: key, timeout, todo
    'timeout': function(args){
        engine.time.clear.timeout({
          'key': args['key'],
        });
        engine.time.timeouts[args['key']] = window.setTimeout(
          args['todo'],
          args['timeout']
        );
    },
  },

  //-----------------------//

  // An object to hold animation frames.
  'animationFrames': {},

  // An object to hold existing intervals.
  'intervals': {},

  // An object to hold existing timeouts.
  'timeouts': {},
};
