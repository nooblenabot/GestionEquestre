
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PersonneEditorDialog extends Common.GridEditorDialog<PersonneRow> {
        protected getFormKey() { return PersonneForm.formKey; }
                protected getLocalTextPrefix() { return PersonneRow.localTextPrefix; }
        protected getNameProperty() { return PersonneRow.nameProperty; }
        protected form = new PersonneForm(this.idPrefix);
    }
}