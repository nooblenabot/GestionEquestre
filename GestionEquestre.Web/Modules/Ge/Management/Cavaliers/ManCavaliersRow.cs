
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[MAN_CAVALIERS]")]
    [DisplayName("Cavaliers"), InstanceName("Man Cavaliers"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Ge.Cavaliers")]
    public sealed class ManCavaliersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Lic Ffe"), Column("LIC_FFE"), Size(10), PrimaryKey, QuickSearch]
        public String LicFfe
        {
            get { return Fields.LicFfe[this]; }
            set { Fields.LicFfe[this] = value; }
        }

        [DisplayName("Person"), NotNull, ForeignKey("[dbo].[MAN_PERSON]", "Id"), LeftJoin("jPerson"), TextualField("PersonSurname")]
        [LookupEditor(typeof(Ge.Scripts.ManPersonActiveLookup), MinimumResultsForSearch = 1, InplaceAdd = false),LookupInclude]
        public Int64? Person
        {
            get { return Fields.Person[this]; }
            set { Fields.Person[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("IsArchive"), NotNull]
        public Boolean? IsArchive
        {
            get { return Fields.IsArchive[this]; }
            set { Fields.IsArchive[this] = value; }
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

        [DisplayName("Milesime Licnece")]
        public Int32? MilesimeLicnece
        {
            get { return Fields.MilesimeLicnece[this]; }
            set { Fields.MilesimeLicnece[this] = value; }
        }

        [DisplayName("Niveau Galop"), ForeignKey("[dbo].[SET_GALOP]", "Id"), LeftJoin("jNiveauGalop"), TextualField("NiveauGalopCaption")]
        [LookupEditor(typeof(Ge.Scripts.SetGalopLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int16? NiveauGalop
        {
            get { return Fields.NiveauGalop[this]; }
            set { Fields.NiveauGalop[this] = value; }
        }

        [DisplayName("Licence Competition"), ForeignKey("[dbo].[SET_LFC]", "Id"), LeftJoin("jLicenceCompetition"), TextualField("LicenceCompetitionCaption")]
        [LookupEditor(typeof(Ge.Scripts.SetLfcLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int16? LicenceCompetition
        {
            get { return Fields.LicenceCompetition[this]; }
            set { Fields.LicenceCompetition[this] = value; }
        }

        [DisplayName("Date Certificat Medical")]
        public DateTime? DateCertificatMedical
        {
            get { return Fields.DateCertificatMedical[this]; }
            set { Fields.DateCertificatMedical[this] = value; }
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

        [DisplayName("Username"), Expression("jIUser.[Username]"), HideOnInsert, Updatable(false)]
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

        [DisplayName("Person Is Morale"), Expression("jPerson.[IsMorale]")]
        public Boolean? PersonIsMorale
        {
            get { return Fields.PersonIsMorale[this]; }
            set { Fields.PersonIsMorale[this] = value; }
        }
        [DisplayName("Person Is Active"), Expression("jPerson.[IsActive]")]
        public Boolean? PersonIsActive
        {
            get { return Fields.PersonIsActive[this]; }
            set { Fields.PersonIsActive[this] = value; }
        }
        [DisplayName("Person IsArchive"), Expression("jPerson.[IsArchive]")]
        public Boolean? PersonIsArchive
        {
            get { return Fields.PersonIsArchive[this]; }
            set { Fields.PersonIsArchive[this] = value; }
        }
        [DisplayName("Person Insert Date"), Expression("jPerson.[InsertDate]")]
        public DateTime? PersonInsertDate
        {
            get { return Fields.PersonInsertDate[this]; }
            set { Fields.PersonInsertDate[this] = value; }
        }
        [DisplayName("Person Insert User Id"), Expression("jPerson.[InsertUserId]")]
        public Int32? PersonInsertUserId
        {
            get { return Fields.PersonInsertUserId[this]; }
            set { Fields.PersonInsertUserId[this] = value; }
        }
        [DisplayName("Person Update Date"), Expression("jPerson.[UpdateDate]")]
        public DateTime? PersonUpdateDate
        {
            get { return Fields.PersonUpdateDate[this]; }
            set { Fields.PersonUpdateDate[this] = value; }
        }
        [DisplayName("Person Update User Id"), Expression("jPerson.[UpdateUserId]")]
        public Int32? PersonUpdateUserId
        {
            get { return Fields.PersonUpdateUserId[this]; }
            set { Fields.PersonUpdateUserId[this] = value; }
        }
        [DisplayName("Person Surname"), Expression("jPerson.[Surname]"), LookupInclude]
        public String PersonSurname
        {
            get { return Fields.PersonSurname[this]; }
            set { Fields.PersonSurname[this] = value; }
        }
        [DisplayName("Person Name"), Expression("jPerson.[Name]"),LookupInclude]
        public String PersonName
        {
            get { return Fields.PersonName[this]; }
            set { Fields.PersonName[this] = value; }
        }
        [DisplayName("Person Maiden Name"), Expression("jPerson.[MaidenName]"),LookupInclude]
        public String PersonMaidenName
        {
            get { return Fields.PersonMaidenName[this]; }
            set { Fields.PersonMaidenName[this] = value; }
        }
        [DisplayName("Person Business Name"), Expression("jPerson.[BusinessName]"),LookupInclude]
        public String PersonBusinessName
        {
            get { return Fields.PersonBusinessName[this]; }
            set { Fields.PersonBusinessName[this] = value; }
        }
        [DisplayName("Person Birthday"), Expression("jPerson.[Birthday]")]
        public DateTime? PersonBirthday
        {
            get { return Fields.PersonBirthday[this]; }
            set { Fields.PersonBirthday[this] = value; }
        }
        [DisplayName("Person Sexe"), Expression("jPerson.[Sexe]")]
        public Int16? PersonSexe
        {
            get { return Fields.PersonSexe[this]; }
            set { Fields.PersonSexe[this] = value; }
        }
        [DisplayName("Person Marital Status"), Expression("jPerson.[MaritalStatus]")]
        public Int16? PersonMaritalStatus
        {
            get { return Fields.PersonMaritalStatus[this]; }
            set { Fields.PersonMaritalStatus[this] = value; }
        }
        [DisplayName("Person Birth City"), Expression("jPerson.[BirthCity]")]
        public Int64? PersonBirthCity
        {
            get { return Fields.PersonBirthCity[this]; }
            set { Fields.PersonBirthCity[this] = value; }
        }
        [DisplayName("Person Birth Country"), Expression("jPerson.[BirthCountry]")]
        public Int16? PersonBirthCountry
        {
            get { return Fields.PersonBirthCountry[this]; }
            set { Fields.PersonBirthCountry[this] = value; }
        }
        [DisplayName("Person Nationality"), Expression("jPerson.[nationality]")]
        public Int16? PersonNationality
        {
            get { return Fields.PersonNationality[this]; }
            set { Fields.PersonNationality[this] = value; }
        }
        [DisplayName("Person Photo"), Expression("jPerson.[Photo]")]
        public Stream PersonPhoto
        {
            get { return Fields.PersonPhoto[this]; }
            set { Fields.PersonPhoto[this] = value; }
        }
        [DisplayName("Person Phone"), Expression("jPerson.[Phone]")]
        public String PersonPhone
        {
            get { return Fields.PersonPhone[this]; }
            set { Fields.PersonPhone[this] = value; }
        }
        [DisplayName("Person Gsm"), Expression("jPerson.[GSM]")]
        public String PersonGsm
        {
            get { return Fields.PersonGsm[this]; }
            set { Fields.PersonGsm[this] = value; }
        }
        [DisplayName("Person Work Phone"), Expression("jPerson.[WorkPhone]")]
        public String PersonWorkPhone
        {
            get { return Fields.PersonWorkPhone[this]; }
            set { Fields.PersonWorkPhone[this] = value; }
        }
        [DisplayName("Person Other Phone1"), Expression("jPerson.[OtherPhone1]")]
        public String PersonOtherPhone1
        {
            get { return Fields.PersonOtherPhone1[this]; }
            set { Fields.PersonOtherPhone1[this] = value; }
        }
        [DisplayName("Person Other Phone2"), Expression("jPerson.[OtherPhone2]")]
        public String PersonOtherPhone2
        {
            get { return Fields.PersonOtherPhone2[this]; }
            set { Fields.PersonOtherPhone2[this] = value; }
        }
        [DisplayName("Person Email1"), Expression("jPerson.[Email1]")]
        public String PersonEmail1
        {
            get { return Fields.PersonEmail1[this]; }
            set { Fields.PersonEmail1[this] = value; }
        }
        [DisplayName("Person Email2"), Expression("jPerson.[Email2]")]
        public String PersonEmail2
        {
            get { return Fields.PersonEmail2[this]; }
            set { Fields.PersonEmail2[this] = value; }
        }
        [DisplayName("Person Bank Account"), Expression("jPerson.[BankAccount]")]
        public Int64? PersonBankAccount
        {
            get { return Fields.PersonBankAccount[this]; }
            set { Fields.PersonBankAccount[this] = value; }
        }
        [DisplayName("Person Id Adress"), Expression("jPerson.[IdAdress]")]
        public Int64? PersonIdAdress
        {
            get { return Fields.PersonIdAdress[this]; }
            set { Fields.PersonIdAdress[this] = value; }
        }
        [DisplayName("Person Caption"), Expression("jPerson.[Caption]")]
        public String PersonCaption
        {
            get { return Fields.PersonCaption[this]; }
            set { Fields.PersonCaption[this] = value; }
        }
        [DisplayName("Person Archive Date"), Expression("jPerson.[ArchiveDate]")]
        public DateTime? PersonArchiveDate
        {
            get { return Fields.PersonArchiveDate[this]; }
            set { Fields.PersonArchiveDate[this] = value; }
        }
        [DisplayName("Niveau Galop Default Value"), Expression("jNiveauGalop.[DefaultValue]")]
        public Boolean? NiveauGalopDefaultValue
        {
            get { return Fields.NiveauGalopDefaultValue[this]; }
            set { Fields.NiveauGalopDefaultValue[this] = value; }
        }
        [DisplayName("Niveau Galop Is Active"), Expression("jNiveauGalop.[IsActive]")]
        public Boolean? NiveauGalopIsActive
        {
            get { return Fields.NiveauGalopIsActive[this]; }
            set { Fields.NiveauGalopIsActive[this] = value; }
        }
        [DisplayName("Niveau Galop Insert Date"), Expression("jNiveauGalop.[InsertDate]")]
        public DateTime? NiveauGalopInsertDate
        {
            get { return Fields.NiveauGalopInsertDate[this]; }
            set { Fields.NiveauGalopInsertDate[this] = value; }
        }
        [DisplayName("Niveau Galop Insert User Id"), Expression("jNiveauGalop.[InsertUserId]")]
        public Int32? NiveauGalopInsertUserId
        {
            get { return Fields.NiveauGalopInsertUserId[this]; }
            set { Fields.NiveauGalopInsertUserId[this] = value; }
        }
        [DisplayName("Niveau Galop Update Date"), Expression("jNiveauGalop.[UpdateDate]")]
        public DateTime? NiveauGalopUpdateDate
        {
            get { return Fields.NiveauGalopUpdateDate[this]; }
            set { Fields.NiveauGalopUpdateDate[this] = value; }
        }
        [DisplayName("Niveau Galop Update User Id"), Expression("jNiveauGalop.[UpdateUserId]")]
        public Int32? NiveauGalopUpdateUserId
        {
            get { return Fields.NiveauGalopUpdateUserId[this]; }
            set { Fields.NiveauGalopUpdateUserId[this] = value; }
        }
        [DisplayName("Niveau Galop Caption"), Expression("jNiveauGalop.[Caption]")]
        public String NiveauGalopCaption
        {
            get { return Fields.NiveauGalopCaption[this]; }
            set { Fields.NiveauGalopCaption[this] = value; }
        }
        [DisplayName("Niveau Galop Code"), Expression("jNiveauGalop.[Code]")]
        public String NiveauGalopCode
        {
            get { return Fields.NiveauGalopCode[this]; }
            set { Fields.NiveauGalopCode[this] = value; }
        }
        [DisplayName("Licence Competition Default Value"), Expression("jLicenceCompetition.[DefaultValue]")]
        public Boolean? LicenceCompetitionDefaultValue
        {
            get { return Fields.LicenceCompetitionDefaultValue[this]; }
            set { Fields.LicenceCompetitionDefaultValue[this] = value; }
        }
        [DisplayName("Licence Competition Is Active"), Expression("jLicenceCompetition.[IsActive]")]
        public Boolean? LicenceCompetitionIsActive
        {
            get { return Fields.LicenceCompetitionIsActive[this]; }
            set { Fields.LicenceCompetitionIsActive[this] = value; }
        }
        [DisplayName("Licence Competition Insert Date"), Expression("jLicenceCompetition.[InsertDate]")]
        public DateTime? LicenceCompetitionInsertDate
        {
            get { return Fields.LicenceCompetitionInsertDate[this]; }
            set { Fields.LicenceCompetitionInsertDate[this] = value; }
        }
        [DisplayName("Licence Competition Insert User Id"), Expression("jLicenceCompetition.[InsertUserId]")]
        public Int32? LicenceCompetitionInsertUserId
        {
            get { return Fields.LicenceCompetitionInsertUserId[this]; }
            set { Fields.LicenceCompetitionInsertUserId[this] = value; }
        }
        [DisplayName("Licence Competition Update Date"), Expression("jLicenceCompetition.[UpdateDate]")]
        public DateTime? LicenceCompetitionUpdateDate
        {
            get { return Fields.LicenceCompetitionUpdateDate[this]; }
            set { Fields.LicenceCompetitionUpdateDate[this] = value; }
        }
        [DisplayName("Licence Competition Update User Id"), Expression("jLicenceCompetition.[UpdateUserId]")]
        public Int32? LicenceCompetitionUpdateUserId
        {
            get { return Fields.LicenceCompetitionUpdateUserId[this]; }
            set { Fields.LicenceCompetitionUpdateUserId[this] = value; }
        }
        [DisplayName("Licence Competition Caption"), Expression("jLicenceCompetition.[Caption]")]
        public String LicenceCompetitionCaption
        {
            get { return Fields.LicenceCompetitionCaption[this]; }
            set { Fields.LicenceCompetitionCaption[this] = value; }
        }
        [DisplayName("Licence Competition Code"), Expression("jLicenceCompetition.[Code]")]
        public String LicenceCompetitionCode
        {
            get { return Fields.LicenceCompetitionCode[this]; }
            set { Fields.LicenceCompetitionCode[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.LicFfe; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.LicFfe; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ManCavaliersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField LicFfe;
            public Int64Field Person;
            public BooleanField IsActive;
            public BooleanField IsArchive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int32Field MilesimeLicnece;
            public Int16Field NiveauGalop;
            public Int16Field LicenceCompetition;
            public DateTimeField DateCertificatMedical;
            public StringField Caption;
            public DateTimeField ArchiveDate;

            public StringField InsertUsername;
            public StringField UpdateUsername;

            public BooleanField PersonIsMorale;
            public BooleanField PersonIsActive;
            public BooleanField PersonIsArchive;
            public DateTimeField PersonInsertDate;
            public Int32Field PersonInsertUserId;
            public DateTimeField PersonUpdateDate;
            public Int32Field PersonUpdateUserId;
            public StringField PersonSurname;
            public StringField PersonName;
            public StringField PersonMaidenName;
            public StringField PersonBusinessName;
            public DateTimeField PersonBirthday;
            public Int16Field PersonSexe;
            public Int16Field PersonMaritalStatus;
            public Int64Field PersonBirthCity;
            public Int16Field PersonBirthCountry;
            public Int16Field PersonNationality;
            public StreamField PersonPhoto;
            public StringField PersonPhone;
            public StringField PersonGsm;
            public StringField PersonWorkPhone;
            public StringField PersonOtherPhone1;
            public StringField PersonOtherPhone2;
            public StringField PersonEmail1;
            public StringField PersonEmail2;
            public Int64Field PersonBankAccount;
            public Int64Field PersonIdAdress;
            public StringField PersonCaption;
            public DateTimeField PersonArchiveDate;

            public BooleanField NiveauGalopDefaultValue;
            public BooleanField NiveauGalopIsActive;
            public DateTimeField NiveauGalopInsertDate;
            public Int32Field NiveauGalopInsertUserId;
            public DateTimeField NiveauGalopUpdateDate;
            public Int32Field NiveauGalopUpdateUserId;
            public StringField NiveauGalopCaption;
            public StringField NiveauGalopCode;

            public BooleanField LicenceCompetitionDefaultValue;
            public BooleanField LicenceCompetitionIsActive;
            public DateTimeField LicenceCompetitionInsertDate;
            public Int32Field LicenceCompetitionInsertUserId;
            public DateTimeField LicenceCompetitionUpdateDate;
            public Int32Field LicenceCompetitionUpdateUserId;
            public StringField LicenceCompetitionCaption;
            public StringField LicenceCompetitionCode;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.ManCavaliers";
            }
        }
    }
}
