namespace GestionEquestre.Ge {
    export class ManOwnerForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManOwner';

    }

    export interface ManOwnerForm {
        Horse: Serenity.StringEditor;
        Cavalier: Serenity.LookupEditor;
        Part: Serenity.DecimalEditor;
    }

    [['Horse', () => Serenity.StringEditor], ['Cavalier', () => Serenity.LookupEditor], ['Part', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(ManOwnerForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

