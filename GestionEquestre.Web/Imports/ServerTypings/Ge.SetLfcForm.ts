namespace GestionEquestre.Ge {
    export interface SetLfcForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }

    export class SetLfcForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.SetLfc';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SetLfcForm.init)  {
                SetLfcForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;

                Q.initFormType(SetLfcForm, [
                    'DefaultValue', w0,
                    'IsActive', w0,
                    'InsertDate', w1,
                    'InsertUsername', w2,
                    'UpdateDate', w1,
                    'UpdateUsername', w2,
                    'Caption', w2,
                    'Code', w2
                ]);
            }
        }
    }
}

