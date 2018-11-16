<?php ?>
<?php if(isset($_POST['post-button'])){

    // load settings
    require 'settings.php';

    // verify password
    if($_POST['password'] != $secret_password){
        header('Location:../?incorrect_password');
        exit;
    }

    // verify length of post title
    $length = strlen(trim($_POST['title']));
    if($length < 1
      || $length > $maxlength_title){
        header('Location:../?invalid_title_length');
        exit;
    }

    // verify length of post content
    $length = strlen(trim($_POST['content']));
    if($length < 1
      && $length > $maxlength_content){
        header('Location:../?invalid_content_length');
        exit;
    }

    // load the database file
    $db = fopen(
      $database_path,
      'a+'
    );

    // lock the database file
    if(flock($db, LOCK_EX)){

        // write blog post at the end of the database file
        fwrite(
          $db,
          date('Y-m-d H:i:s')
          . '<'
          . htmlspecialchars(trim($_POST['username']))
          . '<'
          . htmlspecialchars(trim($_POST['title']))
          . '<'
          . str_replace(
            array(
              "\r\n",
              "\n",
              "\r"
            ),
            '>>',
            htmlspecialchars(trim($_POST['content']))
          )
          . "\n"
        );

        // unlock the database file
        flock(
          $db,
          LOCK_UN
        );

        // close the database file
        fclose($db);
    }
}

// return to the blog index
header('Location:..');
