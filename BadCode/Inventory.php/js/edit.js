;(function(){
    'use strict';

    // Check if an item is being edited.
    var item_id = window.location.search.substring(1);
    if(item_id.length <= 0){
        return;
    }

    document.getElementById('id').value = item_id;

    // Fetch the database file.
    var db = new XMLHttpRequest();
    db.open(
      'GET',
      'json/db.json'
    );
    db.send(null);

    // Fetch items.
    var items = JSON.parse(db.responseText);

    // Use existing post data,
    //   if any exists.
    if(item_id in items){
        document.getElementById('amount').value = items[item_id]['amount'];
        document.getElementById('description').value = items[item_id]['description'];
        document.getElementById('title').value = items[item_id]['title'];
    }
}());
