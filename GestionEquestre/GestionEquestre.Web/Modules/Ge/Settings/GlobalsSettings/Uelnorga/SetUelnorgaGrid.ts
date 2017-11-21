
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class SetUelnorgaGrid extends Serenity.EntityGrid<SetUelnorgaRow, any> {
        protected getColumnsKey() { return 'Ge.SetUelnorga'; }
        protected getDialogType() { return SetUelnorgaDialog; }
        protected getIdProperty() { return SetUelnorgaRow.idProperty; }
        protected getLocalTextPrefix() { return SetUelnorgaRow.localTextPrefix; }
        protected getService() { return SetUelnorgaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected addButtonClick() {
            let now = new Date();
            this.editItem(<SetUelnorgaRow>{
               IsActive: true,
            });
        }
    }
}