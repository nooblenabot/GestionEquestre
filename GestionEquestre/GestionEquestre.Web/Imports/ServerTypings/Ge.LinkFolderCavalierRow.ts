namespace GestionEquestre.Ge {
    export interface LinkFolderCavalierRow {
        Id?: number;
        Folder?: number;
        Cavalier?: string;
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

    export namespace LinkFolderCavalierRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Cavalier';
        export const localTextPrefix = 'Ge.LinkFolderCavalier';

        export namespace Fields {
            export declare const Id: string;
            export declare const Folder: string;
            export declare const Cavalier: string;
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
            'Folder', 
            'Cavalier', 
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

