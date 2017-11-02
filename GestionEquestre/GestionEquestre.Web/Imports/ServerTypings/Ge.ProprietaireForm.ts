

namespace GestionEquestre.Ge {
    export class ProprietaireForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.Proprietaire';
    }

    export interface ProprietaireForm {
        Cheval: Serenity.StringEditor;
        Cavalier: Serenity.StringEditor;
        Part: Serenity.DecimalEditor;
    }

    [['Cheval', () => Serenity.StringEditor], ['Cavalier', () => Serenity.StringEditor], ['Part', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(ProprietaireForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}