namespace GestionEquestre.Ge {
    export interface ManFolderRow {
        Id?: number;
        IsActive?: boolean;
        IsArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        ArchiveDate?: string;
        CreateDate?: string;
        CloseRaison?: string;
        CloseDate?: string;
        Establishment?: number;
        Comment?: string;
        InsertUsername?: string;
        UpdateUsername?: string;
    }

    export namespace ManFolderRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.ManFolder';
        export const lookupKey = 'Ge.ManFolder';

        export function getLookup(): Q.Lookup<ManFolderRow> {
            return Q.getLookup<ManFolderRow>('Ge.ManFolder');
        }
        export const deletePermission = 'Folders:General';
        export const insertPermission = 'Folders:General';
        export const readPermission = 'Folders:General';
        export const updatePermission = 'Folders:General';

        export declare const enum Fields {
            Id = "Id",
            IsActive = "IsActive",
            IsArchive = "IsArchive",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            Caption = "Caption",
            ArchiveDate = "ArchiveDate",
            CreateDate = "CreateDate",
            CloseRaison = "CloseRaison",
            CloseDate = "CloseDate",
            Establishment = "Establishment",
            Comment = "Comment",
            InsertUsername = "InsertUsername",
            UpdateUsername = "UpdateUsername"
        }
    }
}

