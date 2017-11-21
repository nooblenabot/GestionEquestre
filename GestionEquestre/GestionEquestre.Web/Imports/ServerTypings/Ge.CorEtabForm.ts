namespace GestionEquestre.Ge {
    export class CorEtabForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.CorEtab';

    }

    export interface CorEtabForm {
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
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
        FrSiret: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [['IsActive', () => Serenity.BooleanEditor], ['IsArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Name', () => Serenity.StringEditor], ['Phone', () => Serenity.StringEditor], ['Gsm', () => Serenity.StringEditor], ['OtherPhone1', () => Serenity.StringEditor], ['Email1', () => Serenity.StringEditor], ['Email2', () => Serenity.StringEditor], ['BankAccount', () => Serenity.StringEditor], ['IdAdress', () => Serenity.StringEditor], ['FrSiret', () => Serenity.StringEditor], ['Caption', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(CorEtabForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

