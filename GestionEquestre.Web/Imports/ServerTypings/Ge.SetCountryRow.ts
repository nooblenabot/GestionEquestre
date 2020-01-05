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
            Name_FR_fr = "Name_FR_fr",
            Name_EN_gb = "Name_EN_gb",
            alpha3 = "alpha3",
            alpha2 = "alpha2",
            CodeUe = "CodeUe",
            ISOcode = "ISOcode",
            InsertUsername = "InsertUsername",
            UpdateUsername = "UpdateUsername"
        }
    }
}

