
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class AccBankaccountGrid extends Serenity.EntityGrid<AccBankaccountRow, any> {
        protected getColumnsKey() { return 'Ge.AccBankaccount'; }
        protected getDialogType() { return AccBankaccountDialog; }
        protected getIdProperty() { return AccBankaccountRow.idProperty; }
        protected getLocalTextPrefix() { return AccBankaccountRow.localTextPrefix; }
        protected getService() { return AccBankaccountService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}