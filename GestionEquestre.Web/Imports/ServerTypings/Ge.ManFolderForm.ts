namespace GestionEquestre.Ge {
    export interface ManFolderForm {
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Id: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        Caption: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        Establishment: Serenity.LookupEditor;
        Comment: Serenity.TextAreaEditor;
        CloseDate: Serenity.DateEditor;
        CloseRaison: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    export class ManFolderForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManFolder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ManFolderForm.init)  {
                ManFolderForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.LookupEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(ManFolderForm, [
                    'InsertDate', w0,
                    'InsertUsername', w1,
                    'UpdateDate', w0,
                    'UpdateUsername', w1,
                    'Id', w1,
                    'IsActive', w2,
                    'IsArchive', w2,
                    'Caption', w1,
                    'CreateDate', w0,
                    'Establishment', w3,
                    'Comment', w4,
                    'CloseDate', w0,
                    'CloseRaison', w1,
                    'ArchiveDate', w0
                ]);
            }
        }
    }
}

