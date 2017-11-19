
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
        [EditLink]
        public String PersonName { get; set; }
        [EditLink]
        public String Caption { get; set; }
    }
}