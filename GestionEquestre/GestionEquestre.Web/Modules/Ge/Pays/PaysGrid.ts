
namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class PaysGrid extends Serenity.EntityGrid<PaysRow, any> {
        protected getColumnsKey() { return 'Ge.Pays'; }
        protected getDialogType() { return PaysDialog; }
        protected getIdProperty() { return PaysRow.idProperty; }
        protected getLocalTextPrefix() { return PaysRow.localTextPrefix; }
        protected getService() { return PaysService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}