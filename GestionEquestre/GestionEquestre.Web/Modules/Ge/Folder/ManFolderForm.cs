
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.ManFolder")]
    [BasedOnRow(typeof(Entities.ManFolderRow))]
    public class ManFolderForm
    {
        [Tab("Info")]
        [QuarterWidth]
        public DateTime InsertDate { get; set; }
        //  public Int32 InsertUserId { get; set; }
        [QuarterWidth]
        public String InsertUsername { get; set; }
        [Updatable(false)]
        [QuarterWidth]
        public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
        [Updatable(false)]
        [QuarterWidth]
        public String UpdateUsername { get; set; }
        [Category("Folder")]
        [ReadOnly(true),Insertable(false),QuarterWidth]
        public Int64 Id { get; set; }
        [QuarterWidth]
        public Boolean IsActive { get; set; }
        [QuarterWidth]
        public Boolean IsArchive { get; set; }       
        public String Caption { get; set; }
        public DateTime ArchiveDate { get; set; }
        public DateTime CreateDate { get; set; }
        public String CloseRaison { get; set; }
        public DateTime CloseDate { get; set; }
        public Int32 Establishment { get; set; }
        [Tab("Comments")]
        public String Comment { get; set; }

        //[Tab("Shipping")]
        //[Category("Info")]
        //[LinkFolderHorseEditor]
        //public List<Entities.LinkFolderHorseRow> Horses { get; set; }
    }
}