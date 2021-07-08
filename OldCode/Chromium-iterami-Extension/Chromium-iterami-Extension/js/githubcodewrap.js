'use strict';

chrome.storage.local.get(['githubcodewrap-localstorage'], function(returned){
    if(returned['githubcodewrap-localstorage'] === 'true'){
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.href = chrome.extension.getURL('css/githubcodewrap.css');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
});
