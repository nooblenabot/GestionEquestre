
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
        public Boolean IsArchive { get; set; }
        public DateTime InsertDate { get; set; }
        //  public Int32 InsertUserId { get; set; }
        public String InsertUsername { get; set; }
        [Updatable(false)]
        public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
        [Updatable(false)]
        public String UpdateUsername { get; set; }
        [PersonNameEditor]
        public String Surname { get; set; }
        [PersonNameEditor]
        public String Name { get; set; }
        public String FullName { get; set; }
        [PersonNameEditor]
        public String MaidenName { get; set; }
        public String BusinessName { get; set; }
        public String Caption { get; set; }
        public DateTime Birthday { get; set; }
        public Int16 Sexe { get; set; }
        public Int16 MaritalStatus { get; set; }
        public Int64 BirthCity { get; set; }
        public Int16 BirthCountry { get; set; }
        public Int16 Nationality { get; set; }
        public String Photo { get; set; }
        [PhoneEditor]
        public String Phone { get; set; }
        [PhoneEditor]
        public String Gsm { get; set; }
        [PhoneEditor]
        public String WorkPhone { get; set; }
        [PhoneEditor]
        public String OtherPhone1 { get; set; }
        [PhoneEditor]
        public String OtherPhone2 { get; set; }
        [EmailEditor]
        public String Email1 { get; set; }
        [EmailEditor]
        public String Email2 { get; set; }
        public Int64 BankAccount { get; set; }
        public Int64 IdAdress { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}