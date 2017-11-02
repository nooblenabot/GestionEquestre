

namespace GestionEquestre.Ge {
    export class AdresseForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.Adresse';
    }

    export interface AdresseForm {
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Adresse1: Serenity.StringEditor;
        Adresse2: Serenity.StringEditor;
        Adresse3: Serenity.StringEditor;
        Ville: Serenity.StringEditor;
        Pays: Serenity.StringEditor;
        Cedex: Serenity.StringEditor;
        Batiment: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [['IsActive', () => Serenity.BooleanEditor], ['NotArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Adresse1', () => Serenity.StringEditor], ['Adresse2', () => Serenity.StringEditor], ['Adresse3', () => Serenity.StringEditor], ['Ville', () => Serenity.StringEditor], ['Pays', () => Serenity.StringEditor], ['Cedex', () => Serenity.StringEditor], ['Batiment', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(AdresseForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}