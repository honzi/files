;(function(){
    'use strict';

    // Get the requested page.
    var page_id = window.location.search.substring(1);

    // Display index page if no page requested.
    if(page_id.length <= 0){
        page_id = 'index';
    }

    // Fetch the database file.
    var db = new XMLHttpRequest();
    db.open(
      'GET',
      'json/db.json'
    );
    db.send(null);

    // Fetch saved pages.
    var pages = JSON.parse(db.responseText);

    // If page doesn't exist, redirect to the edit page.
    if(!(page_id in pages)){
        window.location = 'edit.htm?' + page_id;
        return;
    }

    document.getElementById('wiki').innerHTML = pages[page_id]['content'];
    document.title = pages[page_id]['title'];

    // Rewrite edit link.
    document.getElementById('edit').setAttribute(
      'href',
      'edit.htm?' + page_id
    );
}());
