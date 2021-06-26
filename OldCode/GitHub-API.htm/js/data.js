'use strict';

function fetchResult(){
    const url = 'https://api.github.com/'
      + document.getElementById('type').value
      + '/'
      + document.getElementById('path').value
      + document.getElementById('callback').value
      + document.getElementById('parameters').value;

    core_html_modify({
      'id': 'url',
      'properties': {
        'href': url,
        'textContent': url,
      },
    });

    core_ajax({
      'todo': function(result){
          document.getElementById('result-textarea').textContent = JSON.stringify(result);
      },
      'url': url,
    });
}
