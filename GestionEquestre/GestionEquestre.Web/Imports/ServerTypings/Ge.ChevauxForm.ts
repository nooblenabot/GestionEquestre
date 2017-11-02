

namespace GestionEquestre.Ge {
    export class ChevauxForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.Chevaux';
    }

    export interface ChevauxForm {
        Sire: Serenity.StringEditor;
        CleSire: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Birthday: Serenity.DateEditor;
        Sexe: Serenity.IntegerEditor;
        Robe: Serenity.StringEditor;
        Transpondeur: Serenity.StringEditor;
        SortieDefinitive: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [['Ueln', () => Serenity.StringEditor], ['Sire', () => Serenity.StringEditor], ['CleSire', () => Serenity.StringEditor], ['Name', () => Serenity.StringEditor], ['IsActive', () => Serenity.BooleanEditor], ['NotArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Birthday', () => Serenity.DateEditor], ['Sexe', () => Serenity.IntegerEditor], ['Robe', () => Serenity.StringEditor], ['Transpondeur', () => Serenity.StringEditor], ['SortieDefinitive', () => Serenity.DateEditor], ['Description', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(ChevauxForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}