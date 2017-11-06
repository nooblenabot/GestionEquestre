
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
            export declare const Id;
            export declare const Folder;
            export declare const PersonId;
            export declare const Caption;
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
            export declare const PersonIsMorale;
            export declare const PersonIsActive;
            export declare const PersonNotArchive;
            export declare const PersonInsertDate;
            export declare const PersonInsertUserId;
            export declare const PersonUpdateDate;
            export declare const PersonUpdateUserId;
            export declare const PersonSurname;
            export declare const PersonName;
            export declare const PersonMaidenName;
            export declare const PersonBusinessName;
            export declare const PersonBirthday;
            export declare const PersonSexe;
            export declare const PersonMaritalStatus;
            export declare const PersonBirthCity;
            export declare const PersonBirthCountry;
            export declare const PersonNationality;
            export declare const PersonPhoto;
            export declare const PersonPhone;
            export declare const PersonGsm;
            export declare const PersonWorkPhone;
            export declare const PersonOtherPhone1;
            export declare const PersonOtherPhone2;
            export declare const PersonEmail1;
            export declare const PersonEmail2;
            export declare const PersonBankAccount;
            export declare const PersonIdAdress;
            export declare const PersonCaption;
            export declare const PersonArchiveDate;
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