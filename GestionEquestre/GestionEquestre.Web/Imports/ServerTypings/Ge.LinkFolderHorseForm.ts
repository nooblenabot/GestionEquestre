namespace GestionEquestre.Ge {
    export class LinkFolderHorseForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.LinkFolderHorse';

    }

    export interface LinkFolderHorseForm {
        Folder: Serenity.StringEditor;
        Horse: Serenity.LookupEditor;
    }

    [['Folder', () => Serenity.StringEditor], ['Horse', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(LinkFolderHorseForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

