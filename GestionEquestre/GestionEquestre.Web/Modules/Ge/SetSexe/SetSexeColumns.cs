
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.SetSexe")]
    [BasedOnRow(typeof(Entities.SetSexeRow))]
    public class SetSexeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 SexeId { get; set; }
        public Boolean DefaultValue { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime InsertDate { get; set; }
        //public Int32 InsertUserId { get; set; }
        public String InsertUsername { get; set; }
        public DateTime UpdateDate { get; set; }
        // public Int32 UpdateUserId { get; set; }
        public String UpdateUsername { get; set; }
        [EditLink]
        public String Caption { get; set; }
        public String Civility { get; set; }
    }
}