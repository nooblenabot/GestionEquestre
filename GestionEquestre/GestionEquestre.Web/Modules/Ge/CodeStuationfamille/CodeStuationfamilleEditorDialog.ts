
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CodeStuationfamilleEditorDialog extends Common.GridEditorDialog<CodeStuationfamilleRow> {
        protected getFormKey() { return CodeStuationfamilleForm.formKey; }
                protected getLocalTextPrefix() { return CodeStuationfamilleRow.localTextPrefix; }
        protected getNameProperty() { return CodeStuationfamilleRow.nameProperty; }
        protected form = new CodeStuationfamilleForm(this.idPrefix);
    }
}