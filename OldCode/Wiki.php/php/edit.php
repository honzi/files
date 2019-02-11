<?php ?>
<?php if(isset($_POST['save-button'])){
    // Load settings.
    require 'settings.php';

    // Verify password.
    if($_POST['password'] != $secret_password){
        header('Location:..');
        exit;
    }

    $page_id = htmlspecialchars(trim($_POST['id']));

    // Fetch saved pages.
    $pages = json_decode(file_get_contents($database_path), true);

    // Delete page if requested.
    if($_POST['delete'] == 1){
        unset($pages[$page_id]);

    // Else save the page.
    }else{
        $page = array(
          "content" => htmlspecialchars(trim($_POST['content'])),
          "date" => date('Y-m-d H:i:s'),
          "title" => htmlspecialchars(trim($_POST['title'])),
        );
        $pages[$page_id] = $page;
    }

    // Save all pages to the database file.
    $pages = json_encode($pages, JSON_FORCE_OBJECT);
    file_put_contents(
      $database_path,
      $pages
    );

    // Go to the saved page.
    header('Location:../?' . $page_id);
    exit;
}

// Return to the blog index.
header('Location:..');
