
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class ManCavaliersGrid extends Serenity.EntityGrid<ManCavaliersRow, any> {
        protected getColumnsKey() { return 'Ge.ManCavaliers'; }
        protected getDialogType() { return ManCavaliersDialog; }
        protected getIdProperty() { return ManCavaliersRow.idProperty; }
        protected getLocalTextPrefix() { return ManCavaliersRow.localTextPrefix; }
        protected getService() { return ManCavaliersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected addButtonClick() {
            let now = new Date();
            this.editItem(<ManCavaliersRow>{
                IsActive: true,
            });
        }
    }
}