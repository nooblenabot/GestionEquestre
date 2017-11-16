
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
        [ReadOnly(true),Insertable(false)]
        public Int64 Id { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean NotArchive { get; set; }
        public DateTime InsertDate { get; set; }
        //  public Int32 InsertUserId { get; set; }
        public String InsertUsername { get; set; }
        [Updatable(false)]
        public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
        [Updatable(false)]
        public String UpdateUsername { get; set; }
        public String Caption { get; set; }
        public DateTime ArchiveDate { get; set; }
        public Int32 Number { get; set; }
        public DateTime CreateeDate { get; set; }
        public String CloseRaison { get; set; }
        public DateTime CloseDate { get; set; }
        public Int32 Establishment { get; set; }
        public String Comment { get; set; }

        [Tab("Shipping")]
        [Category("Info")]
        [LinkFolderHorseEditor]
        public List<Entities.LinkFolderHorseRow> Horses { get; set; }
    }
}