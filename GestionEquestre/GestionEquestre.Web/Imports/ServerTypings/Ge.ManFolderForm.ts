namespace GestionEquestre.Ge {
    export class ManFolderForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManFolder';

    }

    export interface ManFolderForm {
        Id: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
        Number: Serenity.IntegerEditor;
        CreateeDate: Serenity.DateEditor;
        CloseRaison: Serenity.StringEditor;
        CloseDate: Serenity.DateEditor;
        Establishment: Serenity.LookupEditor;
        Comment: Serenity.StringEditor;
        Horses: LinkFolderHorseEditor;
    }

    [['Id', () => Serenity.StringEditor], ['IsActive', () => Serenity.BooleanEditor], ['NotArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUsername', () => Serenity.StringEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUsername', () => Serenity.StringEditor], ['Caption', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor], ['Number', () => Serenity.IntegerEditor], ['CreateeDate', () => Serenity.DateEditor], ['CloseRaison', () => Serenity.StringEditor], ['CloseDate', () => Serenity.DateEditor], ['Establishment', () => Serenity.LookupEditor], ['Comment', () => Serenity.StringEditor], ['Horses', () => LinkFolderHorseEditor]].forEach(x => Object.defineProperty(ManFolderForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

