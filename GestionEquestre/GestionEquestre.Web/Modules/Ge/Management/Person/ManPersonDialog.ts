
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ManPersonDialog extends Serenity.EntityDialog<ManPersonRow, any> {
        protected getFormKey() { return ManPersonForm.formKey; }
        protected getIdProperty() { return ManPersonRow.idProperty; }
        protected getLocalTextPrefix() { return ManPersonRow.localTextPrefix; }
        protected getNameProperty() { return ManPersonRow.nameProperty; }
        protected getService() { return ManPersonService.baseUrl; }

        protected form = new ManPersonForm(this.idPrefix);

    }
}