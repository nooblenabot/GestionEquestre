
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[MAN_ADRESS]")]
    [DisplayName("Man Adress"), InstanceName("Man Adress"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ManAdressRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Guid? Id
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

        [DisplayName("Adress 1"), Column("Adress_1"), Size(50), QuickSearch]
        public String Adress1
        {
            get { return Fields.Adress1[this]; }
            set { Fields.Adress1[this] = value; }
        }

        [DisplayName("Adress 2"), Column("Adress_2"), Size(50)]
        public String Adress2
        {
            get { return Fields.Adress2[this]; }
            set { Fields.Adress2[this] = value; }
        }

        [DisplayName("Adress 3"), Column("Adress_3"), Size(50)]
        public String Adress3
        {
            get { return Fields.Adress3[this]; }
            set { Fields.Adress3[this] = value; }
        }

        [DisplayName("City"), ForeignKey("[dbo].[SET_CITY]", "Id"), LeftJoin("jCity"), TextualField("CityFrCodeInsee")]
        public Guid? City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Country"), ForeignKey("[dbo].[SET_COUNTRY]", "Id"), LeftJoin("jCountry"), TextualField("Country1")]
        public Guid? Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Cedex"), Size(50)]
        public String Cedex
        {
            get { return Fields.Cedex[this]; }
            set { Fields.Cedex[this] = value; }
        }

        [DisplayName("Building"), Column("building"), Size(20)]
        public String Building
        {
            get { return Fields.Building[this]; }
            set { Fields.Building[this] = value; }
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

        [DisplayName("City Default Value"), Expression("jCity.[DefaultValue]")]
        public Boolean? CityDefaultValue
        {
            get { return Fields.CityDefaultValue[this]; }
            set { Fields.CityDefaultValue[this] = value; }
        }
        [DisplayName("City Is Active"), Expression("jCity.[IsActive]")]
        public Boolean? CityIsActive
        {
            get { return Fields.CityIsActive[this]; }
            set { Fields.CityIsActive[this] = value; }
        }
        [DisplayName("City Read Only"), Expression("jCity.[ReadOnly]")]
        public Boolean? CityReadOnly
        {
            get { return Fields.CityReadOnly[this]; }
            set { Fields.CityReadOnly[this] = value; }
        }
        [DisplayName("City Insert Date"), Expression("jCity.[InsertDate]")]
        public DateTime? CityInsertDate
        {
            get { return Fields.CityInsertDate[this]; }
            set { Fields.CityInsertDate[this] = value; }
        }
        [DisplayName("City Insert User Id"), Expression("jCity.[InsertUserId]")]
        public Int32? CityInsertUserId
        {
            get { return Fields.CityInsertUserId[this]; }
            set { Fields.CityInsertUserId[this] = value; }
        }
        [DisplayName("City Update Date"), Expression("jCity.[UpdateDate]")]
        public DateTime? CityUpdateDate
        {
            get { return Fields.CityUpdateDate[this]; }
            set { Fields.CityUpdateDate[this] = value; }
        }
        [DisplayName("City Update User Id"), Expression("jCity.[UpdateUserId]")]
        public Int32? CityUpdateUserId
        {
            get { return Fields.CityUpdateUserId[this]; }
            set { Fields.CityUpdateUserId[this] = value; }
        }
        [DisplayName("City Fr Code Insee"), Expression("jCity.[FRCodeINSEE]")]
        public String CityFrCodeInsee
        {
            get { return Fields.CityFrCodeInsee[this]; }
            set { Fields.CityFrCodeInsee[this] = value; }
        }
        [DisplayName("City Caption"), Expression("jCity.[Caption]")]
        public String CityCaption
        {
            get { return Fields.CityCaption[this]; }
            set { Fields.CityCaption[this] = value; }
        }
        [DisplayName("City"), Expression("jCity.[City]")]
        public String City1
        {
            get { return Fields.City1[this]; }
            set { Fields.City1[this] = value; }
        }
        [DisplayName("City Post Code"), Expression("jCity.[PostCode]")]
        public String CityPostCode
        {
            get { return Fields.CityPostCode[this]; }
            set { Fields.CityPostCode[this] = value; }
        }
        [DisplayName("City Country"), Expression("jCity.[Country]")]
        public Guid? CityCountry
        {
            get { return Fields.CityCountry[this]; }
            set { Fields.CityCountry[this] = value; }
        }
        [DisplayName("Country Default Value"), Expression("jCountry.[DefaultValue]")]
        public Boolean? CountryDefaultValue
        {
            get { return Fields.CountryDefaultValue[this]; }
            set { Fields.CountryDefaultValue[this] = value; }
        }
        [DisplayName("Country Is Active"), Expression("jCountry.[IsActive]")]
        public Boolean? CountryIsActive
        {
            get { return Fields.CountryIsActive[this]; }
            set { Fields.CountryIsActive[this] = value; }
        }
        [DisplayName("Country Read Only"), Expression("jCountry.[ReadOnly]")]
        public Boolean? CountryReadOnly
        {
            get { return Fields.CountryReadOnly[this]; }
            set { Fields.CountryReadOnly[this] = value; }
        }
        [DisplayName("Country Insert Date"), Expression("jCountry.[InsertDate]")]
        public DateTime? CountryInsertDate
        {
            get { return Fields.CountryInsertDate[this]; }
            set { Fields.CountryInsertDate[this] = value; }
        }
        [DisplayName("Country Insert User Id"), Expression("jCountry.[InsertUserId]")]
        public Int32? CountryInsertUserId
        {
            get { return Fields.CountryInsertUserId[this]; }
            set { Fields.CountryInsertUserId[this] = value; }
        }
        [DisplayName("Country Update Date"), Expression("jCountry.[UpdateDate]")]
        public DateTime? CountryUpdateDate
        {
            get { return Fields.CountryUpdateDate[this]; }
            set { Fields.CountryUpdateDate[this] = value; }
        }
        [DisplayName("Country Update User Id"), Expression("jCountry.[UpdateUserId]")]
        public Int32? CountryUpdateUserId
        {
            get { return Fields.CountryUpdateUserId[this]; }
            set { Fields.CountryUpdateUserId[this] = value; }
        }
        [DisplayName("Country"), Expression("jCountry.[Country]")]
        public String Country1
        {
            get { return Fields.Country1[this]; }
            set { Fields.Country1[this] = value; }
        }
        [DisplayName("Country Code"), Expression("jCountry.[Code]")]
        public String CountryCode
        {
            get { return Fields.CountryCode[this]; }
            set { Fields.CountryCode[this] = value; }
        }
        [DisplayName("Country Code Ue"), Expression("jCountry.[CodeUE]")]
        public Int16? CountryCodeUe
        {
            get { return Fields.CountryCodeUe[this]; }
            set { Fields.CountryCodeUe[this] = value; }
        }
        [DisplayName("Country Iso3166 Country"), Expression("jCountry.[ISO3166Country]")]
        public String CountryIso3166Country
        {
            get { return Fields.CountryIso3166Country[this]; }
            set { Fields.CountryIso3166Country[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Adress1; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ManAdressRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public GuidField Id;
            public BooleanField IsActive;
            public BooleanField NotArchive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public StringField Adress1;
            public StringField Adress2;
            public StringField Adress3;
            public GuidField City;
            public GuidField Country;
            public StringField Cedex;
            public StringField Building;
            public StringField Caption;
            public DateTimeField ArchiveDate;

            public BooleanField CityDefaultValue;
            public BooleanField CityIsActive;
            public BooleanField CityReadOnly;
            public DateTimeField CityInsertDate;
            public Int32Field CityInsertUserId;
            public DateTimeField CityUpdateDate;
            public Int32Field CityUpdateUserId;
            public StringField CityFrCodeInsee;
            public StringField CityCaption;
            public StringField City1;
            public StringField CityPostCode;
            public GuidField CityCountry;

            public BooleanField CountryDefaultValue;
            public BooleanField CountryIsActive;
            public BooleanField CountryReadOnly;
            public DateTimeField CountryInsertDate;
            public Int32Field CountryInsertUserId;
            public DateTimeField CountryUpdateDate;
            public Int32Field CountryUpdateUserId;
            public StringField Country1;
            public StringField CountryCode;
            public Int16Field CountryCodeUe;
            public StringField CountryIso3166Country;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.ManAdress";
            }
        }
    }
}
