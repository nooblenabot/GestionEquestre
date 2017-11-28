/// <reference path="../ManFolderDialog.ts" />
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LinkFolderPersonDialog extends Serenity.EntityDialog<LinkFolderPersonDialog, any> {

        protected getFormKey() { return LinkFolderPersonForm.formKey; }
        protected getIdProperty() { return Ge.LinkFolderPersonRow.idProperty; }
        protected getLocalTextPrefix() { return Ge.LinkFolderPersonRow.localTextPrefix; }
        protected getNameProperty() { return Ge.LinkFolderPersonRow.nameProperty; }
        protected getService() { return Ge.LinkFolderPersonService.baseUrl; }
        protected form = new LinkFolderPersonForm(this.idPrefix);
        constructor() {
            super();

            this.form.PersonId.changeSelect2(e => {
                var person = this.form.PersonId.value;
                if (Q.isEmptyOrNull(person)) {
                    this.setPersonDetails({});
                    return;
                }

                // in northwind CustomerID is a string like "ALFKI", 
                // while its actual integer ID value is 1.
                // so we need to convert customer ID to ID.
                // you won't have to do this conversion with your tables
                //var id = Q.first(Northwind.CustomerRow.getLookup().items, x => x.CustomerID == customerID).ID;

                //Northwind.CustomerService.Retrieve({
                //    EntityId: id
                //}, response => {
                //    this.setCustomerDetails(response.Entity);
                //});
            });
        }

        private setPersonDetails(details: Ge.ManPersonRow) {
            this.form.Caption.value = details.Caption;
        }
    }
}