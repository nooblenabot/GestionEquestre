
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
        public String Caption { get; set; }
        [EditLink]
        public String PersonFullName { get; set; }
        //[EditLink]
        //public String PersonSurname { get; set; }
        [EditLink]
        public String PersonBusinessName { get; set; }
    }
}