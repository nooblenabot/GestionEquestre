
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LinkFolderPersonDialog extends Serenity.EntityDialog<LinkFolderPersonRow, any> {
        protected getFormKey() { return LinkFolderPersonForm.formKey; }
        protected getIdProperty() { return LinkFolderPersonRow.idProperty; }
        protected getLocalTextPrefix() { return LinkFolderPersonRow.localTextPrefix; }
        protected getNameProperty() { return LinkFolderPersonRow.nameProperty; }
        protected getService() { return LinkFolderPersonService.baseUrl; }

        protected form = new LinkFolderPersonForm(this.idPrefix);

    }
}