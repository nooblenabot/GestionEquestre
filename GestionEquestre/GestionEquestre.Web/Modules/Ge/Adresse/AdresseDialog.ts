
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class AdresseDialog extends Serenity.EntityDialog<AdresseRow, any> {
        protected getFormKey() { return AdresseForm.formKey; }
        protected getIdProperty() { return AdresseRow.idProperty; }
        protected getLocalTextPrefix() { return AdresseRow.localTextPrefix; }
        protected getNameProperty() { return AdresseRow.nameProperty; }
        protected getService() { return AdresseService.baseUrl; }

        protected form = new AdresseForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}