
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PaysEditorDialog extends Common.GridEditorDialog<PaysRow> {
        protected getFormKey() { return PaysForm.formKey; }
                protected getLocalTextPrefix() { return PaysRow.localTextPrefix; }
        protected getNameProperty() { return PaysRow.nameProperty; }
        protected form = new PaysForm(this.idPrefix);
    }
}