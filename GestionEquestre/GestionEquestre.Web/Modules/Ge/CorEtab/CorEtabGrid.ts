
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class CorEtabGrid extends Serenity.EntityGrid<CorEtabRow, any> {
        protected getColumnsKey() { return 'Ge.CorEtab'; }
        protected getDialogType() { return CorEtabDialog; }
        protected getIdProperty() { return CorEtabRow.idProperty; }
        protected getLocalTextPrefix() { return CorEtabRow.localTextPrefix; }
        protected getService() { return CorEtabService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            let now = new Date();
            this.editItem(<CorEtabRow>{
                IsActive: true,
            });
        }
    }
}