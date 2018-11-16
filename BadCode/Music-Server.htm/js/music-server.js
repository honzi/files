'use strict';

function draw(){
    music_canvas.clearRect(
      0,
      0,
      music_width,
      50
    );
    music_canvas.fillRect(
      0,
      0,
      Math.round(music_width * music_percent),
      50
    );
}

function repo_init(){
    core_repo_init({
      'title': 'Music-Server.htm',
    });
    music_init();

    document.getElementById('music-display').height = 50;
    music_resize();

    // Load audio-volume from window.localStorage.
    var new_volume = window.localStorage.getItem(core_storage_prefix + '-audio-volume');
    if(new_volume !== null){
        music_volume = new_volume;
        document.getElementById('audio-volume').value = music_volume;
    }

    // Load autoplay from window.localStorage.
    document.getElementById('autoplay').checked
      = window.localStorage.getItem(core_storage_prefix + '-autoplay') === null;

    // Load shuffle from window.localStorage.
    document.getElementById('shuffle').checked
      = window.localStorage.getItem('Music-Local.htm-shuffle') === null;

    // Load playbackrate from window.localStorage.
    music_playbackrate
      = document.getElementById('playbackrate').value
      = parseFloat(window.localStorage.getItem(core_storage_prefix + '-playbackrate')) || 1;

    // Load playlist.
    for(var track in tracks){
        // Add track to tracks table.
        document.getElementById('tracks').insertAdjacentHTML(
          'beforeend',
          '<tbody>'
          + '<tr>'
            + '<td>' + track + '<span class=hidden>' + tracks[track]['path'] + '</span>'
            + '<td>' + tracks[track]['author']
            + '<td>'
              + '<input onclick=music_setTrack({track:this.parentElement.parentElement.parentElement,}) type=button value=Play>'
        );
    }

    document.getElementById('audio-player').playbackRate = music_playbackrate;
    document.getElementById('audio-player').volume = music_volume;
    document.getElementById('iterate-left').onclick = function(){
        music_iterateTracks({
          'back': true,
        });
    };
    document.getElementById('iterate-right').onclick = function(){
        music_iterateTracks();
    };
    document.getElementById('play-button').onclick = music_playTrack;

    // If autoplay is on, start playing.
    if(document.getElementById('autoplay').checked){
        music_iterateTracks();
    }
}

function seek(seekPercent){
    if(!music_playing){
        return;
    }

    document.getElementById('audio-player').currentTime =
      document.getElementById('audio-player').duration * music_percent;
}

function updateProgress(){
    var track = document.getElementsByClassName('playing')[0];
    if(track){
        track = document.getElementById('audio-player');
        music_percent = track.currentTime / track.duration;

        document.getElementById('time-current').innerHTML = track.currentTime.toFixed(0);
        document.getElementById('time-percent').innerHTML = (music_percent * 100).toFixed(1);
        document.getElementById('time-total').innerHTML = track.duration.toFixed(0);

        if(track.currentTime === track.duration){
            music_iterateTracks();
        }

    }else{
        music_percent = 0;
        document.getElementById('time-current').innerHTML = 0;
        document.getElementById('time-total').innerHTML = 0;
    }

    draw();
}

var tracks = {
  /* 'example_track_name': {
    'author': 'Some Author',
    'path': 'path/to/track',
  }, */
};
