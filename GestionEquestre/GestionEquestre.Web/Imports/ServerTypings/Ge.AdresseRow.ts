
namespace GestionEquestre.Ge {
    export interface AdresseRow {
        Id?: string;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Adresse1?: string;
        Adresse2?: string;
        Adresse3?: string;
        Ville?: string;
        Pays?: string;
        Cedex?: string;
        Batiment?: string;
        Description?: string;
        ArchiveDate?: string;
        VilleDefaultValue?: boolean;
        VilleIsActive?: boolean;
        VilleReadOnly?: boolean;
        VilleInsertDate?: string;
        VilleInsertUserId?: number;
        VilleUpdateDate?: string;
        VilleUpdateUserId?: number;
        VilleCodeInsee?: string;
        VilleLibele?: string;
        VilleNomVille?: string;
        VilleCodePostal?: string;
        VillePays?: string;
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

    export namespace AdresseRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Adresse1';
        export const localTextPrefix = 'Ge.Adresse';

        export namespace Fields {
            export declare const Id;
            export declare const IsActive;
            export declare const NotArchive;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const Adresse1;
            export declare const Adresse2;
            export declare const Adresse3;
            export declare const Ville;
            export declare const Pays;
            export declare const Cedex;
            export declare const Batiment;
            export declare const Description;
            export declare const ArchiveDate;
            export declare const VilleDefaultValue: string;
            export declare const VilleIsActive: string;
            export declare const VilleReadOnly: string;
            export declare const VilleInsertDate: string;
            export declare const VilleInsertUserId: string;
            export declare const VilleUpdateDate: string;
            export declare const VilleUpdateUserId: string;
            export declare const VilleCodeInsee: string;
            export declare const VilleLibele: string;
            export declare const VilleNomVille: string;
            export declare const VilleCodePostal: string;
            export declare const VillePays: string;
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

        ['Id', 'IsActive', 'NotArchive', 'InsertDate', 'InsertUserId', 'UpdateDate', 'UpdateUserId', 'Adresse1', 'Adresse2', 'Adresse3', 'Ville', 'Pays', 'Cedex', 'Batiment', 'Description', 'ArchiveDate', 'VilleDefaultValue', 'VilleIsActive', 'VilleReadOnly', 'VilleInsertDate', 'VilleInsertUserId', 'VilleUpdateDate', 'VilleUpdateUserId', 'VilleCodeInsee', 'VilleLibele', 'VilleNomVille', 'VilleCodePostal', 'VillePays', 'PaysDefaultValue', 'PaysIsActive', 'PaysReadOnly', 'PaysInsertDate', 'PaysInsertUserId', 'PaysUpdateDate', 'PaysUpdateUserId', 'PaysLibele', 'PaysCode', 'PaysCodeUe'].forEach(x => (<any>Fields)[x] = x);
    }
}

