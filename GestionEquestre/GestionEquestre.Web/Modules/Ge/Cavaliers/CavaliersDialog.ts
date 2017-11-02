
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class CavaliersDialog extends Serenity.EntityDialog<CavaliersRow, any> {
        protected getFormKey() { return CavaliersForm.formKey; }
        protected getIdProperty() { return CavaliersRow.idProperty; }
        protected getLocalTextPrefix() { return CavaliersRow.localTextPrefix; }
        protected getNameProperty() { return CavaliersRow.nameProperty; }
        protected getService() { return CavaliersService.baseUrl; }

        protected form = new CavaliersForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}