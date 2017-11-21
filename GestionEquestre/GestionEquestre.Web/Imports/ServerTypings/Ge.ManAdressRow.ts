namespace GestionEquestre.Ge {
    export interface ManAdressRow {
        Id?: number;
        IsActive?: boolean;
        IsArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Adress1?: string;
        Adress2?: string;
        Adress3?: string;
        City?: number;
        Country?: number;
        Cedex?: string;
        Building?: string;
        Caption?: string;
        ArchiveDate?: string;
        InsertUsername?: string;
        UpdateUsername?: string;
        CityDefaultValue?: boolean;
        CityIsActive?: boolean;
        CityInsertDate?: string;
        CityInsertUserId?: number;
        CityUpdateDate?: string;
        CityUpdateUserId?: number;
        CityFrCodeInsee?: string;
        CityCaption?: string;
        City1?: string;
        CityPostCode?: string;
        CityCountry?: number;
        CountryDefaultValue?: boolean;
        CountryIsActive?: boolean;
        CountryInsertDate?: string;
        CountryInsertUserId?: number;
        CountryUpdateDate?: string;
        CountryUpdateUserId?: number;
        CountryName_FR_fr?: string;
        CountryName_EN_gb?: string;
        Countryalpha3?: string;
        Countryalpha2?: string;
        CountryCodeUe?: number;
        CountryISOcode?: string;
    }

    export namespace ManAdressRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Adress1';
        export const localTextPrefix = 'Ge.ManAdress';

        export namespace Fields {
            export declare const Id: string;
            export declare const IsActive: string;
            export declare const IsArchive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Adress1: string;
            export declare const Adress2: string;
            export declare const Adress3: string;
            export declare const City: string;
            export declare const Country: string;
            export declare const Cedex: string;
            export declare const Building: string;
            export declare const Caption: string;
            export declare const ArchiveDate: string;
            export declare const InsertUsername: string;
            export declare const UpdateUsername: string;
            export declare const CityDefaultValue: string;
            export declare const CityIsActive: string;
            export declare const CityInsertDate: string;
            export declare const CityInsertUserId: string;
            export declare const CityUpdateDate: string;
            export declare const CityUpdateUserId: string;
            export declare const CityFrCodeInsee: string;
            export declare const CityCaption: string;
            export declare const City1: string;
            export declare const CityPostCode: string;
            export declare const CityCountry: string;
            export declare const CountryDefaultValue: string;
            export declare const CountryIsActive: string;
            export declare const CountryInsertDate: string;
            export declare const CountryInsertUserId: string;
            export declare const CountryUpdateDate: string;
            export declare const CountryUpdateUserId: string;
            export declare const CountryName_FR_fr: string;
            export declare const CountryName_EN_gb: string;
            export declare const Countryalpha3: string;
            export declare const Countryalpha2: string;
            export declare const CountryCodeUe: string;
            export declare const CountryISOcode: string;
        }

        [
            'Id', 
            'IsActive', 
            'IsArchive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Adress1', 
            'Adress2', 
            'Adress3', 
            'City', 
            'Country', 
            'Cedex', 
            'Building', 
            'Caption', 
            'ArchiveDate', 
            'InsertUsername', 
            'UpdateUsername', 
            'CityDefaultValue', 
            'CityIsActive', 
            'CityInsertDate', 
            'CityInsertUserId', 
            'CityUpdateDate', 
            'CityUpdateUserId', 
            'CityFrCodeInsee', 
            'CityCaption', 
            'City1', 
            'CityPostCode', 
            'CityCountry', 
            'CountryDefaultValue', 
            'CountryIsActive', 
            'CountryInsertDate', 
            'CountryInsertUserId', 
            'CountryUpdateDate', 
            'CountryUpdateUserId', 
            'CountryName_FR_fr', 
            'CountryName_EN_gb', 
            'Countryalpha3', 
            'Countryalpha2', 
            'CountryCodeUe', 
            'CountryISOcode'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

