namespace GestionEquestre.Ge {
    export interface SetCityRow {
        Id?: string;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        FrCodeInsee?: string;
        Caption?: string;
        City?: string;
        PostCode?: string;
        Country?: string;
        CountryDefaultValue?: boolean;
        CountryIsActive?: boolean;
        CountryInsertDate?: string;
        CountryInsertUserId?: number;
        CountryUpdateDate?: string;
        CountryUpdateUserId?: number;
        Country1?: string;
        CountryCode?: string;
        CountryCodeUe?: number;
        CountryIso3166Country?: string;
    }

    export namespace SetCityRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FrCodeInsee';
        export const localTextPrefix = 'Ge.SetCity';
        export const lookupKey = 'Ge.SetCity';

        export function getLookup(): Q.Lookup<SetCityRow> {
            return Q.getLookup<SetCityRow>('Ge.SetCity');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const DefaultValue: string;
            export declare const IsActive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const FrCodeInsee: string;
            export declare const Caption: string;
            export declare const City: string;
            export declare const PostCode: string;
            export declare const Country: string;
            export declare const CountryDefaultValue: string;
            export declare const CountryIsActive: string;
            export declare const CountryInsertDate: string;
            export declare const CountryInsertUserId: string;
            export declare const CountryUpdateDate: string;
            export declare const CountryUpdateUserId: string;
            export declare const Country1: string;
            export declare const CountryCode: string;
            export declare const CountryCodeUe: string;
            export declare const CountryIso3166Country: string;
        }

        [
            'Id', 
            'DefaultValue', 
            'IsActive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'FrCodeInsee', 
            'Caption', 
            'City', 
            'PostCode', 
            'Country', 
            'CountryDefaultValue', 
            'CountryIsActive', 
            'CountryInsertDate', 
            'CountryInsertUserId', 
            'CountryUpdateDate', 
            'CountryUpdateUserId', 
            'Country1', 
            'CountryCode', 
            'CountryCodeUe', 
            'CountryIso3166Country'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

