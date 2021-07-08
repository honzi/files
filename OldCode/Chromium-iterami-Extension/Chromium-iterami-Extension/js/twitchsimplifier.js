'use strict';

chrome.storage.local.get(['twitchsimplifier-localstorage'], function(returned){
    if(returned['twitchsimplifier-localstorage'] === 'true'){
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.href = chrome.extension.getURL('css/twitchsimplifier.css');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
});
