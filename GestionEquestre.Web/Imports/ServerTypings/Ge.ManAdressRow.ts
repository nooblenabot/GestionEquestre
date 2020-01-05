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
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IsActive = "IsActive",
            IsArchive = "IsArchive",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            Adress1 = "Adress1",
            Adress2 = "Adress2",
            Adress3 = "Adress3",
            City = "City",
            Country = "Country",
            Cedex = "Cedex",
            Building = "Building",
            Caption = "Caption",
            ArchiveDate = "ArchiveDate",
            InsertUsername = "InsertUsername",
            UpdateUsername = "UpdateUsername",
            CityDefaultValue = "CityDefaultValue",
            CityIsActive = "CityIsActive",
            CityInsertDate = "CityInsertDate",
            CityInsertUserId = "CityInsertUserId",
            CityUpdateDate = "CityUpdateDate",
            CityUpdateUserId = "CityUpdateUserId",
            CityFrCodeInsee = "CityFrCodeInsee",
            CityCaption = "CityCaption",
            City1 = "City1",
            CityPostCode = "CityPostCode",
            CityCountry = "CityCountry",
            CountryDefaultValue = "CountryDefaultValue",
            CountryIsActive = "CountryIsActive",
            CountryInsertDate = "CountryInsertDate",
            CountryInsertUserId = "CountryInsertUserId",
            CountryUpdateDate = "CountryUpdateDate",
            CountryUpdateUserId = "CountryUpdateUserId",
            CountryName_FR_fr = "CountryName_FR_fr",
            CountryName_EN_gb = "CountryName_EN_gb",
            Countryalpha3 = "Countryalpha3",
            Countryalpha2 = "Countryalpha2",
            CountryCodeUe = "CountryCodeUe",
            CountryISOcode = "CountryISOcode"
        }
    }
}

