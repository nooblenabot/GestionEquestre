
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ManOwnerDialog extends Serenity.EntityDialog<ManOwnerRow, any> {
        protected getFormKey() { return ManOwnerForm.formKey; }
        protected getIdProperty() { return ManOwnerRow.idProperty; }
        protected getLocalTextPrefix() { return ManOwnerRow.localTextPrefix; }
        protected getNameProperty() { return ManOwnerRow.nameProperty; }
        protected getService() { return ManOwnerService.baseUrl; }

        protected form = new ManOwnerForm(this.idPrefix);

    }
}