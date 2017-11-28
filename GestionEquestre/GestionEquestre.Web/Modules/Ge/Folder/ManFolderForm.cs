
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
       // [Tab("Info")]
        [QuarterWidth,ReadOnly(true)    ]
        public DateTime InsertDate { get; set; }
        //  public Int32 InsertUserId { get; set; }
        [QuarterWidth,ReadOnly(true)]
        public String InsertUsername { get; set; }
        [Updatable(false)]
        [QuarterWidth]
        public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
        [Updatable(false)]
        [QuarterWidth]
        public String UpdateUsername { get; set; }
        [Category("info")]
        [ReadOnly(true),Insertable(false),QuarterWidth]
        public Int64 Id { get; set; }
        [QuarterWidth]
        public Boolean IsActive { get; set; }
        [QuarterWidth,ReadOnly(true)]
        public Boolean IsArchive { get; set; }       
        public String Caption { get; set; }
        [ReadOnly(true), QuarterWidth]
        public DateTime CreateDate { get; set; }
        public Int32 Establishment { get; set; }
          
      //  [Tab("Comments")]
       public String Comment { get; set; }

        [ReadOnly(true), QuarterWidth]
        public DateTime CloseDate { get; set; }
        [ReadOnly(true), HalfWidth]
        public String CloseRaison { get; set; }
        [ReadOnly(true), QuarterWidth]
        public DateTime ArchiveDate { get; set; }

        //[Tab("Shipping")]
        //[Category("Info")]
        //[LinkFolderHorseEditor]
        //public List<Entities.LinkFolderHorseRow> Horses { get; set; }
    }
}