
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class ManOwnerGrid extends Serenity.EntityGrid<ManOwnerRow, any> {
        protected getColumnsKey() { return 'Ge.ManOwner'; }
        protected getDialogType() { return ManOwnerDialog; }
        protected getIdProperty() { return ManOwnerRow.idProperty; }
        protected getLocalTextPrefix() { return ManOwnerRow.localTextPrefix; }
        protected getService() { return ManOwnerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}