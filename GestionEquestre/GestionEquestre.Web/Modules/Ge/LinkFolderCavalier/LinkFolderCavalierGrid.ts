
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class LinkFolderCavalierGrid extends Serenity.EntityGrid<LinkFolderCavalierRow, any> {
        protected getColumnsKey() { return 'Ge.LinkFolderCavalier'; }
        protected getDialogType() { return LinkFolderCavalierDialog; }
        protected getIdProperty() { return LinkFolderCavalierRow.idProperty; }
        protected getLocalTextPrefix() { return LinkFolderCavalierRow.localTextPrefix; }
        protected getService() { return LinkFolderCavalierService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}