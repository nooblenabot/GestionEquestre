
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

        //private FolderHorseGrid: LinkFolderHorseGrid;

        constructor() {
            super();

            //this.FolderHorseGrid = new LinkFolderHorseGrid(this.byId("FolderHorseGrid"));

            //this.tabs.on('tabsactivate', (e, i) => {
            //    this.arrange();
            //});
        }

        //protected afterLoadEntity() {
        //    super.afterLoadEntity();
        //    this.FolderHorseGrid.Folder = this.entityId;
        //    var FID = this.entityId;
        //}
    }
}