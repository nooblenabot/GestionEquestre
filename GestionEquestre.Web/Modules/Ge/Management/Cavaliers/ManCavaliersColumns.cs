
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.ManCavaliers")]
    [BasedOnRow(typeof(Entities.ManCavaliersRow))]
    public class ManCavaliersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String LicFfe { get; set; }
        public String PersonFullName { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean IsArchive { get; set; }
        public DateTime InsertDate { get; set; }
        //public Int32 InsertUserId { get; set; }
        public String InsertUsername { get; set; }
        public DateTime UpdateDate { get; set; }
        // public Int32 UpdateUserId { get; set; }
        public String UpdateUsername { get; set; }
        public Int32 MilesimeLicnece { get; set; }
        public String NiveauGalopCaption { get; set; }
        public String LicenceCompetitionCaption { get; set; }
        public DateTime DateCertificatMedical { get; set; }
        public String Caption { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}