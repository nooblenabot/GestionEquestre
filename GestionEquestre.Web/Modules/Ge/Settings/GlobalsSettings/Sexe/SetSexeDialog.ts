
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetSexeDialog extends Serenity.EntityDialog<SetSexeRow, any> {
        protected getFormKey() { return SetSexeForm.formKey; }
        protected getIdProperty() { return SetSexeRow.idProperty; }
        protected getLocalTextPrefix() { return SetSexeRow.localTextPrefix; }
        protected getNameProperty() { return SetSexeRow.nameProperty; }
        protected getService() { return SetSexeService.baseUrl; }

        protected form = new SetSexeForm(this.idPrefix);

    }
}