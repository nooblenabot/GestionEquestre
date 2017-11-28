
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.AccBankaccount")]
    [BasedOnRow(typeof(Entities.AccBankaccountRow))]
    public class AccBankaccountForm
    {
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