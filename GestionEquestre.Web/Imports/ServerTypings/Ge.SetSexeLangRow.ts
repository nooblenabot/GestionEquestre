namespace GestionEquestre.Ge {
    export interface SetSexeLangRow {
        Id?: number;
        SexeId?: number;
        LanguageId?: number;
        Caption?: string;
        SexeDefaultValue?: boolean;
        SexeIsActive?: boolean;
        SexeInsertDate?: string;
        SexeInsertUserId?: number;
        SexeUpdateDate?: string;
        SexeUpdateUserId?: number;
        SexeCaption?: string;
        SexeCivility?: string;
    }

    export namespace SetSexeLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.SetSexeLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            SexeId = "SexeId",
            LanguageId = "LanguageId",
            Caption = "Caption",
            SexeDefaultValue = "SexeDefaultValue",
            SexeIsActive = "SexeIsActive",
            SexeInsertDate = "SexeInsertDate",
            SexeInsertUserId = "SexeInsertUserId",
            SexeUpdateDate = "SexeUpdateDate",
            SexeUpdateUserId = "SexeUpdateUserId",
            SexeCaption = "SexeCaption",
            SexeCivility = "SexeCivility"
        }
    }
}

