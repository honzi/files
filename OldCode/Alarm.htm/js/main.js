'use strict';

function repo_init(){
    core_repo_init({
      'beforeunload': {
        'todo': function(){
            if(entity_info['alarm']['count'] <= 0){
                document.getElementById('alarms').value = '{}';
            }

            core_storage_save();
        }
      },
      'events': {
        'add': {
          'onclick': function(){
              create();
          },
        },
      },
      'keybinds': {
        13: {
          'todo': function(){
              create();
          },
        },
      },
      'storage': {
        'alarms': '{}',
      },
      'storage-menu': '<textarea id=alarms></textarea><br>',
      'title': 'Alarm.htm',
    });
    entity_set({
      'default': true,
      'type': 'alarm',
    });
    audio_create({
      'audios': {
        'alarm': {
          'duration': .5,
          'frequency': 666,
        },
      },
    });

    const alarms = JSON.parse(core_storage_data['alarms']);
    for(const alarm in alarms){
        create({
          'label': alarms[alarm]['label'],
          'remake': true,
          'target': alarms[alarm]['target'],
        });
    }

    core_interval_modify({
      'id': 'second',
      'interval': 1000,
      'sync': true,
      'todo': second,
    });
    second();
}
