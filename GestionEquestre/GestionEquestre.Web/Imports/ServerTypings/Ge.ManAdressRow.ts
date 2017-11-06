namespace GestionEquestre.Ge {
    export interface ManAdressRow {
        Id?: string;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Adress1?: string;
        Adress2?: string;
        Adress3?: string;
        City?: string;
        Country?: string;
        Cedex?: string;
        Building?: string;
        Caption?: string;
        ArchiveDate?: string;
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
        CityCountry?: string;
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

    export namespace ManAdressRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Adress1';
        export const localTextPrefix = 'Ge.ManAdress';

        export namespace Fields {
            export declare const Id: string;
            export declare const IsActive: string;
            export declare const NotArchive: string;
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
            export declare const Country1: string;
            export declare const CountryCode: string;
            export declare const CountryCodeUe: string;
            export declare const CountryIso3166Country: string;
        }

        [
            'Id', 
            'IsActive', 
            'NotArchive', 
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
            'Country1', 
            'CountryCode', 
            'CountryCodeUe', 
            'CountryIso3166Country'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

