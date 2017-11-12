
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.SetCountry")]
    [BasedOnRow(typeof(Entities.SetCountryRow))]
    public class SetCountryForm
    {
        public Boolean DefaultValue { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime InsertDate { get; set; }
        //  public Int32 InsertUserId { get; set; }
        public String InsertUsername { get; set; }
        public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
        public String UpdateUsername { get; set; }
        public String Name_FR_fr { get; set; }
        public String Name_EN_gb { get; set; }
        public String alpha3 { get; set; }
        public String alpha2 { get; set; }
        public Int16 CodeUe { get; set; }
        public String ISOcode { get; set; }
    }
}