
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CodeGalopEditorDialog extends Common.GridEditorDialog<CodeGalopRow> {
        protected getFormKey() { return CodeGalopForm.formKey; }
                protected getLocalTextPrefix() { return CodeGalopRow.localTextPrefix; }
        protected getNameProperty() { return CodeGalopRow.nameProperty; }
        protected form = new CodeGalopForm(this.idPrefix);
    }
}