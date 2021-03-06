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

    [ColumnsScript("Ge.ManHorses")]
    [BasedOnRow(typeof(Entities.ManHorsesRow))]
    public class ManHorsesColumns
    {
       // [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [EditLink, AlignRight]
        public String Ueln { get; set; }
        public String Sire { get; set; }
        public String CleSire { get; set; }
        public String Hnin { get; set; }
        public String BirthCountryName_FR_fr { get; set; }
        public String BirthOrganizationOrganization { get; set; }
        public String Name { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean NotArchive { get; set; }
        public DateTime InsertDate { get; set; }
        //public Int32 InsertUserId { get; set; }
        public String InsertUsername { get; set; }
        public DateTime UpdateDate { get; set; }
        // public Int32 UpdateUserId { get; set; }
        public String UpdateUsername { get; set; }
        public DateTime Birthday { get; set; }
        public String SexeCaption { get; set; }
        public String Color { get; set; }
        public String Race { get; set; }
        public String Transponder { get; set; }
        public DateTime FinalExit { get; set; }
        public String Description { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}