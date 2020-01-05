namespace GestionEquestre.Ge {
    export interface LinkFolderCavalierForm {
        Folder: Serenity.StringEditor;
        Cavalier: Serenity.LookupEditor;
    }

    export class LinkFolderCavalierForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.LinkFolderCavalier';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LinkFolderCavalierForm.init)  {
                LinkFolderCavalierForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(LinkFolderCavalierForm, [
                    'Folder', w0,
                    'Cavalier', w1
                ]);
            }
        }
    }
}

