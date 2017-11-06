namespace GestionEquestre.Ge {
    export interface ManOwnerRow {
        Id?: number;
        Horse?: string;
        Cavalier?: string;
        Part?: number;
        HorseSire?: string;
        HorseCleSire?: string;
        HorseHnin?: string;
        HorseBirthCountry?: string;
        HorseBirthOrganization?: string;
        HorseName?: string;
        HorseIsActive?: boolean;
        HorseNotArchive?: boolean;
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
        CavalierPerson?: string;
        CavalierIsActive?: boolean;
        CavalierNotArchive?: boolean;
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

        export namespace Fields {
            export declare const Id: string;
            export declare const Horse: string;
            export declare const Cavalier: string;
            export declare const Part: string;
            export declare const HorseSire: string;
            export declare const HorseCleSire: string;
            export declare const HorseHnin: string;
            export declare const HorseBirthCountry: string;
            export declare const HorseBirthOrganization: string;
            export declare const HorseName: string;
            export declare const HorseIsActive: string;
            export declare const HorseNotArchive: string;
            export declare const HorseInsertDate: string;
            export declare const HorseInsertUserId: string;
            export declare const HorseUpdateDate: string;
            export declare const HorseUpdateUserId: string;
            export declare const HorseBirthday: string;
            export declare const HorseSexe: string;
            export declare const HorseColor: string;
            export declare const HorseRace: string;
            export declare const HorseTransponder: string;
            export declare const HorseFinalExit: string;
            export declare const HorseDescription: string;
            export declare const HorseArchiveDate: string;
            export declare const CavalierPerson: string;
            export declare const CavalierIsActive: string;
            export declare const CavalierNotArchive: string;
            export declare const CavalierInsertDate: string;
            export declare const CavalierInsertUserId: string;
            export declare const CavalierUpdateDate: string;
            export declare const CavalierUpdateUserId: string;
            export declare const CavalierMilesimeLicnece: string;
            export declare const CavalierNiveauGalop: string;
            export declare const CavalierLicenceCompetition: string;
            export declare const CavalierDateCertificatMedical: string;
            export declare const CavalierCaption: string;
            export declare const CavalierArchiveDate: string;
        }

        [
            'Id', 
            'Horse', 
            'Cavalier', 
            'Part', 
            'HorseSire', 
            'HorseCleSire', 
            'HorseHnin', 
            'HorseBirthCountry', 
            'HorseBirthOrganization', 
            'HorseName', 
            'HorseIsActive', 
            'HorseNotArchive', 
            'HorseInsertDate', 
            'HorseInsertUserId', 
            'HorseUpdateDate', 
            'HorseUpdateUserId', 
            'HorseBirthday', 
            'HorseSexe', 
            'HorseColor', 
            'HorseRace', 
            'HorseTransponder', 
            'HorseFinalExit', 
            'HorseDescription', 
            'HorseArchiveDate', 
            'CavalierPerson', 
            'CavalierIsActive', 
            'CavalierNotArchive', 
            'CavalierInsertDate', 
            'CavalierInsertUserId', 
            'CavalierUpdateDate', 
            'CavalierUpdateUserId', 
            'CavalierMilesimeLicnece', 
            'CavalierNiveauGalop', 
            'CavalierLicenceCompetition', 
            'CavalierDateCertificatMedical', 
            'CavalierCaption', 
            'CavalierArchiveDate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

