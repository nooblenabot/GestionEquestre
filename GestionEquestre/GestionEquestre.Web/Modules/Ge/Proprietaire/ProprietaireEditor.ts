
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class ProprietaireEditor extends Common.GridEditorBase<ProprietaireRow> {
        protected getColumnsKey() { return 'Ge.Proprietaire'; }
        protected getDialogType() { return ProprietaireEditorDialog; }
                protected getLocalTextPrefix() { return ProprietaireRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}