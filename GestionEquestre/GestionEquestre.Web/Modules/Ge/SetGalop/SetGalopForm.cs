
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.SetGalop")]
    [BasedOnRow(typeof(Entities.SetGalopRow))]
    public class SetGalopForm
    {
        public Boolean DefaultValue { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean ReadOnly { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public String Caption { get; set; }
        public String Code { get; set; }
    }
}