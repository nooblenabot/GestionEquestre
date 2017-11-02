
namespace GestionEquestre.Ge {
    export interface ProprietaireRow {
        Id?: number;
        Cheval?: string;
        Cavalier?: string;
        Part?: number;
        ChevalSire?: string;
        ChevalCleSire?: string;
        ChevalName?: string;
        ChevalIsActive?: boolean;
        ChevalNotArchive?: boolean;
        ChevalInsertDate?: string;
        ChevalInsertUserId?: number;
        ChevalUpdateDate?: string;
        ChevalUpdateUserId?: number;
        ChevalBirthday?: string;
        ChevalSexe?: number;
        ChevalRobe?: string;
        ChevalTranspondeur?: string;
        ChevalSortieDefinitive?: string;
        ChevalDescription?: string;
        ChevalArchiveDate?: string;
        CavalierPersonne?: string;
        CavalierIsActive?: boolean;
        CavalierNotArchive?: boolean;
        CavalierInsertDate?: string;
        CavalierInsertUserId?: number;
        CavalierUpdateDate?: string;
        CavalierUpdateUserId?: number;
        CavalierMilesimeLicnece?: string;
        CavalierNiveauGalop?: number;
        CavalierLicenceCompetition?: number;
        CavalierDateCertificatMedical?: string;
        CavalierDescription?: string;
        CavalierArchiveDate?: string;
    }

    export namespace ProprietaireRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Cheval';
        export const localTextPrefix = 'Ge.Proprietaire';

        export namespace Fields {
            export declare const Id;
            export declare const Cheval;
            export declare const Cavalier;
            export declare const Part;
            export declare const ChevalSire: string;
            export declare const ChevalCleSire: string;
            export declare const ChevalName: string;
            export declare const ChevalIsActive: string;
            export declare const ChevalNotArchive: string;
            export declare const ChevalInsertDate: string;
            export declare const ChevalInsertUserId: string;
            export declare const ChevalUpdateDate: string;
            export declare const ChevalUpdateUserId: string;
            export declare const ChevalBirthday: string;
            export declare const ChevalSexe: string;
            export declare const ChevalRobe: string;
            export declare const ChevalTranspondeur: string;
            export declare const ChevalSortieDefinitive: string;
            export declare const ChevalDescription: string;
            export declare const ChevalArchiveDate: string;
            export declare const CavalierPersonne: string;
            export declare const CavalierIsActive: string;
            export declare const CavalierNotArchive: string;
            export declare const CavalierInsertDate: string;
            export declare const CavalierInsertUserId: string;
            export declare const CavalierUpdateDate: string;
            export declare const CavalierUpdateUserId: string;
            export declare const CavalierMilesimeLicnece: string;
            export declare const CavalierNiveauGalop: string;
            export declare const CavalierLicenceCompetition: string;
            export declare const CavalierDateCertificatMedical: string;
            export declare const CavalierDescription: string;
            export declare const CavalierArchiveDate: string;
        }

        ['Id', 'Cheval', 'Cavalier', 'Part', 'ChevalSire', 'ChevalCleSire', 'ChevalName', 'ChevalIsActive', 'ChevalNotArchive', 'ChevalInsertDate', 'ChevalInsertUserId', 'ChevalUpdateDate', 'ChevalUpdateUserId', 'ChevalBirthday', 'ChevalSexe', 'ChevalRobe', 'ChevalTranspondeur', 'ChevalSortieDefinitive', 'ChevalDescription', 'ChevalArchiveDate', 'CavalierPersonne', 'CavalierIsActive', 'CavalierNotArchive', 'CavalierInsertDate', 'CavalierInsertUserId', 'CavalierUpdateDate', 'CavalierUpdateUserId', 'CavalierMilesimeLicnece', 'CavalierNiveauGalop', 'CavalierLicenceCompetition', 'CavalierDateCertificatMedical', 'CavalierDescription', 'CavalierArchiveDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

