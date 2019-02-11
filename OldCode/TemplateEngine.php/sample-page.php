<?php

// sample-page.php will be a Page.
require_once 'engine/page.class.php';

// Create a Page object with the sample.tpl.php template.
$page = new Page('templates/sample.tpl.php');

// You can __set() Page variables.
// Use the variable names in your template file to display HTML.
// Variables will be created if they do not exist.
$page->content = 'TemplateEngine.php sample-page.php';
$page->mycustomvariable = 'My custom text.';
$page->not_used = 'A variable that will be unset.';
$page->title = 'TemplateEngine.php Title';

// You can unset() Page variables.
unset($page->not_used);

// You can __get() Page variables and check if Page variables isset().
if(isset($page->mycustomvariable)){
    // This will display.
    $page->content .= '<br>isset($page-&gt;mycustomvariable) is True';
}
if(isset($page->not_used)){
    // This will not display.
    $page->content .= '<br>isset($page-&gt;not_used) is True';
}

// You can echo $page; to render the Page.
// Or echo $page();
// Or echo $page->render();
echo $page;
