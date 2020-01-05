namespace GestionEquestre.Ge {
    export interface SetCityRow {
        Id?: number;
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
        Country?: number;
        InsertUsername?: string;
        UpdateUsername?: string;
        CountryDefaultValue?: boolean;
        CountryIsActive?: boolean;
        CountryInsertDate?: string;
        CountryInsertUserId?: number;
        CountryUpdateDate?: string;
        CountryUpdateUserId?: number;
        CountryName_FR_fr?: string;
        Countryalpha3?: string;
        CountryCodeUe?: number;
        CountryISOcode?: string;
    }

    export namespace SetCityRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FrCodeInsee';
        export const localTextPrefix = 'Ge.SetCity';
        export const lookupKey = 'Ge.SetCity';

        export function getLookup(): Q.Lookup<SetCityRow> {
            return Q.getLookup<SetCityRow>('Ge.SetCity');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            DefaultValue = "DefaultValue",
            IsActive = "IsActive",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            FrCodeInsee = "FrCodeInsee",
            Caption = "Caption",
            City = "City",
            PostCode = "PostCode",
            Country = "Country",
            InsertUsername = "InsertUsername",
            UpdateUsername = "UpdateUsername",
            CountryDefaultValue = "CountryDefaultValue",
            CountryIsActive = "CountryIsActive",
            CountryInsertDate = "CountryInsertDate",
            CountryInsertUserId = "CountryInsertUserId",
            CountryUpdateDate = "CountryUpdateDate",
            CountryUpdateUserId = "CountryUpdateUserId",
            CountryName_FR_fr = "CountryName_FR_fr",
            Countryalpha3 = "Countryalpha3",
            CountryCodeUe = "CountryCodeUe",
            CountryISOcode = "CountryISOcode"
        }
    }
}

