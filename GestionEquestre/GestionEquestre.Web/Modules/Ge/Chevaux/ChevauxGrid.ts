
namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class ChevauxGrid extends Serenity.EntityGrid<ChevauxRow, any> {
        protected getColumnsKey() { return 'Ge.Chevaux'; }
        protected getDialogType() { return ChevauxDialog; }
        protected getIdProperty() { return ChevauxRow.idProperty; }
        protected getLocalTextPrefix() { return ChevauxRow.localTextPrefix; }
        protected getService() { return ChevauxService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}