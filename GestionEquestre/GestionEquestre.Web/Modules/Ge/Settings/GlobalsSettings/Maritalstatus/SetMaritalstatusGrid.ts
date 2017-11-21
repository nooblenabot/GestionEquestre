
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class SetMaritalstatusGrid extends Serenity.EntityGrid<SetMaritalstatusRow, any> {
        protected getColumnsKey() { return 'Ge.SetMaritalstatus'; }
        protected getDialogType() { return SetMaritalstatusDialog; }
        protected getIdProperty() { return SetMaritalstatusRow.idProperty; }
        protected getLocalTextPrefix() { return SetMaritalstatusRow.localTextPrefix; }
        protected getService() { return SetMaritalstatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected addButtonClick() {
            let now = new Date();
            this.editItem(<SetMaritalstatusRow>{
                IsActive: true,
            });
        }
    }
}