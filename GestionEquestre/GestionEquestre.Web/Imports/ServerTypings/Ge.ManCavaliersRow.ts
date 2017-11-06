
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
        NiveauGalopReadOnly?: boolean;
        NiveauGalopInsertDate?: string;
        NiveauGalopInsertUserId?: number;
        NiveauGalopUpdateDate?: string;
        NiveauGalopUpdateUserId?: number;
        NiveauGalopCaption?: string;
        NiveauGalopCode?: string;
        LicenceCompetitionDefaultValue?: boolean;
        LicenceCompetitionIsActive?: boolean;
        LicenceCompetitionReadOnly?: boolean;
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
            export declare const LicFfe;
            export declare const Person;
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
            export declare const Caption;
            export declare const ArchiveDate;
            export declare const PersonIsMorale;
            export declare const PersonIsActive;
            export declare const PersonNotArchive;
            export declare const PersonInsertDate;
            export declare const PersonInsertUserId;
            export declare const PersonUpdateDate;
            export declare const PersonUpdateUserId;
            export declare const PersonSurname;
            export declare const PersonName;
            export declare const PersonMaidenName;
            export declare const PersonBusinessName;
            export declare const PersonBirthday;
            export declare const PersonSexe;
            export declare const PersonMaritalStatus;
            export declare const PersonBirthCity;
            export declare const PersonBirthCountry;
            export declare const PersonNationality;
            export declare const PersonPhoto;
            export declare const PersonPhone;
            export declare const PersonGsm;
            export declare const PersonWorkPhone;
            export declare const PersonOtherPhone1;
            export declare const PersonOtherPhone2;
            export declare const PersonEmail1;
            export declare const PersonEmail2;
            export declare const PersonBankAccount;
            export declare const PersonIdAdress;
            export declare const PersonCaption;
            export declare const PersonArchiveDate;
            export declare const NiveauGalopDefaultValue;
            export declare const NiveauGalopIsActive;
            export declare const NiveauGalopReadOnly;
            export declare const NiveauGalopInsertDate;
            export declare const NiveauGalopInsertUserId;
            export declare const NiveauGalopUpdateDate;
            export declare const NiveauGalopUpdateUserId;
            export declare const NiveauGalopCaption;
            export declare const NiveauGalopCode;
            export declare const LicenceCompetitionDefaultValue;
            export declare const LicenceCompetitionIsActive;
            export declare const LicenceCompetitionReadOnly;
            export declare const LicenceCompetitionInsertDate;
            export declare const LicenceCompetitionInsertUserId;
            export declare const LicenceCompetitionUpdateDate;
            export declare const LicenceCompetitionUpdateUserId;
            export declare const LicenceCompetitionCaption;
            export declare const LicenceCompetitionCode;
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
            'NiveauGalopReadOnly',
            'NiveauGalopInsertDate',
            'NiveauGalopInsertUserId',
            'NiveauGalopUpdateDate',
            'NiveauGalopUpdateUserId',
            'NiveauGalopCaption',
            'NiveauGalopCode',
            'LicenceCompetitionDefaultValue',
            'LicenceCompetitionIsActive',
            'LicenceCompetitionReadOnly',
            'LicenceCompetitionInsertDate',
            'LicenceCompetitionInsertUserId',
            'LicenceCompetitionUpdateDate',
            'LicenceCompetitionUpdateUserId',
            'LicenceCompetitionCaption',
            'LicenceCompetitionCode'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}