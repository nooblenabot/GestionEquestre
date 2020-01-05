namespace GestionEquestre.Ge {
    export interface LinkFolderHorseRow {
        Id?: number;
        Folder?: number;
        Horse?: string;
        HorseName?: string;
    }

    export namespace LinkFolderHorseRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Horse';
        export const localTextPrefix = 'Ge.LinkFolderHorse';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Folder = "Folder",
            Horse = "Horse",
            HorseName = "HorseName"
        }
    }
}

