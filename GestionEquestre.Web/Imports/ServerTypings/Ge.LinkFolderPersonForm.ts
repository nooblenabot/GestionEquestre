namespace GestionEquestre.Ge {
    export interface LinkFolderPersonForm {
        Folder: Serenity.StringEditor;
        PersonId: Serenity.LookupEditor;
        Caption: Serenity.StringEditor;
    }

    export class LinkFolderPersonForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.LinkFolderPerson';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LinkFolderPersonForm.init)  {
                LinkFolderPersonForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(LinkFolderPersonForm, [
                    'Folder', w0,
                    'PersonId', w1,
                    'Caption', w0
                ]);
            }
        }
    }
}

