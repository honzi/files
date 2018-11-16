// Requires:
// * engine.js

'use strict';

var engine = engine || {};
engine.network = {
  // Request content from url and save responseText for later usage.
  // Required args: key, url
  // Optional args: async, data, method, password, user
  'ajax': function(args){
      args['async'] = args['async'] !== void 0
        ? args['async']
        : true;
      args['data'] = args['data'] || void 0;
      args['method'] = args['method'] || 'GET';
      args['password'] = args['password'] || '';
      args['user'] = args['user'] || '';

      engine.network.active[args['key']] = new XMLHttpRequest();

      engine.network.active[args['key']].onreadystatechange = function(){
          if(engine.network.get.ready({'key': args['key'],})){
              engine.variables[args['key']] = engine.network.active[args['key']].responseText;
              delete engine.network.active[args['key']];
          }
      };

      engine.network.active[args['key']].open(
        args['method'],
        args['url'],
        args['async'],
        args['user'],
        args['password']
      );
      engine.network.active[args['key']].send(args['data']);
  },

  // Get functions.
  'get': {
      // Check if an unfinished request is ready
      //   and return a boolean.
      // Required args: key
      'ready': function(args){
          return Boolean(
            engine.network.active[args['key']].readyState === 4
            && engine.network.active[args['key']].status === 200
          );
      },
  },

  // WebSocket functions.
  'socket': {
    // Close a WebSocket.
    // Required args: key
    // Optional args: delete
    'close': function(args){
        engine.network.sockets[args['key']].close();

        args['delete'] = args['delete'] || false;
        if(args['delete']){
            delete engine.network.sockets[args['key']];
        }
    },

    // Open a new WebSocket
    //   optionally save it
    //   and return a WebSocket.
    // Required args: protocols, url
    // Optional args: key
    'open': function(args){
        var socket = new WebSocket(
          args['url'],
          args['protocol']
        );

        args['key'] = args['key'] || false;
        if(args['key'] !== false){
            engine.network.sockets[args['key']] = socket;
        }

        return socket;
    },

    // Send data through a WebSocket.
    // Required args: data, key
    'send': function(args){
        engine.network.sockets[args['key']].send(args['data']);
    },
  },

  //-----------------------//

  // An object to hold active requests.
  'active': {},

  // An object to hold WebSockets.
  'sockets': {},
};
