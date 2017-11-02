
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class CodeStuationfamilleDialog extends Serenity.EntityDialog<CodeStuationfamilleRow, any> {
        protected getFormKey() { return CodeStuationfamilleForm.formKey; }
        protected getIdProperty() { return CodeStuationfamilleRow.idProperty; }
        protected getLocalTextPrefix() { return CodeStuationfamilleRow.localTextPrefix; }
        protected getNameProperty() { return CodeStuationfamilleRow.nameProperty; }
        protected getService() { return CodeStuationfamilleService.baseUrl; }

        protected form = new CodeStuationfamilleForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}