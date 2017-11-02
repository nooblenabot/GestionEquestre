
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class PersonneDialog extends Serenity.EntityDialog<PersonneRow, any> {
        protected getFormKey() { return PersonneForm.formKey; }
        protected getIdProperty() { return PersonneRow.idProperty; }
        protected getLocalTextPrefix() { return PersonneRow.localTextPrefix; }
        protected getNameProperty() { return PersonneRow.nameProperty; }
        protected getService() { return PersonneService.baseUrl; }

        protected form = new PersonneForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}