
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[MAN_OWNER]")]
    [DisplayName("Man Owner"), InstanceName("Man Owner"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ManOwnerRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Horse"), Size(15), NotNull, ForeignKey("[dbo].[MAN_HORSES]", "UELN"), LeftJoin("jHorse"), QuickSearch, TextualField("HorseSire")]
        public String Horse
        {
            get { return Fields.Horse[this]; }
            set { Fields.Horse[this] = value; }
        }

        [DisplayName("Cavalier"), Size(10), ForeignKey("[dbo].[MAN_CAVALIERS]", "LIC_FFE"), LeftJoin("jCavalier"), TextualField("CavalierCaption")]
        public String Cavalier
        {
            get { return Fields.Cavalier[this]; }
            set { Fields.Cavalier[this] = value; }
        }

        [DisplayName("Part")]
        public Single? Part
        {
            get { return Fields.Part[this]; }
            set { Fields.Part[this] = value; }
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
            get { return Fields.Horse; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ManOwnerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Horse;
            public StringField Cavalier;
            public SingleField Part;

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
                LocalTextPrefix = "Ge.ManOwner";
            }
        }
    }
}
