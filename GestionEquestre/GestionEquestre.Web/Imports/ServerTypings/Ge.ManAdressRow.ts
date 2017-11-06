
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
        CityReadOnly?: boolean;
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
        CountryReadOnly?: boolean;
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
            export declare const Id;
            export declare const IsActive;
            export declare const NotArchive;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const Adress1;
            export declare const Adress2;
            export declare const Adress3;
            export declare const City;
            export declare const Country;
            export declare const Cedex;
            export declare const Building;
            export declare const Caption;
            export declare const ArchiveDate;
            export declare const CityDefaultValue;
            export declare const CityIsActive;
            export declare const CityReadOnly;
            export declare const CityInsertDate;
            export declare const CityInsertUserId;
            export declare const CityUpdateDate;
            export declare const CityUpdateUserId;
            export declare const CityFrCodeInsee;
            export declare const CityCaption;
            export declare const City1;
            export declare const CityPostCode;
            export declare const CityCountry;
            export declare const CountryDefaultValue;
            export declare const CountryIsActive;
            export declare const CountryReadOnly;
            export declare const CountryInsertDate;
            export declare const CountryInsertUserId;
            export declare const CountryUpdateDate;
            export declare const CountryUpdateUserId;
            export declare const Country1;
            export declare const CountryCode;
            export declare const CountryCodeUe;
            export declare const CountryIso3166Country;
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
            'CityReadOnly',
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
            'CountryReadOnly',
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