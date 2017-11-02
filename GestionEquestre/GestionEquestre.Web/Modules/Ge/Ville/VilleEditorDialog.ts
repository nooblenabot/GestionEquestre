
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class VilleEditorDialog extends Common.GridEditorDialog<VilleRow> {
        protected getFormKey() { return VilleForm.formKey; }
                protected getLocalTextPrefix() { return VilleRow.localTextPrefix; }
        protected getNameProperty() { return VilleRow.nameProperty; }
        protected form = new VilleForm(this.idPrefix);
    }
}