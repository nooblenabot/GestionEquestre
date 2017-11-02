
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class VilleDialog extends Serenity.EntityDialog<VilleRow, any> {
        protected getFormKey() { return VilleForm.formKey; }
        protected getIdProperty() { return VilleRow.idProperty; }
        protected getLocalTextPrefix() { return VilleRow.localTextPrefix; }
        protected getNameProperty() { return VilleRow.nameProperty; }
        protected getService() { return VilleService.baseUrl; }

        protected form = new VilleForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}