
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[SET_SEXE]")]
    [DisplayName("Settings Sexe"), InstanceName("Set Sexe"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SetSexeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sexe Id"), PrimaryKey,LookupInclude]
        public Int16? SexeId
        {
            get { return Fields.SexeId[this]; }
            set { Fields.SexeId[this] = value; }
        }

        [DisplayName("Default Value"), NotNull, Updatable(false), Insertable(false)]
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

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull, Updatable(false)]
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

        [DisplayName("Caption"), Size(50), LookupInclude, QuickSearch]
        public String Caption
        {
            get { return Fields.Caption[this]; }
            set { Fields.Caption[this] = value; }
        }

        [DisplayName("Civility"), Column("civility"), Size(50)]
        public String Civility
        {
            get { return Fields.Civility[this]; }
            set { Fields.Civility[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SexeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Caption; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SetSexeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field SexeId;
            public BooleanField DefaultValue;
            public BooleanField IsActive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField Caption;
            public StringField Civility;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.SetSexe";
            }
        }
    }
}
