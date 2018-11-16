<!doctype html>
<meta charset=utf-8>
<title>Functions.php</title>
<link href=css/functions.css rel=stylesheet>

<?php

$functions = get_defined_functions();
$functions = $functions['internal'];

echo '<script>var functions = ' . json_encode($functions) . ';</script>';

?>

<input onclick=call_functions() type=button value="Get Results">
<hr>
<div class=right id=functions></div><div id=function-inputs><?php
    foreach($functions as $key => &$function){
        if(!is_callable($function)){
            continue;
        }

        echo '(<input id='.$function;
        if(isset($_GET[$function])){
            echo ' value=' . $_GET[$function];
        }
        echo '>) =<br>';
    }
?></div>
<div class=left><?php
    foreach($functions as $key => &$function){
        if(!is_callable($function)){
            continue;
        }

        echo '<span id='.$function.'-result>';
        if(isset($_GET[$function])){
            echo $function($_GET[$function]);
        }
        echo '</span><br>';
    }
?></div>

<script src=js/functions.js></script>
