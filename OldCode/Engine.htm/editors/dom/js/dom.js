'use strict';

// Init function to setup the engine for this project.
engine.init = function(){
    engine.keyboard.init();
    engine.mouse.init();
    engine.mouse.set.dimensions({
      'dimensions': {
        x: 0,
        y: 0,
      },
    });
    engine.storage.init();
}

// Init and begin running the project.
window.onload = engine.init;
