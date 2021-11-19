'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'fetch': {
          'onclick': fetchResult,
        },
      },
      'globals': {
        'result_issues': [],
      },
      'keybinds': {
        13: {
          'todo': fetchResult,
        },
      },
      'title': 'IssueExport.htm',
    });
}
