
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[ACC_BANKACCOUNT]")]
    [DisplayName("Acc Bankaccount"), InstanceName("Acc Bankaccount"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AccBankaccountRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Country Code Iban"), Column("CountryCodeIBAN"), Size(2), NotNull, QuickSearch]
        public String CountryCodeIban
        {
            get { return Fields.CountryCodeIban[this]; }
            set { Fields.CountryCodeIban[this] = value; }
        }

        [DisplayName("Check Digits Iban"), Column("CheckDigitsIBAN"), Size(2), NotNull]
        public String CheckDigitsIban
        {
            get { return Fields.CheckDigitsIban[this]; }
            set { Fields.CheckDigitsIban[this] = value; }
        }

        [DisplayName("Bban"), Column("BBAN"), Size(30), NotNull]
        public String Bban
        {
            get { return Fields.Bban[this]; }
            set { Fields.Bban[this] = value; }
        }

        [DisplayName("Bic"), Column("BIC"), Size(11), NotNull]
        public String Bic
        {
            get { return Fields.Bic[this]; }
            set { Fields.Bic[this] = value; }
        }

        [DisplayName("Account Onwer"), Size(50), NotNull]
        public String AccountOnwer
        {
            get { return Fields.AccountOnwer[this]; }
            set { Fields.AccountOnwer[this] = value; }
        }

        [DisplayName("Bank Adress"), Size(200), NotNull]
        public String BankAdress
        {
            get { return Fields.BankAdress[this]; }
            set { Fields.BankAdress[this] = value; }
        }

        [DisplayName("Cis"), Column("CIS"), Size(13)]
        public String Cis
        {
            get { return Fields.Cis[this]; }
            set { Fields.Cis[this] = value; }
        }

        [DisplayName("Urm"), Column("URM"), Size(35)]
        public String Urm
        {
            get { return Fields.Urm[this]; }
            set { Fields.Urm[this] = value; }
        }

        [DisplayName("Mandate Date Sign")]
        public DateTime? MandateDateSign
        {
            get { return Fields.MandateDateSign[this]; }
            set { Fields.MandateDateSign[this] = value; }
        }

        [DisplayName("Type Payment")]
        public Int16? TypePayment
        {
            get { return Fields.TypePayment[this]; }
            set { Fields.TypePayment[this] = value; }
        }

        [DisplayName("Date Last Prelevement")]
        public DateTime? DateLastPrelevement
        {
            get { return Fields.DateLastPrelevement[this]; }
            set { Fields.DateLastPrelevement[this] = value; }
        }

        [DisplayName("Type Of Last Payment")]
        public Int16? TypeOfLastPayment
        {
            get { return Fields.TypeOfLastPayment[this]; }
            set { Fields.TypeOfLastPayment[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CountryCodeIban; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AccBankaccountRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public GuidField Id;
            public StringField CountryCodeIban;
            public StringField CheckDigitsIban;
            public StringField Bban;
            public StringField Bic;
            public StringField AccountOnwer;
            public StringField BankAdress;
            public StringField Cis;
            public StringField Urm;
            public DateTimeField MandateDateSign;
            public Int16Field TypePayment;
            public DateTimeField DateLastPrelevement;
            public Int16Field TypeOfLastPayment;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.AccBankaccount";
            }
        }
    }
}
