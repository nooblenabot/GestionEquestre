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
            export declare const Id: string;
            export declare const Folder: string;
            export declare const Horse: string;
            export declare const FolderIsActive: string;
            export declare const FolderNotArchive: string;
            export declare const FolderInsertDate: string;
            export declare const FolderInsertUserId: string;
            export declare const FolderUpdateDate: string;
            export declare const FolderUpdateUserId: string;
            export declare const FolderCaption: string;
            export declare const FolderArchiveDate: string;
            export declare const FolderNumber: string;
            export declare const FolderCreateeDate: string;
            export declare const FolderCloseRaison: string;
            export declare const FolderCloseDate: string;
            export declare const FolderEstablishment: string;
            export declare const FolderComment: string;
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

