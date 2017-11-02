
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class PaysDialog extends Serenity.EntityDialog<PaysRow, any> {
        protected getFormKey() { return PaysForm.formKey; }
        protected getIdProperty() { return PaysRow.idProperty; }
        protected getLocalTextPrefix() { return PaysRow.localTextPrefix; }
        protected getNameProperty() { return PaysRow.nameProperty; }
        protected getService() { return PaysService.baseUrl; }

        protected form = new PaysForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}