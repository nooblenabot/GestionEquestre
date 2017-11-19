
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.CorEtab")]
    [BasedOnRow(typeof(Entities.CorEtabRow))]
    public class CorEtabForm
    {
        public Boolean IsActive { get; set; }
        public Boolean IsArchive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public String Name { get; set; }
        public String Phone { get; set; }
        public String Gsm { get; set; }
        public String OtherPhone1 { get; set; }
        public String Email1 { get; set; }
        public String Email2 { get; set; }
        public Int64 BankAccount { get; set; }
        public Int64 IdAdress { get; set; }
        public String FrSiret { get; set; }
        public String Caption { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}