
namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class CavaliersGrid extends Serenity.EntityGrid<CavaliersRow, any> {
        protected getColumnsKey() { return 'Ge.Cavaliers'; }
        protected getDialogType() { return CavaliersDialog; }
        protected getIdProperty() { return CavaliersRow.idProperty; }
        protected getLocalTextPrefix() { return CavaliersRow.localTextPrefix; }
        protected getService() { return CavaliersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}