/// <reference path="../../../Common/Helpers/GridEditorDialog.ts" />
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LinkFolderHorseEditDialog extends Common.GridEditorDialog<LinkFolderHorseRow> {
        protected getFormKey() { return LinkFolderHorseForm.formKey; }
        protected getLocalTextPrefix() { return LinkFolderHorseRow.localTextPrefix; }
        protected getNameProperty() { return LinkFolderHorseRow.nameProperty; }

        protected form : LinkFolderHorseForm;

        constructor() {
            super();
            this.form = new LinkFolderHorseForm(this.idPrefix);
        }
          
   }
}