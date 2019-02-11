;(function(){
    'use strict';

    // Check if a post is being edited.
    var post_id = window.location.search.substring(1);
    if(post_id.length <= 0){
        return;
    }

    document.getElementById('id').value = post_id;

    // Fetch the database file.
    var db = new XMLHttpRequest();
    db.open(
      'GET',
      'json/db.json'
    );
    db.send(null);

    // Fetch posts.
    var posts = JSON.parse(db.responseText);

    // Use existing post data,
    //   if any exists.
    if(post_id in posts){
        document.getElementById('content').value = posts[post_id]['content'];
        document.getElementById('title').value = posts[post_id]['title'];
        document.getElementById('username').value = posts[post_id]['username'];
    }
}());
