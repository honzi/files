<?php ?>
<?php if(isset($_POST['submit-button'])){
    // Load settings.
    require 'settings.php';

    // Verify password.
    if($_POST['password'] != $secret_password){
        header('Location:../?incorrect_password');
        exit;
    }

    $item_id = htmlspecialchars(trim($_POST['id']));

    // Fetch saved items.
    $items = json_decode(file_get_contents($database_path), true);

    // Delete item if requested.
    if($_POST['delete'] == 1){
        unset($items[$item_id]);

    // Else save the item.
    }else{
        $item = array(
          "amount" => htmlspecialchars(trim($_POST['amount'])),
          "date" => date('Y-m-d H:i:s'),
          "description" => htmlspecialchars(trim($_POST['description'])),
          "title" => htmlspecialchars(trim($_POST['title'])),
        );
        $items[$item_id] = $item;

        // Sort all items by title.
        uasort($items, function($a, $b){
            return strcmp($a['title'], $b['title']);
        });
    }

    // Save all items to the database file.
    $items = json_encode($items, JSON_FORCE_OBJECT);
    file_put_contents(
      $database_path,
      $items
    );
}

// Return to the inventory index.
header('Location:..');
