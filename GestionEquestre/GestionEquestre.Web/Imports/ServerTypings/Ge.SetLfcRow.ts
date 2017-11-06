
namespace GestionEquestre.Ge {
    export interface SetLfcRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        ReadOnly?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        Code?: string;
    }

    export namespace SetLfcRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.SetLfc';

        export namespace Fields {
            export declare const Id;
            export declare const DefaultValue;
            export declare const IsActive;
            export declare const ReadOnly;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const Caption;
            export declare const Code;
        }

        [
            'Id',
            'DefaultValue',
            'IsActive',
            'ReadOnly',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'Caption',
            'Code'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}