'use strict';

chrome.storage.local.get(['wikipediasimplifier-localstorage'], function(returned){
    if(returned['wikipediasimplifier-localstorage'] === 'true'){
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.href = chrome.extension.getURL('css/wikipediasimplifier.css');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
});
