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

        export namespace Fields {
            export declare const Id: string;
            export declare const Folder: string;
            export declare const Horse: string;
            export declare const HorseName: string;
        }

        [
            'Id', 
            'Folder', 
            'Horse', 
            'HorseName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

