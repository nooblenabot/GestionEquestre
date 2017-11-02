
namespace GestionEquestre.Ge {
    export interface ComptebancaireRow {
        Id?: string;
        CodePaysIban?: string;
        CleIban?: string;
        Banque?: string;
        Guichet?: string;
        NumeroCompte?: string;
        CleRib?: string;
        EmetteurRib?: string;
        Bic?: string;
        TitulaireCompte?: string;
        Domiciliation?: string;
        CodeIcs?: string;
        CodeRum?: string;
        DateSignatureMandat?: string;
        TypePrelevement?: number;
        DateDernierPrelevement?: string;
        TypeDernierPrelevement?: number;
    }

    export namespace ComptebancaireRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CodePaysIban';
        export const localTextPrefix = 'Ge.Comptebancaire';

        export namespace Fields {
            export declare const Id;
            export declare const CodePaysIban;
            export declare const CleIban;
            export declare const Banque;
            export declare const Guichet;
            export declare const NumeroCompte;
            export declare const CleRib;
            export declare const EmetteurRib;
            export declare const Bic;
            export declare const TitulaireCompte;
            export declare const Domiciliation;
            export declare const CodeIcs;
            export declare const CodeRum;
            export declare const DateSignatureMandat;
            export declare const TypePrelevement;
            export declare const DateDernierPrelevement;
            export declare const TypeDernierPrelevement;
        }

        ['Id', 'CodePaysIban', 'CleIban', 'Banque', 'Guichet', 'NumeroCompte', 'CleRib', 'EmetteurRib', 'Bic', 'TitulaireCompte', 'Domiciliation', 'CodeIcs', 'CodeRum', 'DateSignatureMandat', 'TypePrelevement', 'DateDernierPrelevement', 'TypeDernierPrelevement'].forEach(x => (<any>Fields)[x] = x);
    }
}

