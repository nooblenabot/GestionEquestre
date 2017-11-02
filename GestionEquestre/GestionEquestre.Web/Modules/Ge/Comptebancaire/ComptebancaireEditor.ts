
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class ComptebancaireEditor extends Common.GridEditorBase<ComptebancaireRow> {
        protected getColumnsKey() { return 'Ge.Comptebancaire'; }
        protected getDialogType() { return ComptebancaireEditorDialog; }
                protected getLocalTextPrefix() { return ComptebancaireRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}