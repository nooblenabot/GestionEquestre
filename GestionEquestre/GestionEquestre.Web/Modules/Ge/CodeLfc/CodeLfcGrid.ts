
namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class CodeLfcGrid extends Serenity.EntityGrid<CodeLfcRow, any> {
        protected getColumnsKey() { return 'Ge.CodeLfc'; }
        protected getDialogType() { return CodeLfcDialog; }
        protected getIdProperty() { return CodeLfcRow.idProperty; }
        protected getLocalTextPrefix() { return CodeLfcRow.localTextPrefix; }
        protected getService() { return CodeLfcService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}