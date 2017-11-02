
namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class CodeGalopGrid extends Serenity.EntityGrid<CodeGalopRow, any> {
        protected getColumnsKey() { return 'Ge.CodeGalop'; }
        protected getDialogType() { return CodeGalopDialog; }
        protected getIdProperty() { return CodeGalopRow.idProperty; }
        protected getLocalTextPrefix() { return CodeGalopRow.localTextPrefix; }
        protected getService() { return CodeGalopService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}