
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class SetGalopGrid extends Serenity.EntityGrid<SetGalopRow, any> {
        protected getColumnsKey() { return 'Ge.SetGalop'; }
        protected getDialogType() { return SetGalopDialog; }
        protected getIdProperty() { return SetGalopRow.idProperty; }
        protected getLocalTextPrefix() { return SetGalopRow.localTextPrefix; }
        protected getService() { return SetGalopService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}