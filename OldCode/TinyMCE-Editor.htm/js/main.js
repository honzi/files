'use strict';

function core_escape(){}

function repo_init(){
    core_repo_init({
      'beforeunload': {
        'todo': function(){
            const content = tinymce.activeEditor.getContent();
            if(content.length > 0){
                globalThis.localStorage.setItem(
                  'TinyMCE-Editor.htm-content',
                  content
                );

            }else{
                globalThis.localStorage.removeItem('TinyMCE-Editor.htm-content');
            }
        },
      },
      'title': 'TinyMCE-Editor.htm',
    });
    document.body.removeChild(document.getElementById('core-ui'));

    tinymce.init({
      'menubar': false,
      'mode': 'textareas',
      'plugins': 'code link lists print',
      'statusbar': false,
      'toolbar': 'undo redo | bold italic | bullist numlist | link unlink | print code',
      'valid_elements': 'a[href|target],em,li,ol,p,strong,ul',
    });

    resize();
    tinymce.activeEditor.setContent(globalThis.localStorage.getItem('TinyMCE-Editor.htm-content') || '');

    globalThis.onresize = resize;
}
