
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.ManCavaliers")]
    [BasedOnRow(typeof(Entities.ManCavaliersRow))]
    public class ManCavaliersForm
    {
        public String LicFfe { get; set; }
        public Int64 Person { get; set; }
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
        [DateYearEditor]
        public Int32 MilesimeLicnece { get; set; }
        public Int16 NiveauGalop { get; set; }
        public Int16 LicenceCompetition { get; set; }
        public DateTime DateCertificatMedical { get; set; }
        public String Caption { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}