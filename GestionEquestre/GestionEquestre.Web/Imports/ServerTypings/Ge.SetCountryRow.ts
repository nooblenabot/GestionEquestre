namespace GestionEquestre.Ge {
    export interface SetCountryRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Name_FR_fr?: string;
        Name_EN_gb?: string;
        alpha3?: string;
        alpha2?: string;
        CodeUe?: number;
        ISOcode?: string;
        InsertUsername?: string;
        UpdateUsername?: string;
    }

    export namespace SetCountryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name_FR_fr';
        export const localTextPrefix = 'Ge.SetCountry';
        export const lookupKey = 'Ge.SetCountry';

        export function getLookup(): Q.Lookup<SetCountryRow> {
            return Q.getLookup<SetCountryRow>('Ge.SetCountry');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const DefaultValue: string;
            export declare const IsActive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Name_FR_fr: string;
            export declare const Name_EN_gb: string;
            export declare const alpha3: string;
            export declare const alpha2: string;
            export declare const CodeUe: string;
            export declare const ISOcode: string;
            export declare const InsertUsername: string;
            export declare const UpdateUsername: string;
        }

        [
            'Id', 
            'DefaultValue', 
            'IsActive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Name_FR_fr', 
            'Name_EN_gb', 
            'alpha3', 
            'alpha2', 
            'CodeUe', 
            'ISOcode', 
            'InsertUsername', 
            'UpdateUsername'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

