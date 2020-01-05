/// <reference path="../ManFolderGrid.ts" />
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    export class LinkFolderCavalierGrid extends Serenity.EntityGrid<LinkFolderCavalierRow, any> {
        protected getColumnsKey() { return 'Ge.LinkFolderCavalier'; }
        protected getIdProperty() { return LinkFolderCavalierRow.idProperty; }
        protected getLocalTextPrefix() { return LinkFolderCavalierRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            //let fld = LinkFolderHorseRow.Fields;
            //return super.getColumns().filter(x => x.field !== fld.Horse);

            var columns = super.getColumns();

            columns.unshift({
                field: 'Delete Row',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="delete">' +
                    '<i class="fa fa-trash-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            //var fld = Ge.LinkFolderHorseRow.Fields;
            //Q.first(columns, x => x.field == fld.Horse).format =
            //    ctx => `<a href="javascript:;" class="Horse-link">${Q.htmlEncode(ctx.value)}</a>`;

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            // let base grid handle clicks for its edit links
            super.onClick(e, row, cell);
            // if base grid already handled, we shouldn"t handle it again
            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);


            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('delete-row')) {
                    Q.confirm('Delete record?', () => {
                        Ge.LinkFolderCavalierService.Delete({
                            EntityId: item.Id,
                        }, response => {
                            this.refresh();
                        });
                    });
                }


            }

        }

        protected editItem(entityOrId) {
            // check that this is an edit link click, not add button, ID is always a string
            if (typeof entityOrId == "string") {
                var item = this.view.getItemById(Q.toId(entityOrId));
                //var item = this.itemAt(row);
                var Cavalier = Q.first(Ge.ManCavaliersRow.getLookup().items, x => x.LicFfe == item.Cavalier);
                new Ge.ManCavaliersDialog().loadByIdAndOpenDialog(Cavalier.LicFfe);
            }
            else {
                super.editItem(entityOrId);
            }
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected createQuickSearchInput() {
            // Nothing
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "refresh-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }

        //protected getAddButtonCaption() {
        //    return "Add Horse";
        //}

        protected addButtonClick() {
            var eq = this.view.params.EqualityFilter;
            this.editItem(<LinkFolderCavalierRow>{
                Folder: eq ? eq.Folder : null
            });
        }

        protected getInitialTitle() {
            return null;
        }

        protected usePager() {
            return false;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.Folder;
        }

        private _Folder: number;

        get Folder() {
            return this._Folder;
        }

        set Folder(value: number) {
            if (this._Folder != value) {
                this._Folder = value;
                this.setEquality('Folder', value);
                this.refresh();
            }

        }
    }
}