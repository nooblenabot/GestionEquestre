namespace GestionEquestre.Ge {
    export class SetUelnorgaForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.SetUelnorga';

    }

    export interface SetUelnorgaForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Organization: Serenity.StringEditor;
        UelnCode: Serenity.StringEditor;
    }

    [['DefaultValue', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUsername', () => Serenity.StringEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUsername', () => Serenity.StringEditor], ['Organization', () => Serenity.StringEditor], ['UelnCode', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SetUelnorgaForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

