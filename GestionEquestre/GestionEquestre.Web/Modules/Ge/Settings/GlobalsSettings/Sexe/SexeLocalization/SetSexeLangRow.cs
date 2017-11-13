
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[SET_SEXELang]")]
    [DisplayName("Set Sexe Lang"), InstanceName("Set Sexe Lang"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SetSexeLangRow : Row, IIdRow, INameRow, ILocalizationRow
    {

        [DisplayName("Id"), Identity]
        public Int16? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Sexe"), NotNull, ForeignKey("[dbo].[SET_SEXE]", "SexeId"), LeftJoin("jSexe"), TextualField("SexeCaption")]
        public Int16? SexeId
        {
            get { return Fields.SexeId[this]; }
            set { Fields.SexeId[this] = value; }
        }

        [DisplayName("Language Id"), NotNull]
        public Int16? LanguageId
        {
            get { return Fields.LanguageId[this]; }
            set { Fields.LanguageId[this] = value; }
        }

        [DisplayName("Caption"), Size(50), QuickSearch]
        public String Caption
        {
            get { return Fields.Caption[this]; }
            set { Fields.Caption[this] = value; }
        }

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
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Caption; }
        }

        public Field CultureIdField
        {
            get { return Fields.LanguageId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SetSexeLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field Id;
            public Int16Field SexeId;
            public Int16Field LanguageId;
            public StringField Caption;

            public BooleanField SexeDefaultValue;
            public BooleanField SexeIsActive;
            public DateTimeField SexeInsertDate;
            public Int32Field SexeInsertUserId;
            public DateTimeField SexeUpdateDate;
            public Int32Field SexeUpdateUserId;
            public StringField SexeCaption;
            public StringField SexeCivility;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.SetSexeLang";
            }
        }
    }
}
