
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[SET_UELNORGA]")]
    [DisplayName("Set Uelnorga"), InstanceName("Set Uelnorga"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SetUelnorgaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Default Value"), NotNull, Updatable(false), HideOnInsert]
        public Boolean? DefaultValue
        {
            get { return Fields.DefaultValue[this]; }
            set { Fields.DefaultValue[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Insert Date"), HideOnInsert,Updatable(false), DateTimeFormatter]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id"),HideOnInsert,Updatable(false), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIUser"), TextualField("InsertUsername")]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Update Date"),HideOnInsert, DateTimeFormatter]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Update User Id"),HideOnInsert, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUUser"), TextualField("UpdateUsername")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Organization"), Size(80), QuickSearch]
        public String Organization
        {
            get { return Fields.Organization[this]; }
            set { Fields.Organization[this] = value; }
        }

        [DisplayName("Ueln Code"), Column("UELNCode"), Size(3),LookupInclude]
        public String UelnCode
        {
            get { return Fields.UelnCode[this]; }
            set { Fields.UelnCode[this] = value; }
        }

        [DisplayName("Username"), Expression("jIUser.[Username]")HideOnInsert, Updatable(false)]
        public String InsertUsername
        {
            get { return Fields.InsertUsername[this]; }
            set { Fields.InsertUsername[this] = value; }
        }
        
        [DisplayName("Username"), Expression("jUUser.[Username]")HideOnInsert]
        public String UpdateUsername
        {
            get { return Fields.UpdateUsername[this]; }
            set { Fields.UpdateUsername[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Organization; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SetUelnorgaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public BooleanField DefaultValue;
            public BooleanField IsActive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField Organization;
            public StringField UelnCode;

            public StringField InsertUsername;
            public StringField UpdateUsername;


            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.SetUelnorga";
            }
        }
    }
}
