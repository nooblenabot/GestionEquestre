
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
        [EditLink]
        public String Cavalier { get; set; }
        [EditLink]
        public String CavalierPerson { get; set; }

    }
}