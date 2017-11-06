
namespace GestionEquestre.Ge {
    export interface SetUelnorgaRow {
        Id?: string;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Organization?: string;
        UelnOrganization?: string;
    }

    export namespace SetUelnorgaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Organization';
        export const localTextPrefix = 'Ge.SetUelnorga';

        export namespace Fields {
            export declare const Id;
            export declare const DefaultValue;
            export declare const IsActive;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const Organization;
            export declare const UelnOrganization;
        }

        [
            'Id',
            'DefaultValue',
            'IsActive',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'Organization',
            'UelnOrganization'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}