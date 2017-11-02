
namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    export class PersonneGrid extends Serenity.EntityGrid<PersonneRow, any> {
        protected getColumnsKey() { return 'Ge.Personne'; }
        protected getDialogType() { return PersonneDialog; }
        protected getIdProperty() { return PersonneRow.idProperty; }
        protected getLocalTextPrefix() { return PersonneRow.localTextPrefix; }
        protected getService() { return PersonneService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}