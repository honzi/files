// No dependencies.

'use strict';

var engine = {
  // Project functions.
  'project': {
    // Export the current project to code
    //   and return a string.
    // Optional args: reset
    'compile': function(args){
        args = args || {};
        args['reset'] = args['reset'] || {};
        for(var todo in args['reset']){
            eval(args['reset'][todo]);
        }

        var compiledCode = engine.toSource();

        compiledCode = compiledCode.substring(0, compiledCode.length - 1);
        compiledCode = compiledCode.replace('(', 'var engine=');

        compiledCode = '<!doctype html><meta charset=utf-8><meta content="width=device-width,initial-scale=1" name=viewport><title>'
          + engine.project.title
          + '</title><style>body{background:#000;color:#aaa;font-family:monospace}canvas{left:0;position:absolute;top:0}.hidden{display:none}</style><script>'
          + compiledCode + ';'
          + 'window.onload=engine.init;<' + '/script>';

        return String(compiledCode);
    },

    // Export specific project properties
    //   and return JSON.
    // Optional args: properties
    'export': function(args){
        args = args || {};
        args['properties'] = args['properties'] || {};

        var exported = {};

        for(var property in args['properties']){
            exported[args['properties'][property]] = eval(args['properties'][property]);
        }

        return JSON.stringify(exported);
    },

    // Import a project from JSON into the current editor.
    // Optional args: confirm, project
    'import': function(args){
        args = args || {};
        args['confirm'] = args['confirm'] !== void 0
          ? args['confirm']
          : true;
        args['project'] = args['project'] || {};

        if(!args['confirm']
          || window.confirm('Import project?')){
            for(var property in args['project']){
                eval(property + ' = ' + args['project'][property]);
            }
        }
    },

    // Set functions.
    'set': {
      // Set the project title.
      // Required args: title
      'title': function(args){
          document.title = args['title'];
          engine.project.title = args['title'];
      },
    },

    //-----------------------//

    // The title of this project.
    'title': 'untitled',
  },

  // Test a function
  //   and return a boolean.
  // Required args: expected, todo
  // Optional args: log
  'test': function(args){
      args['log'] = args['log'] || '';
      var result = args['todo']();
      var successful = true;

      if(args['expected'].constructor == Array
        || args['expected'].constructor == Object){
          for(var key in args['expected']){
              if(result[key] !== args['expected'][key]){
                  successful = false;
                  break;
              }
          }

      }else if(result !== args['expected']){
          successful = false;
      }

      if(args['log'].length > 0){
          window.console.log(
            '%c\n'
              + args['log']
              + ' = '
              + successful,
            successful
              ? ''
              : 'color: #f00'
          );
      }

      return Boolean(successful);
  },

  //-----------------------//

  // An object to hold Engine.htm-specific "global" variables.
  'variables': {
    // The default image to use when none are given.
    '_default.png': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAD1BMVEUAAP8A/wD/AAAAAAD///8hKtLYAAAAIklEQVQoz2NwQQMMTkoQIAgBIiNMwIEBAowhwGSECaAnBwAdPj4tFnzwQgAAAABJRU5ErkJggg==',

    // A 2x2 pixel #fff image to use as a texture foundation.
    '_fff.png': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVQIW2P8////fwYGBgZGGAMAV9UH+8NxzmcAAAAASUVORK5CYII=',
  },

  // The current engine version.
  'version': '20161108.0',
};
