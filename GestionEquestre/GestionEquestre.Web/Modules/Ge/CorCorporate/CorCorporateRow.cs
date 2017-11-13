
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[COR_CORPORATE]")]
    [DisplayName("Cor Corporate"), InstanceName("Cor Corporate"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CorCorporateRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int16? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Not Archive"), NotNull]
        public Boolean? NotArchive
        {
            get { return Fields.NotArchive[this]; }
            set { Fields.NotArchive[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Update User Id")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Name"), Size(80), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Phone"), Size(20)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Gsm"), Column("GSM"), Size(20)]
        public String Gsm
        {
            get { return Fields.Gsm[this]; }
            set { Fields.Gsm[this] = value; }
        }

        [DisplayName("Other Phone1"), Size(20)]
        public String OtherPhone1
        {
            get { return Fields.OtherPhone1[this]; }
            set { Fields.OtherPhone1[this] = value; }
        }

        [DisplayName("Email1"), Size(80)]
        public String Email1
        {
            get { return Fields.Email1[this]; }
            set { Fields.Email1[this] = value; }
        }

        [DisplayName("Email2"), Size(80)]
        public String Email2
        {
            get { return Fields.Email2[this]; }
            set { Fields.Email2[this] = value; }
        }

        [DisplayName("Bank Account"), ForeignKey("[dbo].[ACC_BANKACCOUNT]", "Id"), LeftJoin("jBankAccount"), TextualField("BankAccountCountryCodeIban")]
        public Int64? BankAccount
        {
            get { return Fields.BankAccount[this]; }
            set { Fields.BankAccount[this] = value; }
        }

        [DisplayName("Id Adress"), ForeignKey("[dbo].[MAN_ADRESS]", "Id"), LeftJoin("jIdAdress"), TextualField("IdAdressAdress1")]
        public Int64? IdAdress
        {
            get { return Fields.IdAdress[this]; }
            set { Fields.IdAdress[this] = value; }
        }

        [DisplayName("Fr Siren"), Column("FR_Siren"), Size(9)]
        public String FrSiren
        {
            get { return Fields.FrSiren[this]; }
            set { Fields.FrSiren[this] = value; }
        }

        [DisplayName("Caption"), Size(200)]
        public String Caption
        {
            get { return Fields.Caption[this]; }
            set { Fields.Caption[this] = value; }
        }

        [DisplayName("Archive Date")]
        public DateTime? ArchiveDate
        {
            get { return Fields.ArchiveDate[this]; }
            set { Fields.ArchiveDate[this] = value; }
        }

        [DisplayName("Bank Account Country Code Iban"), Expression("jBankAccount.[CountryCodeIBAN]")]
        public String BankAccountCountryCodeIban
        {
            get { return Fields.BankAccountCountryCodeIban[this]; }
            set { Fields.BankAccountCountryCodeIban[this] = value; }
        }
        [DisplayName("Bank Account Check Digits Iban"), Expression("jBankAccount.[CheckDigitsIBAN]")]
        public String BankAccountCheckDigitsIban
        {
            get { return Fields.BankAccountCheckDigitsIban[this]; }
            set { Fields.BankAccountCheckDigitsIban[this] = value; }
        }
        [DisplayName("Bank Account Bban"), Expression("jBankAccount.[BBAN]")]
        public String BankAccountBban
        {
            get { return Fields.BankAccountBban[this]; }
            set { Fields.BankAccountBban[this] = value; }
        }
        [DisplayName("Bank Account Bic"), Expression("jBankAccount.[BIC]")]
        public String BankAccountBic
        {
            get { return Fields.BankAccountBic[this]; }
            set { Fields.BankAccountBic[this] = value; }
        }
        [DisplayName("Bank Account Account Onwer"), Expression("jBankAccount.[AccountOnwer]")]
        public String BankAccountAccountOnwer
        {
            get { return Fields.BankAccountAccountOnwer[this]; }
            set { Fields.BankAccountAccountOnwer[this] = value; }
        }
        [DisplayName("Bank Account Bank Adress"), Expression("jBankAccount.[BankAdress]")]
        public String BankAccountBankAdress
        {
            get { return Fields.BankAccountBankAdress[this]; }
            set { Fields.BankAccountBankAdress[this] = value; }
        }
        [DisplayName("Bank Account Cis"), Expression("jBankAccount.[CIS]")]
        public String BankAccountCis
        {
            get { return Fields.BankAccountCis[this]; }
            set { Fields.BankAccountCis[this] = value; }
        }
        [DisplayName("Bank Account Urm"), Expression("jBankAccount.[URM]")]
        public String BankAccountUrm
        {
            get { return Fields.BankAccountUrm[this]; }
            set { Fields.BankAccountUrm[this] = value; }
        }
        [DisplayName("Bank Account Mandate Date Sign"), Expression("jBankAccount.[MandateDateSign]")]
        public DateTime? BankAccountMandateDateSign
        {
            get { return Fields.BankAccountMandateDateSign[this]; }
            set { Fields.BankAccountMandateDateSign[this] = value; }
        }
        [DisplayName("Bank Account Type Payment"), Expression("jBankAccount.[TypePayment]")]
        public Int16? BankAccountTypePayment
        {
            get { return Fields.BankAccountTypePayment[this]; }
            set { Fields.BankAccountTypePayment[this] = value; }
        }
        [DisplayName("Bank Account Date Last Prelevement"), Expression("jBankAccount.[DateLastPrelevement]")]
        public DateTime? BankAccountDateLastPrelevement
        {
            get { return Fields.BankAccountDateLastPrelevement[this]; }
            set { Fields.BankAccountDateLastPrelevement[this] = value; }
        }
        [DisplayName("Bank Account Type Of Last Payment"), Expression("jBankAccount.[TypeOfLastPayment]")]
        public Int16? BankAccountTypeOfLastPayment
        {
            get { return Fields.BankAccountTypeOfLastPayment[this]; }
            set { Fields.BankAccountTypeOfLastPayment[this] = value; }
        }
        [DisplayName("Id Adress Is Active"), Expression("jIdAdress.[IsActive]")]
        public Boolean? IdAdressIsActive
        {
            get { return Fields.IdAdressIsActive[this]; }
            set { Fields.IdAdressIsActive[this] = value; }
        }
        [DisplayName("Id Adress Not Archive"), Expression("jIdAdress.[NotArchive]")]
        public Boolean? IdAdressNotArchive
        {
            get { return Fields.IdAdressNotArchive[this]; }
            set { Fields.IdAdressNotArchive[this] = value; }
        }
        [DisplayName("Id Adress Insert Date"), Expression("jIdAdress.[InsertDate]")]
        public DateTime? IdAdressInsertDate
        {
            get { return Fields.IdAdressInsertDate[this]; }
            set { Fields.IdAdressInsertDate[this] = value; }
        }
        [DisplayName("Id Adress Insert User Id"), Expression("jIdAdress.[InsertUserId]")]
        public Int32? IdAdressInsertUserId
        {
            get { return Fields.IdAdressInsertUserId[this]; }
            set { Fields.IdAdressInsertUserId[this] = value; }
        }
        [DisplayName("Id Adress Update Date"), Expression("jIdAdress.[UpdateDate]")]
        public DateTime? IdAdressUpdateDate
        {
            get { return Fields.IdAdressUpdateDate[this]; }
            set { Fields.IdAdressUpdateDate[this] = value; }
        }
        [DisplayName("Id Adress Update User Id"), Expression("jIdAdress.[UpdateUserId]")]
        public Int32? IdAdressUpdateUserId
        {
            get { return Fields.IdAdressUpdateUserId[this]; }
            set { Fields.IdAdressUpdateUserId[this] = value; }
        }
        [DisplayName("Id Adress Adress 1"), Expression("jIdAdress.[Adress_1]")]
        public String IdAdressAdress1
        {
            get { return Fields.IdAdressAdress1[this]; }
            set { Fields.IdAdressAdress1[this] = value; }
        }
        [DisplayName("Id Adress Adress 2"), Expression("jIdAdress.[Adress_2]")]
        public String IdAdressAdress2
        {
            get { return Fields.IdAdressAdress2[this]; }
            set { Fields.IdAdressAdress2[this] = value; }
        }
        [DisplayName("Id Adress Adress 3"), Expression("jIdAdress.[Adress_3]")]
        public String IdAdressAdress3
        {
            get { return Fields.IdAdressAdress3[this]; }
            set { Fields.IdAdressAdress3[this] = value; }
        }
        [DisplayName("Id Adress City"), Expression("jIdAdress.[City]")]
        public Int64? IdAdressCity
        {
            get { return Fields.IdAdressCity[this]; }
            set { Fields.IdAdressCity[this] = value; }
        }
        [DisplayName("Id Adress Country"), Expression("jIdAdress.[Country]")]
        public Int16? IdAdressCountry
        {
            get { return Fields.IdAdressCountry[this]; }
            set { Fields.IdAdressCountry[this] = value; }
        }
        [DisplayName("Id Adress Cedex"), Expression("jIdAdress.[Cedex]")]
        public String IdAdressCedex
        {
            get { return Fields.IdAdressCedex[this]; }
            set { Fields.IdAdressCedex[this] = value; }
        }
        [DisplayName("Id Adress Building"), Expression("jIdAdress.[building]")]
        public String IdAdressBuilding
        {
            get { return Fields.IdAdressBuilding[this]; }
            set { Fields.IdAdressBuilding[this] = value; }
        }
        [DisplayName("Id Adress Caption"), Expression("jIdAdress.[Caption]")]
        public String IdAdressCaption
        {
            get { return Fields.IdAdressCaption[this]; }
            set { Fields.IdAdressCaption[this] = value; }
        }
        [DisplayName("Id Adress Archive Date"), Expression("jIdAdress.[ArchiveDate]")]
        public DateTime? IdAdressArchiveDate
        {
            get { return Fields.IdAdressArchiveDate[this]; }
            set { Fields.IdAdressArchiveDate[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CorCorporateRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field Id;
            public BooleanField IsActive;
            public BooleanField NotArchive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField Name;
            public StringField Phone;
            public StringField Gsm;
            public StringField OtherPhone1;
            public StringField Email1;
            public StringField Email2;
            public Int64Field BankAccount;
            public Int64Field IdAdress;
            public StringField FrSiren;
            public StringField Caption;
            public DateTimeField ArchiveDate;

            public StringField BankAccountCountryCodeIban;
            public StringField BankAccountCheckDigitsIban;
            public StringField BankAccountBban;
            public StringField BankAccountBic;
            public StringField BankAccountAccountOnwer;
            public StringField BankAccountBankAdress;
            public StringField BankAccountCis;
            public StringField BankAccountUrm;
            public DateTimeField BankAccountMandateDateSign;
            public Int16Field BankAccountTypePayment;
            public DateTimeField BankAccountDateLastPrelevement;
            public Int16Field BankAccountTypeOfLastPayment;

            public BooleanField IdAdressIsActive;
            public BooleanField IdAdressNotArchive;
            public DateTimeField IdAdressInsertDate;
            public Int32Field IdAdressInsertUserId;
            public DateTimeField IdAdressUpdateDate;
            public Int32Field IdAdressUpdateUserId;
            public StringField IdAdressAdress1;
            public StringField IdAdressAdress2;
            public StringField IdAdressAdress3;
            public Int64Field IdAdressCity;
            public Int16Field IdAdressCountry;
            public StringField IdAdressCedex;
            public StringField IdAdressBuilding;
            public StringField IdAdressCaption;
            public DateTimeField IdAdressArchiveDate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.CorCorporate";
            }
        }
    }
}
