
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class LinkFolderPersonGrid extends Serenity.EntityGrid<LinkFolderPersonRow, any> {
        protected getColumnsKey() { return 'Ge.LinkFolderPerson'; }
        protected getDialogType() { return LinkFolderPersonDialog; }
        protected getIdProperty() { return LinkFolderPersonRow.idProperty; }
        protected getLocalTextPrefix() { return LinkFolderPersonRow.localTextPrefix; }
        protected getService() { return LinkFolderPersonService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}