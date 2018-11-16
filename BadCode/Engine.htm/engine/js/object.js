// No dependencies.

'use strict';

var engine = engine || {};
engine.object = {
  // Clear everything in the specified engine object.
  // Required args: keys
  'clear': function(args){
      var target = 'engine';
      for(var key in args['keys']){
          target += "['" + args['keys'][key] + "']";
      }
      target += ' = {};'

      eval(target);
  },

  // Entity functions.
  'entity': {
    // Clone an existing entity.
    // Required args: entityKey, newKey
    'clone': function(args){
        var properties = {};

        for(var property in engine.object.entities[args['entityKey']]){
            properties[property] = engine.object.entities[args['entityKey']][property];
        }

        engine.object.entity.set({
          'key': args['newKey'],
          'properties': properties,
        });
    },

    // Copy all properties of an existing entity onto another existing entity.
    // Required args: entityKey, targetKey
    'copy': function(args){
        for(var property in engine.object.entities[args['entityKey']]){
            engine.object.entities[args['targetKey']][property] =
              engine.object.entities[args['entityKey']][property];
        }
    },

    // Delete an entity.
    // Required args: key
    'delete': function(args){
        delete engine.object.entities[args['key']];
    },

    // Execute logic function for individual entities or all entities.
    // Optional args: entity
    'logic': function(args){
        args = args || {};
        args['entity'] = args['entity'] || void 0;

        if(args['entity'] != void 0){
            if(engine.object.entities[args['entity']]['logic']){
                engine.object.entities[args['entity']]['logic']();
            }

        }else{
            for(var entity in engine.object.entities){
                if(engine.object.entities[entity]['logic']){
                    engine.object.entities[entity]['logic']();
                }
            }
        }
    },

    // Create a new entity.
    // Required args: key, properties
    // Optional args: defaults
    'set': function(args){
        args['default'] = args['default'] || false;

        engine.object.entities[args['key']] = {};

        if(args['default'] !== false){
            for(var property in engine.object.defaults[args['default']]){
                if(engine.object.defaults[args['default']][property].constructor == Object){
                    if(!(property in engine.object.entities[args['key']])){
                        engine.object.entities[args['key']][property] = {};
                    }

                    for(var subproperty in engine.object.defaults[args['default']][property]){
                        engine.object.entities[args['key']][property][subproperty] =
                          engine.object.defaults[args['default']][property][subproperty];
                    }
                    continue;
                }

                engine.object.entities[args['key']][property] =
                  engine.object.defaults[args['default']][property];
            }
        }

        for(var property in args['properties']){
            if(args['properties'][property].constructor == Object){
                if(!(property in engine.object.entities[args['key']])){
                    engine.object.entities[args['key']][property] = {};
                }

                for(var subproperty in args['properties'][property]){
                    engine.object.entities[args['key']][property][subproperty] =
                      args['properties'][property][subproperty];
                }
                continue;
            }

            engine.object.entities[args['key']][property] = args['properties'][property];
        }
    },
  },

  // Group functions.
  'group': {
    // Add an entity to a group
    //   that either must already exist
    //   or gets created.
    // Required args: entities, group
    // Optional args: create
    'add': function(args){
        if(args['create'] === void 0){
            args['create'] = true;
        }

        if(!(args['group'] in engine.object.groups)){
            if(args['create']){
                engine.object.groups[args['group']] = {};
            }
        }

        for(var entity in args['entities']){
            engine.object.groups[args['group']][args['entities'][entity]] = 1;
        }
    },

    // Modify all entities within a group.
    // Required args: group, todo
    'modify': function(args){
        for(var entity in engine.object.groups[args['group']]){
            args['todo'](entity);
        }
    },

    // Remove an entity from a group
    //   that optionally gets deleted if empty.
    // Required args: entities, group
    // Optional args: remove
    'remove': function(args){
        if(args['remove'] === void 0){
            args['remove'] = true;
        }

        if(args['group'] in engine.object.groups){
            for(var entity in args['entities']){
                delete engine.object.groups[args['group']][args['entities'][entity]];
            }
        }

        if(engine.object.groups[args['group']].length <= 0
          && args['remove']){
            delete engine.object.groups[args['group']];
        }
    },
  },

  // Array sorting functions.
  'sort': {
    // Use a custom function to sort an array.
    // Required args: array, todo
    // Optional args: descend
    'custom': function(args){
        args['array'].sort(args['todo']);
        args['descend'] = args['descend'] || false;

        if(args['descend']){
            args['array'].reverse();
        }
    },

    // Sort an array of numbers.
    // Required args: array
    // Optional args: descend
    'numbers': function(args){
        engine.object.sort.custom({
          'array': args['array'],
          'descend': args['descend'] || false,
          'todo': function(a, b){
              return a - b;
          },
        });
    },

    // Sort an array by property.
    // Required args: array, property
    // Optional args: descend
    'property': function(args){
        engine.object.sort.custom({
          'array': args['array'],
          'descend': args['descend'] || false,
          'todo': function(a, b){
              if(a[args['property']] > b[args['property']]){
                  return 1;

              }else if(a[args['property']] < b[args['property']]){
                  return -1;
              }

              return 0;
          },
        });
    },

    // Randomly sort an array of anything.
    // Required args: array
    'random': function(args){
        engine.object.sort.custom({
          'array': args['array'],
          'todo': function(a, b){
              return Math.random() - 0.5;
          },
        });
    },

    // Sort an array of strings.
    // Required args, array
    // Optional args: descend
    'strings': function(args){
        engine.object.sort.custom({
          'array': args['array'],
          'descend': args['descend'] || false,
          'todo': function(a, b){
              return a.localeCompare(b);
          },
        });
    },
  },

  //-----------------------//

  // An object to hold entity defaults.
  'defaults': {},

  // An object to hold existing entities.
  'entities': {},

  // An object to hold entity groups.
  'groups': {},
};
