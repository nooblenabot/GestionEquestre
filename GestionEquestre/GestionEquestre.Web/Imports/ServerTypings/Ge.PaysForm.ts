

namespace GestionEquestre.Ge {
    export class PaysForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.Pays';
    }

    export interface PaysForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        ReadOnly: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Libele: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        CodeUe: Serenity.IntegerEditor;
    }

    [['DefaultValue', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['ReadOnly', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Libele', () => Serenity.StringEditor], ['Code', () => Serenity.StringEditor], ['CodeUe', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(PaysForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}