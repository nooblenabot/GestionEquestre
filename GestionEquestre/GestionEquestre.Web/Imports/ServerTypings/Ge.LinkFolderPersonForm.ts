namespace GestionEquestre.Ge {
    export class LinkFolderPersonForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.LinkFolderPerson';

    }

    export interface LinkFolderPersonForm {
        Folder: Serenity.StringEditor;
        PersonId: Serenity.LookupEditor;
        Caption: Serenity.StringEditor;
    }

    [['Folder', () => Serenity.StringEditor], ['PersonId', () => Serenity.LookupEditor], ['Caption', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(LinkFolderPersonForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

