

namespace GestionEquestre.Ge {
    export class CodeLfcForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.CodeLfc';
    }

    export interface CodeLfcForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        ReadOnly: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Libele: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }

    [['DefaultValue', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['ReadOnly', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Libele', () => Serenity.StringEditor], ['Code', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CodeLfcForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}