
namespace GestionEquestre.Ge {
    export interface VilleRow {
        Id?: string;
        DefaultValue?: boolean;
        IsActive?: boolean;
        ReadOnly?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CodeInsee?: string;
        Libele?: string;
        NomVille?: string;
        CodePostal?: string;
        Pays?: string;
        PaysDefaultValue?: boolean;
        PaysIsActive?: boolean;
        PaysReadOnly?: boolean;
        PaysInsertDate?: string;
        PaysInsertUserId?: number;
        PaysUpdateDate?: string;
        PaysUpdateUserId?: number;
        PaysLibele?: string;
        PaysCode?: string;
        PaysCodeUe?: number;
    }

    export namespace VilleRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CodeInsee';
        export const localTextPrefix = 'Ge.Ville';

        export namespace Fields {
            export declare const Id;
            export declare const DefaultValue;
            export declare const IsActive;
            export declare const ReadOnly;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const CodeInsee;
            export declare const Libele;
            export declare const NomVille;
            export declare const CodePostal;
            export declare const Pays;
            export declare const PaysDefaultValue: string;
            export declare const PaysIsActive: string;
            export declare const PaysReadOnly: string;
            export declare const PaysInsertDate: string;
            export declare const PaysInsertUserId: string;
            export declare const PaysUpdateDate: string;
            export declare const PaysUpdateUserId: string;
            export declare const PaysLibele: string;
            export declare const PaysCode: string;
            export declare const PaysCodeUe: string;
        }

        ['Id', 'DefaultValue', 'IsActive', 'ReadOnly', 'InsertDate', 'InsertUserId', 'UpdateDate', 'UpdateUserId', 'CodeInsee', 'Libele', 'NomVille', 'CodePostal', 'Pays', 'PaysDefaultValue', 'PaysIsActive', 'PaysReadOnly', 'PaysInsertDate', 'PaysInsertUserId', 'PaysUpdateDate', 'PaysUpdateUserId', 'PaysLibele', 'PaysCode', 'PaysCodeUe'].forEach(x => (<any>Fields)[x] = x);
    }
}

