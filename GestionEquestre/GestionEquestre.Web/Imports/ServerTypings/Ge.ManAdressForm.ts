namespace GestionEquestre.Ge {
    export class ManAdressForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManAdress';

    }

    export interface ManAdressForm {
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Adress1: Serenity.StringEditor;
        Adress2: Serenity.StringEditor;
        Adress3: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.IntegerEditor;
        Cedex: Serenity.StringEditor;
        Building: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [['IsActive', () => Serenity.BooleanEditor], ['NotArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUsername', () => Serenity.StringEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUsername', () => Serenity.StringEditor], ['Adress1', () => Serenity.StringEditor], ['Adress2', () => Serenity.StringEditor], ['Adress3', () => Serenity.StringEditor], ['City', () => Serenity.StringEditor], ['Country', () => Serenity.IntegerEditor], ['Cedex', () => Serenity.StringEditor], ['Building', () => Serenity.StringEditor], ['Caption', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(ManAdressForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

