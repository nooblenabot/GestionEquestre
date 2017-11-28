
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.CorEtab")]
    [BasedOnRow(typeof(Entities.CorEtabRow))]
    public class CorEtabColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean IsArchive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Phone { get; set; }
        public String Gsm { get; set; }
        public String OtherPhone1 { get; set; }
        public String Email1 { get; set; }
        public String Email2 { get; set; }
        public String BankAccountCountryCodeIban { get; set; }
        public String IdAdressAdress1 { get; set; }
        public String FrSiret { get; set; }
        public String Caption { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}