
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProprietaireEditorDialog extends Common.GridEditorDialog<ProprietaireRow> {
        protected getFormKey() { return ProprietaireForm.formKey; }
                protected getLocalTextPrefix() { return ProprietaireRow.localTextPrefix; }
        protected getNameProperty() { return ProprietaireRow.nameProperty; }
        protected form = new ProprietaireForm(this.idPrefix);
    }
}