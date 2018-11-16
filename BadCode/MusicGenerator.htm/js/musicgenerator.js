'use strict';

window.onload = function(e){
    audio_init();
    audio_create(
      'music',
      {
        'duration': 1,
        'frequency': 50,
        'repeat': true,
        'volume': .5,
      }
    );

    audio_start('music');
};
