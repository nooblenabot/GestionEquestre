
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ComptebancaireEditorDialog extends Common.GridEditorDialog<ComptebancaireRow> {
        protected getFormKey() { return ComptebancaireForm.formKey; }
                protected getLocalTextPrefix() { return ComptebancaireRow.localTextPrefix; }
        protected getNameProperty() { return ComptebancaireRow.nameProperty; }
        protected form = new ComptebancaireForm(this.idPrefix);
    }
}