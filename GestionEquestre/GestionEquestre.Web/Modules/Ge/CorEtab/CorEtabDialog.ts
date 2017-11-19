
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CorEtabDialog extends Serenity.EntityDialog<CorEtabRow, any> {
        protected getFormKey() { return CorEtabForm.formKey; }
        protected getIdProperty() { return CorEtabRow.idProperty; }
        protected getLocalTextPrefix() { return CorEtabRow.localTextPrefix; }
        protected getNameProperty() { return CorEtabRow.nameProperty; }
        protected getService() { return CorEtabService.baseUrl; }

        protected form = new CorEtabForm(this.idPrefix);

    }
}