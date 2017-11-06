
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[LINK_FOLDER_HORSE]")]
    [DisplayName("Link Folder Horse"), InstanceName("Link Folder Horse"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class LinkFolderHorseRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Folder"), NotNull, ForeignKey("[dbo].[MAN_FOLDER]", "Id"), LeftJoin("jFolder"), TextualField("FolderCaption")]
        public Int32? Folder
        {
            get { return Fields.Folder[this]; }
            set { Fields.Folder[this] = value; }
        }

        [DisplayName("Horse"), Size(15), NotNull, ForeignKey("[dbo].[MAN_HORSES]", "UELN"), LeftJoin("jHorse"), QuickSearch, TextualField("HorseSire")]
        public String Horse
        {
            get { return Fields.Horse[this]; }
            set { Fields.Horse[this] = value; }
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
        [DisplayName("Horse Sire"), Expression("jHorse.[SIRE]")]
        public String HorseSire
        {
            get { return Fields.HorseSire[this]; }
            set { Fields.HorseSire[this] = value; }
        }
        [DisplayName("Horse Cle Sire"), Expression("jHorse.[CLE_SIRE]")]
        public String HorseCleSire
        {
            get { return Fields.HorseCleSire[this]; }
            set { Fields.HorseCleSire[this] = value; }
        }
        [DisplayName("Horse Hnin"), Expression("jHorse.[HNIN]")]
        public String HorseHnin
        {
            get { return Fields.HorseHnin[this]; }
            set { Fields.HorseHnin[this] = value; }
        }
        [DisplayName("Horse Birth Country"), Expression("jHorse.[BirthCountry]")]
        public Guid? HorseBirthCountry
        {
            get { return Fields.HorseBirthCountry[this]; }
            set { Fields.HorseBirthCountry[this] = value; }
        }
        [DisplayName("Horse Birth Organization"), Expression("jHorse.[BirthOrganization]")]
        public Guid? HorseBirthOrganization
        {
            get { return Fields.HorseBirthOrganization[this]; }
            set { Fields.HorseBirthOrganization[this] = value; }
        }
        [DisplayName("Horse Name"), Expression("jHorse.[Name]")]
        public String HorseName
        {
            get { return Fields.HorseName[this]; }
            set { Fields.HorseName[this] = value; }
        }
        [DisplayName("Horse Is Active"), Expression("jHorse.[IsActive]")]
        public Boolean? HorseIsActive
        {
            get { return Fields.HorseIsActive[this]; }
            set { Fields.HorseIsActive[this] = value; }
        }
        [DisplayName("Horse Not Archive"), Expression("jHorse.[NotArchive]")]
        public Boolean? HorseNotArchive
        {
            get { return Fields.HorseNotArchive[this]; }
            set { Fields.HorseNotArchive[this] = value; }
        }
        [DisplayName("Horse Insert Date"), Expression("jHorse.[InsertDate]")]
        public DateTime? HorseInsertDate
        {
            get { return Fields.HorseInsertDate[this]; }
            set { Fields.HorseInsertDate[this] = value; }
        }
        [DisplayName("Horse Insert User Id"), Expression("jHorse.[InsertUserId]")]
        public Int32? HorseInsertUserId
        {
            get { return Fields.HorseInsertUserId[this]; }
            set { Fields.HorseInsertUserId[this] = value; }
        }
        [DisplayName("Horse Update Date"), Expression("jHorse.[UpdateDate]")]
        public DateTime? HorseUpdateDate
        {
            get { return Fields.HorseUpdateDate[this]; }
            set { Fields.HorseUpdateDate[this] = value; }
        }
        [DisplayName("Horse Update User Id"), Expression("jHorse.[UpdateUserId]")]
        public Int32? HorseUpdateUserId
        {
            get { return Fields.HorseUpdateUserId[this]; }
            set { Fields.HorseUpdateUserId[this] = value; }
        }
        [DisplayName("Horse Birthday"), Expression("jHorse.[Birthday]")]
        public DateTime? HorseBirthday
        {
            get { return Fields.HorseBirthday[this]; }
            set { Fields.HorseBirthday[this] = value; }
        }
        [DisplayName("Horse Sexe"), Expression("jHorse.[Sexe]")]
        public Int16? HorseSexe
        {
            get { return Fields.HorseSexe[this]; }
            set { Fields.HorseSexe[this] = value; }
        }
        [DisplayName("Horse Color"), Expression("jHorse.[Color]")]
        public String HorseColor
        {
            get { return Fields.HorseColor[this]; }
            set { Fields.HorseColor[this] = value; }
        }
        [DisplayName("Horse Race"), Expression("jHorse.[Race]")]
        public String HorseRace
        {
            get { return Fields.HorseRace[this]; }
            set { Fields.HorseRace[this] = value; }
        }
        [DisplayName("Horse Transponder"), Expression("jHorse.[Transponder]")]
        public String HorseTransponder
        {
            get { return Fields.HorseTransponder[this]; }
            set { Fields.HorseTransponder[this] = value; }
        }
        [DisplayName("Horse Final Exit"), Expression("jHorse.[FinalExit]")]
        public DateTime? HorseFinalExit
        {
            get { return Fields.HorseFinalExit[this]; }
            set { Fields.HorseFinalExit[this] = value; }
        }
        [DisplayName("Horse Description"), Expression("jHorse.[Description]")]
        public String HorseDescription
        {
            get { return Fields.HorseDescription[this]; }
            set { Fields.HorseDescription[this] = value; }
        }
        [DisplayName("Horse Archive Date"), Expression("jHorse.[ArchiveDate]")]
        public DateTime? HorseArchiveDate
        {
            get { return Fields.HorseArchiveDate[this]; }
            set { Fields.HorseArchiveDate[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Horse; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LinkFolderHorseRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Folder;
            public StringField Horse;

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

            public StringField HorseSire;
            public StringField HorseCleSire;
            public StringField HorseHnin;
            public GuidField HorseBirthCountry;
            public GuidField HorseBirthOrganization;
            public StringField HorseName;
            public BooleanField HorseIsActive;
            public BooleanField HorseNotArchive;
            public DateTimeField HorseInsertDate;
            public Int32Field HorseInsertUserId;
            public DateTimeField HorseUpdateDate;
            public Int32Field HorseUpdateUserId;
            public DateTimeField HorseBirthday;
            public Int16Field HorseSexe;
            public StringField HorseColor;
            public StringField HorseRace;
            public StringField HorseTransponder;
            public DateTimeField HorseFinalExit;
            public StringField HorseDescription;
            public DateTimeField HorseArchiveDate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.LinkFolderHorse";
            }
        }
    }
}
