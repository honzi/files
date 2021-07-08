'use strict';

function add_event_listener(type, text){
    let localstorage = type + '-localstorage';
    let toggle = type + '-toggle';

    document.getElementById(toggle).addEventListener('click', function(){
        chrome.storage.local.get([localstorage], function(returned){
            let label = '';

            if(returned[localstorage] === 'true'){
                chrome.storage.local.remove([localstorage]);
                label = 'Enable ' + text;

            }else{
                let object = {};
                object[localstorage] = 'true';
                chrome.storage.local.set(object);
                label = 'Disable ' + text;
            }

            document.getElementById(toggle).value = label;
        });
    });
}

document.addEventListener('DOMContentLoaded',function(){
    chrome.storage.local.get(
      [
        'darktheme-localstorage',
        'githubcodewrap-localstorage',
        'redditsimplifier-localstorage',
        'twitchsimplifier-localstorage',
        'wikipediasimplifier-localstorage',
        'youtubesimplifier-localstorage',
      ],
      function(returned){
          document.getElementById('darktheme-toggle').value =
            returned['darktheme-localstorage'] === 'true'
              ? 'Disable Dark Theme'
              : 'Enable Dark Theme';
          document.getElementById('githubcodewrap-toggle').value =
            returned['githubcodewrap-localstorage'] === 'true'
              ? 'Disable GitHub Code Wrap'
              : 'Enable GitHub Code Wrap';
          document.getElementById('redditsimplifier-toggle').value =
            returned['redditsimplifier-localstorage'] === 'true'
              ? 'Disable Reddit Simplification'
              : 'Enable Reddit Simplification';
          document.getElementById('twitchsimplifier-toggle').value =
            returned['twitchsimplifier-localstorage'] === 'true'
              ? 'Disable Twitch Simplification'
              : 'Enable Twitch Simplification';
          document.getElementById('wikipediasimplifier-toggle').value =
            returned['wikipediasimplifier-localstorage'] === 'true'
              ? 'Disable Wikipedia Simplification'
              : 'Enable Wikipedia Simplification';
          document.getElementById('youtubesimplifier-toggle').value =
            returned['youtubesimplifier-localstorage'] === 'true'
              ? 'Disable YouTube Simplification'
              : 'Enable YouTube Simplification';
      }
    );
    add_event_listener('darktheme', 'Dark Theme');
    add_event_listener('githubcodewrap', 'GitHub Code Wrap');
    add_event_listener('redditsimplifier', 'Reddit Simplification');
    add_event_listener('twitchsimplifier', 'Twitch Simplification');
    add_event_listener('wikipediasimplifier', 'Wikipedia Simplification');
    add_event_listener('youtubesimplifier', 'YouTube Simplification');
});
