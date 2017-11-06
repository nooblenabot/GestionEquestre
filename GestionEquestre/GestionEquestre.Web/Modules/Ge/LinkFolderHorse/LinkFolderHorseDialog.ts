
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LinkFolderHorseDialog extends Serenity.EntityDialog<LinkFolderHorseRow, any> {
        protected getFormKey() { return LinkFolderHorseForm.formKey; }
        protected getIdProperty() { return LinkFolderHorseRow.idProperty; }
        protected getLocalTextPrefix() { return LinkFolderHorseRow.localTextPrefix; }
        protected getNameProperty() { return LinkFolderHorseRow.nameProperty; }
        protected getService() { return LinkFolderHorseService.baseUrl; }

        protected form = new LinkFolderHorseForm(this.idPrefix);

    }
}