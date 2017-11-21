namespace GestionEquestre.Ge {
    export class ManHorsesForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManHorses';

    }

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

    [['Ueln', () => Serenity.StringEditor], ['Sire', () => Serenity.StringEditor], ['CleSire', () => Serenity.StringEditor], ['Hnin', () => Serenity.StringEditor], ['BirthCountry', () => Serenity.LookupEditor], ['BirthOrganization', () => Serenity.LookupEditor], ['Name', () => Serenity.StringEditor], ['IsActive', () => Serenity.BooleanEditor], ['IsArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUsername', () => Serenity.StringEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUsername', () => Serenity.StringEditor], ['Birthday', () => Serenity.DateEditor], ['Sexe', () => Serenity.LookupEditor], ['Color', () => Serenity.StringEditor], ['Race', () => Serenity.StringEditor], ['Transponder', () => Serenity.StringEditor], ['FinalExit', () => Serenity.DateEditor], ['Description', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(ManHorsesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

