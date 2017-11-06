
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ManCavaliersDialog extends Serenity.EntityDialog<ManCavaliersRow, any> {
        protected getFormKey() { return ManCavaliersForm.formKey; }
        protected getIdProperty() { return ManCavaliersRow.idProperty; }
        protected getLocalTextPrefix() { return ManCavaliersRow.localTextPrefix; }
        protected getNameProperty() { return ManCavaliersRow.nameProperty; }
        protected getService() { return ManCavaliersService.baseUrl; }

        protected form = new ManCavaliersForm(this.idPrefix);

    }
}