iterami/Engine.htm
------------------

Default editors:

* `canvas`: an editor for creating canvas projects.
* `dom`: an editor for creating DOM projects.
* `webgl`: an editor for creating WebGL projects.

To run this engine:

* `git clone https://github.com/iterami/Engine.htm.git`
* Navigate to your editor of choice in a modern web browser.
* Execute engine functions in your web browser console.

Usage notes:

* `engine.project.compile()` requires a web browser with `Object.prototype.toSource()`.
* Some files in `engine/js/` require other files to be already loaded. Required files are noted at the top of each `.js` file.
* To utilize `engine/js/network.js`, you will need to run this engine using `localhost` or equivalent.
