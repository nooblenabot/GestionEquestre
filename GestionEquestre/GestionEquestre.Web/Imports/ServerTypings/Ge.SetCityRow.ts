
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

        export namespace Fields {
            export declare const Id;
            export declare const DefaultValue;
            export declare const IsActive;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const FrCodeInsee;
            export declare const Caption;
            export declare const City;
            export declare const PostCode;
            export declare const Country;
            export declare const CountryDefaultValue;
            export declare const CountryIsActive;
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