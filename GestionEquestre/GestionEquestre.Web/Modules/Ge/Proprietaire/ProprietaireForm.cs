
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.Proprietaire")]
    [BasedOnRow(typeof(Entities.ProprietaireRow))]
    public class ProprietaireForm
    {
        public String Cheval { get; set; }
        public String Cavalier { get; set; }
        public Single Part { get; set; }
    }
}