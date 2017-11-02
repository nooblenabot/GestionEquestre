
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class CavaliersEditor extends Common.GridEditorBase<CavaliersRow> {
        protected getColumnsKey() { return 'Ge.Cavaliers'; }
        protected getDialogType() { return CavaliersEditorDialog; }
                protected getLocalTextPrefix() { return CavaliersRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}