namespace GestionEquestre.Ge {
    export interface LinkFolderPersonRow {
        Id?: number;
        Folder?: number;
        PersonId?: string;
        Caption?: string;
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
    }

    export namespace LinkFolderPersonRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.LinkFolderPerson';

        export namespace Fields {
            export declare const Id: string;
            export declare const Folder: string;
            export declare const PersonId: string;
            export declare const Caption: string;
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
            export declare const PersonIsMorale: string;
            export declare const PersonIsActive: string;
            export declare const PersonNotArchive: string;
            export declare const PersonInsertDate: string;
            export declare const PersonInsertUserId: string;
            export declare const PersonUpdateDate: string;
            export declare const PersonUpdateUserId: string;
            export declare const PersonSurname: string;
            export declare const PersonName: string;
            export declare const PersonMaidenName: string;
            export declare const PersonBusinessName: string;
            export declare const PersonBirthday: string;
            export declare const PersonSexe: string;
            export declare const PersonMaritalStatus: string;
            export declare const PersonBirthCity: string;
            export declare const PersonBirthCountry: string;
            export declare const PersonNationality: string;
            export declare const PersonPhoto: string;
            export declare const PersonPhone: string;
            export declare const PersonGsm: string;
            export declare const PersonWorkPhone: string;
            export declare const PersonOtherPhone1: string;
            export declare const PersonOtherPhone2: string;
            export declare const PersonEmail1: string;
            export declare const PersonEmail2: string;
            export declare const PersonBankAccount: string;
            export declare const PersonIdAdress: string;
            export declare const PersonCaption: string;
            export declare const PersonArchiveDate: string;
        }

        [
            'Id', 
            'Folder', 
            'PersonId', 
            'Caption', 
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
            'PersonArchiveDate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

