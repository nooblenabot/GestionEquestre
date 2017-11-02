
namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class CodeStuationfamilleGrid extends Serenity.EntityGrid<CodeStuationfamilleRow, any> {
        protected getColumnsKey() { return 'Ge.CodeStuationfamille'; }
        protected getDialogType() { return CodeStuationfamilleDialog; }
        protected getIdProperty() { return CodeStuationfamilleRow.idProperty; }
        protected getLocalTextPrefix() { return CodeStuationfamilleRow.localTextPrefix; }
        protected getService() { return CodeStuationfamilleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}