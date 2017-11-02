
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.Adresse")]
    [BasedOnRow(typeof(Entities.AdresseRow))]
    public class AdresseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid Id { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean NotArchive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        [EditLink]
        public String Adresse1 { get; set; }
        public String Adresse2 { get; set; }
        public String Adresse3 { get; set; }
        public Guid Ville { get; set; }
        public Guid Pays { get; set; }
        public String Cedex { get; set; }
        public String Batiment { get; set; }
        public String Description { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}