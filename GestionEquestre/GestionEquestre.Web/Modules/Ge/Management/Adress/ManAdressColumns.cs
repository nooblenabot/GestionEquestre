
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.ManAdress")]
    [BasedOnRow(typeof(Entities.ManAdressRow))]
    public class ManAdressColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean NotArchive { get; set; }
        public DateTime InsertDate { get; set; }
        //public Int32 InsertUserId { get; set; }
        public String InsertUsername { get; set; }
        public DateTime UpdateDate { get; set; }
        // public Int32 UpdateUserId { get; set; }
        public String UpdateUsername { get; set; }
        [EditLink]
        public String Adress1 { get; set; }
        public String Adress2 { get; set; }
        public String Adress3 { get; set; }
        public String CityFrCodeInsee { get; set; }
        public String Country1 { get; set; }
        public String Cedex { get; set; }
        public String Building { get; set; }
        public String Caption { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}