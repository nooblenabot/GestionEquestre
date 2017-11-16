namespace GestionEquestre.Ge {
    export class CorCorporateForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.CorCorporate';

    }

    export interface CorCorporateForm {
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Gsm: Serenity.StringEditor;
        OtherPhone1: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        Email2: Serenity.StringEditor;
        BankAccount: Serenity.StringEditor;
        IdAdress: Serenity.StringEditor;
        FrSiren: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [['IsActive', () => Serenity.BooleanEditor], ['NotArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Name', () => Serenity.StringEditor], ['Phone', () => Serenity.StringEditor], ['Gsm', () => Serenity.StringEditor], ['OtherPhone1', () => Serenity.StringEditor], ['Email1', () => Serenity.StringEditor], ['Email2', () => Serenity.StringEditor], ['BankAccount', () => Serenity.StringEditor], ['IdAdress', () => Serenity.StringEditor], ['FrSiren', () => Serenity.StringEditor], ['Caption', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(CorCorporateForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

