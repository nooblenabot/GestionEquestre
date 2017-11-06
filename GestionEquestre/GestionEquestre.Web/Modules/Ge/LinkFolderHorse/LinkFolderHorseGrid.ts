
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class LinkFolderHorseGrid extends Serenity.EntityGrid<LinkFolderHorseRow, any> {
        protected getColumnsKey() { return 'Ge.LinkFolderHorse'; }
        protected getDialogType() { return LinkFolderHorseDialog; }
        protected getIdProperty() { return LinkFolderHorseRow.idProperty; }
        protected getLocalTextPrefix() { return LinkFolderHorseRow.localTextPrefix; }
        protected getService() { return LinkFolderHorseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}