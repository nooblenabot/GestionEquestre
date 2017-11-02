
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class PaysEditor extends Common.GridEditorBase<PaysRow> {
        protected getColumnsKey() { return 'Ge.Pays'; }
        protected getDialogType() { return PaysEditorDialog; }
                protected getLocalTextPrefix() { return PaysRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}