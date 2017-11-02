
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class VilleEditor extends Common.GridEditorBase<VilleRow> {
        protected getColumnsKey() { return 'Ge.Ville'; }
        protected getDialogType() { return VilleEditorDialog; }
                protected getLocalTextPrefix() { return VilleRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}