
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CavaliersEditorDialog extends Common.GridEditorDialog<CavaliersRow> {
        protected getFormKey() { return CavaliersForm.formKey; }
                protected getLocalTextPrefix() { return CavaliersRow.localTextPrefix; }
        protected getNameProperty() { return CavaliersRow.nameProperty; }
        protected form = new CavaliersForm(this.idPrefix);
    }
}