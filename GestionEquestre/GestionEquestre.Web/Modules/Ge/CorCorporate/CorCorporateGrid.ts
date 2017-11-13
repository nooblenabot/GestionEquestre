
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class CorCorporateGrid extends Serenity.EntityGrid<CorCorporateRow, any> {
        protected getColumnsKey() { return 'Ge.CorCorporate'; }
        protected getDialogType() { return CorCorporateDialog; }
        protected getIdProperty() { return CorCorporateRow.idProperty; }
        protected getLocalTextPrefix() { return CorCorporateRow.localTextPrefix; }
        protected getService() { return CorCorporateService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}