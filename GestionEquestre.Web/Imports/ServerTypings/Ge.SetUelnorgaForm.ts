namespace GestionEquestre.Ge {
    export interface SetUelnorgaForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Organization: Serenity.StringEditor;
        UelnCode: Serenity.StringEditor;
    }

    export class SetUelnorgaForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.SetUelnorga';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SetUelnorgaForm.init)  {
                SetUelnorgaForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;

                Q.initFormType(SetUelnorgaForm, [
                    'DefaultValue', w0,
                    'IsActive', w0,
                    'InsertDate', w1,
                    'InsertUsername', w2,
                    'UpdateDate', w1,
                    'UpdateUsername', w2,
                    'Organization', w2,
                    'UelnCode', w2
                ]);
            }
        }
    }
}

