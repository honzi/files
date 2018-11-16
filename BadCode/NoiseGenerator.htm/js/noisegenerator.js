'use strict';

function toggle_audio(){
    if(audio_audio['noise']['playing']){
        audio_stop('noise');
        document.getElementById('toggle').value = "Start Audio [Space]";
        return;
    }

    audio_start({
      'id': 'noise',
    });
    document.getElementById('toggle').value = "Stop Audio [Space]";
}

window.onload = function(){
    input_init(
      {
        32: {
          'todo': toggle_audio,
        },
      }
    );
    audio_init();
    audio_create({
      'id': 'noise',
      'properties': {
        'connections': [
          {
            'label': 'BufferSource',
          },
          {
            'arg0': 2048,
            'arg1': 1,
            'arg2': 1,
            'buffer_size': 2048,
            'label': 'ScriptProcessor',
            'onaudioprocess': function(event){
                var output = event.outputBuffer.getChannelData(0);
                for(var i = 0; i < this.buffer_size; i++) {
                    output[i] = Math.random() * 2 - 1;
                }
            },
          },
          {
            'gain': {
              'value': 0,
            },
            'label': 'Gain',
          },
        ],
      },
    });
};
