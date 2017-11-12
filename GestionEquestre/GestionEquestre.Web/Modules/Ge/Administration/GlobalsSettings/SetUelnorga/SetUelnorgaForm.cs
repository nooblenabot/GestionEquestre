
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.SetUelnorga")]
    [BasedOnRow(typeof(Entities.SetUelnorgaRow))]
    public class SetUelnorgaForm
    {
        public Boolean DefaultValue { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime InsertDate { get; set; }
      //  public Int32 InsertUserId { get; set; }
        public String InsertUsername { get; set; }
        [Updatable(false)]
        public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
        [Updatable(false)]
        public String UpdateUsername { get; set; }
        public String Organization { get; set; }
        public String UelnCode { get; set; }
    }
}