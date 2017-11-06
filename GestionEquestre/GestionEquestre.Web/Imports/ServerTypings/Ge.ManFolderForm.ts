
namespace GestionEquestre.Ge {
    export class ManFolderForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManFolder';
    }

    export interface ManFolderForm {
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
        Number: Serenity.IntegerEditor;
        CreateeDate: Serenity.DateEditor;
        CloseRaison: Serenity.StringEditor;
        CloseDate: Serenity.DateEditor;
        Establishment: Serenity.IntegerEditor;
        Comment: Serenity.StringEditor;
    }

    [,
        ['IsActive', () => Serenity.BooleanEditor],
        ['NotArchive', () => Serenity.BooleanEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor],
        ['Caption', () => Serenity.StringEditor],
        ['ArchiveDate', () => Serenity.DateEditor],
        ['Number', () => Serenity.IntegerEditor],
        ['CreateeDate', () => Serenity.DateEditor],
        ['CloseRaison', () => Serenity.StringEditor],
        ['CloseDate', () => Serenity.DateEditor],
        ['Establishment', () => Serenity.IntegerEditor],
        ['Comment', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ManFolderForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}