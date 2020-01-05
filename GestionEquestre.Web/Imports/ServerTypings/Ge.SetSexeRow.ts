namespace GestionEquestre.Ge {
    export interface SetSexeRow {
        SexeId?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        Civility?: string;
        InsertUsername?: string;
        UpdateUsername?: string;
    }

    export namespace SetSexeRow {
        export const idProperty = 'SexeId';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.SetSexe';
        export const lookupKey = 'Ge.SexeHorses';

        export function getLookup(): Q.Lookup<SetSexeRow> {
            return Q.getLookup<SetSexeRow>('Ge.SexeHorses');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SexeId = "SexeId",
            DefaultValue = "DefaultValue",
            IsActive = "IsActive",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            Caption = "Caption",
            Civility = "Civility",
            InsertUsername = "InsertUsername",
            UpdateUsername = "UpdateUsername"
        }
    }
}

