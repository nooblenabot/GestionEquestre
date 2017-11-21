namespace GestionEquestre.Ge {
    export class ManCavaliersForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManCavaliers';

    }

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

    [['LicFfe', () => Serenity.StringEditor], ['Person', () => Serenity.LookupEditor], ['IsActive', () => Serenity.BooleanEditor], ['IsArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUsername', () => Serenity.StringEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUsername', () => Serenity.StringEditor], ['MilesimeLicnece', () => Serenity.DateYearEditor], ['NiveauGalop', () => Serenity.LookupEditor], ['LicenceCompetition', () => Serenity.LookupEditor], ['DateCertificatMedical', () => Serenity.DateEditor], ['Caption', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(ManCavaliersForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

