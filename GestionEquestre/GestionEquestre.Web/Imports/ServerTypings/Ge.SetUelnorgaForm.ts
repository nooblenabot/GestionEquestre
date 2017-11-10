namespace GestionEquestre.Ge {
    export class SetUelnorgaForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.SetUelnorga';

    }

    export interface SetUelnorgaForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.LookupEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Organization: Serenity.StringEditor;
        UelnOrganization: Serenity.StringEditor;
    }

    [['DefaultValue', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.LookupEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Organization', () => Serenity.StringEditor], ['UelnOrganization', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SetUelnorgaForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

