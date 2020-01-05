namespace GestionEquestre.Ge {
    export interface ManHorsesForm {
        Ueln: Serenity.StringEditor;
        Sire: Serenity.StringEditor;
        CleSire: Serenity.StringEditor;
        Hnin: Serenity.StringEditor;
        BirthCountry: Serenity.LookupEditor;
        BirthOrganization: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Birthday: Serenity.DateEditor;
        Sexe: Serenity.LookupEditor;
        Color: Serenity.StringEditor;
        Race: Serenity.StringEditor;
        Transponder: Serenity.StringEditor;
        FinalExit: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    export class ManHorsesForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManHorses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ManHorsesForm.init)  {
                ManHorsesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;

                Q.initFormType(ManHorsesForm, [
                    'Ueln', w0,
                    'Sire', w0,
                    'CleSire', w0,
                    'Hnin', w0,
                    'BirthCountry', w1,
                    'BirthOrganization', w1,
                    'Name', w0,
                    'IsActive', w2,
                    'IsArchive', w2,
                    'InsertDate', w3,
                    'InsertUsername', w0,
                    'UpdateDate', w3,
                    'UpdateUsername', w0,
                    'Birthday', w3,
                    'Sexe', w1,
                    'Color', w0,
                    'Race', w0,
                    'Transponder', w0,
                    'FinalExit', w3,
                    'Description', w0,
                    'ArchiveDate', w3
                ]);
            }
        }
    }
}

