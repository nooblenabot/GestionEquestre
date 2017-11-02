

namespace GestionEquestre.Ge {
    export class VilleForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.Ville';
    }

    export interface VilleForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        ReadOnly: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        CodeInsee: Serenity.StringEditor;
        Libele: Serenity.StringEditor;
        NomVille: Serenity.StringEditor;
        CodePostal: Serenity.StringEditor;
        Pays: Serenity.StringEditor;
    }

    [['DefaultValue', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['ReadOnly', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['CodeInsee', () => Serenity.StringEditor], ['Libele', () => Serenity.StringEditor], ['NomVille', () => Serenity.StringEditor], ['CodePostal', () => Serenity.StringEditor], ['Pays', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(VilleForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}