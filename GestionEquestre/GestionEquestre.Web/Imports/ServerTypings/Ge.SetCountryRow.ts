namespace GestionEquestre.Ge {
    export interface SetCountryRow {
        Id?: string;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Country?: string;
        Code?: string;
        CodeUe?: number;
        Iso3166Country?: string;
    }

    export namespace SetCountryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Country';
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
            export declare const Country: string;
            export declare const Code: string;
            export declare const CodeUe: string;
            export declare const Iso3166Country: string;
        }

        [
            'Id', 
            'DefaultValue', 
            'IsActive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Country', 
            'Code', 
            'CodeUe', 
            'Iso3166Country'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

