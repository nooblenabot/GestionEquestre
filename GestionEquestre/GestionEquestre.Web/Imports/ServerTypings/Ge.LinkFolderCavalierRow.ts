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

        export namespace Fields {
            export declare const Id: string;
            export declare const Folder: string;
            export declare const Cavalier: string;
            export declare const CavalierPerson: string;
            export declare const CavalierName: string;
        }

        [
            'Id', 
            'Folder', 
            'Cavalier', 
            'CavalierPerson', 
            'CavalierName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

