
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class CodeGalopDialog extends Serenity.EntityDialog<CodeGalopRow, any> {
        protected getFormKey() { return CodeGalopForm.formKey; }
        protected getIdProperty() { return CodeGalopRow.idProperty; }
        protected getLocalTextPrefix() { return CodeGalopRow.localTextPrefix; }
        protected getNameProperty() { return CodeGalopRow.nameProperty; }
        protected getService() { return CodeGalopService.baseUrl; }

        protected form = new CodeGalopForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}