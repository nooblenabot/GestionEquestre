
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
            export declare const Id;
            export declare const Horse;
            export declare const Cavalier;
            export declare const Part;
            export declare const HorseSire;
            export declare const HorseCleSire;
            export declare const HorseHnin;
            export declare const HorseBirthCountry;
            export declare const HorseBirthOrganization;
            export declare const HorseName;
            export declare const HorseIsActive;
            export declare const HorseNotArchive;
            export declare const HorseInsertDate;
            export declare const HorseInsertUserId;
            export declare const HorseUpdateDate;
            export declare const HorseUpdateUserId;
            export declare const HorseBirthday;
            export declare const HorseSexe;
            export declare const HorseColor;
            export declare const HorseRace;
            export declare const HorseTransponder;
            export declare const HorseFinalExit;
            export declare const HorseDescription;
            export declare const HorseArchiveDate;
            export declare const CavalierPerson;
            export declare const CavalierIsActive;
            export declare const CavalierNotArchive;
            export declare const CavalierInsertDate;
            export declare const CavalierInsertUserId;
            export declare const CavalierUpdateDate;
            export declare const CavalierUpdateUserId;
            export declare const CavalierMilesimeLicnece;
            export declare const CavalierNiveauGalop;
            export declare const CavalierLicenceCompetition;
            export declare const CavalierDateCertificatMedical;
            export declare const CavalierCaption;
            export declare const CavalierArchiveDate;
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