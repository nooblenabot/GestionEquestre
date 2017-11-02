﻿
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.CodeStuationfamille")]
    [BasedOnRow(typeof(Entities.CodeStuationfamilleRow))]
    public class CodeStuationfamilleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 Id { get; set; }
        public Boolean DefaultValue { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean ReadOnly { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        [EditLink]
        public String Libele { get; set; }
        public String Code { get; set; }
    }
}