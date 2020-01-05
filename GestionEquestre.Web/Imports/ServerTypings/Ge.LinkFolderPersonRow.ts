namespace GestionEquestre.Ge {
    export interface LinkFolderPersonRow {
        Id?: number;
        Folder?: number;
        PersonId?: number;
        Caption?: string;
        PersonIsMorale?: boolean;
        PersonSurname?: string;
        PersonName?: string;
        PersonFullName?: string;
        PersonBusinessName?: string;
        PersonCaption?: string;
    }

    export namespace LinkFolderPersonRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.LinkFolderPerson';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Folder = "Folder",
            PersonId = "PersonId",
            Caption = "Caption",
            PersonIsMorale = "PersonIsMorale",
            PersonSurname = "PersonSurname",
            PersonName = "PersonName",
            PersonFullName = "PersonFullName",
            PersonBusinessName = "PersonBusinessName",
            PersonCaption = "PersonCaption"
        }
    }
}

