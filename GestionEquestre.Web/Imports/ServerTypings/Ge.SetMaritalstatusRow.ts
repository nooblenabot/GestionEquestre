namespace GestionEquestre.Ge {
    export interface SetMaritalstatusRow {
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

    export namespace SetMaritalstatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.SetMaritalstatus';
        export const lookupKey = 'Ge.SetMaritalstatus';

        export function getLookup(): Q.Lookup<SetMaritalstatusRow> {
            return Q.getLookup<SetMaritalstatusRow>('Ge.SetMaritalstatus');
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

