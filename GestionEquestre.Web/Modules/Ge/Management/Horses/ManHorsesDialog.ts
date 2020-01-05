
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ManHorsesDialog extends Serenity.EntityDialog<ManHorsesRow, any> {
        protected getFormKey() { return ManHorsesForm.formKey; }
        protected getIdProperty() { return ManHorsesRow.idProperty; }
        protected getLocalTextPrefix() { return ManHorsesRow.localTextPrefix; }
        protected getNameProperty() { return ManHorsesRow.nameProperty; }
        protected getService() { return ManHorsesService.baseUrl; }

        protected form = new ManHorsesForm(this.idPrefix);

        constructor() {
            super();

            //this.form.Hnin.change(e => { });

      
        












        }
    }
}