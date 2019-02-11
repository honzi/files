'use strict';

function logic(){
    if(platform_players['player']['lives'] < 1){
        return;
    }

    platform_players['player']['can-jump'] = core_entities['_webgl-camera']['dy'] !== 0;

    if(core_keys[core_storage_data['jump']]['state']
      && !platform_players['player']['can-jump']){
        platform_jump();

        core_entities['_webgl-camera']['dy'] = platform_players['player']['y-velocity'];
    }

    if(core_entities['_webgl-camera']['translate-y'] < -100){
        platform_players['player']['lives'] -= 1;

        if(platform_players['player']['lives'] > 0){
            core_entities['_webgl-camera']['translate-x'] = 0;
            core_entities['_webgl-camera']['translate-y'] = 5;
            core_entities['_webgl-camera']['translate-z'] = 0;

        }else{
            webgl_setmode();
        }
    }
}

function repo_init(){
    core_repo_init({
      'events': {
        'start': {
          'onclick': function(){
              webgl_setmode({
                'newgame': true,
              });
          },
        },
      },
      'info': '<input id=start type=button value="Start New Level">',
      'menu': true,
      'mousebinds': {
        'mousedown': {
          'todo': core_requestpointerlock,
        },
        'mousemove': {
          'todo': webgl_camera_first,
        },
      },
      'storage': {
        'level': 0,
      },
      'storage-menu': '<table><tr><td><select id=level><option value=0>0 - Map</option></select><td>Level</table>',
      'title': 'Platform-3D.htm',
    });
    webgl_init({
      'camera-speed': .3,
      'camera-type': 'gravity',
    });
}
