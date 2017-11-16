namespace GestionEquestre.Ge {
    export class ManPersonForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManPerson';

    }

    export interface ManPersonForm {
        IsMorale: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Surname: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        MaidenName: Serenity.StringEditor;
        BusinessName: Serenity.StringEditor;
        Birthday: Serenity.DateEditor;
        Sexe: Serenity.LookupEditor;
        MaritalStatus: Serenity.LookupEditor;
        BirthCity: Serenity.LookupEditor;
        BirthCountry: Serenity.LookupEditor;
        Nationality: Serenity.LookupEditor;
        Photo: Serenity.ImageUploadEditor;
        Phone: Serenity.StringEditor;
        Gsm: Serenity.StringEditor;
        WorkPhone: Serenity.StringEditor;
        OtherPhone1: Serenity.StringEditor;
        OtherPhone2: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        Email2: Serenity.StringEditor;
        BankAccount: Serenity.StringEditor;
        IdAdress: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [['IsMorale', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['NotArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUsername', () => Serenity.StringEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUsername', () => Serenity.StringEditor], ['Surname', () => Serenity.StringEditor], ['Name', () => Serenity.StringEditor], ['MaidenName', () => Serenity.StringEditor], ['BusinessName', () => Serenity.StringEditor], ['Birthday', () => Serenity.DateEditor], ['Sexe', () => Serenity.LookupEditor], ['MaritalStatus', () => Serenity.LookupEditor], ['BirthCity', () => Serenity.LookupEditor], ['BirthCountry', () => Serenity.LookupEditor], ['Nationality', () => Serenity.LookupEditor], ['Photo', () => Serenity.ImageUploadEditor], ['Phone', () => Serenity.StringEditor], ['Gsm', () => Serenity.StringEditor], ['WorkPhone', () => Serenity.StringEditor], ['OtherPhone1', () => Serenity.StringEditor], ['OtherPhone2', () => Serenity.StringEditor], ['Email1', () => Serenity.StringEditor], ['Email2', () => Serenity.StringEditor], ['BankAccount', () => Serenity.StringEditor], ['IdAdress', () => Serenity.StringEditor], ['Caption', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(ManPersonForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

