
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CodeLfcEditorDialog extends Common.GridEditorDialog<CodeLfcRow> {
        protected getFormKey() { return CodeLfcForm.formKey; }
                protected getLocalTextPrefix() { return CodeLfcRow.localTextPrefix; }
        protected getNameProperty() { return CodeLfcRow.nameProperty; }
        protected form = new CodeLfcForm(this.idPrefix);
    }
}