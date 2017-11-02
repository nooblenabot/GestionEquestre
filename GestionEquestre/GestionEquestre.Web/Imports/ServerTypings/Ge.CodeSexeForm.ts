

namespace GestionEquestre.Ge {
    export class CodeSexeForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.CodeSexe';
    }

    export interface CodeSexeForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        ReadOnly: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Libele: Serenity.StringEditor;
        Civilite: Serenity.StringEditor;
        LibeleUs: Serenity.StringEditor;
    }

    [['DefaultValue', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['ReadOnly', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Libele', () => Serenity.StringEditor], ['Civilite', () => Serenity.StringEditor], ['LibeleUs', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CodeSexeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}