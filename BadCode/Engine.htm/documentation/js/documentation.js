(function(){
    'use strict';

    var documentation = '';

    function getProperties(object, prefix){
        for(var property in object){
            documentation += '<li>' + prefix + '.' + property;

            if(typeof object[property] === 'function'){
                documentation += '(args)';
            }

            if(typeof object[property] === 'object'){
                getProperties(object[property], prefix + '.' + property);
            }
        }
    }

    getProperties(
      engine,
      'engine'
    );

    document.getElementById('documentation').innerHTML = documentation;
}());
