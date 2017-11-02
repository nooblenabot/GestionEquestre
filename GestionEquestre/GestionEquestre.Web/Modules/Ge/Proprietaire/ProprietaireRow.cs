
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), DisplayName("Proprietaire"), InstanceName("Proprietaire"), TwoLevelCached]
    [ReadPermission("Ge:PROPRIETAIRE:Read")]
    [InsertPermission("Ge:PROPRIETAIRE:Insert")]
    [UpdatePermission("Ge:PROPRIETAIRE:Update")]
    [DeletePermission("Ge:PROPRIETAIRE:Delete")]
    [LookupScript("Ge.Proprietaire")]
    public sealed class ProprietaireRow : Row, IIdRow, INameRow
    {        
            #region Id
            [DisplayName("Id"), Identity]
            public Int32? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
            public partial class RowFields { public Int32Field Id; }
            #endregion Id
                
            #region Cheval
            [DisplayName("Cheval"), Size(15), NotNull, ForeignKey("[dbo].[CHEVAUX]", "UELN"), LeftJoin("jCheval"), QuickSearch, TextualField("ChevalSire")]
            [LookupEditor(typeof(Ge.Entities.ChevauxRow), InplaceAdd = true)]
            public String Cheval { get { return Fields.Cheval[this]; } set { Fields.Cheval[this] = value; } }
            public partial class RowFields { public StringField Cheval; }
            #endregion Cheval
                
            #region Cavalier
            [DisplayName("Cavalier"), Size(10), ForeignKey("[dbo].[CAVALIERS]", "LIC_FFE"), LeftJoin("jCavalier"), TextualField("CavalierDescription")]
            [LookupEditor(typeof(Ge.Entities.CavaliersRow), InplaceAdd = true)]
            public String Cavalier { get { return Fields.Cavalier[this]; } set { Fields.Cavalier[this] = value; } }
            public partial class RowFields { public StringField Cavalier; }
            #endregion Cavalier
                
            #region Part
            [DisplayName("Part")]
            public Single? Part { get { return Fields.Part[this]; } set { Fields.Part[this] = value; } }
            public partial class RowFields { public SingleField Part; }
            #endregion Part
        

    #region Foreign Fields
            
                [DisplayName("Cheval Sire"), Expression("jCheval.[SIRE]")]
                public String ChevalSire { get { return Fields.ChevalSire[this]; } set { Fields.ChevalSire[this] = value; } }
                public partial class RowFields { public StringField ChevalSire; }

                        
                [DisplayName("Cheval Cle Sire"), Expression("jCheval.[CLE_SIRE]")]
                public String ChevalCleSire { get { return Fields.ChevalCleSire[this]; } set { Fields.ChevalCleSire[this] = value; } }
                public partial class RowFields { public StringField ChevalCleSire; }

                        
                [DisplayName("Cheval Name"), Expression("jCheval.[Name]")]
                public String ChevalName { get { return Fields.ChevalName[this]; } set { Fields.ChevalName[this] = value; } }
                public partial class RowFields { public StringField ChevalName; }

                        
                [DisplayName("Cheval Is Active"), Expression("jCheval.[IsActive]")]
                public Boolean? ChevalIsActive { get { return Fields.ChevalIsActive[this]; } set { Fields.ChevalIsActive[this] = value; } }
                public partial class RowFields { public BooleanField ChevalIsActive; }

                        
                [DisplayName("Cheval Not Archive"), Expression("jCheval.[NotArchive]")]
                public Boolean? ChevalNotArchive { get { return Fields.ChevalNotArchive[this]; } set { Fields.ChevalNotArchive[this] = value; } }
                public partial class RowFields { public BooleanField ChevalNotArchive; }

                        
                [DisplayName("Cheval Insert Date"), Expression("jCheval.[InsertDate]")]
                public DateTime? ChevalInsertDate { get { return Fields.ChevalInsertDate[this]; } set { Fields.ChevalInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField ChevalInsertDate; }

                        
                [DisplayName("Cheval Insert User Id"), Expression("jCheval.[InsertUserId]")]
                public Int32? ChevalInsertUserId { get { return Fields.ChevalInsertUserId[this]; } set { Fields.ChevalInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field ChevalInsertUserId; }

                        
                [DisplayName("Cheval Update Date"), Expression("jCheval.[UpdateDate]")]
                public DateTime? ChevalUpdateDate { get { return Fields.ChevalUpdateDate[this]; } set { Fields.ChevalUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField ChevalUpdateDate; }

                        
                [DisplayName("Cheval Update User Id"), Expression("jCheval.[UpdateUserId]")]
                public Int32? ChevalUpdateUserId { get { return Fields.ChevalUpdateUserId[this]; } set { Fields.ChevalUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field ChevalUpdateUserId; }

                        
                [DisplayName("Cheval Birthday"), Expression("jCheval.[Birthday]")]
                public DateTime? ChevalBirthday { get { return Fields.ChevalBirthday[this]; } set { Fields.ChevalBirthday[this] = value; } }
                public partial class RowFields { public DateTimeField ChevalBirthday; }

                        
                [DisplayName("Cheval Sexe"), Expression("jCheval.[Sexe]")]
                public Int16? ChevalSexe { get { return Fields.ChevalSexe[this]; } set { Fields.ChevalSexe[this] = value; } }
                public partial class RowFields { public Int16Field ChevalSexe; }

                        
                [DisplayName("Cheval Robe"), Expression("jCheval.[Robe]")]
                public String ChevalRobe { get { return Fields.ChevalRobe[this]; } set { Fields.ChevalRobe[this] = value; } }
                public partial class RowFields { public StringField ChevalRobe; }

                        
                [DisplayName("Cheval Transpondeur"), Expression("jCheval.[Transpondeur]")]
                public String ChevalTranspondeur { get { return Fields.ChevalTranspondeur[this]; } set { Fields.ChevalTranspondeur[this] = value; } }
                public partial class RowFields { public StringField ChevalTranspondeur; }

                        
                [DisplayName("Cheval Sortie Definitive"), Expression("jCheval.[SortieDefinitive]")]
                public DateTime? ChevalSortieDefinitive { get { return Fields.ChevalSortieDefinitive[this]; } set { Fields.ChevalSortieDefinitive[this] = value; } }
                public partial class RowFields { public DateTimeField ChevalSortieDefinitive; }

                        
                [DisplayName("Cheval Description"), Expression("jCheval.[Description]")]
                public String ChevalDescription { get { return Fields.ChevalDescription[this]; } set { Fields.ChevalDescription[this] = value; } }
                public partial class RowFields { public StringField ChevalDescription; }

                        
                [DisplayName("Cheval Archive Date"), Expression("jCheval.[ArchiveDate]")]
                public DateTime? ChevalArchiveDate { get { return Fields.ChevalArchiveDate[this]; } set { Fields.ChevalArchiveDate[this] = value; } }
                public partial class RowFields { public DateTimeField ChevalArchiveDate; }

                        
                [DisplayName("Cavalier Personne"), Expression("jCavalier.[Personne]")]
                public Guid? CavalierPersonne { get { return Fields.CavalierPersonne[this]; } set { Fields.CavalierPersonne[this] = value; } }
                public partial class RowFields { public GuidField CavalierPersonne; }

                        
                [DisplayName("Cavalier Is Active"), Expression("jCavalier.[IsActive]")]
                public Boolean? CavalierIsActive { get { return Fields.CavalierIsActive[this]; } set { Fields.CavalierIsActive[this] = value; } }
                public partial class RowFields { public BooleanField CavalierIsActive; }

                        
                [DisplayName("Cavalier Not Archive"), Expression("jCavalier.[NotArchive]")]
                public Boolean? CavalierNotArchive { get { return Fields.CavalierNotArchive[this]; } set { Fields.CavalierNotArchive[this] = value; } }
                public partial class RowFields { public BooleanField CavalierNotArchive; }

                        
                [DisplayName("Cavalier Insert Date"), Expression("jCavalier.[InsertDate]")]
                public DateTime? CavalierInsertDate { get { return Fields.CavalierInsertDate[this]; } set { Fields.CavalierInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField CavalierInsertDate; }

                        
                [DisplayName("Cavalier Insert User Id"), Expression("jCavalier.[InsertUserId]")]
                public Int32? CavalierInsertUserId { get { return Fields.CavalierInsertUserId[this]; } set { Fields.CavalierInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field CavalierInsertUserId; }

                        
                [DisplayName("Cavalier Update Date"), Expression("jCavalier.[UpdateDate]")]
                public DateTime? CavalierUpdateDate { get { return Fields.CavalierUpdateDate[this]; } set { Fields.CavalierUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField CavalierUpdateDate; }

                        
                [DisplayName("Cavalier Update User Id"), Expression("jCavalier.[UpdateUserId]")]
                public Int32? CavalierUpdateUserId { get { return Fields.CavalierUpdateUserId[this]; } set { Fields.CavalierUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field CavalierUpdateUserId; }

                        
                [DisplayName("Cavalier Milesime Licnece"), Expression("jCavalier.[MilesimeLicnece]")]
                public DateTime? CavalierMilesimeLicnece { get { return Fields.CavalierMilesimeLicnece[this]; } set { Fields.CavalierMilesimeLicnece[this] = value; } }
                public partial class RowFields { public DateTimeField CavalierMilesimeLicnece; }

                        
                [DisplayName("Cavalier Niveau Galop"), Expression("jCavalier.[NiveauGalop]")]
                public Int16? CavalierNiveauGalop { get { return Fields.CavalierNiveauGalop[this]; } set { Fields.CavalierNiveauGalop[this] = value; } }
                public partial class RowFields { public Int16Field CavalierNiveauGalop; }

                        
                [DisplayName("Cavalier Licence Competition"), Expression("jCavalier.[LicenceCompetition]")]
                public Int16? CavalierLicenceCompetition { get { return Fields.CavalierLicenceCompetition[this]; } set { Fields.CavalierLicenceCompetition[this] = value; } }
                public partial class RowFields { public Int16Field CavalierLicenceCompetition; }

                        
                [DisplayName("Cavalier Date Certificat Medical"), Expression("jCavalier.[DateCertificatMedical]")]
                public DateTime? CavalierDateCertificatMedical { get { return Fields.CavalierDateCertificatMedical[this]; } set { Fields.CavalierDateCertificatMedical[this] = value; } }
                public partial class RowFields { public DateTimeField CavalierDateCertificatMedical; }

                        
                [DisplayName("Cavalier Description"), Expression("jCavalier.[Description]")]
                public String CavalierDescription { get { return Fields.CavalierDescription[this]; } set { Fields.CavalierDescription[this] = value; } }
                public partial class RowFields { public StringField CavalierDescription; }

                        
                [DisplayName("Cavalier Archive Date"), Expression("jCavalier.[ArchiveDate]")]
                public DateTime? CavalierArchiveDate { get { return Fields.CavalierArchiveDate[this]; } set { Fields.CavalierArchiveDate[this] = value; } }
                public partial class RowFields { public DateTimeField CavalierArchiveDate; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.Id; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Cheval; }
            }
            #endregion Id and Name fields

    #region Constructor
    public ProprietaireRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[PROPRIETAIRE]")
    {
    LocalTextPrefix = "Ge.Proprietaire";
    }
    }
    #endregion RowFields
    }
    }
