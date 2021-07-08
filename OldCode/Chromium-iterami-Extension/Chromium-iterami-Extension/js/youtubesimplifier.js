'use strict';

chrome.storage.local.get(['youtubesimplifier-localstorage'], function(returned){
    if(returned['youtubesimplifier-localstorage'] === 'true'){
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.href = chrome.extension.getURL('css/youtubesimplifier.css');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
});
