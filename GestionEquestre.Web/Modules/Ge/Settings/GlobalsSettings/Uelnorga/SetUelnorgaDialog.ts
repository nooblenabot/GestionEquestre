
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetUelnorgaDialog extends Serenity.EntityDialog<SetUelnorgaRow, any> {
        protected getFormKey() { return SetUelnorgaForm.formKey; }
        protected getIdProperty() { return SetUelnorgaRow.idProperty; }
        protected getLocalTextPrefix() { return SetUelnorgaRow.localTextPrefix; }
        protected getNameProperty() { return SetUelnorgaRow.nameProperty; }
        protected getService() { return SetUelnorgaService.baseUrl; }

        protected form = new SetUelnorgaForm(this.idPrefix);

    }
}