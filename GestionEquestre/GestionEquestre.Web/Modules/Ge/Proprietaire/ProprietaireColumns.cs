
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.Proprietaire")]
    [BasedOnRow(typeof(Entities.ProprietaireRow))]
    public class ProprietaireColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Cheval { get; set; }
        public String Cavalier { get; set; }
        public Single Part { get; set; }
    }
}