
namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class CodeSexeGrid extends Serenity.EntityGrid<CodeSexeRow, any> {
        protected getColumnsKey() { return 'Ge.CodeSexe'; }
        protected getDialogType() { return CodeSexeDialog; }
        protected getIdProperty() { return CodeSexeRow.idProperty; }
        protected getLocalTextPrefix() { return CodeSexeRow.localTextPrefix; }
        protected getService() { return CodeSexeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}