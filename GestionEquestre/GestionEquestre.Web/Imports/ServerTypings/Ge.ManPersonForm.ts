namespace GestionEquestre.Ge {
    export class ManPersonForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManPerson';

    }

    export interface ManPersonForm {
        IsMorale: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Surname: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        MaidenName: Serenity.StringEditor;
        BusinessName: Serenity.StringEditor;
        Birthday: Serenity.DateEditor;
        Sexe: Serenity.IntegerEditor;
        MaritalStatus: Serenity.IntegerEditor;
        BirthCity: Serenity.StringEditor;
        BirthCountry: Serenity.StringEditor;
        Nationality: Serenity.StringEditor;
        Photo: Serenity.StringEditor;
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

    [['IsMorale', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['NotArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Surname', () => Serenity.StringEditor], ['Name', () => Serenity.StringEditor], ['MaidenName', () => Serenity.StringEditor], ['BusinessName', () => Serenity.StringEditor], ['Birthday', () => Serenity.DateEditor], ['Sexe', () => Serenity.IntegerEditor], ['MaritalStatus', () => Serenity.IntegerEditor], ['BirthCity', () => Serenity.StringEditor], ['BirthCountry', () => Serenity.StringEditor], ['Nationality', () => Serenity.StringEditor], ['Photo', () => Serenity.StringEditor], ['Phone', () => Serenity.StringEditor], ['Gsm', () => Serenity.StringEditor], ['WorkPhone', () => Serenity.StringEditor], ['OtherPhone1', () => Serenity.StringEditor], ['OtherPhone2', () => Serenity.StringEditor], ['Email1', () => Serenity.StringEditor], ['Email2', () => Serenity.StringEditor], ['BankAccount', () => Serenity.StringEditor], ['IdAdress', () => Serenity.StringEditor], ['Caption', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(ManPersonForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

