namespace GestionEquestre.Ge {
    export interface SetSexeForm {
        SexeId: Serenity.IntegerEditor;
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        Civility: Serenity.StringEditor;
    }

    export class SetSexeForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.SetSexe';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SetSexeForm.init)  {
                SetSexeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;
                var w3 = s.StringEditor;

                Q.initFormType(SetSexeForm, [
                    'SexeId', w0,
                    'DefaultValue', w1,
                    'IsActive', w1,
                    'InsertDate', w2,
                    'InsertUsername', w3,
                    'UpdateDate', w2,
                    'UpdateUsername', w3,
                    'Caption', w3,
                    'Civility', w3
                ]);
            }
        }
    }
}

