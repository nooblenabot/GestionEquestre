
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.SetCity")]
    [BasedOnRow(typeof(Entities.SetCityRow))]
    public class SetCityColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid Id { get; set; }
        public Boolean DefaultValue { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean ReadOnly { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        [EditLink]
        public String FrCodeInsee { get; set; }
        public String Caption { get; set; }
        public String City { get; set; }
        public String PostCode { get; set; }
        public String Country1 { get; set; }
    }
}