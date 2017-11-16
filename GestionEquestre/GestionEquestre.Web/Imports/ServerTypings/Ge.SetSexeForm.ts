namespace GestionEquestre.Ge {
    export class SetSexeForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.SetSexe';

    }

    export interface SetSexeForm {
        ID: Serenity.IntegerEditor;
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        Civility: Serenity.StringEditor;
    }

    [['ID', () => Serenity.IntegerEditor], ['DefaultValue', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUsername', () => Serenity.StringEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUsername', () => Serenity.StringEditor], ['Caption', () => Serenity.StringEditor], ['Civility', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SetSexeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

