

namespace GestionEquestre.Ge {
    export class CodeStuationfamilleForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.CodeStuationfamille';
    }

    export interface CodeStuationfamilleForm {
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

    [['DefaultValue', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['ReadOnly', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Libele', () => Serenity.StringEditor], ['Code', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CodeStuationfamilleForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}