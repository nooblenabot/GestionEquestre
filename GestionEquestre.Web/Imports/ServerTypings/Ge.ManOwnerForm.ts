namespace GestionEquestre.Ge {
    export interface ManOwnerForm {
        Horse: Serenity.StringEditor;
        Cavalier: Serenity.LookupEditor;
        Part: Serenity.DecimalEditor;
    }

    export class ManOwnerForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManOwner';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ManOwnerForm.init)  {
                ManOwnerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ManOwnerForm, [
                    'Horse', w0,
                    'Cavalier', w1,
                    'Part', w2
                ]);
            }
        }
    }
}

