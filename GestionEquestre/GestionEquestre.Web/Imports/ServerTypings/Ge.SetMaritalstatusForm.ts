
namespace GestionEquestre.Ge {
    export class SetMaritalstatusForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.SetMaritalstatus';
    }

    export interface SetMaritalstatusForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        ReadOnly: Serenity.BooleanEditor;
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
        ['ReadOnly', () => Serenity.BooleanEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['Caption', () => Serenity.StringEditor],
        ['Code', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SetMaritalstatusForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}