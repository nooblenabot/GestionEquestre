
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LinkFolderCavalierDialog extends Serenity.EntityDialog<LinkFolderCavalierRow, any> {
        protected getFormKey() { return LinkFolderCavalierForm.formKey; }
        protected getIdProperty() { return LinkFolderCavalierRow.idProperty; }
        protected getLocalTextPrefix() { return LinkFolderCavalierRow.localTextPrefix; }
        protected getNameProperty() { return LinkFolderCavalierRow.nameProperty; }
        protected getService() { return LinkFolderCavalierService.baseUrl; }

        protected form = new LinkFolderCavalierForm(this.idPrefix);

    }
}