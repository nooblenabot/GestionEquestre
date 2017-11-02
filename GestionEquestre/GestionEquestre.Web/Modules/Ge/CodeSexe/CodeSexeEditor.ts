
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class CodeSexeEditor extends Common.GridEditorBase<CodeSexeRow> {
        protected getColumnsKey() { return 'Ge.CodeSexe'; }
        protected getDialogType() { return CodeSexeEditorDialog; }
                protected getLocalTextPrefix() { return CodeSexeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}