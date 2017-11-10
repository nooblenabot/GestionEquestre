namespace GestionEquestre.Ge {
    export class SetCountryForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.SetCountry';

    }

    export interface SetCountryForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Name_FR_fr: Serenity.StringEditor;
        Name_EN_gb: Serenity.StringEditor;
        alpha3: Serenity.StringEditor;
        alpha2: Serenity.StringEditor;
        CodeUe: Serenity.IntegerEditor;
        ISOcode: Serenity.IntegerEditor;
    }

    [['DefaultValue', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Name_FR_fr', () => Serenity.StringEditor], ['Name_EN_gb', () => Serenity.StringEditor], ['alpha3', () => Serenity.StringEditor], ['alpha2', () => Serenity.StringEditor], ['CodeUe', () => Serenity.IntegerEditor], ['ISOcode', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(SetCountryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

