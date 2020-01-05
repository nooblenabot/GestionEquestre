namespace GestionEquestre.Ge {
    export interface SetUelnorgaRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Organization?: string;
        UelnCode?: string;
        InsertUsername?: string;
        UpdateUsername?: string;
    }

    export namespace SetUelnorgaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Organization';
        export const localTextPrefix = 'Ge.SetUelnorga';
        export const lookupKey = 'Ge.SetUelnorga';

        export function getLookup(): Q.Lookup<SetUelnorgaRow> {
            return Q.getLookup<SetUelnorgaRow>('Ge.SetUelnorga');
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
            Organization = "Organization",
            UelnCode = "UelnCode",
            InsertUsername = "InsertUsername",
            UpdateUsername = "UpdateUsername"
        }
    }
}

