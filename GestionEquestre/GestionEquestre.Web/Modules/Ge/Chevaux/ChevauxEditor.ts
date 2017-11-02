
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class ChevauxEditor extends Common.GridEditorBase<ChevauxRow> {
        protected getColumnsKey() { return 'Ge.Chevaux'; }
        protected getDialogType() { return ChevauxEditorDialog; }
                protected getLocalTextPrefix() { return ChevauxRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}