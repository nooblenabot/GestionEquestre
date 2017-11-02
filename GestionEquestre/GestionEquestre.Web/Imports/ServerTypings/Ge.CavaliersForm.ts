

namespace GestionEquestre.Ge {
    export class CavaliersForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.Cavaliers';
    }

    export interface CavaliersForm {
        Personne: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        MilesimeLicnece: Serenity.DateEditor;
        NiveauGalop: Serenity.IntegerEditor;
        LicenceCompetition: Serenity.IntegerEditor;
        DateCertificatMedical: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [['LicFfe', () => Serenity.StringEditor], ['Personne', () => Serenity.StringEditor], ['IsActive', () => Serenity.BooleanEditor], ['NotArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['MilesimeLicnece', () => Serenity.DateEditor], ['NiveauGalop', () => Serenity.IntegerEditor], ['LicenceCompetition', () => Serenity.IntegerEditor], ['DateCertificatMedical', () => Serenity.DateEditor], ['Description', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(CavaliersForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}