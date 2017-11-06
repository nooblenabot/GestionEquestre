
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
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public String Country { get; set; }
        public String Code { get; set; }
        public Int16 CodeUe { get; set; }
        public String Iso3166Country { get; set; }
    }
}