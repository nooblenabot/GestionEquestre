
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[MAN_HORSES]")]
    [DisplayName("Man Horses"), InstanceName("Man Horses"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ManHorsesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ueln"), Column("UELN"), Size(15), PrimaryKey, QuickSearch]
        public String Ueln
        {
            get { return Fields.Ueln[this]; }
            set { Fields.Ueln[this] = value; }
        }

        [DisplayName("Sire"), Column("SIRE"), Size(8)]
        public String Sire
        {
            get { return Fields.Sire[this]; }
            set { Fields.Sire[this] = value; }
        }

        [DisplayName("Cle Sire"), Column("CLE_SIRE"), Size(1)]
        public String CleSire
        {
            get { return Fields.CleSire[this]; }
            set { Fields.CleSire[this] = value; }
        }

        [DisplayName("Hnin"), Column("HNIN"), Size(9), NotNull]
        public String Hnin
        {
            get { return Fields.Hnin[this]; }
            set { Fields.Hnin[this] = value; }
        }

        [DisplayName("Birth Country"), NotNull, ForeignKey("[dbo].[SET_COUNTRY]", "Id"), LeftJoin("jBirthCountry"), TextualField("BirthCountryCountry")]
        public Guid? BirthCountry
        {
            get { return Fields.BirthCountry[this]; }
            set { Fields.BirthCountry[this] = value; }
        }

        [DisplayName("Birth Organization"), NotNull, ForeignKey("[dbo].[SET_UELNORGA]", "Id"), LeftJoin("jBirthOrganization"), TextualField("BirthOrganizationOrganization")]
        public Guid? BirthOrganization
        {
            get { return Fields.BirthOrganization[this]; }
            set { Fields.BirthOrganization[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
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

        [DisplayName("Birthday")]
        public DateTime? Birthday
        {
            get { return Fields.Birthday[this]; }
            set { Fields.Birthday[this] = value; }
        }

        [DisplayName("Sexe"), ForeignKey("[dbo].[SET_SEXE]", "SexeId"), LeftJoin("jSexe"), TextualField("SexeCaption")]
        [LookupEditor(typeof(Ge.Scripts.SexeHorsesLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int16? Sexe
        {
            get { return Fields.Sexe[this]; }
            set { Fields.Sexe[this] = value; }
        }

        [DisplayName("Color"), Size(50)]
        public String Color
        {
            get { return Fields.Color[this]; }
            set { Fields.Color[this] = value; }
        }

        [DisplayName("Race"), Size(50)]
        public String Race
        {
            get { return Fields.Race[this]; }
            set { Fields.Race[this] = value; }
        }

        [DisplayName("Transponder"), Size(18)]
        public String Transponder
        {
            get { return Fields.Transponder[this]; }
            set { Fields.Transponder[this] = value; }
        }

        [DisplayName("Final Exit")]
        public DateTime? FinalExit
        {
            get { return Fields.FinalExit[this]; }
            set { Fields.FinalExit[this] = value; }
        }

        [DisplayName("Description"), Size(200)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Archive Date")]
        public DateTime? ArchiveDate
        {
            get { return Fields.ArchiveDate[this]; }
            set { Fields.ArchiveDate[this] = value; }
        }

        [DisplayName("Birth Country Default Value"), Expression("jBirthCountry.[DefaultValue]")]
        public Boolean? BirthCountryDefaultValue
        {
            get { return Fields.BirthCountryDefaultValue[this]; }
            set { Fields.BirthCountryDefaultValue[this] = value; }
        }
        [DisplayName("Birth Country Is Active"), Expression("jBirthCountry.[IsActive]")]
        public Boolean? BirthCountryIsActive
        {
            get { return Fields.BirthCountryIsActive[this]; }
            set { Fields.BirthCountryIsActive[this] = value; }
        }
        [DisplayName("Birth Country Insert Date"), Expression("jBirthCountry.[InsertDate]")]
        public DateTime? BirthCountryInsertDate
        {
            get { return Fields.BirthCountryInsertDate[this]; }
            set { Fields.BirthCountryInsertDate[this] = value; }
        }
        [DisplayName("Birth Country Insert User Id"), Expression("jBirthCountry.[InsertUserId]")]
        public Int32? BirthCountryInsertUserId
        {
            get { return Fields.BirthCountryInsertUserId[this]; }
            set { Fields.BirthCountryInsertUserId[this] = value; }
        }
        [DisplayName("Birth Country Update Date"), Expression("jBirthCountry.[UpdateDate]")]
        public DateTime? BirthCountryUpdateDate
        {
            get { return Fields.BirthCountryUpdateDate[this]; }
            set { Fields.BirthCountryUpdateDate[this] = value; }
        }
        [DisplayName("Birth Country Update User Id"), Expression("jBirthCountry.[UpdateUserId]")]
        public Int32? BirthCountryUpdateUserId
        {
            get { return Fields.BirthCountryUpdateUserId[this]; }
            set { Fields.BirthCountryUpdateUserId[this] = value; }
        }
        [DisplayName("Birth Country Country"), Expression("jBirthCountry.[Country]")]
        public String BirthCountryCountry
        {
            get { return Fields.BirthCountryCountry[this]; }
            set { Fields.BirthCountryCountry[this] = value; }
        }
        [DisplayName("Birth Country Code"), Expression("jBirthCountry.[Code]")]
        public String BirthCountryCode
        {
            get { return Fields.BirthCountryCode[this]; }
            set { Fields.BirthCountryCode[this] = value; }
        }
        [DisplayName("Birth Country Code Ue"), Expression("jBirthCountry.[CodeUE]")]
        public Int16? BirthCountryCodeUe
        {
            get { return Fields.BirthCountryCodeUe[this]; }
            set { Fields.BirthCountryCodeUe[this] = value; }
        }
        [DisplayName("Birth Country Iso3166 Country"), Expression("jBirthCountry.[ISO3166Country]")]
        public String BirthCountryIso3166Country
        {
            get { return Fields.BirthCountryIso3166Country[this]; }
            set { Fields.BirthCountryIso3166Country[this] = value; }
        }
        [DisplayName("Birth Organization Default Value"), Expression("jBirthOrganization.[DefaultValue]")]
        public Boolean? BirthOrganizationDefaultValue
        {
            get { return Fields.BirthOrganizationDefaultValue[this]; }
            set { Fields.BirthOrganizationDefaultValue[this] = value; }
        }
        [DisplayName("Birth Organization Is Active"), Expression("jBirthOrganization.[IsActive]")]
        public Boolean? BirthOrganizationIsActive
        {
            get { return Fields.BirthOrganizationIsActive[this]; }
            set { Fields.BirthOrganizationIsActive[this] = value; }
        }
        [DisplayName("Birth Organization Insert Date"), Expression("jBirthOrganization.[InsertDate]")]
        public DateTime? BirthOrganizationInsertDate
        {
            get { return Fields.BirthOrganizationInsertDate[this]; }
            set { Fields.BirthOrganizationInsertDate[this] = value; }
        }
        [DisplayName("Birth Organization Insert User Id"), Expression("jBirthOrganization.[InsertUserId]")]
        public Int32? BirthOrganizationInsertUserId
        {
            get { return Fields.BirthOrganizationInsertUserId[this]; }
            set { Fields.BirthOrganizationInsertUserId[this] = value; }
        }
        [DisplayName("Birth Organization Update Date"), Expression("jBirthOrganization.[UpdateDate]")]
        public DateTime? BirthOrganizationUpdateDate
        {
            get { return Fields.BirthOrganizationUpdateDate[this]; }
            set { Fields.BirthOrganizationUpdateDate[this] = value; }
        }
        [DisplayName("Birth Organization Update User Id"), Expression("jBirthOrganization.[UpdateUserId]")]
        public Int32? BirthOrganizationUpdateUserId
        {
            get { return Fields.BirthOrganizationUpdateUserId[this]; }
            set { Fields.BirthOrganizationUpdateUserId[this] = value; }
        }
        [DisplayName("Birth Organization Organization"), Expression("jBirthOrganization.[Organization]")]
        public String BirthOrganizationOrganization
        {
            get { return Fields.BirthOrganizationOrganization[this]; }
            set { Fields.BirthOrganizationOrganization[this] = value; }
        }
        [DisplayName("Birth Organization Ueln Organization"), Expression("jBirthOrganization.[UELNOrganization]")]
        public String BirthOrganizationUelnOrganization
        {
            get { return Fields.BirthOrganizationUelnOrganization[this]; }
            set { Fields.BirthOrganizationUelnOrganization[this] = value; }
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
            get { return Fields.Ueln; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Ueln; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ManHorsesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Ueln;
            public StringField Sire;
            public StringField CleSire;
            public StringField Hnin;
            public GuidField BirthCountry;
            public GuidField BirthOrganization;
            public StringField Name;
            public BooleanField IsActive;
            public BooleanField NotArchive;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public DateTimeField Birthday;
            public Int16Field Sexe;
            public StringField Color;
            public StringField Race;
            public StringField Transponder;
            public DateTimeField FinalExit;
            public StringField Description;
            public DateTimeField ArchiveDate;

            public BooleanField BirthCountryDefaultValue;
            public BooleanField BirthCountryIsActive;
            public DateTimeField BirthCountryInsertDate;
            public Int32Field BirthCountryInsertUserId;
            public DateTimeField BirthCountryUpdateDate;
            public Int32Field BirthCountryUpdateUserId;
            public StringField BirthCountryCountry;
            public StringField BirthCountryCode;
            public Int16Field BirthCountryCodeUe;
            public StringField BirthCountryIso3166Country;

            public BooleanField BirthOrganizationDefaultValue;
            public BooleanField BirthOrganizationIsActive;
            public DateTimeField BirthOrganizationInsertDate;
            public Int32Field BirthOrganizationInsertUserId;
            public DateTimeField BirthOrganizationUpdateDate;
            public Int32Field BirthOrganizationUpdateUserId;
            public StringField BirthOrganizationOrganization;
            public StringField BirthOrganizationUelnOrganization;

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
                LocalTextPrefix = "Ge.ManHorses";
            }
        }
    }
}
