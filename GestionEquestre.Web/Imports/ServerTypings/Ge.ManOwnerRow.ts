namespace GestionEquestre.Ge {
    export interface ManOwnerRow {
        Id?: number;
        Horse?: string;
        Cavalier?: string;
        Part?: number;
        HorseSire?: string;
        HorseCleSire?: string;
        HorseHnin?: string;
        HorseBirthCountry?: number;
        HorseBirthOrganization?: number;
        HorseName?: string;
        HorseIsActive?: boolean;
        HorseIsArchive?: boolean;
        HorseInsertDate?: string;
        HorseInsertUserId?: number;
        HorseUpdateDate?: string;
        HorseUpdateUserId?: number;
        HorseBirthday?: string;
        HorseSexe?: number;
        HorseColor?: string;
        HorseRace?: string;
        HorseTransponder?: string;
        HorseFinalExit?: string;
        HorseDescription?: string;
        HorseArchiveDate?: string;
        CavalierPerson?: number;
        CavalierIsActive?: boolean;
        CavalierIsArchive?: boolean;
        CavalierInsertDate?: string;
        CavalierInsertUserId?: number;
        CavalierUpdateDate?: string;
        CavalierUpdateUserId?: number;
        CavalierMilesimeLicnece?: string;
        CavalierNiveauGalop?: number;
        CavalierLicenceCompetition?: number;
        CavalierDateCertificatMedical?: string;
        CavalierCaption?: string;
        CavalierArchiveDate?: string;
    }

    export namespace ManOwnerRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Horse';
        export const localTextPrefix = 'Ge.ManOwner';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Horse = "Horse",
            Cavalier = "Cavalier",
            Part = "Part",
            HorseSire = "HorseSire",
            HorseCleSire = "HorseCleSire",
            HorseHnin = "HorseHnin",
            HorseBirthCountry = "HorseBirthCountry",
            HorseBirthOrganization = "HorseBirthOrganization",
            HorseName = "HorseName",
            HorseIsActive = "HorseIsActive",
            HorseIsArchive = "HorseIsArchive",
            HorseInsertDate = "HorseInsertDate",
            HorseInsertUserId = "HorseInsertUserId",
            HorseUpdateDate = "HorseUpdateDate",
            HorseUpdateUserId = "HorseUpdateUserId",
            HorseBirthday = "HorseBirthday",
            HorseSexe = "HorseSexe",
            HorseColor = "HorseColor",
            HorseRace = "HorseRace",
            HorseTransponder = "HorseTransponder",
            HorseFinalExit = "HorseFinalExit",
            HorseDescription = "HorseDescription",
            HorseArchiveDate = "HorseArchiveDate",
            CavalierPerson = "CavalierPerson",
            CavalierIsActive = "CavalierIsActive",
            CavalierIsArchive = "CavalierIsArchive",
            CavalierInsertDate = "CavalierInsertDate",
            CavalierInsertUserId = "CavalierInsertUserId",
            CavalierUpdateDate = "CavalierUpdateDate",
            CavalierUpdateUserId = "CavalierUpdateUserId",
            CavalierMilesimeLicnece = "CavalierMilesimeLicnece",
            CavalierNiveauGalop = "CavalierNiveauGalop",
            CavalierLicenceCompetition = "CavalierLicenceCompetition",
            CavalierDateCertificatMedical = "CavalierDateCertificatMedical",
            CavalierCaption = "CavalierCaption",
            CavalierArchiveDate = "CavalierArchiveDate"
        }
    }
}

