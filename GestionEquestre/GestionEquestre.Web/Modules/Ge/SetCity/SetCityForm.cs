
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.SetCity")]
    [BasedOnRow(typeof(Entities.SetCityRow))]
    public class SetCityForm
    {
        public Boolean DefaultValue { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime InsertDate { get; set; }
        //  public Int32 InsertUserId { get; set; }
        public String InsertUsername { get; set; }
        public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
        public String UpdateUsername { get; set; }
        public String FrCodeInsee { get; set; }
        public String Caption { get; set; }
        public String City { get; set; }
        public String PostCode { get; set; }
        public Int16 Country { get; set; }
    }
}