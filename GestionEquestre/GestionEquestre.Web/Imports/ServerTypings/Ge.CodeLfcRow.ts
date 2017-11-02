
namespace GestionEquestre.Ge {
    export interface CodeLfcRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        ReadOnly?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Libele?: string;
        Code?: string;
    }

    export namespace CodeLfcRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Libele';
        export const localTextPrefix = 'Ge.CodeLfc';

        export namespace Fields {
            export declare const Id;
            export declare const DefaultValue;
            export declare const IsActive;
            export declare const ReadOnly;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const Libele;
            export declare const Code;
        }

        ['Id', 'DefaultValue', 'IsActive', 'ReadOnly', 'InsertDate', 'InsertUserId', 'UpdateDate', 'UpdateUserId', 'Libele', 'Code'].forEach(x => (<any>Fields)[x] = x);
    }
}

