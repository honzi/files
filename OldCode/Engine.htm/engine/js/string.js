// No dependencies.

'use strict';

var engine = engine || {};
engine.string = {
  // String formatting functions.
  'format': {
    // Escape a string with html
    //   and return a string.
    // Required args: string
    // Optional args: flags
    'html': function(args){
        args['flags'] = args['flags'] || 'g';

        var result = engine.string.replaceMultiple({
          'flags': args['flags'],
          'patterns': {
            '&': '&amp;',
            '\'': '&apos;',
            '>': '&gt;',
            '<': '&lt;',
            '"': '&quot;',
            '\n\r': '<br>',
          },
          'string': args['string'],
        });

        return String(result);
    },

    // Format a number with local separators.
    //   and return a string.
    // Required args: string
    'number': function(args){
        return String(new Intl.NumberFormat().format(args['string']));
    },

    // Format a URI
    //   and return a string.
    // Required args: string
    'uri': function(args){
        var uri = encodeURIComponent(args['string']);
        uri.replace(
          /[!'()*]/g,
          function(character){
              return '%' + character.charCodeAt(0).toString(16);
          }
        );

        return String(uri);
    },
  },

  // Replace multiple parts of a string
  //   and return a string.
  // Required args: patterns, string
  // Optional args: flags
  'replaceMultiple': function(args){
      args['flags'] = args['flags'] || 'g';

      for(var pattern in args['patterns']){
          args['string'] = args['string'].replace(
            new RegExp(
              pattern,
              args['flags']
            ),
            args['patterns'][pattern]
          );
      }

      return String(args['string']);
  },

  // Set functions.
  'set': {
      // Create a new language and populate it with an object of strings.
      // Required args: key, strings
      'language': function(args){
          engine.string.languages[args['key']] = args['strings'];
      },
  },

  //-----------------------//

  // An object to hold available languages.
  'languages': {},
};
