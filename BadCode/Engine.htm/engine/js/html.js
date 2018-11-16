// Requires:
// * engine.js

'use strict';

var engine = engine || {};
engine.html = {
  // Execute a property function of an HTMl element by id.
  // Required args: attribute, ids
  'execute': function(args){
      for(var id in args['ids']){
          eval(
            engine.html.target({
              'attibuteLength': args['attribute'].length,
              'id': args['ids'][id], 
            })
          )();
      }
  },

  // Get functions.
  'get': {
    // Get an attribute of an HTML element by id
    //   and return the attribute value.
    // Required args: attribute, id
    'attribute': function(args){
        return eval(
          engine.html.target({
            'attributeLength': args['attribute'].length,
            'id': args['id'],
          })
        );
    },

    // Check if an HTML element exists
    //   and return a boolean.
    // Required args: id
    'exists': function(args){
        return Boolean(document.getElementById(args['id']) !== void 0);
    },

    // If id arg supplied, check if specified element is fullscreen
    //   and return a boolean.
    // If id arg not supplied,
    //   return document.fullscreenElement.
    // Optional args: id
    'fullscreen': function(args){
        args = args || {};
        args['id'] = args['id'] || false;

        if(args['id'] !== false){
            return Boolean(
              document.getElementById(args['id'])
              && document.fullscreenElement === document.getElementById(args['id'])
            );
        }

        return document.fullscreenElement;
    },
  },

  // Set functions.
  'set': {
    // Set an attribute of an HTML element by id.
    // Required args: attribute, ids, newValue
    'attribute': function(args){
        for(var id in args['ids']){
            target = engine.html.target({
              'attributeLength': args['attribute'].length,
              'id': args['ids'][id],
            });
            target += ' = args[\'newValue\'];';

            eval(target);
        }
    },

    // Add or remove a CSS class from an HTML element.
    // Required args: id, class
    // Optional args: action
    'cssClass': function(args){
        args['action'] = args['action'] || 'add';

        document.getElementById(args['id']).classList[args['action']](args['class']);
    },

    // Create an HTML element.
    // Required args: id, type
    // Optional args: attributes, classes, newValues, parent
    'element': function(args){
        args['attributes'] = args['attributes'] || '';
        args['classes'] = args['classes'] || [];
        args['newValues'] = args['newValues'] || '';
        if(args['parent'] === void 0){
            args['parent'] = 'body';
        }
        args['parent'] = document.getElementById(args['parent'])
          || document.getElementsByTagName(args['parent'])[0];

        var newElement = document.createElement(args['type']);
        newElement.id = args['id'];

        args['parent'].appendChild(newElement);

        for(var cssClass in args['classes']){
            engine.html.set.cssClass({
              'class': args['classes'][cssClass],
              'id': args['id'],
            });
        }

        for(var attribute in args['attributes']){
            engine.html.set.attribute({
              'attribute': args['attributes'][attribute],
              'ids': args['id'],
              'newValue': args['newValues'][attribute],
            });
        }
    },

    // Set the fullscreen state of the specified element.
    // Required args: id, state
    'fullscreen': function(args){
        document.getElementById(args['id'])[
          args['state']
            ? 'requestFullscreen'
            : 'exitFullscreen'
        ]();
    },

    // Create an HTMLImageElement instance
    //   and return it.
    // Optional args: src, todo
    'image': function(args){
        args = args || {};
        args['src'] = args['src'] || engine.variables['_default.png'];
        args['todo'] = args['todo'] || false;

        var image = new Image();
        image.src = args['src'];

        if(args['todo'] !== false){
            image.onload = args['todo'];
        }

        return image;
    },
  },

  // Create a string of JavaScript code that will return the desired attribute
  //   and return a string.
  // Required args: attributeLength, id
  'target': function(args){
      var target = 'document.getElementById("' + args['id'] + '")[args[\'attribute\'][0]]';

      var loopCounter = 1;
      while(loopCounter < args['attributeLength']){
          target += '[args[\'attribute\'][' + loopCounter + ']]'
          loopCounter++;
      }

      return String(target);
  },
};
