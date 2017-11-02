
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.Cavaliers")]
    [BasedOnRow(typeof(Entities.CavaliersRow))]
    public class CavaliersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String LicFfe { get; set; }
        public Guid Personne { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean NotArchive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public DateTime MilesimeLicnece { get; set; }
        public Int16 NiveauGalop { get; set; }
        public Int16 LicenceCompetition { get; set; }
        public DateTime DateCertificatMedical { get; set; }
        public String Description { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}