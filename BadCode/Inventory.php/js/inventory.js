;(function(){
    'use strict';

    // Fetch the database file.
    var db = new XMLHttpRequest();
    db.open(
      'GET',
      'json/db.json'
    );
    db.send(null);

    // Display items.
    var items = JSON.parse(db.responseText);
    var output = '';

    for(var item in items){
        output += '<tr>'
          + '<td><b><a href="edit.htm?' + item + '">' + items[item]['title'] + '</a></b>'
          + '<td>' + items[item]['description']
          + '<td>' + items[item]['amount']
          + '<td>' + items[item]['date']
          + '</div>';
    }

    document.getElementById('inventory').innerHTML += output;
}());
