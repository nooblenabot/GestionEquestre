
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ChevauxEditorDialog extends Common.GridEditorDialog<ChevauxRow> {
        protected getFormKey() { return ChevauxForm.formKey; }
                protected getLocalTextPrefix() { return ChevauxRow.localTextPrefix; }
        protected getNameProperty() { return ChevauxRow.nameProperty; }
        protected form = new ChevauxForm(this.idPrefix);
    }
}