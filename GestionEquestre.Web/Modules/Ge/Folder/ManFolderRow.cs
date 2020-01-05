
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    //using System.Collections.Generic;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[MAN_FOLDER]")]
    [DisplayName("Folder"), InstanceName("Man Folder"), TwoLevelCached]
    [ReadPermission("Folders:General")]
    [ModifyPermission("Folders:General")]
    //[LookupScript("Ge.Folders")]
    public sealed class ManFolderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity,PrimaryKey, QuickSearch]
        public Int64? Id
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

        [DisplayName("Create Date")]
        public DateTime? CreateDate
        {
            get { return Fields.CreateDate[this]; }
            set { Fields.CreateDate[this] = value; }
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
        [LookupEditor(typeof(Ge.Scripts.CorEtabLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int32? Establishment
        {
            get { return Fields.Establishment[this]; }
            set { Fields.Establishment[this] = value; }
        }

        [DisplayName("Comment"), Size(2000)]
        [TextAreaEditor(Rows = 8)]
        public String Comment
        {
            get { return Fields.Comment[this]; }
            set { Fields.Comment[this] = value; }
        }

        #region others filds

        //[MasterDetailRelation(foreignKey: "Folder", IncludeColumns = "HorseName")]
        //[DisplayName("Cast List"), NotMapped]
        //public List<LinkFolderHorseRow> Horses
        //{
        //    get { return Fields.Horses[this]; }
        //    set { Fields.Horses[this] = value; }
        //}

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
        #endregion

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
            public Int64Field Id;
            public BooleanField IsActive;
            public BooleanField IsArchive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField Caption;
            public DateTimeField ArchiveDate;
            public DateTimeField CreateDate;
            public StringField CloseRaison;
            public DateTimeField CloseDate;
            public Int32Field Establishment;
            public StringField Comment;

            //public readonly RowListField<LinkFolderHorseRow> Horses;

            public StringField InsertUsername;
            public StringField UpdateUsername;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.ManFolder";
            }
        }
    }
}
