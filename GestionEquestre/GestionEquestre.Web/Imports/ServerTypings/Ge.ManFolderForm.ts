namespace GestionEquestre.Ge {
    export class ManFolderForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManFolder';

    }

    export interface ManFolderForm {
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Id: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        Caption: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        Establishment: Serenity.LookupEditor;
        Comment: Serenity.TextAreaEditor;
        CloseDate: Serenity.DateEditor;
        CloseRaison: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [['InsertDate', () => Serenity.DateEditor], ['InsertUsername', () => Serenity.StringEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUsername', () => Serenity.StringEditor], ['Id', () => Serenity.StringEditor], ['IsActive', () => Serenity.BooleanEditor], ['IsArchive', () => Serenity.BooleanEditor], ['Caption', () => Serenity.StringEditor], ['CreateDate', () => Serenity.DateEditor], ['Establishment', () => Serenity.LookupEditor], ['Comment', () => Serenity.TextAreaEditor], ['CloseDate', () => Serenity.DateEditor], ['CloseRaison', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(ManFolderForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

