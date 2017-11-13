
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetGalopDialog extends Serenity.EntityDialog<SetGalopRow, any> {
        protected getFormKey() { return SetGalopForm.formKey; }
        protected getIdProperty() { return SetGalopRow.idProperty; }
        protected getLocalTextPrefix() { return SetGalopRow.localTextPrefix; }
        protected getNameProperty() { return SetGalopRow.nameProperty; }
        protected getService() { return SetGalopService.baseUrl; }

        protected form = new SetGalopForm(this.idPrefix);

    }
}