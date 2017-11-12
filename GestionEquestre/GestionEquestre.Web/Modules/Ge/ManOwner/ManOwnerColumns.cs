
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.ManOwner")]
    [BasedOnRow(typeof(Entities.ManOwnerRow))]
    public class ManOwnerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String HorseSire { get; set; }
        public String CavalierCaption { get; set; }
        public Single Part { get; set; }
    }
}