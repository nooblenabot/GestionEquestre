
namespace GestionEquestre.Ge {
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
            export declare const Id;
            export declare const IsActive;
            export declare const NotArchive;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const Caption;
            export declare const ArchiveDate;
            export declare const Number;
            export declare const CreateeDate;
            export declare const CloseRaison;
            export declare const CloseDate;
            export declare const Establishment;
            export declare const Comment;
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