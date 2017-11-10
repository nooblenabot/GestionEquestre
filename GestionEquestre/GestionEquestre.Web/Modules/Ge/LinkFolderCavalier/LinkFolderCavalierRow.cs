
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[LINK_FOLDER_CAVALIER]")]
    [DisplayName("Link Folder Cavalier"), InstanceName("Link Folder Cavalier"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class LinkFolderCavalierRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Folder"), NotNull, ForeignKey("[dbo].[MAN_FOLDER]", "Id"), LeftJoin("jFolder"), TextualField("FolderCaption")]
     //   [LookupEditor(typeof(Ge.Scripts.SexeHorsesLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int32? Folder
        {
            get { return Fields.Folder[this]; }
            set { Fields.Folder[this] = value; }
        }

        [DisplayName("Cavalier"), Size(10), ForeignKey("[dbo].[MAN_CAVALIERS]", "LIC_FFE"), LeftJoin("jCavalier"), QuickSearch, TextualField("CavalierCaption")]
        [LookupEditor(typeof(Ge.Scripts.SexeHorsesLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public String Cavalier
        {
            get { return Fields.Cavalier[this]; }
            set { Fields.Cavalier[this] = value; }
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
        [DisplayName("Cavalier Person"), Expression("jCavalier.[Person]")]
        public Guid? CavalierPerson
        {
            get { return Fields.CavalierPerson[this]; }
            set { Fields.CavalierPerson[this] = value; }
        }
        [DisplayName("Cavalier Is Active"), Expression("jCavalier.[IsActive]")]
        public Boolean? CavalierIsActive
        {
            get { return Fields.CavalierIsActive[this]; }
            set { Fields.CavalierIsActive[this] = value; }
        }
        [DisplayName("Cavalier Not Archive"), Expression("jCavalier.[NotArchive]")]
        public Boolean? CavalierNotArchive
        {
            get { return Fields.CavalierNotArchive[this]; }
            set { Fields.CavalierNotArchive[this] = value; }
        }
        [DisplayName("Cavalier Insert Date"), Expression("jCavalier.[InsertDate]")]
        public DateTime? CavalierInsertDate
        {
            get { return Fields.CavalierInsertDate[this]; }
            set { Fields.CavalierInsertDate[this] = value; }
        }
        [DisplayName("Cavalier Insert User Id"), Expression("jCavalier.[InsertUserId]")]
        public Int32? CavalierInsertUserId
        {
            get { return Fields.CavalierInsertUserId[this]; }
            set { Fields.CavalierInsertUserId[this] = value; }
        }
        [DisplayName("Cavalier Update Date"), Expression("jCavalier.[UpdateDate]")]
        public DateTime? CavalierUpdateDate
        {
            get { return Fields.CavalierUpdateDate[this]; }
            set { Fields.CavalierUpdateDate[this] = value; }
        }
        [DisplayName("Cavalier Update User Id"), Expression("jCavalier.[UpdateUserId]")]
        public Int32? CavalierUpdateUserId
        {
            get { return Fields.CavalierUpdateUserId[this]; }
            set { Fields.CavalierUpdateUserId[this] = value; }
        }
        [DisplayName("Cavalier Milesime Licnece"), Expression("jCavalier.[MilesimeLicnece]")]
        public DateTime? CavalierMilesimeLicnece
        {
            get { return Fields.CavalierMilesimeLicnece[this]; }
            set { Fields.CavalierMilesimeLicnece[this] = value; }
        }
        [DisplayName("Cavalier Niveau Galop"), Expression("jCavalier.[NiveauGalop]")]
        public Int16? CavalierNiveauGalop
        {
            get { return Fields.CavalierNiveauGalop[this]; }
            set { Fields.CavalierNiveauGalop[this] = value; }
        }
        [DisplayName("Cavalier Licence Competition"), Expression("jCavalier.[LicenceCompetition]")]
        public Int16? CavalierLicenceCompetition
        {
            get { return Fields.CavalierLicenceCompetition[this]; }
            set { Fields.CavalierLicenceCompetition[this] = value; }
        }
        [DisplayName("Cavalier Date Certificat Medical"), Expression("jCavalier.[DateCertificatMedical]")]
        public DateTime? CavalierDateCertificatMedical
        {
            get { return Fields.CavalierDateCertificatMedical[this]; }
            set { Fields.CavalierDateCertificatMedical[this] = value; }
        }
        [DisplayName("Cavalier Caption"), Expression("jCavalier.[Caption]")]
        public String CavalierCaption
        {
            get { return Fields.CavalierCaption[this]; }
            set { Fields.CavalierCaption[this] = value; }
        }
        [DisplayName("Cavalier Archive Date"), Expression("jCavalier.[ArchiveDate]")]
        public DateTime? CavalierArchiveDate
        {
            get { return Fields.CavalierArchiveDate[this]; }
            set { Fields.CavalierArchiveDate[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Cavalier; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LinkFolderCavalierRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Folder;
            public StringField Cavalier;

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

            public GuidField CavalierPerson;
            public BooleanField CavalierIsActive;
            public BooleanField CavalierNotArchive;
            public DateTimeField CavalierInsertDate;
            public Int32Field CavalierInsertUserId;
            public DateTimeField CavalierUpdateDate;
            public Int32Field CavalierUpdateUserId;
            public DateTimeField CavalierMilesimeLicnece;
            public Int16Field CavalierNiveauGalop;
            public Int16Field CavalierLicenceCompetition;
            public DateTimeField CavalierDateCertificatMedical;
            public StringField CavalierCaption;
            public DateTimeField CavalierArchiveDate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.LinkFolderCavalier";
            }
        }
    }
}
