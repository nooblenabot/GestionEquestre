﻿namespace GestionEquestre.Ge {
    export interface ManFolderRow {
        Id?: number;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        ArchiveDate?: string;
        Number?: number;
        CreateeDate?: string;
        CloseRaison?: string;
        CloseDate?: string;
        Establishment?: number;
        Comment?: string;
    }

    export namespace ManFolderRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.ManFolder';

        export namespace Fields {
            export declare const Id: string;
            export declare const IsActive: string;
            export declare const NotArchive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Caption: string;
            export declare const ArchiveDate: string;
            export declare const Number: string;
            export declare const CreateeDate: string;
            export declare const CloseRaison: string;
            export declare const CloseDate: string;
            export declare const Establishment: string;
            export declare const Comment: string;
        }

        [
            'Id', 
            'IsActive', 
            'NotArchive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Caption', 
            'ArchiveDate', 
            'Number', 
            'CreateeDate', 
            'CloseRaison', 
            'CloseDate', 
            'Establishment', 
            'Comment'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

