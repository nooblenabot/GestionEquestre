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
        export const lookupKey = 'Ge.SetUelnorga';

        export function getLookup(): Q.Lookup<SetUelnorgaRow> {
            return Q.getLookup<SetUelnorgaRow>('Ge.SetUelnorga');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const DefaultValue: string;
            export declare const IsActive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Organization: string;
            export declare const UelnOrganization: string;
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

