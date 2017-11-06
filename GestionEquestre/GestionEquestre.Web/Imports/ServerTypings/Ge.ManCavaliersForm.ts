
namespace GestionEquestre.Ge {
    export class ManCavaliersForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManCavaliers';
    }

    export interface ManCavaliersForm {
        Person: Serenity.StringEditor;
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
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [,
        ['Person', () => Serenity.StringEditor],
        ['IsActive', () => Serenity.BooleanEditor],
        ['NotArchive', () => Serenity.BooleanEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['MilesimeLicnece', () => Serenity.DateEditor],
        ['NiveauGalop', () => Serenity.IntegerEditor],
        ['LicenceCompetition', () => Serenity.IntegerEditor],
        ['DateCertificatMedical', () => Serenity.DateEditor],
        ['Caption', () => Serenity.StringEditor],
        ['ArchiveDate', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(ManCavaliersForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}