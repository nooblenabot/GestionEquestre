/// <reference path="../../../Common/Helpers/GridEditorBase.ts" />
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerEditor()
    export class LinkFolderHorseEditor extends Common.GridEditorBase<LinkFolderHorseRow> {
        protected getColumnsKey() { return 'Ge.LinkFolderHorse'; }
        protected getDialogType() { return LinkFolderHorseEditDialog; }
        protected getLocalTextPrefix() { return LinkFolderHorseRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Add";
        }

        protected getColumns() {
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

            var fld = Ge.LinkFolderHorseRow.Fields;
            Q.first(columns, x => x.field == fld.Horse).format =
                ctx => `<a href="javascript:;" class="Horse-link">${Q.htmlEncode(ctx.value)}</a>`;

            return columns;
        }
    
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
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
                        Ge.LinkFolderHorseService.Delete({
                            EntityId: item.Id,
                        }, response => {
                            this.refresh();
                        });
                    });
                }

            }

                e.preventDefault();
                var Horse = Q.first(Ge.ManHorsesRow.getLookup().items, x => x.Ueln == item.Horse);
                new Ge.ManHorsesDialog().loadByIdAndOpenDialog(Horse.Ueln);
        }

        protected validateEntity(row, id) {

            if (!super.validateEntity(row, id))
                return false;

            row.HorseName = ManHorsesRow.getLookup().itemById[row.Horse].Name;

            return true;
        }        

    }
}