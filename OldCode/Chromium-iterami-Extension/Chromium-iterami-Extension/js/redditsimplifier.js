'use strict';

chrome.storage.local.get(['redditsimplifier-localstorage'], function(returned){
    if(returned['redditsimplifier-localstorage'] === 'true'){
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.href = chrome.extension.getURL('css/redditsimplifier.css');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
});
