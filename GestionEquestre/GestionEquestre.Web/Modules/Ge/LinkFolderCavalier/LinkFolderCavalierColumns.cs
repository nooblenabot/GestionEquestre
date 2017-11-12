
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.LinkFolderCavalier")]
    [BasedOnRow(typeof(Entities.LinkFolderCavalierRow))]
    public class LinkFolderCavalierColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public String FolderCaption { get; set; }
        [EditLink]
        public String CavalierCaption { get; set; }
    }
}