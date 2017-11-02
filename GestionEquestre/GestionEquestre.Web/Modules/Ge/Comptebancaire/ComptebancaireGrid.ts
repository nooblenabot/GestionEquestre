
namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class ComptebancaireGrid extends Serenity.EntityGrid<ComptebancaireRow, any> {
        protected getColumnsKey() { return 'Ge.Comptebancaire'; }
        protected getDialogType() { return ComptebancaireDialog; }
        protected getIdProperty() { return ComptebancaireRow.idProperty; }
        protected getLocalTextPrefix() { return ComptebancaireRow.localTextPrefix; }
        protected getService() { return ComptebancaireService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}