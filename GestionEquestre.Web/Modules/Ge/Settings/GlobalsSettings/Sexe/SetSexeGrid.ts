
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class SetSexeGrid extends Serenity.EntityGrid<SetSexeRow, any> {
        protected getColumnsKey() { return 'Ge.SetSexe'; }
        protected getDialogType() { return SetSexeDialog; }
        protected getIdProperty() { return SetSexeRow.idProperty; }
        protected getLocalTextPrefix() { return SetSexeRow.localTextPrefix; }
        protected getService() { return SetSexeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            let now = new Date();
            this.editItem(<SetSexeRow>{
                IsActive: true,
            });
        }
    }
}