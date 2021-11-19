'use strict';

function fetchResult(){
    let url = 'https://api.github.com/repos/'
      + document.getElementById('owner').value
      + '/'
      + document.getElementById('repo').value
      + '/issues?per_page=100'
      + '&direction=' + document.getElementById('direction').value
      + '&sort=' + document.getElementById('sort').value
      + '&state=' + document.getElementById('state').value;

    const labels = document.getElementById('labels').value;
    if(labels.length){
        url += '&labels=' + labels;
    }
    const since = document.getElementById('since').value;
    if(since.length){
        url += '&since=' + since;
    }

    core_ajax({
      'todo': function(result){
          document.getElementById('results-json').value = JSON.stringify(result);

          let table_html = '';
          for(const issue in result){
              table_html += '<tr>'
                + '<td>' + result[issue]['number']
                + '<td><a class=external href=' + result[issue]['html_url'] + ' rel=noopener target=_blank>' + core_html_format({
                  'string': result[issue]['title'],
                }) + '</a>'
                + '<td><a class=external href=https://github.com/' + result[issue]['user']['login'] + ' rel=noopener target=_blank>' + result[issue]['user']['login'] + '</a>'
                + '<td>' + result[issue]['created_at']
                + '<td>' + result[issue]['comments']
                + '<td>' + result[issue]['state'];
          }
          document.getElementById('results-table').innerHTML = table_html;
      },
      'url': url,
    });
}
