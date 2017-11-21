namespace GestionEquestre.Ge {
    export interface ManFolderRow {
        Id?: number;
        IsActive?: boolean;
        IsArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        ArchiveDate?: string;
        CreateDate?: string;
        CloseRaison?: string;
        CloseDate?: string;
        Establishment?: number;
        Comment?: string;
        InsertUsername?: string;
        UpdateUsername?: string;
    }

    export namespace ManFolderRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.ManFolder';
        export const lookupKey = 'Ge.ManFolder';

        export function getLookup(): Q.Lookup<ManFolderRow> {
            return Q.getLookup<ManFolderRow>('Ge.ManFolder');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const IsActive: string;
            export declare const IsArchive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Caption: string;
            export declare const ArchiveDate: string;
            export declare const CreateDate: string;
            export declare const CloseRaison: string;
            export declare const CloseDate: string;
            export declare const Establishment: string;
            export declare const Comment: string;
            export declare const InsertUsername: string;
            export declare const UpdateUsername: string;
        }

        [
            'Id', 
            'IsActive', 
            'IsArchive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Caption', 
            'ArchiveDate', 
            'CreateDate', 
            'CloseRaison', 
            'CloseDate', 
            'Establishment', 
            'Comment', 
            'InsertUsername', 
            'UpdateUsername'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

