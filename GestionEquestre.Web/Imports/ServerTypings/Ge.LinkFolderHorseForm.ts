namespace GestionEquestre.Ge {
    export interface LinkFolderHorseForm {
        Folder: Serenity.StringEditor;
        Horse: Serenity.LookupEditor;
    }

    export class LinkFolderHorseForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.LinkFolderHorse';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LinkFolderHorseForm.init)  {
                LinkFolderHorseForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(LinkFolderHorseForm, [
                    'Folder', w0,
                    'Horse', w1
                ]);
            }
        }
    }
}

