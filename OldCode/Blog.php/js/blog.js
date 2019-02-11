;(function(){
    'use strict';

    // Get the requested post.
    var post_id = window.location.search.substring(1);

    // Fetch the database file.
    var db = new XMLHttpRequest();
    db.open(
      'GET',
      'json/db.json'
    );
    db.send(null);

    // Display blog posts.
    var output = '';
    var posts = JSON.parse(db.responseText);

    // Display request post if post requested.
    if(post_id.length > 0
      && post_id in posts){
        output = '<div class=blog-post>'
          + '<b>' + posts[post_id]['title'] + '</b>'
          + ' by <b>' + posts[post_id]['username'] + '</b>'
          + ' [' + posts[post_id]['date'] + ']<br>'
          + posts[post_id]['content']
          + '</div>';

    // Else display all posts.
    }else{
        for(var post in posts){
            output += '<div class=blog-post>'
              + '<b><a href="?' + post + '">' + posts[post]['title'] + '</a></b>'
              + ' by <b>' + posts[post]['username'] + '</b>'
              + ' [' + posts[post]['date'] + ']<br>'
              + posts[post]['content']
              + '</div>';
        }
    }

    document.getElementById('blog').innerHTML = output;
}());
