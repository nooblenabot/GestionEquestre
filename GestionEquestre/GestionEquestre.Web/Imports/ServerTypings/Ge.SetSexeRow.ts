
namespace GestionEquestre.Ge {
    export interface SetSexeRow {
        SexeId?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        ReadOnly?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        Civility?: string;
    }

    export namespace SetSexeRow {
        export const idProperty = 'SexeId';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.SetSexe';

        export namespace Fields {
            export declare const SexeId;
            export declare const DefaultValue;
            export declare const IsActive;
            export declare const ReadOnly;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const Caption;
            export declare const Civility;
        }

        [
            'SexeId',
            'DefaultValue',
            'IsActive',
            'ReadOnly',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'Caption',
            'Civility'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}