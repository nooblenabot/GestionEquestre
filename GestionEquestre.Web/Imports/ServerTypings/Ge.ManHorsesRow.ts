namespace GestionEquestre.Ge {
    export interface ManHorsesRow {
        Ueln?: string;
        Sire?: string;
        CleSire?: string;
        Hnin?: string;
        BirthCountry?: string;
        BirthOrganization?: number;
        Name?: string;
        IsActive?: boolean;
        IsArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Birthday?: string;
        Sexe?: number;
        Color?: string;
        Race?: string;
        Transponder?: string;
        FinalExit?: string;
        Description?: string;
        ArchiveDate?: string;
        InsertUsername?: string;
        UpdateUsername?: string;
        BirthCountryDefaultValue?: boolean;
        BirthCountryIsActive?: boolean;
        BirthCountryInsertDate?: string;
        BirthCountryInsertUserId?: number;
        BirthCountryUpdateDate?: string;
        BirthCountryUpdateUserId?: number;
        BirthCountryName_FR_fr?: string;
        BirthCountryalpha3?: string;
        BirthCountryISOcode?: string;
        BirthOrganizationDefaultValue?: boolean;
        BirthOrganizationIsActive?: boolean;
        BirthOrganizationInsertDate?: string;
        BirthOrganizationInsertUserId?: number;
        BirthOrganizationUpdateDate?: string;
        BirthOrganizationUpdateUserId?: number;
        BirthOrganizationOrganization?: string;
        BirthOrganizationUelnCode?: string;
        SexeDefaultValue?: boolean;
        SexeIsActive?: boolean;
        SexeInsertDate?: string;
        SexeInsertUserId?: number;
        SexeUpdateDate?: string;
        SexeUpdateUserId?: number;
        SexeCaption?: string;
        SexeCivility?: string;
    }

    export namespace ManHorsesRow {
        export const idProperty = 'Ueln';
        export const nameProperty = 'Ueln';
        export const localTextPrefix = 'Ge.ManHorses';
        export const lookupKey = 'Ge.Horses';

        export function getLookup(): Q.Lookup<ManHorsesRow> {
            return Q.getLookup<ManHorsesRow>('Ge.Horses');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Management:Horses';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Ueln = "Ueln",
            Sire = "Sire",
            CleSire = "CleSire",
            Hnin = "Hnin",
            BirthCountry = "BirthCountry",
            BirthOrganization = "BirthOrganization",
            Name = "Name",
            IsActive = "IsActive",
            IsArchive = "IsArchive",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            Birthday = "Birthday",
            Sexe = "Sexe",
            Color = "Color",
            Race = "Race",
            Transponder = "Transponder",
            FinalExit = "FinalExit",
            Description = "Description",
            ArchiveDate = "ArchiveDate",
            InsertUsername = "InsertUsername",
            UpdateUsername = "UpdateUsername",
            BirthCountryDefaultValue = "BirthCountryDefaultValue",
            BirthCountryIsActive = "BirthCountryIsActive",
            BirthCountryInsertDate = "BirthCountryInsertDate",
            BirthCountryInsertUserId = "BirthCountryInsertUserId",
            BirthCountryUpdateDate = "BirthCountryUpdateDate",
            BirthCountryUpdateUserId = "BirthCountryUpdateUserId",
            BirthCountryName_FR_fr = "BirthCountryName_FR_fr",
            BirthCountryalpha3 = "BirthCountryalpha3",
            BirthCountryISOcode = "BirthCountryISOcode",
            BirthOrganizationDefaultValue = "BirthOrganizationDefaultValue",
            BirthOrganizationIsActive = "BirthOrganizationIsActive",
            BirthOrganizationInsertDate = "BirthOrganizationInsertDate",
            BirthOrganizationInsertUserId = "BirthOrganizationInsertUserId",
            BirthOrganizationUpdateDate = "BirthOrganizationUpdateDate",
            BirthOrganizationUpdateUserId = "BirthOrganizationUpdateUserId",
            BirthOrganizationOrganization = "BirthOrganizationOrganization",
            BirthOrganizationUelnCode = "BirthOrganizationUelnCode",
            SexeDefaultValue = "SexeDefaultValue",
            SexeIsActive = "SexeIsActive",
            SexeInsertDate = "SexeInsertDate",
            SexeInsertUserId = "SexeInsertUserId",
            SexeUpdateDate = "SexeUpdateDate",
            SexeUpdateUserId = "SexeUpdateUserId",
            SexeCaption = "SexeCaption",
            SexeCivility = "SexeCivility"
        }
    }
}

