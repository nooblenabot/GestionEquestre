
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class ManAdressGrid extends Serenity.EntityGrid<ManAdressRow, any> {
        protected getColumnsKey() { return 'Ge.ManAdress'; }
        protected getDialogType() { return ManAdressDialog; }
        protected getIdProperty() { return ManAdressRow.idProperty; }
        protected getLocalTextPrefix() { return ManAdressRow.localTextPrefix; }
        protected getService() { return ManAdressService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}