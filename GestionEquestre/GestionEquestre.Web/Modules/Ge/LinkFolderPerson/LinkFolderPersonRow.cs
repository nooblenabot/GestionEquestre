
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[LINK_FOLDER_PERSON]")]
    [DisplayName("Link Folder Person"), InstanceName("Link Folder Person"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class LinkFolderPersonRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Folder"), NotNull, ForeignKey("[dbo].[MAN_FOLDER]", "Id"), LeftJoin("jFolder"), TextualField("FolderCaption")]
        //        [LookupEditor(typeof(Ge.Scripts.SexeHorsesLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int64? Folder
        {
            get { return Fields.Folder[this]; }
            set { Fields.Folder[this] = value; }
        }

        [DisplayName("Person"), NotNull, ForeignKey("[dbo].[MAN_PERSON]", "Id"), LeftJoin("jPerson"), TextualField("PersonSurname")]
        [LookupEditor(typeof(Ge.Scripts.SexeHorsesLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int64? PersonId
        {
            get { return Fields.PersonId[this]; }
            set { Fields.PersonId[this] = value; }
        }

        [DisplayName("Caption"), Size(200), QuickSearch]
        public String Caption
        {
            get { return Fields.Caption[this]; }
            set { Fields.Caption[this] = value; }
        }

        [DisplayName("Folder Is Active"), Expression("jFolder.[IsActive]")]
        public Boolean? FolderIsActive
        {
            get { return Fields.FolderIsActive[this]; }
            set { Fields.FolderIsActive[this] = value; }
        }
        [DisplayName("Folder Not Archive"), Expression("jFolder.[NotArchive]")]
        public Boolean? FolderNotArchive
        {
            get { return Fields.FolderNotArchive[this]; }
            set { Fields.FolderNotArchive[this] = value; }
        }
        [DisplayName("Folder Insert Date"), Expression("jFolder.[InsertDate]")]
        public DateTime? FolderInsertDate
        {
            get { return Fields.FolderInsertDate[this]; }
            set { Fields.FolderInsertDate[this] = value; }
        }
        [DisplayName("Folder Insert User Id"), Expression("jFolder.[InsertUserId]")]
        public Int32? FolderInsertUserId
        {
            get { return Fields.FolderInsertUserId[this]; }
            set { Fields.FolderInsertUserId[this] = value; }
        }
        [DisplayName("Folder Update Date"), Expression("jFolder.[UpdateDate]")]
        public DateTime? FolderUpdateDate
        {
            get { return Fields.FolderUpdateDate[this]; }
            set { Fields.FolderUpdateDate[this] = value; }
        }
        [DisplayName("Folder Update User Id"), Expression("jFolder.[UpdateUserId]")]
        public Int32? FolderUpdateUserId
        {
            get { return Fields.FolderUpdateUserId[this]; }
            set { Fields.FolderUpdateUserId[this] = value; }
        }
        [DisplayName("Folder Caption"), Expression("jFolder.[Caption]")]
        public String FolderCaption
        {
            get { return Fields.FolderCaption[this]; }
            set { Fields.FolderCaption[this] = value; }
        }
        [DisplayName("Folder Archive Date"), Expression("jFolder.[ArchiveDate]")]
        public DateTime? FolderArchiveDate
        {
            get { return Fields.FolderArchiveDate[this]; }
            set { Fields.FolderArchiveDate[this] = value; }
        }
        [DisplayName("Folder Number"), Expression("jFolder.[Number]")]
        public Int32? FolderNumber
        {
            get { return Fields.FolderNumber[this]; }
            set { Fields.FolderNumber[this] = value; }
        }
        [DisplayName("Folder Createe Date"), Expression("jFolder.[CreateeDate]")]
        public DateTime? FolderCreateeDate
        {
            get { return Fields.FolderCreateeDate[this]; }
            set { Fields.FolderCreateeDate[this] = value; }
        }
        [DisplayName("Folder Close Raison"), Expression("jFolder.[CloseRaison]")]
        public String FolderCloseRaison
        {
            get { return Fields.FolderCloseRaison[this]; }
            set { Fields.FolderCloseRaison[this] = value; }
        }
        [DisplayName("Folder Close Date"), Expression("jFolder.[CloseDate]")]
        public DateTime? FolderCloseDate
        {
            get { return Fields.FolderCloseDate[this]; }
            set { Fields.FolderCloseDate[this] = value; }
        }
        [DisplayName("Folder Establishment"), Expression("jFolder.[establishment]")]
        public Int32? FolderEstablishment
        {
            get { return Fields.FolderEstablishment[this]; }
            set { Fields.FolderEstablishment[this] = value; }
        }
        [DisplayName("Folder Comment"), Expression("jFolder.[Comment]")]
        public String FolderComment
        {
            get { return Fields.FolderComment[this]; }
            set { Fields.FolderComment[this] = value; }
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
        [DisplayName("Person Not Archive"), Expression("jPerson.[NotArchive]")]
        public Boolean? PersonNotArchive
        {
            get { return Fields.PersonNotArchive[this]; }
            set { Fields.PersonNotArchive[this] = value; }
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
        [DisplayName("Person Surname"), Expression("jPerson.[Surname]")]
        public String PersonSurname
        {
            get { return Fields.PersonSurname[this]; }
            set { Fields.PersonSurname[this] = value; }
        }
        [DisplayName("Person Name"), Expression("jPerson.[Name]")]
        public String PersonName
        {
            get { return Fields.PersonName[this]; }
            set { Fields.PersonName[this] = value; }
        }
        [DisplayName("Person Maiden Name"), Expression("jPerson.[MaidenName]")]
        public String PersonMaidenName
        {
            get { return Fields.PersonMaidenName[this]; }
            set { Fields.PersonMaidenName[this] = value; }
        }
        [DisplayName("Person Business Name"), Expression("jPerson.[BusinessName]")]
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
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Caption; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LinkFolderPersonRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field Folder;
            public Int64Field PersonId;
            public StringField Caption;

            public BooleanField FolderIsActive;
            public BooleanField FolderNotArchive;
            public DateTimeField FolderInsertDate;
            public Int32Field FolderInsertUserId;
            public DateTimeField FolderUpdateDate;
            public Int32Field FolderUpdateUserId;
            public StringField FolderCaption;
            public DateTimeField FolderArchiveDate;
            public Int32Field FolderNumber;
            public DateTimeField FolderCreateeDate;
            public StringField FolderCloseRaison;
            public DateTimeField FolderCloseDate;
            public Int32Field FolderEstablishment;
            public StringField FolderComment;

            public BooleanField PersonIsMorale;
            public BooleanField PersonIsActive;
            public BooleanField PersonNotArchive;
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

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.LinkFolderPerson";
            }
        }
    }
}
