
namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class VilleGrid extends Serenity.EntityGrid<VilleRow, any> {
        protected getColumnsKey() { return 'Ge.Ville'; }
        protected getDialogType() { return VilleDialog; }
        protected getIdProperty() { return VilleRow.idProperty; }
        protected getLocalTextPrefix() { return VilleRow.localTextPrefix; }
        protected getService() { return VilleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}