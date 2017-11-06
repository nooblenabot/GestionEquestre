
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
        Country: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        CodeUe: Serenity.IntegerEditor;
        Iso3166Country: Serenity.StringEditor;
    }

    [,
        ['DefaultValue', () => Serenity.BooleanEditor],
        ['IsActive', () => Serenity.BooleanEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['Country', () => Serenity.StringEditor],
        ['Code', () => Serenity.StringEditor],
        ['CodeUe', () => Serenity.IntegerEditor],
        ['Iso3166Country', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SetCountryForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}