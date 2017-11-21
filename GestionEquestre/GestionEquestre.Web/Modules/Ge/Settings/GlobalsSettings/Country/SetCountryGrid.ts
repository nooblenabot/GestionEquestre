
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class SetCountryGrid extends Serenity.EntityGrid<SetCountryRow, any> {
        protected getColumnsKey() { return 'Ge.SetCountry'; }
        protected getDialogType() { return SetCountryDialog; }
        protected getIdProperty() { return SetCountryRow.idProperty; }
        protected getLocalTextPrefix() { return SetCountryRow.localTextPrefix; }
        protected getService() { return SetCountryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            let now = new Date();
            this.editItem(<SetCountryRow>{
                IsActive: true,
            });
        }
    }
}