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

        export namespace Fields {
            export declare const Id: string;
            export declare const Folder: string;
            export declare const PersonId: string;
            export declare const Caption: string;
            export declare const PersonIsMorale: string;
            export declare const PersonSurname: string;
            export declare const PersonName: string;
            export declare const PersonFullName: string;
            export declare const PersonBusinessName: string;
            export declare const PersonCaption: string;
        }

        [
            'Id', 
            'Folder', 
            'PersonId', 
            'Caption', 
            'PersonIsMorale', 
            'PersonSurname', 
            'PersonName', 
            'PersonFullName', 
            'PersonBusinessName', 
            'PersonCaption'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

