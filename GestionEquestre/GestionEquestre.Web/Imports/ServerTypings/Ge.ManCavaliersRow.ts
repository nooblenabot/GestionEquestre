namespace GestionEquestre.Ge {
    export interface ManCavaliersRow {
        LicFfe?: string;
        Person?: string;
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
        Caption?: string;
        ArchiveDate?: string;
        PersonIsMorale?: boolean;
        PersonIsActive?: boolean;
        PersonNotArchive?: boolean;
        PersonInsertDate?: string;
        PersonInsertUserId?: number;
        PersonUpdateDate?: string;
        PersonUpdateUserId?: number;
        PersonSurname?: string;
        PersonName?: string;
        PersonMaidenName?: string;
        PersonBusinessName?: string;
        PersonBirthday?: string;
        PersonSexe?: number;
        PersonMaritalStatus?: number;
        PersonBirthCity?: string;
        PersonBirthCountry?: string;
        PersonNationality?: string;
        PersonPhoto?: number[];
        PersonPhone?: string;
        PersonGsm?: string;
        PersonWorkPhone?: string;
        PersonOtherPhone1?: string;
        PersonOtherPhone2?: string;
        PersonEmail1?: string;
        PersonEmail2?: string;
        PersonBankAccount?: string;
        PersonIdAdress?: string;
        PersonCaption?: string;
        PersonArchiveDate?: string;
        NiveauGalopDefaultValue?: boolean;
        NiveauGalopIsActive?: boolean;
        NiveauGalopInsertDate?: string;
        NiveauGalopInsertUserId?: number;
        NiveauGalopUpdateDate?: string;
        NiveauGalopUpdateUserId?: number;
        NiveauGalopCaption?: string;
        NiveauGalopCode?: string;
        LicenceCompetitionDefaultValue?: boolean;
        LicenceCompetitionIsActive?: boolean;
        LicenceCompetitionInsertDate?: string;
        LicenceCompetitionInsertUserId?: number;
        LicenceCompetitionUpdateDate?: string;
        LicenceCompetitionUpdateUserId?: number;
        LicenceCompetitionCaption?: string;
        LicenceCompetitionCode?: string;
    }

    export namespace ManCavaliersRow {
        export const idProperty = 'LicFfe';
        export const nameProperty = 'LicFfe';
        export const localTextPrefix = 'Ge.ManCavaliers';

        export namespace Fields {
            export declare const LicFfe: string;
            export declare const Person: string;
            export declare const IsActive: string;
            export declare const NotArchive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const MilesimeLicnece: string;
            export declare const NiveauGalop: string;
            export declare const LicenceCompetition: string;
            export declare const DateCertificatMedical: string;
            export declare const Caption: string;
            export declare const ArchiveDate: string;
            export declare const PersonIsMorale: string;
            export declare const PersonIsActive: string;
            export declare const PersonNotArchive: string;
            export declare const PersonInsertDate: string;
            export declare const PersonInsertUserId: string;
            export declare const PersonUpdateDate: string;
            export declare const PersonUpdateUserId: string;
            export declare const PersonSurname: string;
            export declare const PersonName: string;
            export declare const PersonMaidenName: string;
            export declare const PersonBusinessName: string;
            export declare const PersonBirthday: string;
            export declare const PersonSexe: string;
            export declare const PersonMaritalStatus: string;
            export declare const PersonBirthCity: string;
            export declare const PersonBirthCountry: string;
            export declare const PersonNationality: string;
            export declare const PersonPhoto: string;
            export declare const PersonPhone: string;
            export declare const PersonGsm: string;
            export declare const PersonWorkPhone: string;
            export declare const PersonOtherPhone1: string;
            export declare const PersonOtherPhone2: string;
            export declare const PersonEmail1: string;
            export declare const PersonEmail2: string;
            export declare const PersonBankAccount: string;
            export declare const PersonIdAdress: string;
            export declare const PersonCaption: string;
            export declare const PersonArchiveDate: string;
            export declare const NiveauGalopDefaultValue: string;
            export declare const NiveauGalopIsActive: string;
            export declare const NiveauGalopInsertDate: string;
            export declare const NiveauGalopInsertUserId: string;
            export declare const NiveauGalopUpdateDate: string;
            export declare const NiveauGalopUpdateUserId: string;
            export declare const NiveauGalopCaption: string;
            export declare const NiveauGalopCode: string;
            export declare const LicenceCompetitionDefaultValue: string;
            export declare const LicenceCompetitionIsActive: string;
            export declare const LicenceCompetitionInsertDate: string;
            export declare const LicenceCompetitionInsertUserId: string;
            export declare const LicenceCompetitionUpdateDate: string;
            export declare const LicenceCompetitionUpdateUserId: string;
            export declare const LicenceCompetitionCaption: string;
            export declare const LicenceCompetitionCode: string;
        }

        [
            'LicFfe', 
            'Person', 
            'IsActive', 
            'NotArchive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'MilesimeLicnece', 
            'NiveauGalop', 
            'LicenceCompetition', 
            'DateCertificatMedical', 
            'Caption', 
            'ArchiveDate', 
            'PersonIsMorale', 
            'PersonIsActive', 
            'PersonNotArchive', 
            'PersonInsertDate', 
            'PersonInsertUserId', 
            'PersonUpdateDate', 
            'PersonUpdateUserId', 
            'PersonSurname', 
            'PersonName', 
            'PersonMaidenName', 
            'PersonBusinessName', 
            'PersonBirthday', 
            'PersonSexe', 
            'PersonMaritalStatus', 
            'PersonBirthCity', 
            'PersonBirthCountry', 
            'PersonNationality', 
            'PersonPhoto', 
            'PersonPhone', 
            'PersonGsm', 
            'PersonWorkPhone', 
            'PersonOtherPhone1', 
            'PersonOtherPhone2', 
            'PersonEmail1', 
            'PersonEmail2', 
            'PersonBankAccount', 
            'PersonIdAdress', 
            'PersonCaption', 
            'PersonArchiveDate', 
            'NiveauGalopDefaultValue', 
            'NiveauGalopIsActive', 
            'NiveauGalopInsertDate', 
            'NiveauGalopInsertUserId', 
            'NiveauGalopUpdateDate', 
            'NiveauGalopUpdateUserId', 
            'NiveauGalopCaption', 
            'NiveauGalopCode', 
            'LicenceCompetitionDefaultValue', 
            'LicenceCompetitionIsActive', 
            'LicenceCompetitionInsertDate', 
            'LicenceCompetitionInsertUserId', 
            'LicenceCompetitionUpdateDate', 
            'LicenceCompetitionUpdateUserId', 
            'LicenceCompetitionCaption', 
            'LicenceCompetitionCode'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

