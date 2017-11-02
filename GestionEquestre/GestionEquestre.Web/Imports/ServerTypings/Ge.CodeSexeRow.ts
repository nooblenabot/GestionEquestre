
namespace GestionEquestre.Ge {
    export interface CodeSexeRow {
        SexeId?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        ReadOnly?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Libele?: string;
        Civilite?: string;
        LibeleUs?: string;
    }

    export namespace CodeSexeRow {
        export const idProperty = 'SexeId';
        export const nameProperty = 'Libele';
        export const localTextPrefix = 'Ge.CodeSexe';

        export namespace Fields {
            export declare const SexeId;
            export declare const DefaultValue;
            export declare const IsActive;
            export declare const ReadOnly;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const Libele;
            export declare const Civilite;
            export declare const LibeleUs;
        }

        ['SexeId', 'DefaultValue', 'IsActive', 'ReadOnly', 'InsertDate', 'InsertUserId', 'UpdateDate', 'UpdateUserId', 'Libele', 'Civilite', 'LibeleUs'].forEach(x => (<any>Fields)[x] = x);
    }
}

