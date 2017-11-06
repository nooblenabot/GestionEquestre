
namespace GestionEquestre.Ge {
    export interface LinkFolderHorseRow {
        Id?: number;
        Folder?: number;
        Horse?: string;
        FolderIsActive?: boolean;
        FolderNotArchive?: boolean;
        FolderInsertDate?: string;
        FolderInsertUserId?: number;
        FolderUpdateDate?: string;
        FolderUpdateUserId?: number;
        FolderCaption?: string;
        FolderArchiveDate?: string;
        FolderNumber?: number;
        FolderCreateeDate?: string;
        FolderCloseRaison?: string;
        FolderCloseDate?: string;
        FolderEstablishment?: number;
        FolderComment?: string;
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
    }

    export namespace LinkFolderHorseRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Horse';
        export const localTextPrefix = 'Ge.LinkFolderHorse';

        export namespace Fields {
            export declare const Id;
            export declare const Folder;
            export declare const Horse;
            export declare const FolderIsActive;
            export declare const FolderNotArchive;
            export declare const FolderInsertDate;
            export declare const FolderInsertUserId;
            export declare const FolderUpdateDate;
            export declare const FolderUpdateUserId;
            export declare const FolderCaption;
            export declare const FolderArchiveDate;
            export declare const FolderNumber;
            export declare const FolderCreateeDate;
            export declare const FolderCloseRaison;
            export declare const FolderCloseDate;
            export declare const FolderEstablishment;
            export declare const FolderComment;
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
        }

        [
            'Id',
            'Folder',
            'Horse',
            'FolderIsActive',
            'FolderNotArchive',
            'FolderInsertDate',
            'FolderInsertUserId',
            'FolderUpdateDate',
            'FolderUpdateUserId',
            'FolderCaption',
            'FolderArchiveDate',
            'FolderNumber',
            'FolderCreateeDate',
            'FolderCloseRaison',
            'FolderCloseDate',
            'FolderEstablishment',
            'FolderComment',
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
            'HorseArchiveDate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}