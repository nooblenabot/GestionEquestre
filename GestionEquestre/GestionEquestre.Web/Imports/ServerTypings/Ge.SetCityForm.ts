namespace GestionEquestre.Ge {
    export class SetCityForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.SetCity';

    }

    export interface SetCityForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        FrCodeInsee: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        City: Serenity.StringEditor;
        PostCode: Serenity.StringEditor;
        Country: Serenity.IntegerEditor;
    }

    [['DefaultValue', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['FrCodeInsee', () => Serenity.StringEditor], ['Caption', () => Serenity.StringEditor], ['City', () => Serenity.StringEditor], ['PostCode', () => Serenity.StringEditor], ['Country', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(SetCityForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

