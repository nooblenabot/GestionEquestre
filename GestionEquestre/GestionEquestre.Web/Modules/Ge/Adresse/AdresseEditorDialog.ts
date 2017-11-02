
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace GestionEquestre.Ge {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AdresseEditorDialog extends Common.GridEditorDialog<AdresseRow> {
        protected getFormKey() { return AdresseForm.formKey; }
                protected getLocalTextPrefix() { return AdresseRow.localTextPrefix; }
        protected getNameProperty() { return AdresseRow.nameProperty; }
        protected form = new AdresseForm(this.idPrefix);
    }
}