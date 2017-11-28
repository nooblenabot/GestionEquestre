
namespace GestionEquestre.Ge {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ManFolderDialog extends Serenity.EntityDialog<ManFolderRow, any> {
        protected getFormKey() { return ManFolderForm.formKey; }
        protected getIdProperty() { return ManFolderRow.idProperty; }
        protected getLocalTextPrefix() { return ManFolderRow.localTextPrefix; }
        protected getNameProperty() { return ManFolderRow.nameProperty; }
        protected getService() { return ManFolderService.baseUrl; }

        protected form = new ManFolderForm(this.idPrefix);

        private FolderHorseGrid: LinkFolderHorseGrid;
        private FolderCavalierGrid: LinkFolderCavalierGrid;
        private FolderPersonGrid: LinkFolderPersonGrid;
        private loadedState: string;

        constructor() {
            super();

            this.FolderHorseGrid = new LinkFolderHorseGrid(this.byId("FolderHorseGrid"));
            this.FolderCavalierGrid = new LinkFolderCavalierGrid(this.byId("FolderCavalierGrid"));
            this.FolderPersonGrid = new LinkFolderPersonGrid(this.byId("FolderPersonGrid"));
        }

        loadEntity(entity: ManFolderRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Horses', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Cavaliers', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Others_Persons', this.isNewOrDeleted());


            this.FolderHorseGrid.Folder = entity.Id;
            this.FolderCavalierGrid.Folder = entity.Id;
            this.FolderPersonGrid.Folder = entity.Id;
        }

    //    protected {

    //}

    }
}