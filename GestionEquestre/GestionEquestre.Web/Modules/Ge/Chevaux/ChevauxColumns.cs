
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.Chevaux")]
    [BasedOnRow(typeof(Entities.ChevauxRow))]
    public class ChevauxColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Ueln { get; set; }
        public String Sire { get; set; }
        public String CleSire { get; set; }
        public String Name { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean NotArchive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public DateTime Birthday { get; set; }
        public Int16 Sexe { get; set; }
        public String Robe { get; set; }
        public String Transpondeur { get; set; }
        public DateTime SortieDefinitive { get; set; }
        public String Description { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}