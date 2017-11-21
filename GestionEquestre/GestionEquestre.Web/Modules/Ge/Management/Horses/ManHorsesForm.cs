
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.ManHorses")]
    [BasedOnRow(typeof(Entities.ManHorsesRow))]
    public class ManHorsesForm
    {
        [ReadOnly(true)]
        public String Ueln { get; set; }
        [MaxLength(8),HalfWidth]
        public String Sire { get; set; }
        [MaxLength(1),QuarterWidth]
        public String CleSire { get; set; }
        [MaxLength(9)]
        public String Hnin { get; set; }
        public String BirthCountry { get; set; }
        public Int32 BirthOrganization { get; set; }
        public String Name { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean IsArchive { get; set; }
        [QuarterWidth]
        public DateTime InsertDate { get; set; }
        //  public Int32 InsertUserId { get; set; }
        [QuarterWidth]
        public String InsertUsername { get; set; }
        [QuarterWidth]
        [Updatable(false)]
        public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
        [QuarterWidth]
        [Updatable(false)]
        public String UpdateUsername { get; set; }
        public DateTime Birthday { get; set; }
        public Int16 Sexe { get; set; }
        public String Color { get; set; }
        public String Race { get; set; }
        public String Transponder { get; set; }
        public DateTime FinalExit { get; set; }
        public String Description { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}