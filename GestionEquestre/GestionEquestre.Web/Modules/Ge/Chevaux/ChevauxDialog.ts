
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class ChevauxDialog extends Serenity.EntityDialog<ChevauxRow, any> {
        protected getFormKey() { return ChevauxForm.formKey; }
        protected getIdProperty() { return ChevauxRow.idProperty; }
        protected getLocalTextPrefix() { return ChevauxRow.localTextPrefix; }
        protected getNameProperty() { return ChevauxRow.nameProperty; }
        protected getService() { return ChevauxService.baseUrl; }

        protected form = new ChevauxForm(this.idPrefix);

        dialogOpen() {
                    super.dialogOpen();
                   this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                 }
    }
}