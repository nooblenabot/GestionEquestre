
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.AccBankaccount")]
    [BasedOnRow(typeof(Entities.AccBankaccountRow))]
    public class AccBankaccountColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid Id { get; set; }
        [EditLink]
        public String CountryCodeIban { get; set; }
        public String CheckDigitsIban { get; set; }
        public String Bban { get; set; }
        public String Bic { get; set; }
        public String AccountOnwer { get; set; }
        public String BankAdress { get; set; }
        public String Cis { get; set; }
        public String Urm { get; set; }
        public DateTime MandateDateSign { get; set; }
        public Int16 TypePayment { get; set; }
        public DateTime DateLastPrelevement { get; set; }
        public Int16 TypeOfLastPayment { get; set; }
    }
}