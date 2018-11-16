<?php

// sample-page.php will be a Page.
require_once 'page.class.php';

// Create a Page object and use the sample.tpl.php template.
$page = new Page('sample.tpl.php');

// You can __set() Page variables.
$page->title = 'Sample Template';
$page->content = 'Sample page content rendered using TemplateEngine-Lite.php.';

// Render the Page.
echo $page;
