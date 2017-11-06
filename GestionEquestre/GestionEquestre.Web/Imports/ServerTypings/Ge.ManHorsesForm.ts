
namespace GestionEquestre.Ge {
    export class ManHorsesForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManHorses';
    }

    export interface ManHorsesForm {
        Sire: Serenity.StringEditor;
        CleSire: Serenity.StringEditor;
        Hnin: Serenity.StringEditor;
        BirthCountry: Serenity.StringEditor;
        BirthOrganization: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Birthday: Serenity.DateEditor;
        Sexe: Serenity.IntegerEditor;
        Color: Serenity.StringEditor;
        Race: Serenity.StringEditor;
        Transponder: Serenity.StringEditor;
        FinalExit: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [,
        ['Sire', () => Serenity.StringEditor],
        ['CleSire', () => Serenity.StringEditor],
        ['Hnin', () => Serenity.StringEditor],
        ['BirthCountry', () => Serenity.StringEditor],
        ['BirthOrganization', () => Serenity.StringEditor],
        ['Name', () => Serenity.StringEditor],
        ['IsActive', () => Serenity.BooleanEditor],
        ['NotArchive', () => Serenity.BooleanEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['Birthday', () => Serenity.DateEditor],
        ['Sexe', () => Serenity.IntegerEditor],
        ['Color', () => Serenity.StringEditor],
        ['Race', () => Serenity.StringEditor],
        ['Transponder', () => Serenity.StringEditor],
        ['FinalExit', () => Serenity.DateEditor],
        ['Description', () => Serenity.StringEditor],
        ['ArchiveDate', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(ManHorsesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}