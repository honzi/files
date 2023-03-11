'use babel';

import {CompositeDisposable} from 'atom';

export default{
    subscriptions: null,

    activate(state){
        this.subscriptions = new CompositeDisposable();
        this.subscriptions.add(
          atom.commands.add(
            'atom-workspace',
            {
              'clearundostack:clearundostack': () => this.clearundostack(),
            }
          )
        );
    },

    clearundostack(){
        const editor = atom.workspace.getActiveTextEditor();
        if(editor){
            editor.getBuffer().clearUndoStack();
        }
    },

    deactivate(){
        this.subscriptions.dispose();
    }
};
