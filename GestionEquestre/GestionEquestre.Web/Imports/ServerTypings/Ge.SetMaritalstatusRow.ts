namespace GestionEquestre.Ge {
    export interface SetMaritalstatusRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        Code?: string;
    }

    export namespace SetMaritalstatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.SetMaritalstatus';
        export const lookupKey = 'Ge.SetMaritalstatus';

        export function getLookup(): Q.Lookup<SetMaritalstatusRow> {
            return Q.getLookup<SetMaritalstatusRow>('Ge.SetMaritalstatus');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const DefaultValue: string;
            export declare const IsActive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Caption: string;
            export declare const Code: string;
        }

        [
            'Id', 
            'DefaultValue', 
            'IsActive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Caption', 
            'Code'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

