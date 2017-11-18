
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.LinkFolderCavalier")]
    [BasedOnRow(typeof(Entities.LinkFolderCavalierRow))]
    public class LinkFolderCavalierForm
    {
        [Hidden]
        public Int64 Folder { get; set; }
        public String Cavalier { get; set; }
    }
}