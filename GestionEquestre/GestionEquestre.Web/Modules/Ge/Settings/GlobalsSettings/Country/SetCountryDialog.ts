
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetCountryDialog extends Serenity.EntityDialog<SetCountryRow, any> {
        protected getFormKey() { return SetCountryForm.formKey; }
        protected getIdProperty() { return SetCountryRow.idProperty; }
        protected getLocalTextPrefix() { return SetCountryRow.localTextPrefix; }
        protected getNameProperty() { return SetCountryRow.nameProperty; }
        protected getService() { return SetCountryService.baseUrl; }

        protected form = new SetCountryForm(this.idPrefix);

    }
}