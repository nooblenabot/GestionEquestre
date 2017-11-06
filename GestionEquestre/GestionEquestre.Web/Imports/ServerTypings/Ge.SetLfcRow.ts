namespace GestionEquestre.Ge {
    export interface SetLfcRow {
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

    export namespace SetLfcRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.SetLfc';
        export const lookupKey = 'Ge.SetLfc';

        export function getLookup(): Q.Lookup<SetLfcRow> {
            return Q.getLookup<SetLfcRow>('Ge.SetLfc');
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

