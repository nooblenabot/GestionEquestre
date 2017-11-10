
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[MAN_FOLDER]")]
    [DisplayName("Man Folder"), InstanceName("Man Folder"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ManFolderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Int32? Id
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

        [DisplayName("Caption"), Size(50), QuickSearch]
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

        [DisplayName("Number"), NotNull]
        public Int32? Number
        {
            get { return Fields.Number[this]; }
            set { Fields.Number[this] = value; }
        }

        [DisplayName("Createe Date")]
        public DateTime? CreateeDate
        {
            get { return Fields.CreateeDate[this]; }
            set { Fields.CreateeDate[this] = value; }
        }

        [DisplayName("Close Raison"), Size(50)]
        public String CloseRaison
        {
            get { return Fields.CloseRaison[this]; }
            set { Fields.CloseRaison[this] = value; }
        }

        [DisplayName("Close Date")]
        public DateTime? CloseDate
        {
            get { return Fields.CloseDate[this]; }
            set { Fields.CloseDate[this] = value; }
        }

        [DisplayName("Establishment"), Column("establishment"), NotNull]
        [LookupEditor(typeof(Ge.Scripts.SexeHorsesLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int32? Establishment
        {
            get { return Fields.Establishment[this]; }
            set { Fields.Establishment[this] = value; }
        }

        [DisplayName("Comment"), Size(200)]
        public String Comment
        {
            get { return Fields.Comment[this]; }
            set { Fields.Comment[this] = value; }
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

        public ManFolderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public BooleanField IsActive;
            public BooleanField NotArchive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField Caption;
            public DateTimeField ArchiveDate;
            public Int32Field Number;
            public DateTimeField CreateeDate;
            public StringField CloseRaison;
            public DateTimeField CloseDate;
            public Int32Field Establishment;
            public StringField Comment;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.ManFolder";
            }
        }
    }
}
