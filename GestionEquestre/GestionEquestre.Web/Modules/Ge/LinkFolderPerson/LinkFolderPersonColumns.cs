
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.LinkFolderPerson")]
    [BasedOnRow(typeof(Entities.LinkFolderPersonRow))]
    public class LinkFolderPersonColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String FolderCaption { get; set; }
        public String PersonSurname { get; set; }
        [EditLink]
        public String Caption { get; set; }
    }
}