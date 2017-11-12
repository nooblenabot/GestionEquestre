
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.LinkFolderPerson")]
    [BasedOnRow(typeof(Entities.LinkFolderPersonRow))]
    public class LinkFolderPersonForm
    {
        public Int64 Folder { get; set; }
        public Int64 PersonId { get; set; }
        public String Caption { get; set; }
    }
}