namespace GestionEquestre.Ge {
    export interface ManCavaliersRow {
        LicFfe?: string;
        Person?: number;
        IsActive?: boolean;
        IsArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        MilesimeLicnece?: number;
        NiveauGalop?: number;
        LicenceCompetition?: number;
        DateCertificatMedical?: string;
        Caption?: string;
        ArchiveDate?: string;
        InsertUsername?: string;
        UpdateUsername?: string;
        PersonIsMorale?: boolean;
        PersonIsActive?: boolean;
        PersonIsArchive?: boolean;
        PersonInsertDate?: string;
        PersonInsertUserId?: number;
        PersonUpdateDate?: string;
        PersonUpdateUserId?: number;
        PersonSurname?: string;
        PersonName?: string;
        PersonMaidenName?: string;
        PersonBusinessName?: string;
        PersonFullName?: string;
        PersonBirthday?: string;
        PersonSexe?: number;
        PersonMaritalStatus?: number;
        PersonBirthCity?: number;
        PersonBirthCountry?: number;
        PersonNationality?: number;
        PersonPhoto?: number[];
        PersonPhone?: string;
        PersonGsm?: string;
        PersonWorkPhone?: string;
        PersonOtherPhone1?: string;
        PersonOtherPhone2?: string;
        PersonEmail1?: string;
        PersonEmail2?: string;
        PersonBankAccount?: number;
        PersonIdAdress?: number;
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
        export const lookupKey = 'Ge.Cavaliers';

        export function getLookup(): Q.Lookup<ManCavaliersRow> {
            return Q.getLookup<ManCavaliersRow>('Ge.Cavaliers');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            LicFfe = "LicFfe",
            Person = "Person",
            IsActive = "IsActive",
            IsArchive = "IsArchive",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            MilesimeLicnece = "MilesimeLicnece",
            NiveauGalop = "NiveauGalop",
            LicenceCompetition = "LicenceCompetition",
            DateCertificatMedical = "DateCertificatMedical",
            Caption = "Caption",
            ArchiveDate = "ArchiveDate",
            InsertUsername = "InsertUsername",
            UpdateUsername = "UpdateUsername",
            PersonIsMorale = "PersonIsMorale",
            PersonIsActive = "PersonIsActive",
            PersonIsArchive = "PersonIsArchive",
            PersonInsertDate = "PersonInsertDate",
            PersonInsertUserId = "PersonInsertUserId",
            PersonUpdateDate = "PersonUpdateDate",
            PersonUpdateUserId = "PersonUpdateUserId",
            PersonSurname = "PersonSurname",
            PersonName = "PersonName",
            PersonMaidenName = "PersonMaidenName",
            PersonBusinessName = "PersonBusinessName",
            PersonFullName = "PersonFullName",
            PersonBirthday = "PersonBirthday",
            PersonSexe = "PersonSexe",
            PersonMaritalStatus = "PersonMaritalStatus",
            PersonBirthCity = "PersonBirthCity",
            PersonBirthCountry = "PersonBirthCountry",
            PersonNationality = "PersonNationality",
            PersonPhoto = "PersonPhoto",
            PersonPhone = "PersonPhone",
            PersonGsm = "PersonGsm",
            PersonWorkPhone = "PersonWorkPhone",
            PersonOtherPhone1 = "PersonOtherPhone1",
            PersonOtherPhone2 = "PersonOtherPhone2",
            PersonEmail1 = "PersonEmail1",
            PersonEmail2 = "PersonEmail2",
            PersonBankAccount = "PersonBankAccount",
            PersonIdAdress = "PersonIdAdress",
            PersonCaption = "PersonCaption",
            PersonArchiveDate = "PersonArchiveDate",
            NiveauGalopDefaultValue = "NiveauGalopDefaultValue",
            NiveauGalopIsActive = "NiveauGalopIsActive",
            NiveauGalopInsertDate = "NiveauGalopInsertDate",
            NiveauGalopInsertUserId = "NiveauGalopInsertUserId",
            NiveauGalopUpdateDate = "NiveauGalopUpdateDate",
            NiveauGalopUpdateUserId = "NiveauGalopUpdateUserId",
            NiveauGalopCaption = "NiveauGalopCaption",
            NiveauGalopCode = "NiveauGalopCode",
            LicenceCompetitionDefaultValue = "LicenceCompetitionDefaultValue",
            LicenceCompetitionIsActive = "LicenceCompetitionIsActive",
            LicenceCompetitionInsertDate = "LicenceCompetitionInsertDate",
            LicenceCompetitionInsertUserId = "LicenceCompetitionInsertUserId",
            LicenceCompetitionUpdateDate = "LicenceCompetitionUpdateDate",
            LicenceCompetitionUpdateUserId = "LicenceCompetitionUpdateUserId",
            LicenceCompetitionCaption = "LicenceCompetitionCaption",
            LicenceCompetitionCode = "LicenceCompetitionCode"
        }
    }
}

