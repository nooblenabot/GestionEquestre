
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
            export declare const Id;
            export declare const Folder;
            export declare const Cavalier;
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