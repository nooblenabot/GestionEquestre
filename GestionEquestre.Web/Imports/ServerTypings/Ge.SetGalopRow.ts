namespace GestionEquestre.Ge {
    export interface SetGalopRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        Code?: string;
        InsertUsername?: string;
        UpdateUsername?: string;
    }

    export namespace SetGalopRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.SetGalop';
        export const lookupKey = 'Ge.SetGalop';

        export function getLookup(): Q.Lookup<SetGalopRow> {
            return Q.getLookup<SetGalopRow>('Ge.SetGalop');
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
            Caption = "Caption",
            Code = "Code",
            InsertUsername = "InsertUsername",
            UpdateUsername = "UpdateUsername"
        }
    }
}

