
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.ManOwner")]
    [BasedOnRow(typeof(Entities.ManOwnerRow))]
    public class ManOwnerForm
    {
        public String Horse { get; set; }
        public String Cavalier { get; set; }
        public Single Part { get; set; }
    }
}