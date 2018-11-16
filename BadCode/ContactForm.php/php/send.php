<?php

if(isset($_POST['send'])){

    // Load settings.
    require 'settings.php';

    // Send email.
    mail(
      $sendto,
      filter_var(
        $_POST['message-title'],
        FILTER_SANITIZE_STRING
      ),
      wordwrap(
        filter_var(
          $_POST['message'],
          FILTER_SANITIZE_STRING
        ),
        70,
        "\r\n"
      ),
      "From: "
        . filter_var(
          $_POST['return-email'],
          FILTER_SANITIZE_STRING
        )
        . "\r\nX-Mailer: PHP/" . phpversion()
    );
}

// Return to form.
header('Location:..');
