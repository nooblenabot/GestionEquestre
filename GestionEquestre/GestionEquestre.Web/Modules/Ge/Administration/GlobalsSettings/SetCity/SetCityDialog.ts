
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SetCityDialog extends Serenity.EntityDialog<SetCityRow, any> {
        protected getFormKey() { return SetCityForm.formKey; }
        protected getIdProperty() { return SetCityRow.idProperty; }
        protected getLocalTextPrefix() { return SetCityRow.localTextPrefix; }
        protected getNameProperty() { return SetCityRow.nameProperty; }
        protected getService() { return SetCityService.baseUrl; }

        protected form = new SetCityForm(this.idPrefix);

    }
}