

namespace GestionEquestre.Ge {
    export class ComptebancaireForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.Comptebancaire';
    }

    export interface ComptebancaireForm {
        CodePaysIban: Serenity.StringEditor;
        CleIban: Serenity.StringEditor;
        Banque: Serenity.StringEditor;
        Guichet: Serenity.StringEditor;
        NumeroCompte: Serenity.StringEditor;
        CleRib: Serenity.StringEditor;
        EmetteurRib: Serenity.StringEditor;
        Bic: Serenity.StringEditor;
        TitulaireCompte: Serenity.StringEditor;
        Domiciliation: Serenity.StringEditor;
        CodeIcs: Serenity.StringEditor;
        CodeRum: Serenity.StringEditor;
        DateSignatureMandat: Serenity.DateEditor;
        TypePrelevement: Serenity.IntegerEditor;
        DateDernierPrelevement: Serenity.DateEditor;
        TypeDernierPrelevement: Serenity.IntegerEditor;
    }

    [['CodePaysIban', () => Serenity.StringEditor], ['CleIban', () => Serenity.StringEditor], ['Banque', () => Serenity.StringEditor], ['Guichet', () => Serenity.StringEditor], ['NumeroCompte', () => Serenity.StringEditor], ['CleRib', () => Serenity.StringEditor], ['EmetteurRib', () => Serenity.StringEditor], ['Bic', () => Serenity.StringEditor], ['TitulaireCompte', () => Serenity.StringEditor], ['Domiciliation', () => Serenity.StringEditor], ['CodeIcs', () => Serenity.StringEditor], ['CodeRum', () => Serenity.StringEditor], ['DateSignatureMandat', () => Serenity.DateEditor], ['TypePrelevement', () => Serenity.IntegerEditor], ['DateDernierPrelevement', () => Serenity.DateEditor], ['TypeDernierPrelevement', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ComptebancaireForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}