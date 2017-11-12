
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.LinkFolderHorse")]
    [BasedOnRow(typeof(Entities.LinkFolderHorseRow))]
    public class LinkFolderHorseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public String FolderCaption { get; set; }
        [EditLink]
        public String HorseSire { get; set; }
    }
}