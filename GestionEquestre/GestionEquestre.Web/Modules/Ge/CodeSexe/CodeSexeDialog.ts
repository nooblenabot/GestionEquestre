
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class CodeSexeDialog extends Serenity.EntityDialog<CodeSexeRow, any> {
        protected getFormKey() { return CodeSexeForm.formKey; }
        protected getIdProperty() { return CodeSexeRow.idProperty; }
        protected getLocalTextPrefix() { return CodeSexeRow.localTextPrefix; }
        protected getNameProperty() { return CodeSexeRow.nameProperty; }
        protected getService() { return CodeSexeService.baseUrl; }

        protected form = new CodeSexeForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}