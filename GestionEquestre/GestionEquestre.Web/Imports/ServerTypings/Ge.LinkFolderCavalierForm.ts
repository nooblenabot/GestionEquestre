namespace GestionEquestre.Ge {
    export class LinkFolderCavalierForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.LinkFolderCavalier';

    }

    export interface LinkFolderCavalierForm {
        Folder: Serenity.IntegerEditor;
        Cavalier: Serenity.LookupEditor;
    }

    [['Folder', () => Serenity.IntegerEditor], ['Cavalier', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(LinkFolderCavalierForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

