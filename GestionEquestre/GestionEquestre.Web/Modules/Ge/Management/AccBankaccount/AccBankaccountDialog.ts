
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AccBankaccountDialog extends Serenity.EntityDialog<AccBankaccountRow, any> {
        protected getFormKey() { return AccBankaccountForm.formKey; }
        protected getIdProperty() { return AccBankaccountRow.idProperty; }
        protected getLocalTextPrefix() { return AccBankaccountRow.localTextPrefix; }
        protected getNameProperty() { return AccBankaccountRow.nameProperty; }
        protected getService() { return AccBankaccountService.baseUrl; }

        protected form = new AccBankaccountForm(this.idPrefix);

    }
}