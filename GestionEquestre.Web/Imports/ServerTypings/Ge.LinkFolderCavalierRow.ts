namespace GestionEquestre.Ge {
    export interface LinkFolderCavalierRow {
        Id?: number;
        Folder?: number;
        Cavalier?: string;
        CavalierPerson?: number;
        CavalierName?: string;
    }

    export namespace LinkFolderCavalierRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Cavalier';
        export const localTextPrefix = 'Ge.LinkFolderCavalier';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Folder = "Folder",
            Cavalier = "Cavalier",
            CavalierPerson = "CavalierPerson",
            CavalierName = "CavalierName"
        }
    }
}

