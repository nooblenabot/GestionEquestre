namespace GestionEquestre.Ge {
    export interface ManCavaliersForm {
        LicFfe: Serenity.StringEditor;
        Person: Serenity.LookupEditor;
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        MilesimeLicnece: Serenity.DateYearEditor;
        NiveauGalop: Serenity.LookupEditor;
        LicenceCompetition: Serenity.LookupEditor;
        DateCertificatMedical: Serenity.DateEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    export class ManCavaliersForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManCavaliers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ManCavaliersForm.init)  {
                ManCavaliersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;
                var w4 = s.DateYearEditor;

                Q.initFormType(ManCavaliersForm, [
                    'LicFfe', w0,
                    'Person', w1,
                    'IsActive', w2,
                    'IsArchive', w2,
                    'InsertDate', w3,
                    'InsertUsername', w0,
                    'UpdateDate', w3,
                    'UpdateUsername', w0,
                    'MilesimeLicnece', w4,
                    'NiveauGalop', w1,
                    'LicenceCompetition', w1,
                    'DateCertificatMedical', w3,
                    'Caption', w0,
                    'ArchiveDate', w3
                ]);
            }
        }
    }
}

