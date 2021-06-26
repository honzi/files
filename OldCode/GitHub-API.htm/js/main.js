'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'fetch': {
          'onclick': fetchResult,
        },
      },
      'keybinds': {
        13: {
          'todo': fetchResult,
        },
      },
      'title': 'Github-API.htm',
    });

    let type_html = '';
    const types = [
      'emojis',
      'events',
      'feeds',
      'gists',
      'gitignore/templates',
      'issues',
      'markdown',
      'meta',
      'networks',
      'notifications',
      'orgs',
      'rate_limit',
      'repos',
      'search',
      'user',
      'users',
    ];
    for(const type in types){
        type_html += '<option>' + types[type] + '</option>';
    }
    document.getElementById('type').innerHTML = type_html;
}
