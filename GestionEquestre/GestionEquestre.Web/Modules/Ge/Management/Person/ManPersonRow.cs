
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[MAN_PERSON]")]
    [DisplayName("Man Person"), InstanceName("Man Person"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ManPersonRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Is Morale"), NotNull]
        public Boolean? IsMorale
        {
            get { return Fields.IsMorale[this]; }
            set { Fields.IsMorale[this] = value; }
        }

        [DisplayName("Is Active"), NotNull,HideOnInsert]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Not Archive"), NotNull,HideOnInsert]
        public Boolean? NotArchive
        {
            get { return Fields.NotArchive[this]; }
            set { Fields.NotArchive[this] = value; }
        }

        [DisplayName("Insert Date"), HideOnInsert, Updatable(false), DateTimeFormatter]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id"), HideOnInsert, Updatable(false), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIUser"), TextualField("InsertUsername")]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Update Date"), HideOnInsert, DateTimeFormatter]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Update User Id"), HideOnInsert, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUUser"), TextualField("UpdateUsername")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Surname"), Size(50), QuickSearch]
        public String Surname
        {
            get { return Fields.Surname[this]; }
            set { Fields.Surname[this] = value; }
        }

        [DisplayName("Name"), Size(50)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Maiden Name"), Size(50)]
        public String MaidenName
        {
            get { return Fields.MaidenName[this]; }
            set { Fields.MaidenName[this] = value; }
        }

        [DisplayName("Business Name"), Size(200)]
        public String BusinessName
        {
            get { return Fields.BusinessName[this]; }
            set { Fields.BusinessName[this] = value; }
        }

        [DisplayName("Birthday")]
        public DateTime? Birthday
        {
            get { return Fields.Birthday[this]; }
            set { Fields.Birthday[this] = value; }
        }

        [DisplayName("Sexe"), ForeignKey("[dbo].[SET_SEXE]", "SexeId"), LeftJoin("jSexe"), TextualField("SexeCaption")]
        [LookupEditor(typeof(Ge.Scripts.SexePersonLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int16? Sexe
        {
            get { return Fields.Sexe[this]; }
            set { Fields.Sexe[this] = value; }
        }

        [DisplayName("Marital Status"), ForeignKey("[dbo].[SET_MARITALSTATUS]", "Id"), LeftJoin("jMaritalStatus"), TextualField("MaritalStatusCaption")]
        [LookupEditor(typeof(Ge.Scripts.SetMaritalstatusLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int16? MaritalStatus
        {
            get { return Fields.MaritalStatus[this]; }
            set { Fields.MaritalStatus[this] = value; }
        }

        [DisplayName("Birth City"), ForeignKey("[dbo].[SET_CITY]", "Id"), LeftJoin("jBirthCity"), TextualField("BirthCityFrCodeInsee")]
        [LookupEditor(typeof(Ge.Scripts.SetCityLookup), MinimumResultsForSearch = 1, InplaceAdd = true)]
        public Int64? BirthCity
        {
            get { return Fields.BirthCity[this]; }
            set { Fields.BirthCity[this] = value; }
        }

        [DisplayName("Birth Country"), ForeignKey("[dbo].[SET_COUNTRY]", "Id"), LeftJoin("jBirthCountry"), TextualField("BirthCountryNameFr")]
        [LookupEditor(typeof(Ge.Scripts.SetCountryLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int16? BirthCountry
        {
            get { return Fields.BirthCountry[this]; }
            set { Fields.BirthCountry[this] = value; }
        }

        [DisplayName("Nationality"), Column("nationality"), ForeignKey("[dbo].[SET_COUNTRY]", "Id"), LeftJoin("jNationality"), TextualField("NationalityCountry")]
        [LookupEditor(typeof(Ge.Scripts.SetCountryLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int16? Nationality
        {
            get { return Fields.Nationality[this]; }
            set { Fields.Nationality[this] = value; }
        }

        [DisplayName("Photo"), Size(8000)]
        [ImageUploadEditor(FilenameFormat = "PersonImage/~", CopyToHistory = true)]
        public Stream Photo
        {
            get { return Fields.Photo[this]; }
            set { Fields.Photo[this] = value; }
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

        [DisplayName("Work Phone"), Size(20)]
        public String WorkPhone
        {
            get { return Fields.WorkPhone[this]; }
            set { Fields.WorkPhone[this] = value; }
        }

        [DisplayName("Other Phone1"), Size(20)]
        public String OtherPhone1
        {
            get { return Fields.OtherPhone1[this]; }
            set { Fields.OtherPhone1[this] = value; }
        }

        [DisplayName("Other Phone2"), Size(20)]
        public String OtherPhone2
        {
            get { return Fields.OtherPhone2[this]; }
            set { Fields.OtherPhone2[this] = value; }
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

        [DisplayName("Caption"), Size(200)]
        public String Caption
        {
            get { return Fields.Caption[this]; }
            set { Fields.Caption[this] = value; }
        }

        [DisplayName("Archive Date"),HideOnInsert,Updatable(false), DateTimeFormatter]
        public DateTime? ArchiveDate
        {
            get { return Fields.ArchiveDate[this]; }
            set { Fields.ArchiveDate[this] = value; }
        }

        #region champs relationnels
        #region Username
        [DisplayName("Username"), Expression("jIUser.[Username]"), HideOnInsert,Updatable(false)]
        public String InsertUsername
        {
            get { return Fields.InsertUsername[this]; }
            set { Fields.InsertUsername[this] = value; }
        }

        [DisplayName("Username"), Expression("jUUser.[Username]"), HideOnInsert]
        public String UpdateUsername
        {
            get { return Fields.UpdateUsername[this]; }
            set { Fields.UpdateUsername[this] = value; }
        }
        #endregion

        #region sexe
        [DisplayName("Sexe Default Value"), Expression("jSexe.[DefaultValue]")]
        public Boolean? SexeDefaultValue
        {
            get { return Fields.SexeDefaultValue[this]; }
            set { Fields.SexeDefaultValue[this] = value; }
        }
        [DisplayName("Sexe Is Active"), Expression("jSexe.[IsActive]")]
        public Boolean? SexeIsActive
        {
            get { return Fields.SexeIsActive[this]; }
            set { Fields.SexeIsActive[this] = value; }
        }
        [DisplayName("Sexe Insert Date"), Expression("jSexe.[InsertDate]")]
        public DateTime? SexeInsertDate
        {
            get { return Fields.SexeInsertDate[this]; }
            set { Fields.SexeInsertDate[this] = value; }
        }
        [DisplayName("Sexe Insert User Id"), Expression("jSexe.[InsertUserId]")]
        public Int32? SexeInsertUserId
        {
            get { return Fields.SexeInsertUserId[this]; }
            set { Fields.SexeInsertUserId[this] = value; }
        }
        [DisplayName("Sexe Update Date"), Expression("jSexe.[UpdateDate]")]
        public DateTime? SexeUpdateDate
        {
            get { return Fields.SexeUpdateDate[this]; }
            set { Fields.SexeUpdateDate[this] = value; }
        }
        [DisplayName("Sexe Update User Id"), Expression("jSexe.[UpdateUserId]")]
        public Int32? SexeUpdateUserId
        {
            get { return Fields.SexeUpdateUserId[this]; }
            set { Fields.SexeUpdateUserId[this] = value; }
        }
        [DisplayName("Sexe Caption"), Expression("jSexe.[Caption]")]
        public String SexeCaption
        {
            get { return Fields.SexeCaption[this]; }
            set { Fields.SexeCaption[this] = value; }
        }
        [DisplayName("Sexe Civility"), Expression("jSexe.[civility]")]
        public String SexeCivility
        {
            get { return Fields.SexeCivility[this]; }
            set { Fields.SexeCivility[this] = value; }
        }
        #endregion

        #region Marital Status
        [DisplayName("Marital Status Default Value"), Expression("jMaritalStatus.[DefaultValue]")]
        public Boolean? MaritalStatusDefaultValue
        {
            get { return Fields.MaritalStatusDefaultValue[this]; }
            set { Fields.MaritalStatusDefaultValue[this] = value; }
        }
        [DisplayName("Marital Status Is Active"), Expression("jMaritalStatus.[IsActive]")]
        public Boolean? MaritalStatusIsActive
        {
            get { return Fields.MaritalStatusIsActive[this]; }
            set { Fields.MaritalStatusIsActive[this] = value; }
        }
        [DisplayName("Marital Status Insert Date"), Expression("jMaritalStatus.[InsertDate]")]
        public DateTime? MaritalStatusInsertDate
        {
            get { return Fields.MaritalStatusInsertDate[this]; }
            set { Fields.MaritalStatusInsertDate[this] = value; }
        }
        [DisplayName("Marital Status Insert User Id"), Expression("jMaritalStatus.[InsertUserId]")]
        public Int32? MaritalStatusInsertUserId
        {
            get { return Fields.MaritalStatusInsertUserId[this]; }
            set { Fields.MaritalStatusInsertUserId[this] = value; }
        }
        [DisplayName("Marital Status Update Date"), Expression("jMaritalStatus.[UpdateDate]")]
        public DateTime? MaritalStatusUpdateDate
        {
            get { return Fields.MaritalStatusUpdateDate[this]; }
            set { Fields.MaritalStatusUpdateDate[this] = value; }
        }
        [DisplayName("Marital Status Update User Id"), Expression("jMaritalStatus.[UpdateUserId]")]
        public Int32? MaritalStatusUpdateUserId
        {
            get { return Fields.MaritalStatusUpdateUserId[this]; }
            set { Fields.MaritalStatusUpdateUserId[this] = value; }
        }
        [DisplayName("Marital Status Caption"), Expression("jMaritalStatus.[Caption]")]
        public String MaritalStatusCaption
        {
            get { return Fields.MaritalStatusCaption[this]; }
            set { Fields.MaritalStatusCaption[this] = value; }
        }
        [DisplayName("Marital Status Code"), Expression("jMaritalStatus.[Code]")]
        public String MaritalStatusCode
        {
            get { return Fields.MaritalStatusCode[this]; }
            set { Fields.MaritalStatusCode[this] = value; }
        }
        #endregion

        #region Birth City
        [DisplayName("Birth City Default Value"), Expression("jBirthCity.[DefaultValue]")]
        public Boolean? BirthCityDefaultValue
        {
            get { return Fields.BirthCityDefaultValue[this]; }
            set { Fields.BirthCityDefaultValue[this] = value; }
        }
        [DisplayName("Birth City Is Active"), Expression("jBirthCity.[IsActive]")]
        public Boolean? BirthCityIsActive
        {
            get { return Fields.BirthCityIsActive[this]; }
            set { Fields.BirthCityIsActive[this] = value; }
        }
        [DisplayName("Birth City Insert Date"), Expression("jBirthCity.[InsertDate]")]
        public DateTime? BirthCityInsertDate
        {
            get { return Fields.BirthCityInsertDate[this]; }
            set { Fields.BirthCityInsertDate[this] = value; }
        }
        [DisplayName("Birth City Insert User Id"), Expression("jBirthCity.[InsertUserId]")]
        public Int32? BirthCityInsertUserId
        {
            get { return Fields.BirthCityInsertUserId[this]; }
            set { Fields.BirthCityInsertUserId[this] = value; }
        }
        [DisplayName("Birth City Update Date"), Expression("jBirthCity.[UpdateDate]")]
        public DateTime? BirthCityUpdateDate
        {
            get { return Fields.BirthCityUpdateDate[this]; }
            set { Fields.BirthCityUpdateDate[this] = value; }
        }
        [DisplayName("Birth City Update User Id"), Expression("jBirthCity.[UpdateUserId]")]
        public Int32? BirthCityUpdateUserId
        {
            get { return Fields.BirthCityUpdateUserId[this]; }
            set { Fields.BirthCityUpdateUserId[this] = value; }
        }
        [DisplayName("Birth City Fr Code Insee"), Expression("jBirthCity.[FRCodeINSEE]")]
        public String BirthCityFrCodeInsee
        {
            get { return Fields.BirthCityFrCodeInsee[this]; }
            set { Fields.BirthCityFrCodeInsee[this] = value; }
        }
        [DisplayName("Birth City Caption"), Expression("jBirthCity.[Caption]")]
        public String BirthCityCaption
        {
            get { return Fields.BirthCityCaption[this]; }
            set { Fields.BirthCityCaption[this] = value; }
        }
        [DisplayName("Birth City City"), Expression("jBirthCity.[City]")]
        public String BirthCityCity
        {
            get { return Fields.BirthCityCity[this]; }
            set { Fields.BirthCityCity[this] = value; }
        }
        [DisplayName("Birth City Post Code"), Expression("jBirthCity.[PostCode]")]
        public String BirthCityPostCode
        {
            get { return Fields.BirthCityPostCode[this]; }
            set { Fields.BirthCityPostCode[this] = value; }
        }
        [DisplayName("Birth City Country"), Expression("jBirthCity.[Country]")]
        public Int16? BirthCityCountry
        {
            get { return Fields.BirthCityCountry[this]; }
            set { Fields.BirthCityCountry[this] = value; }
        }
        #endregion

        #region Birth country
        [DisplayName("Birth Country Default Value"), Expression("jBirthCountry.[DefaultValue]")]
        public Boolean? BirthCountryDefaultValue
        {
            get { return Fields.BirthCountryDefaultValue[this]; }
            set { Fields.BirthCountryDefaultValue[this] = value; }
        }
        [DisplayName("Birth Country Is Active"), Expression("jBirthCountry.[IsActive]")]
        public Boolean? BirthCountryIsActive
        {
            get { return Fields.BirthCountryIsActive[this]; }
            set { Fields.BirthCountryIsActive[this] = value; }
        }
        [DisplayName("Birth Country Insert Date"), Expression("jBirthCountry.[InsertDate]")]
        public DateTime? BirthCountryInsertDate
        {
            get { return Fields.BirthCountryInsertDate[this]; }
            set { Fields.BirthCountryInsertDate[this] = value; }
        }
        [DisplayName("Birth Country Insert User Id"), Expression("jBirthCountry.[InsertUserId]")]
        public Int32? BirthCountryInsertUserId
        {
            get { return Fields.BirthCountryInsertUserId[this]; }
            set { Fields.BirthCountryInsertUserId[this] = value; }
        }
        [DisplayName("Birth Country Update Date"), Expression("jBirthCountry.[UpdateDate]")]
        public DateTime? BirthCountryUpdateDate
        {
            get { return Fields.BirthCountryUpdateDate[this]; }
            set { Fields.BirthCountryUpdateDate[this] = value; }
        }
        [DisplayName("Birth Country Update User Id"), Expression("jBirthCountry.[UpdateUserId]")]
        public Int32? BirthCountryUpdateUserId
        {
            get { return Fields.BirthCountryUpdateUserId[this]; }
            set { Fields.BirthCountryUpdateUserId[this] = value; }
        }
        [DisplayName("Birth Country FR"), Expression("jBirthCountry.[Name_FR_fr]")]
        public String BirthCountryName_FR_fr
        {
            get { return Fields.BirthCountryName_FR_fr[this]; }
            set { Fields.BirthCountryName_FR_fr[this] = value; }
        }
        [DisplayName("BirthCountry Name EN"), Expression("jBirthCountry.[Name_EN_gb]")]
        public String BirthCountryName_EN_gb
        {
            get { return Fields.BirthCountryName_EN_gb[this]; }
            set { Fields.BirthCountryName_EN_gb[this] = value; }
        }
        [DisplayName("Birth Country Code alpha3"), Expression("jBirthCountry.[alpha3]")]
        public String BirthCountryalpha3
        {
            get { return Fields.BirthCountryalpha3[this]; }
            set { Fields.BirthCountryalpha3[this] = value; }
        }
        [DisplayName("Birth Country alpha2"), Expression("jBirthCountry.[alpha2]")]
        public String BirthCountryalpha2
        {
            get { return Fields.BirthCountryalpha2[this]; }
            set { Fields.BirthCountryalpha2[this] = value; }
        }
        [DisplayName("Birth Country Code Ue"), Expression("jBirthCountry.[CodeUE]")]
        public Int16? BirthCountryCodeUe
        {
            get { return Fields.BirthCountryCodeUe[this]; }
            set { Fields.BirthCountryCodeUe[this] = value; }
        }
        [DisplayName("Birth Country ISOcode"), Expression("jBirthCountry.[ISOcode]")]
        public String BirthCountryISOcode
        {
            get { return Fields.BirthCountryISOcode[this]; }
            set { Fields.BirthCountryISOcode[this] = value; }
        }
        #endregion

        #region nationality
        [DisplayName("Nationality Default Value"), Expression("jNationality.[DefaultValue]")]
        public Boolean? NationalityDefaultValue
        {
            get { return Fields.NationalityDefaultValue[this]; }
            set { Fields.NationalityDefaultValue[this] = value; }
        }
        [DisplayName("Nationality Is Active"), Expression("jNationality.[IsActive]")]
        public Boolean? NationalityIsActive
        {
            get { return Fields.NationalityIsActive[this]; }
            set { Fields.NationalityIsActive[this] = value; }
        }
        [DisplayName("Nationality Insert Date"), Expression("jNationality.[InsertDate]")]
        public DateTime? NationalityInsertDate
        {
            get { return Fields.NationalityInsertDate[this]; }
            set { Fields.NationalityInsertDate[this] = value; }
        }
        [DisplayName("Nationality Insert User Id"), Expression("jNationality.[InsertUserId]")]
        public Int32? NationalityInsertUserId
        {
            get { return Fields.NationalityInsertUserId[this]; }
            set { Fields.NationalityInsertUserId[this] = value; }
        }
        [DisplayName("Nationality Update Date"), Expression("jNationality.[UpdateDate]")]
        public DateTime? NationalityUpdateDate
        {
            get { return Fields.NationalityUpdateDate[this]; }
            set { Fields.NationalityUpdateDate[this] = value; }
        }
        [DisplayName("Nationality Update User Id"), Expression("jNationality.[UpdateUserId]")]
        public Int32? NationalityUpdateUserId
        {
            get { return Fields.NationalityUpdateUserId[this]; }
            set { Fields.NationalityUpdateUserId[this] = value; }
        }
        [DisplayName("Nationality Name FR"), Expression("jNationality.[Name_FR_fr]")]
        public String NationalityName_FR_fr
        {
            get { return Fields.NationalityName_FR_fr[this]; }
            set { Fields.NationalityName_FR_fr[this] = value; }
        }
        [DisplayName("Nationality Name EN"), Expression("jNationality.[Name_EN_gb]")]
        public String NationalityName_EN_gb
        {
            get { return Fields.NationalityName_EN_gb[this]; }
            set { Fields.NationalityName_EN_gb[this] = value; }
        }

        [DisplayName("Nationality alpha3"), Expression("jNationality.[alpha3]")]
        public String Nationalityalpha3
        {
            get { return Fields.Nationalityalpha3[this]; }
            set { Fields.Nationalityalpha3[this] = value; }
        }

        [DisplayName("Nationality alpha2"), Expression("jNationality.[alpha2]")]
        public String Nationalityalpha2
        {
            get { return Fields.Nationalityalpha2[this]; }
            set { Fields.Nationalityalpha2[this] = value; }
        }

        [DisplayName("Nationality Code Ue"), Expression("jNationality.[CodeUe]")]
        public Int16? NationalityCodeUe
        {
            get { return Fields.NationalityCodeUe[this]; }
            set { Fields.NationalityCodeUe[this] = value; }
        }

        [DisplayName("Nationality ISOcode"), Expression("jNationality.[ISOcode]")]
        public String NationalityISOcode
        {
            get { return Fields.NationalityISOcode[this]; }
            set { Fields.NationalityISOcode[this] = value; }
        }
        #endregion

        #region Bankaccount
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
        #endregion

        #region adress
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
        #endregion

        #endregion

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Surname; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ManPersonRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public BooleanField IsMorale;
            public BooleanField IsActive;
            public BooleanField NotArchive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField Surname;
            public StringField Name;
            public StringField MaidenName;
            public StringField BusinessName;
            public DateTimeField Birthday;
            public Int16Field Sexe;
            public Int16Field MaritalStatus;
            public Int64Field BirthCity;
            public Int16Field BirthCountry;
            public Int16Field Nationality;
            public StreamField Photo;
            public StringField Phone;
            public StringField Gsm;
            public StringField WorkPhone;
            public StringField OtherPhone1;
            public StringField OtherPhone2;
            public StringField Email1;
            public StringField Email2;
            public Int64Field BankAccount;
            public Int64Field IdAdress;
            public StringField Caption;
            public DateTimeField ArchiveDate;

            public StringField InsertUsername;
            public StringField UpdateUsername;

            public BooleanField SexeDefaultValue;
            public BooleanField SexeIsActive;
            public DateTimeField SexeInsertDate;
            public Int32Field SexeInsertUserId;
            public DateTimeField SexeUpdateDate;
            public Int32Field SexeUpdateUserId;
            public StringField SexeCaption;
            public StringField SexeCivility;

            public BooleanField MaritalStatusDefaultValue;
            public BooleanField MaritalStatusIsActive;
            public DateTimeField MaritalStatusInsertDate;
            public Int32Field MaritalStatusInsertUserId;
            public DateTimeField MaritalStatusUpdateDate;
            public Int32Field MaritalStatusUpdateUserId;
            public StringField MaritalStatusCaption;
            public StringField MaritalStatusCode;

            public BooleanField BirthCityDefaultValue;
            public BooleanField BirthCityIsActive;
            public DateTimeField BirthCityInsertDate;
            public Int32Field BirthCityInsertUserId;
            public DateTimeField BirthCityUpdateDate;
            public Int32Field BirthCityUpdateUserId;
            public StringField BirthCityFrCodeInsee;
            public StringField BirthCityCaption;
            public StringField BirthCityCity;
            public StringField BirthCityPostCode;
            public Int16Field BirthCityCountry;

            public BooleanField BirthCountryDefaultValue;
            public BooleanField BirthCountryIsActive;
            public DateTimeField BirthCountryInsertDate;
            public Int32Field BirthCountryInsertUserId;
            public DateTimeField BirthCountryUpdateDate;
            public Int32Field BirthCountryUpdateUserId;
            public StringField BirthCountryName_FR_fr;
            public StringField BirthCountryName_EN_gb;
            public StringField BirthCountryalpha3;
            public StringField BirthCountryalpha2;
            public Int16Field BirthCountryCodeUe;
            public StringField BirthCountryISOcode;

            public BooleanField NationalityDefaultValue;
            public BooleanField NationalityIsActive;
            public DateTimeField NationalityInsertDate;
            public Int32Field NationalityInsertUserId;
            public DateTimeField NationalityUpdateDate;
            public Int32Field NationalityUpdateUserId;
            public StringField NationalityName_FR_fr;
            public StringField NationalityName_EN_gb;
            public StringField Nationalityalpha3;
            public StringField Nationalityalpha2;
            public Int16Field NationalityCodeUe;
            public StringField NationalityISOcode;

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
                LocalTextPrefix = "Ge.ManPerson";
            }
        }
    }
}
