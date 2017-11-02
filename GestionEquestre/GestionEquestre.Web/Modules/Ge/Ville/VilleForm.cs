
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.Ville")]
    [BasedOnRow(typeof(Entities.VilleRow))]
    public class VilleForm
    {
        public Boolean DefaultValue { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean ReadOnly { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public String CodeInsee { get; set; }
        public String Libele { get; set; }
        public String NomVille { get; set; }
        public String CodePostal { get; set; }
        public Guid Pays { get; set; }
    }
}