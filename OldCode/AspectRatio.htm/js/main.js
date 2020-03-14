'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'height': {
          'oninput': calculate_width,
        },
        'ratio-height': {
          'oninput': calculate_width,
        },
        'ratio-width': {
          'oninput': calculate_height,
        },
        'width': {
          'oninput': calculate_height,
        },
      },
      'title': 'AspectRatio.htm',
    });
}
