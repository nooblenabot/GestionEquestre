namespace GestionEquestre.Ge {
    export class ManPersonForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManPerson';

    }

    export interface ManPersonForm {
        IsMorale: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Surname: Serenity.PersonNameEditor;
        Name: Serenity.PersonNameEditor;
        FullName: Serenity.StringEditor;
        MaidenName: Serenity.PersonNameEditor;
        BusinessName: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        Birthday: Serenity.DateEditor;
        Sexe: Serenity.LookupEditor;
        MaritalStatus: Serenity.LookupEditor;
        BirthCity: Serenity.LookupEditor;
        BirthCountry: Serenity.LookupEditor;
        Nationality: Serenity.LookupEditor;
        Photo: Serenity.ImageUploadEditor;
        Phone: Serenity.PhoneEditor;
        Gsm: Serenity.PhoneEditor;
        WorkPhone: Serenity.PhoneEditor;
        OtherPhone1: Serenity.PhoneEditor;
        OtherPhone2: Serenity.PhoneEditor;
        Email1: Serenity.EmailEditor;
        Email2: Serenity.EmailEditor;
        BankAccount: Serenity.StringEditor;
        IdAdress: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [['IsMorale', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['IsArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUsername', () => Serenity.StringEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUsername', () => Serenity.StringEditor], ['Surname', () => Serenity.PersonNameEditor], ['Name', () => Serenity.PersonNameEditor], ['FullName', () => Serenity.StringEditor], ['MaidenName', () => Serenity.PersonNameEditor], ['BusinessName', () => Serenity.StringEditor], ['Caption', () => Serenity.StringEditor], ['Birthday', () => Serenity.DateEditor], ['Sexe', () => Serenity.LookupEditor], ['MaritalStatus', () => Serenity.LookupEditor], ['BirthCity', () => Serenity.LookupEditor], ['BirthCountry', () => Serenity.LookupEditor], ['Nationality', () => Serenity.LookupEditor], ['Photo', () => Serenity.ImageUploadEditor], ['Phone', () => Serenity.PhoneEditor], ['Gsm', () => Serenity.PhoneEditor], ['WorkPhone', () => Serenity.PhoneEditor], ['OtherPhone1', () => Serenity.PhoneEditor], ['OtherPhone2', () => Serenity.PhoneEditor], ['Email1', () => Serenity.EmailEditor], ['Email2', () => Serenity.EmailEditor], ['BankAccount', () => Serenity.StringEditor], ['IdAdress', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(ManPersonForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

