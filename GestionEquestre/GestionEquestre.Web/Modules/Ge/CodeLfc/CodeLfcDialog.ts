
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class CodeLfcDialog extends Serenity.EntityDialog<CodeLfcRow, any> {
        protected getFormKey() { return CodeLfcForm.formKey; }
        protected getIdProperty() { return CodeLfcRow.idProperty; }
        protected getLocalTextPrefix() { return CodeLfcRow.localTextPrefix; }
        protected getNameProperty() { return CodeLfcRow.nameProperty; }
        protected getService() { return CodeLfcService.baseUrl; }

        protected form = new CodeLfcForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}