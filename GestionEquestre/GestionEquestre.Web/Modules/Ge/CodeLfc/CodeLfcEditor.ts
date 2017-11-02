
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class CodeLfcEditor extends Common.GridEditorBase<CodeLfcRow> {
        protected getColumnsKey() { return 'Ge.CodeLfc'; }
        protected getDialogType() { return CodeLfcEditorDialog; }
                protected getLocalTextPrefix() { return CodeLfcRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}