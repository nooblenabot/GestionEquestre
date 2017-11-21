
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class ManHorsesGrid extends Serenity.EntityGrid<ManHorsesRow, any> {
        protected getColumnsKey() { return 'Ge.ManHorses'; }
        protected getDialogType() { return ManHorsesDialog; }
        protected getIdProperty() { return ManHorsesRow.idProperty; }
        protected getLocalTextPrefix() { return ManHorsesRow.localTextPrefix; }
        protected getService() { return ManHorsesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            let now = new Date();
            this.editItem(<ManHorsesRow>{
                IsActive: true,
            });
        }
    }
}