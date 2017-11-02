
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class PersonneEditor extends Common.GridEditorBase<PersonneRow> {
        protected getColumnsKey() { return 'Ge.Personne'; }
        protected getDialogType() { return PersonneEditorDialog; }
                protected getLocalTextPrefix() { return PersonneRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}