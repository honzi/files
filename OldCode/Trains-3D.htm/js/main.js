'use strict';

function logic(){
    if(core_entities['webgl-cube_building_2']['translate-x'] > 350){
        core_group_modify({
          'groups': [
            'building',
          ],
          'pretodo': building_pretodo,
          'todo': function(entity, pretodo){
              core_entities[entity]['translate-x'] += pretodo['x'];
              core_entities[entity]['translate-z'] += pretodo['z'];
          },
        });
    }
    core_group_modify({
      'groups': tree_groups,
      'pretodo': tree_pretodo,
      'todo': function(entity, pretodo){
          if(core_entities[entity]['translate-x'] > Math.abs(core_entities[entity]['translate-z']) + 50){
              core_entities[entity]['translate-x'] = pretodo['x'];
              core_entities[entity]['translate-z'] = pretodo['z'];
          }
      },
    });
}

function repo_init(){
    core_repo_init({
      'globals': {
        'tree_groups': [],
      },
      'mousebinds': {
        'mousedown': {
          'todo': core_requestpointerlock,
        },
        'mousemove': {
          'todo': webgl_camera_first,
        },
      },
      'storage': {
        'speed': .5,
        'trees': 25,
      },
      'storage-menu': '<table><tr><td><input id=speed><td>Speed<tr><td><input id=trees><td>Trees</table>',
      'title': 'Trains-3D.htm',
    });
    webgl_init({
      'camera': 'gravity',
      'fog': false,
    });
}
