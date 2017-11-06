
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ManAdressDialog extends Serenity.EntityDialog<ManAdressRow, any> {
        protected getFormKey() { return ManAdressForm.formKey; }
        protected getIdProperty() { return ManAdressRow.idProperty; }
        protected getLocalTextPrefix() { return ManAdressRow.localTextPrefix; }
        protected getNameProperty() { return ManAdressRow.nameProperty; }
        protected getService() { return ManAdressService.baseUrl; }

        protected form = new ManAdressForm(this.idPrefix);

    }
}