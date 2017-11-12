
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetLfcDialog extends Serenity.EntityDialog<SetLfcRow, any> {
        protected getFormKey() { return SetLfcForm.formKey; }
        protected getIdProperty() { return SetLfcRow.idProperty; }
        protected getLocalTextPrefix() { return SetLfcRow.localTextPrefix; }
        protected getNameProperty() { return SetLfcRow.nameProperty; }
        protected getService() { return SetLfcService.baseUrl; }

        protected form = new SetLfcForm(this.idPrefix);

    }
}