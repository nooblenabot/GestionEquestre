

namespace GestionEquestre.Ge {
    export class PersonneForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.Personne';
    }

    export interface PersonneForm {
        IsMorale: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Nom: Serenity.StringEditor;
        Prenom: Serenity.StringEditor;
        NomJeuneFille: Serenity.StringEditor;
        RaisonSociale: Serenity.StringEditor;
        Birthday: Serenity.DateEditor;
        Sexe: Serenity.IntegerEditor;
        SituationFamille: Serenity.IntegerEditor;
        VilleNassance: Serenity.StringEditor;
        PaysNassance: Serenity.StringEditor;
        PaysNationalite: Serenity.StringEditor;
        Photo: Serenity.StringEditor;
        TelephonePerso: Serenity.StringEditor;
        TelephoneMobile: Serenity.StringEditor;
        TelephoneProf: Serenity.StringEditor;
        TelephoneComplementaire1: Serenity.StringEditor;
        TelephoneComplementaire2: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        Email2: Serenity.StringEditor;
        CompteBancaire: Serenity.StringEditor;
        IdAdresse: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    [['IsMorale', () => Serenity.BooleanEditor], ['IsActive', () => Serenity.BooleanEditor], ['NotArchive', () => Serenity.BooleanEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['Nom', () => Serenity.StringEditor], ['Prenom', () => Serenity.StringEditor], ['NomJeuneFille', () => Serenity.StringEditor], ['RaisonSociale', () => Serenity.StringEditor], ['Birthday', () => Serenity.DateEditor], ['Sexe', () => Serenity.IntegerEditor], ['SituationFamille', () => Serenity.IntegerEditor], ['VilleNassance', () => Serenity.StringEditor], ['PaysNassance', () => Serenity.StringEditor], ['PaysNationalite', () => Serenity.StringEditor], ['Photo', () => Serenity.StringEditor], ['TelephonePerso', () => Serenity.StringEditor], ['TelephoneMobile', () => Serenity.StringEditor], ['TelephoneProf', () => Serenity.StringEditor], ['TelephoneComplementaire1', () => Serenity.StringEditor], ['TelephoneComplementaire2', () => Serenity.StringEditor], ['Email1', () => Serenity.StringEditor], ['Email2', () => Serenity.StringEditor], ['CompteBancaire', () => Serenity.StringEditor], ['IdAdresse', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['ArchiveDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(PersonneForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}