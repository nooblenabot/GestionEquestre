
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class CodeStuationfamilleEditor extends Common.GridEditorBase<CodeStuationfamilleRow> {
        protected getColumnsKey() { return 'Ge.CodeStuationfamille'; }
        protected getDialogType() { return CodeStuationfamilleEditorDialog; }
                protected getLocalTextPrefix() { return CodeStuationfamilleRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}