
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
        [Hidden]
        public Int64 Folder { get; set; }
        [LookupEditor(typeof(Ge.Scripts.ManPersonActiveLookup), MinimumResultsForSearch = 1, InplaceAdd = true)]
        public Int64 PersonId { get; set; }
        public String Caption { get; set; }
    }
}