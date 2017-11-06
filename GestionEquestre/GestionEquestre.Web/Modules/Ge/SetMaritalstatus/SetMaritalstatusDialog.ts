
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetMaritalstatusDialog extends Serenity.EntityDialog<SetMaritalstatusRow, any> {
        protected getFormKey() { return SetMaritalstatusForm.formKey; }
        protected getIdProperty() { return SetMaritalstatusRow.idProperty; }
        protected getLocalTextPrefix() { return SetMaritalstatusRow.localTextPrefix; }
        protected getNameProperty() { return SetMaritalstatusRow.nameProperty; }
        protected getService() { return SetMaritalstatusService.baseUrl; }

        protected form = new SetMaritalstatusForm(this.idPrefix);

    }
}