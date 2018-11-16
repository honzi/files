<?php ?>
<?php if(isset($_POST['post-button'])){
    // Load settings.
    require 'settings.php';

    // Verify password.
    if($_POST['password'] != $secret_password){
        header('Location:../?incorrect_password');
        exit;
    }

    $post_id = htmlspecialchars(trim($_POST['id']));

    // Fetch saved posts.
    $posts = json_decode(file_get_contents($database_path), true);

    // Delete post if requested.
    if($_POST['delete'] == 1){
        unset($posts[$post_id]);

    // Else save the post.
    }else{
        $post = array(
          "content" => htmlspecialchars(trim($_POST['content'])),
          "date" => date('Y-m-d H:i:s'),
          "title" => htmlspecialchars(trim($_POST['title'])),
          "username" => htmlspecialchars(trim($_POST['username'])),
        );
        $posts[$post_id] = $post;

        // Sort saved posts by date.
        uasort($posts, function($a, $b){
            return strtotime($b['date']) - strtotime($a['date']);
        });
    }

    // Save all posts to the database file.
    $posts = json_encode($posts, JSON_FORCE_OBJECT);
    file_put_contents(
      $database_path,
      $posts
    );
}

// Return to the blog index.
header('Location:..');
