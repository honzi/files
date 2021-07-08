'use strict';

chrome.storage.local.get(['darktheme-localstorage'], function(returned){
    if(returned['darktheme-localstorage'] === 'true'){
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.href = chrome.extension.getURL('css/darktheme.css');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
});
