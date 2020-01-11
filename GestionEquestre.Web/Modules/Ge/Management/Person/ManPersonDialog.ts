
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ManPersonDialog extends Serenity.EntityDialog<ManPersonRow, any> {
        protected getFormKey() { return ManPersonForm.formKey; }
        protected getIdProperty() { return ManPersonRow.idProperty; }
        protected getLocalTextPrefix() { return ManPersonRow.localTextPrefix; }
        protected getNameProperty() { return ManPersonRow.nameProperty; }
        protected getService() { return ManPersonService.baseUrl; }

        protected form = new ManPersonForm(this.idPrefix);

        constructor() {
            super();

            this.form.Name.change(e => {
                var Name = this.form.Name.value;
                var Surname = this.form.Surname.value;
                var MaidenName = this.form.MaidenName.value;
                var BusinessName = this.form.BusinessName.value;
                this.form.FullName.value = BusinessName +' ' + Surname + ' ' + MaidenName + ' ' + Name;
            });

            this.form.Surname.change(e => {
                var Name = this.form.Name.value;
                var Surname = this.form.Surname.value;
                var MaidenName = this.form.MaidenName.value;
                var BusinessName = this.form.BusinessName.value;
                this.form.FullName.value = BusinessName + ' ' + Surname + ' ' + MaidenName + ' ' + Name;
            });

            this.form.MaidenName.change(e => {
                var Name = this.form.Name.value;
                var Surname = this.form.Surname.value;
                var MaidenName = this.form.MaidenName.value;
                var BusinessName = this.form.BusinessName.value;
                this.form.FullName.value = BusinessName + ' ' + Surname + ' ' + MaidenName + ' ' + Name;
            });

            this.form.BusinessName.change(e => {
                var Name = this.form.Name.value;
                var Surname = this.form.Surname.value;
                var MaidenName = this.form.MaidenName.value;
                var BusinessName = this.form.BusinessName.value;
                this.form.FullName.value = BusinessName + ' ' + Surname + ' ' + MaidenName + ' ' + Name;
            });

        }

    }
}