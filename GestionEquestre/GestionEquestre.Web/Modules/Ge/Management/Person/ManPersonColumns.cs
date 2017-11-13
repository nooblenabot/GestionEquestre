
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.ManPerson")]
    [BasedOnRow(typeof(Entities.ManPersonRow))]
    public class ManPersonColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public Boolean IsMorale { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean NotArchive { get; set; }
        public DateTime InsertDate { get; set; }
        //public Int32 InsertUserId { get; set; }
        public String InsertUsername { get; set; }
        public DateTime UpdateDate { get; set; }
        // public Int32 UpdateUserId { get; set; }
        public String UpdateUsername { get; set; }
        [EditLink]
        public String Surname { get; set; }
        public String Name { get; set; }
        public String MaidenName { get; set; }
        public String BusinessName { get; set; }
        public DateTime Birthday { get; set; }
        public String SexeCaption { get; set; }
        public String MaritalStatusCaption { get; set; }
        public String BirthCityFrCodeInsee { get; set; }
        public String BirthCountryCountry { get; set; }
        public String NationalityCountry { get; set; }
        public Stream Photo { get; set; }
        public String Phone { get; set; }
        public String Gsm { get; set; }
        public String WorkPhone { get; set; }
        public String OtherPhone1 { get; set; }
        public String OtherPhone2 { get; set; }
        public String Email1 { get; set; }
        public String Email2 { get; set; }
        public String BankAccountCountryCodeIban { get; set; }
        public String IdAdressAdress1 { get; set; }
        public String Caption { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}