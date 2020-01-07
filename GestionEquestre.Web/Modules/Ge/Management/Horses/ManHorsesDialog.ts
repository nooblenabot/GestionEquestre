
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

            this.form.Sire.change(e => {
                var Sire = this.form.Sire.value;
                var CleSire = this.form.CleSire.value;
                var BirthCountry = this.form.BirthCountry.value;
                var BirthOrganization = this.form.BirthOrganization.value;
                this.form.Ueln.value = BirthCountry + BirthOrganization + Sire + CleSire; 
            });

            this.form.CleSire.change(e => {
                var Sire = this.form.Sire.value;
                var CleSire = this.form.CleSire.value;
                var BirthCountry = this.form.BirthCountry.value;
                var BirthOrganization = this.form.BirthOrganization.value;
                this.form.Ueln.value = BirthCountry + BirthOrganization + Sire + CleSire;
            });

            this.form.BirthCountry.change(e => {
                var Sire = this.form.Sire.value;
                var CleSire = this.form.CleSire.value;
                var BirthCountry = this.form.BirthCountry.value;
                var BirthOrganization = this.form.BirthOrganization.value;
                this.form.Ueln.value = BirthCountry + BirthOrganization + Sire + CleSire;
            });

            this.form.BirthOrganization.change(e => {
                var Sire = this.form.Sire.value;
                var CleSire = this.form.CleSire.value;
                var BirthCountry = this.form.BirthCountry.value;
                var BirthOrganization = this.form.BirthOrganization.value;
                this.form.Ueln.value = BirthCountry + BirthOrganization + Sire + CleSire;
            });
      
        












        }
    }
}