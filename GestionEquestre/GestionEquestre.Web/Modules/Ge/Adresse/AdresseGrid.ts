
namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class AdresseGrid extends Serenity.EntityGrid<AdresseRow, any> {
        protected getColumnsKey() { return 'Ge.Adresse'; }
        protected getDialogType() { return AdresseDialog; }
        protected getIdProperty() { return AdresseRow.idProperty; }
        protected getLocalTextPrefix() { return AdresseRow.localTextPrefix; }
        protected getService() { return AdresseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}