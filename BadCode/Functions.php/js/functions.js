'use strict';

function call_functions(){
    var loop_counter = functions.length - 1;
    var parameters = '?';

    do{
        var value = document.getElementById(functions[loop_counter]).value;

        // Only include inputs that have input.
        if(value.length > 0){
            parameters +=
              '&' + functions[loop_counter]
              + '=' + value;
        }
    }while(loop_counter--);

    // Only calculate results if there are any parameters.
    if(parameters.length > 1){
        window.location = '//' + location.host + location.pathname + parameters;
    }
}

window.onload = function(){
    var length = functions.length - 1;
    var function_list = '';

    for(var loop_counter = 0; loop_counter <= length; loop_counter++){
        function_list += functions[loop_counter] + '<br>';
    }

    document.getElementById('functions').innerHTML = function_list;

    window.onkeydown = function(e){
        var key = e.keyCode || e.which;

        // ENTER: input input.
        if(key === 13){
            call_functions();
        }
    };
};
