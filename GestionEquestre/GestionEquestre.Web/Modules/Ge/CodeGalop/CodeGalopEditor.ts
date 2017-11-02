
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class CodeGalopEditor extends Common.GridEditorBase<CodeGalopRow> {
        protected getColumnsKey() { return 'Ge.CodeGalop'; }
        protected getDialogType() { return CodeGalopEditorDialog; }
                protected getLocalTextPrefix() { return CodeGalopRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}