
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class ComptebancaireDialog extends Serenity.EntityDialog<ComptebancaireRow, any> {
        protected getFormKey() { return ComptebancaireForm.formKey; }
        protected getIdProperty() { return ComptebancaireRow.idProperty; }
        protected getLocalTextPrefix() { return ComptebancaireRow.localTextPrefix; }
        protected getNameProperty() { return ComptebancaireRow.nameProperty; }
        protected getService() { return ComptebancaireService.baseUrl; }

        protected form = new ComptebancaireForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}