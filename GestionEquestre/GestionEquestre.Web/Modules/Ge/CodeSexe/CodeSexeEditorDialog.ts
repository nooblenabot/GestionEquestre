
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CodeSexeEditorDialog extends Common.GridEditorDialog<CodeSexeRow> {
        protected getFormKey() { return CodeSexeForm.formKey; }
                protected getLocalTextPrefix() { return CodeSexeRow.localTextPrefix; }
        protected getNameProperty() { return CodeSexeRow.nameProperty; }
        protected form = new CodeSexeForm(this.idPrefix);
    }
}