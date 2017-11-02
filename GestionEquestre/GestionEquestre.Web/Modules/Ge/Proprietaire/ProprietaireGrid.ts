
namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class ProprietaireGrid extends Serenity.EntityGrid<ProprietaireRow, any> {
        protected getColumnsKey() { return 'Ge.Proprietaire'; }
        protected getDialogType() { return ProprietaireDialog; }
        protected getIdProperty() { return ProprietaireRow.idProperty; }
        protected getLocalTextPrefix() { return ProprietaireRow.localTextPrefix; }
        protected getService() { return ProprietaireService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}