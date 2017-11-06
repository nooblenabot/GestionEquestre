
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.ManPerson")]
    [BasedOnRow(typeof(Entities.ManPersonRow))]
    public class ManPersonForm
    {
        public Boolean IsMorale { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean NotArchive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public String Surname { get; set; }
        public String Name { get; set; }
        public String MaidenName { get; set; }
        public String BusinessName { get; set; }
        public DateTime Birthday { get; set; }
        public Int16 Sexe { get; set; }
        public Int16 MaritalStatus { get; set; }
        public Guid BirthCity { get; set; }
        public Guid BirthCountry { get; set; }
        public Guid Nationality { get; set; }
        public Stream Photo { get; set; }
        public String Phone { get; set; }
        public String Gsm { get; set; }
        public String WorkPhone { get; set; }
        public String OtherPhone1 { get; set; }
        public String OtherPhone2 { get; set; }
        public String Email1 { get; set; }
        public String Email2 { get; set; }
        public Guid BankAccount { get; set; }
        public Guid IdAdress { get; set; }
        public String Caption { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}