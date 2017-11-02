
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class ProprietaireDialog extends Serenity.EntityDialog<ProprietaireRow, any> {
        protected getFormKey() { return ProprietaireForm.formKey; }
        protected getIdProperty() { return ProprietaireRow.idProperty; }
        protected getLocalTextPrefix() { return ProprietaireRow.localTextPrefix; }
        protected getNameProperty() { return ProprietaireRow.nameProperty; }
        protected getService() { return ProprietaireService.baseUrl; }

        protected form = new ProprietaireForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}