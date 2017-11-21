
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.ManAdress")]
    [BasedOnRow(typeof(Entities.ManAdressRow))]
    public class ManAdressForm
    {
        public Boolean IsActive { get; set; }
        public Boolean IsArchive { get; set; }
        public DateTime InsertDate { get; set; }
        //  public Int32 InsertUserId { get; set; }
        public String InsertUsername { get; set; }
        [Updatable(false)]
        public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
        [Updatable(false)]
        public String UpdateUsername { get; set; }
        public String Adress1 { get; set; }
        public String Adress2 { get; set; }
        public String Adress3 { get; set; }
        public Int64 City { get; set; }
        public Int16 Country { get; set; }
        public String Cedex { get; set; }
        public String Building { get; set; }
        public String Caption { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}