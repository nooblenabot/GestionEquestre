
namespace GestionEquestre.Ge {
    export interface ChevauxRow {
        Ueln?: string;
        Sire?: string;
        CleSire?: string;
        Name?: string;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Birthday?: string;
        Sexe?: number;
        Robe?: string;
        Transpondeur?: string;
        SortieDefinitive?: string;
        Description?: string;
        ArchiveDate?: string;
        SexeDefaultValue?: boolean;
        SexeIsActive?: boolean;
        SexeReadOnly?: boolean;
        SexeInsertDate?: string;
        SexeInsertUserId?: number;
        SexeUpdateDate?: string;
        SexeUpdateUserId?: number;
        SexeLibele?: string;
        SexeCivilite?: string;
        SexeLibeleUs?: string;
    }

    export namespace ChevauxRow {
        export const idProperty = 'Ueln';
        export const nameProperty = 'Ueln';
        export const localTextPrefix = 'Ge.Chevaux';

        export namespace Fields {
            export declare const Ueln;
            export declare const Sire;
            export declare const CleSire;
            export declare const Name;
            export declare const IsActive;
            export declare const NotArchive;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const Birthday;
            export declare const Sexe;
            export declare const Robe;
            export declare const Transpondeur;
            export declare const SortieDefinitive;
            export declare const Description;
            export declare const ArchiveDate;
            export declare const SexeDefaultValue: string;
            export declare const SexeIsActive: string;
            export declare const SexeReadOnly: string;
            export declare const SexeInsertDate: string;
            export declare const SexeInsertUserId: string;
            export declare const SexeUpdateDate: string;
            export declare const SexeUpdateUserId: string;
            export declare const SexeLibele: string;
            export declare const SexeCivilite: string;
            export declare const SexeLibeleUs: string;
        }

        ['Ueln', 'Sire', 'CleSire', 'Name', 'IsActive', 'NotArchive', 'InsertDate', 'InsertUserId', 'UpdateDate', 'UpdateUserId', 'Birthday', 'Sexe', 'Robe', 'Transpondeur', 'SortieDefinitive', 'Description', 'ArchiveDate', 'SexeDefaultValue', 'SexeIsActive', 'SexeReadOnly', 'SexeInsertDate', 'SexeInsertUserId', 'SexeUpdateDate', 'SexeUpdateUserId', 'SexeLibele', 'SexeCivilite', 'SexeLibeleUs'].forEach(x => (<any>Fields)[x] = x);
    }
}

