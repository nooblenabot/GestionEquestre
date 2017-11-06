
namespace GestionEquestre.Ge {
    export class SetGalopForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.SetGalop';
    }

    export interface SetGalopForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Caption: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }

    [,
        ['DefaultValue', () => Serenity.BooleanEditor],
        ['IsActive', () => Serenity.BooleanEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['Caption', () => Serenity.StringEditor],
        ['Code', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SetGalopForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}