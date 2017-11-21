
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class ManPersonGrid extends Serenity.EntityGrid<ManPersonRow, any> {
        protected getColumnsKey() { return 'Ge.ManPerson'; }
        protected getDialogType() { return ManPersonDialog; }
        protected getIdProperty() { return ManPersonRow.idProperty; }
        protected getLocalTextPrefix() { return ManPersonRow.localTextPrefix; }
        protected getService() { return ManPersonService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            let now = new Date();
            this.editItem(<ManPersonRow>{
                IsActive: true,
            });
        }
    }
}