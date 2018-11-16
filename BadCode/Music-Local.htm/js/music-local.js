'use strict';

function addTrack(path){
    path = path || window.prompt('Enter file path relative to index.htm:');

    // Validate path here.
    if(path == null){
        return;
    }

    // Add track to tracks table.
    document.getElementById('tracks').insertAdjacentHTML(
      'beforeend',
      '<tbody>'
      + '<tr>'
        + '<td>' + path
        + '<td>'
          + '<input onclick=removeTrack(this,false) type=button value=X>'
          + '<input onclick=music_setTrack({track:this.parentElement.parentElement.parentElement,}) type=button value=Play>'
    );

    document.getElementById('audio-player').volume = music_volume;

    savePlaylist();
}

function clearPlaylist(){
    if(!window.confirm('Clear playlist?')){
        return;
    }

    document.getElementById('tracks').innerHTML = '';

    savePlaylist();
    resetInfo();
}

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

function exportPlaylist(){
    var exported = [];

    var tracks = document.getElementById('tracks').childNodes;
    for(var i = 0; i < tracks.length; i++){
        exported.push(tracks[i].firstChild.firstChild.innerHTML);
    }

    window.prompt(
      'Exported playlist:',
      JSON.stringify(exported)
    );
}

function importPlaylist(){
    var imported = window.prompt('Enter playlist to import:');
    if(imported == null
      || imported.length === 0){
        return;
    }
    imported = JSON.parse(imported);

    for(var track in imported){
        addTrack(imported[track]);
    }

    savePlaylist();
}

function removeTrack(track, skip){
    if(!skip
      && !window.confirm('Remove track?')){
        return;
    }

    // Remove the <tbody> containing this track.
    track.parentElement.parentElement.parentElement.remove();

    savePlaylist();
    resetInfo();
}

function repo_init(){
    core_repo_init({
      'title': 'Music-Local.htm',
    });
    music_init();

    document.getElementById('music-display').height = 50;
    music_resize();

    document.getElementById('addTrack').onclick = function(){
        addTrack();
    };
    document.getElementById('clearPlaylist').onclick = clearPlaylist;
    document.getElementById('exportPlaylist').onclick = exportPlaylist;
    document.getElementById('importPlaylist').onclick = importPlaylist;
    document.getElementById('iterate-left').onclick = function(){
        music_iterateTracks({
          'back': true,
        });
    };
    document.getElementById('iterate-right').onclick = function(){
        music_iterateTracks();
    };
    document.getElementById('play-button').onclick = music_playTrack;

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
      = window.localStorage.getItem(core_storage_prefix + '-shuffle') === null;

    // Load playbackrate from window.localStorage.
    music_playbackrate
      = document.getElementById('playbackrate').value
      = parseFloat(window.localStorage.getItem(core_storage_prefix + '-playbackrate')) || 1;

    // Load playlist from window.localStorage.
    var playlist = JSON.parse(window.localStorage.getItem(core_storage_prefix + '-playlist'));
    if(playlist == null){
        return;
    }

    for(var track in playlist){
        addTrack(playlist[track]);
    }

    document.getElementById('audio-player').playbackRate = music_playbackrate;
    document.getElementById('audio-player').volume = music_volume;

    // If autoplay is on, start playing.
    if(document.getElementById('autoplay').checked){
        music_iterateTracks();
    }
}

function resetInfo(){
    if(!document.getElementsByClassName('playing')[0]){
        music_pauseTrack();
        music_percent = 0;
        document.getElementById('time-current').innerHTML = 0;
        document.getElementById('time-percent').innerHTML = 0;
        document.getElementById('time-total').innerHTML = 0;
        music_setTitle();
        draw();
    }
}

function savePlaylist(){
    var saved = [];

    var tracks = document.getElementById('tracks').childNodes;
    for(var i = 0; i < tracks.length; i++){
        saved.push(tracks[i].firstChild.firstChild.innerHTML);
    }

    if(saved.length > 0){
        window.localStorage.setItem(
          core_storage_prefix + '-playlist',
          JSON.stringify(saved)
        );

    }else{
        window.localStorage.removeItem(core_storage_prefix + '-playlist');
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
        draw();

    }else{
        resetInfo();
    }
}
