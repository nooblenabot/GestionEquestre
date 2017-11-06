
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class SetLfcGrid extends Serenity.EntityGrid<SetLfcRow, any> {
        protected getColumnsKey() { return 'Ge.SetLfc'; }
        protected getDialogType() { return SetLfcDialog; }
        protected getIdProperty() { return SetLfcRow.idProperty; }
        protected getLocalTextPrefix() { return SetLfcRow.localTextPrefix; }
        protected getService() { return SetLfcService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}