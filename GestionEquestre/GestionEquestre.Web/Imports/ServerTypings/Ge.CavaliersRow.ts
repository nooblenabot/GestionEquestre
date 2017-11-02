
namespace GestionEquestre.Ge {
    export interface CavaliersRow {
        LicFfe?: string;
        Personne?: string;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        MilesimeLicnece?: string;
        NiveauGalop?: number;
        LicenceCompetition?: number;
        DateCertificatMedical?: string;
        Description?: string;
        ArchiveDate?: string;
        PersonneIsMorale?: boolean;
        PersonneIsActive?: boolean;
        PersonneNotArchive?: boolean;
        PersonneInsertDate?: string;
        PersonneInsertUserId?: number;
        PersonneUpdateDate?: string;
        PersonneUpdateUserId?: number;
        PersonneNom?: string;
        PersonnePrenom?: string;
        PersonneNomJeuneFille?: string;
        PersonneRaisonSociale?: string;
        PersonneBirthday?: string;
        PersonneSexe?: number;
        PersonneSituationFamille?: number;
        PersonneVilleNassance?: string;
        PersonnePaysNassance?: string;
        PersonnePaysNationalite?: string;
        PersonnePhoto?: number[];
        PersonneTelephonePerso?: string;
        PersonneTelephoneMobile?: string;
        PersonneTelephoneProf?: string;
        PersonneTelephoneComplementaire1?: string;
        PersonneTelephoneComplementaire2?: string;
        PersonneEmail1?: string;
        PersonneEmail2?: string;
        PersonneCompteBancaire?: string;
        PersonneIdAdresse?: string;
        PersonneDescription?: string;
        PersonneArchiveDate?: string;
        NiveauGalopDefaultValue?: boolean;
        NiveauGalopIsActive?: boolean;
        NiveauGalopReadOnly?: boolean;
        NiveauGalopInsertDate?: string;
        NiveauGalopInsertUserId?: number;
        NiveauGalopUpdateDate?: string;
        NiveauGalopUpdateUserId?: number;
        NiveauGalopLibele?: string;
        NiveauGalopCode?: string;
        LicenceCompetitionDefaultValue?: boolean;
        LicenceCompetitionIsActive?: boolean;
        LicenceCompetitionReadOnly?: boolean;
        LicenceCompetitionInsertDate?: string;
        LicenceCompetitionInsertUserId?: number;
        LicenceCompetitionUpdateDate?: string;
        LicenceCompetitionUpdateUserId?: number;
        LicenceCompetitionLibele?: string;
        LicenceCompetitionCode?: string;
    }

    export namespace CavaliersRow {
        export const idProperty = 'LicFfe';
        export const nameProperty = 'LicFfe';
        export const localTextPrefix = 'Ge.Cavaliers';

        export namespace Fields {
            export declare const LicFfe;
            export declare const Personne;
            export declare const IsActive;
            export declare const NotArchive;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const MilesimeLicnece;
            export declare const NiveauGalop;
            export declare const LicenceCompetition;
            export declare const DateCertificatMedical;
            export declare const Description;
            export declare const ArchiveDate;
            export declare const PersonneIsMorale: string;
            export declare const PersonneIsActive: string;
            export declare const PersonneNotArchive: string;
            export declare const PersonneInsertDate: string;
            export declare const PersonneInsertUserId: string;
            export declare const PersonneUpdateDate: string;
            export declare const PersonneUpdateUserId: string;
            export declare const PersonneNom: string;
            export declare const PersonnePrenom: string;
            export declare const PersonneNomJeuneFille: string;
            export declare const PersonneRaisonSociale: string;
            export declare const PersonneBirthday: string;
            export declare const PersonneSexe: string;
            export declare const PersonneSituationFamille: string;
            export declare const PersonneVilleNassance: string;
            export declare const PersonnePaysNassance: string;
            export declare const PersonnePaysNationalite: string;
            export declare const PersonnePhoto: string;
            export declare const PersonneTelephonePerso: string;
            export declare const PersonneTelephoneMobile: string;
            export declare const PersonneTelephoneProf: string;
            export declare const PersonneTelephoneComplementaire1: string;
            export declare const PersonneTelephoneComplementaire2: string;
            export declare const PersonneEmail1: string;
            export declare const PersonneEmail2: string;
            export declare const PersonneCompteBancaire: string;
            export declare const PersonneIdAdresse: string;
            export declare const PersonneDescription: string;
            export declare const PersonneArchiveDate: string;
            export declare const NiveauGalopDefaultValue: string;
            export declare const NiveauGalopIsActive: string;
            export declare const NiveauGalopReadOnly: string;
            export declare const NiveauGalopInsertDate: string;
            export declare const NiveauGalopInsertUserId: string;
            export declare const NiveauGalopUpdateDate: string;
            export declare const NiveauGalopUpdateUserId: string;
            export declare const NiveauGalopLibele: string;
            export declare const NiveauGalopCode: string;
            export declare const LicenceCompetitionDefaultValue: string;
            export declare const LicenceCompetitionIsActive: string;
            export declare const LicenceCompetitionReadOnly: string;
            export declare const LicenceCompetitionInsertDate: string;
            export declare const LicenceCompetitionInsertUserId: string;
            export declare const LicenceCompetitionUpdateDate: string;
            export declare const LicenceCompetitionUpdateUserId: string;
            export declare const LicenceCompetitionLibele: string;
            export declare const LicenceCompetitionCode: string;
        }

        ['LicFfe', 'Personne', 'IsActive', 'NotArchive', 'InsertDate', 'InsertUserId', 'UpdateDate', 'UpdateUserId', 'MilesimeLicnece', 'NiveauGalop', 'LicenceCompetition', 'DateCertificatMedical', 'Description', 'ArchiveDate', 'PersonneIsMorale', 'PersonneIsActive', 'PersonneNotArchive', 'PersonneInsertDate', 'PersonneInsertUserId', 'PersonneUpdateDate', 'PersonneUpdateUserId', 'PersonneNom', 'PersonnePrenom', 'PersonneNomJeuneFille', 'PersonneRaisonSociale', 'PersonneBirthday', 'PersonneSexe', 'PersonneSituationFamille', 'PersonneVilleNassance', 'PersonnePaysNassance', 'PersonnePaysNationalite', 'PersonnePhoto', 'PersonneTelephonePerso', 'PersonneTelephoneMobile', 'PersonneTelephoneProf', 'PersonneTelephoneComplementaire1', 'PersonneTelephoneComplementaire2', 'PersonneEmail1', 'PersonneEmail2', 'PersonneCompteBancaire', 'PersonneIdAdresse', 'PersonneDescription', 'PersonneArchiveDate', 'NiveauGalopDefaultValue', 'NiveauGalopIsActive', 'NiveauGalopReadOnly', 'NiveauGalopInsertDate', 'NiveauGalopInsertUserId', 'NiveauGalopUpdateDate', 'NiveauGalopUpdateUserId', 'NiveauGalopLibele', 'NiveauGalopCode', 'LicenceCompetitionDefaultValue', 'LicenceCompetitionIsActive', 'LicenceCompetitionReadOnly', 'LicenceCompetitionInsertDate', 'LicenceCompetitionInsertUserId', 'LicenceCompetitionUpdateDate', 'LicenceCompetitionUpdateUserId', 'LicenceCompetitionLibele', 'LicenceCompetitionCode'].forEach(x => (<any>Fields)[x] = x);
    }
}

