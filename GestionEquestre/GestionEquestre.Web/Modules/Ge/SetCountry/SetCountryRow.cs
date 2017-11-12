
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[SET_COUNTRY]")]
    [DisplayName("Set Country"), InstanceName("Set Country"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SetCountryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Int16? Id
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

        [DisplayName("Name FR"), Size(50), QuickSearch]
        public String Name_FR_fr
        {
            get { return Fields.Name_FR_fr[this]; }
            set { Fields.Name_FR_fr[this] = value; }
        }

        [DisplayName("Name EN"), Size(50), QuickSearch]
        public String Name_EN_gb
        {
            get { return Fields.Name_EN_gb[this]; }
            set { Fields.Name_EN_gb[this] = value; }
        }

                [DisplayName("alpha3"), Size(3), NotNull]
        public String alpha3
        {
            get { return Fields.alpha3[this]; }
            set { Fields.alpha3[this] = value; }
        }

        [DisplayName("alpha2"), Size(2), NotNull]
        public String alpha2
        {
            get { return Fields.alpha2[this]; }
            set { Fields.alpha2[this] = value; }
        }

        [DisplayName("Code Ue"), Column("CodeUE")]
        public Int16? CodeUe
        {
            get { return Fields.CodeUe[this]; }
            set { Fields.CodeUe[this] = value; }
        }

        [DisplayName("ISOcode"), Column("ISOcode"), Size(3),LookupInclude]
        public String ISOcode
        {
            get { return Fields.ISOcode[this]; }
            set { Fields.ISOcode[this] = value; }
        }

        [DisplayName("Username"), Expression("jIUser.[Username]")]
        public String InsertUsername
        {
            get { return Fields.InsertUsername[this]; }
            set { Fields.InsertUsername[this] = value; }
        }

        [DisplayName("Username"), Expression("jUUser.[Username]")]
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
            get { return Fields.Name_FR_fr; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SetCountryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field Id;
            public BooleanField DefaultValue;
            public BooleanField IsActive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField Name_FR_fr;
            public StringField Name_EN_gb; 
            public StringField alpha3;
            public StringField alpha2;
            public Int16Field CodeUe;
            public StringField ISOcode;

            public StringField InsertUsername;
            public StringField UpdateUsername;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.SetCountry";
            }
        }
    }
}
