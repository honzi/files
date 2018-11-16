;(function(){
    'use strict';

    // Check if a page is being edited.
    var page_id = window.location.search.substring(1);
    if(page_id.length <= 0){
        return;
    }

    document.getElementById('id').value = page_id;

    // Fetch the database file.
    var db = new XMLHttpRequest();
    db.open(
      'GET',
      'json/db.json'
    );
    db.send(null);

    // Fetch pages.
    var pages = JSON.parse(db.responseText);

    // Use existing page data, if any exists.
    if(page_id in pages){
        document.getElementById('content').value = pages[page_id]['content'];
        document.getElementById('title').value = pages[page_id]['title'];
    }
}());
