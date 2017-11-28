
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerEditor()
    export class ManPersonLookupEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions,ManPersonRow> {

        constructor(container: JQuery, options: Serenity.LookupEditorOptions) {
            super(container, options);
        }

        protected GetLookupKey() {
            return Ge.ManPersonRow.lookupKey
        }

        protected getItemText(item: Ge.ManPersonRow, lookup: Q.Lookup<Ge.ManPersonRow>) {
            return super.getItemText(item, lookup) +
                '(' + (item.Surname);
        }
    }
}