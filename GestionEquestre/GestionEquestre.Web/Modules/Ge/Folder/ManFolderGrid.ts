
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class ManFolderGrid extends Serenity.EntityGrid<ManFolderRow, any> {
        protected getColumnsKey() { return 'Ge.ManFolder'; }
        protected getDialogType() { return ManFolderDialog; }
        protected getIdProperty() { return ManFolderRow.idProperty; }
        protected getLocalTextPrefix() { return ManFolderRow.localTextPrefix; }
        protected getService() { return ManFolderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

        }

    }
}