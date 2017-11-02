
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class AdresseEditor extends Common.GridEditorBase<AdresseRow> {
        protected getColumnsKey() { return 'Ge.Adresse'; }
        protected getDialogType() { return AdresseEditorDialog; }
                protected getLocalTextPrefix() { return AdresseRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}