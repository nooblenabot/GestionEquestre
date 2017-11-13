
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CorCorporateDialog extends Serenity.EntityDialog<CorCorporateRow, any> {
        protected getFormKey() { return CorCorporateForm.formKey; }
        protected getIdProperty() { return CorCorporateRow.idProperty; }
        protected getLocalTextPrefix() { return CorCorporateRow.localTextPrefix; }
        protected getNameProperty() { return CorCorporateRow.nameProperty; }
        protected getService() { return CorCorporateService.baseUrl; }

        protected form = new CorCorporateForm(this.idPrefix);

    }
}