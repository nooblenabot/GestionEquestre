
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), DisplayName("Cavaliers"), InstanceName("Cavaliers"), TwoLevelCached]
    [ReadPermission("Ge:CAVALIERS:Read")]
    [InsertPermission("Ge:CAVALIERS:Insert")]
    [UpdatePermission("Ge:CAVALIERS:Update")]
    [DeletePermission("Ge:CAVALIERS:Delete")]
    [LookupScript("Ge.Cavaliers")]
    public sealed class CavaliersRow : Row, IIdRow, INameRow
    {        
            #region Lic Ffe
            [DisplayName("Lic Ffe"), Column("LIC_FFE"), Size(10), PrimaryKey, QuickSearch]
            public String LicFfe { get { return Fields.LicFfe[this]; } set { Fields.LicFfe[this] = value; } }
            public partial class RowFields { public StringField LicFfe; }
            #endregion LicFfe
                
            #region Personne
            [DisplayName("Personne"), NotNull, ForeignKey("[dbo].[PERSONNE]", "Id"), LeftJoin("jPersonne"), TextualField("PersonneNom")]
            [LookupEditor(typeof(Ge.Entities.PersonneRow), InplaceAdd = true)]
            public Guid? Personne { get { return Fields.Personne[this]; } set { Fields.Personne[this] = value; } }
            public partial class RowFields { public GuidField Personne; }
            #endregion Personne
                
            #region Is Active
            [DisplayName("Is Active"), NotNull]
            public Boolean? IsActive { get { return Fields.IsActive[this]; } set { Fields.IsActive[this] = value; } }
            public partial class RowFields { public BooleanField IsActive; }
            #endregion IsActive
                
            #region Not Archive
            [DisplayName("Not Archive"), NotNull]
            public Boolean? NotArchive { get { return Fields.NotArchive[this]; } set { Fields.NotArchive[this] = value; } }
            public partial class RowFields { public BooleanField NotArchive; }
            #endregion NotArchive
                
            #region Insert Date
            [DisplayName("Insert Date"), NotNull]
            public DateTime? InsertDate { get { return Fields.InsertDate[this]; } set { Fields.InsertDate[this] = value; } }
            public partial class RowFields { public DateTimeField InsertDate; }
            #endregion InsertDate
                
            #region Insert User Id
            [DisplayName("Insert User Id"), NotNull]
            public Int32? InsertUserId { get { return Fields.InsertUserId[this]; } set { Fields.InsertUserId[this] = value; } }
            public partial class RowFields { public Int32Field InsertUserId; }
            #endregion InsertUserId
                
            #region Update Date
            [DisplayName("Update Date")]
            public DateTime? UpdateDate { get { return Fields.UpdateDate[this]; } set { Fields.UpdateDate[this] = value; } }
            public partial class RowFields { public DateTimeField UpdateDate; }
            #endregion UpdateDate
                
            #region Update User Id
            [DisplayName("Update User Id")]
            public Int32? UpdateUserId { get { return Fields.UpdateUserId[this]; } set { Fields.UpdateUserId[this] = value; } }
            public partial class RowFields { public Int32Field UpdateUserId; }
            #endregion UpdateUserId
                
            #region Milesime Licnece
            [DisplayName("Milesime Licnece")]
            public DateTime? MilesimeLicnece { get { return Fields.MilesimeLicnece[this]; } set { Fields.MilesimeLicnece[this] = value; } }
            public partial class RowFields { public DateTimeField MilesimeLicnece; }
            #endregion MilesimeLicnece
                
            #region Niveau Galop
            [DisplayName("Niveau Galop"), ForeignKey("[dbo].[CODE_GALOP]", "Id"), LeftJoin("jNiveauGalop"), TextualField("NiveauGalopLibele")]
            [LookupEditor(typeof(Ge.Entities.CodeGalopRow), InplaceAdd = true)]
            public Int16? NiveauGalop { get { return Fields.NiveauGalop[this]; } set { Fields.NiveauGalop[this] = value; } }
            public partial class RowFields { public Int16Field NiveauGalop; }
            #endregion NiveauGalop
                
            #region Licence Competition
            [DisplayName("Licence Competition"), ForeignKey("[dbo].[CODE_LFC]", "Id"), LeftJoin("jLicenceCompetition"), TextualField("LicenceCompetitionLibele")]
            [LookupEditor(typeof(Scripts.CodeLfcLookup), InplaceAdd = true)]
            public Int16? LicenceCompetition { get { return Fields.LicenceCompetition[this]; } set { Fields.LicenceCompetition[this] = value; } }
            public partial class RowFields { public Int16Field LicenceCompetition; }
            #endregion LicenceCompetition
                
            #region Date Certificat Medical
            [DisplayName("Date Certificat Medical")]
            public DateTime? DateCertificatMedical { get { return Fields.DateCertificatMedical[this]; } set { Fields.DateCertificatMedical[this] = value; } }
            public partial class RowFields { public DateTimeField DateCertificatMedical; }
            #endregion DateCertificatMedical
                
            #region Description
            [DisplayName("Description"), Size(200)]
            public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
            public partial class RowFields { public StringField Description; }
            #endregion Description
                
            #region Archive Date
            [DisplayName("Archive Date")]
            public DateTime? ArchiveDate { get { return Fields.ArchiveDate[this]; } set { Fields.ArchiveDate[this] = value; } }
            public partial class RowFields { public DateTimeField ArchiveDate; }
            #endregion ArchiveDate
        

    #region Foreign Fields
            
                [DisplayName("Personne Is Morale"), Expression("jPersonne.[IsMorale]")]
                public Boolean? PersonneIsMorale { get { return Fields.PersonneIsMorale[this]; } set { Fields.PersonneIsMorale[this] = value; } }
                public partial class RowFields { public BooleanField PersonneIsMorale; }

                        
                [DisplayName("Personne Is Active"), Expression("jPersonne.[IsActive]")]
                public Boolean? PersonneIsActive { get { return Fields.PersonneIsActive[this]; } set { Fields.PersonneIsActive[this] = value; } }
                public partial class RowFields { public BooleanField PersonneIsActive; }

                        
                [DisplayName("Personne Not Archive"), Expression("jPersonne.[NotArchive]")]
                public Boolean? PersonneNotArchive { get { return Fields.PersonneNotArchive[this]; } set { Fields.PersonneNotArchive[this] = value; } }
                public partial class RowFields { public BooleanField PersonneNotArchive; }

                        
                [DisplayName("Personne Insert Date"), Expression("jPersonne.[InsertDate]")]
                public DateTime? PersonneInsertDate { get { return Fields.PersonneInsertDate[this]; } set { Fields.PersonneInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField PersonneInsertDate; }

                        
                [DisplayName("Personne Insert User Id"), Expression("jPersonne.[InsertUserId]")]
                public Int32? PersonneInsertUserId { get { return Fields.PersonneInsertUserId[this]; } set { Fields.PersonneInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field PersonneInsertUserId; }

                        
                [DisplayName("Personne Update Date"), Expression("jPersonne.[UpdateDate]")]
                public DateTime? PersonneUpdateDate { get { return Fields.PersonneUpdateDate[this]; } set { Fields.PersonneUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField PersonneUpdateDate; }

                        
                [DisplayName("Personne Update User Id"), Expression("jPersonne.[UpdateUserId]")]
                public Int32? PersonneUpdateUserId { get { return Fields.PersonneUpdateUserId[this]; } set { Fields.PersonneUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field PersonneUpdateUserId; }

                        
                [DisplayName("Personne Nom"), Expression("jPersonne.[Nom]")]
                public String PersonneNom { get { return Fields.PersonneNom[this]; } set { Fields.PersonneNom[this] = value; } }
                public partial class RowFields { public StringField PersonneNom; }

                        
                [DisplayName("Personne Prenom"), Expression("jPersonne.[Prenom]")]
                public String PersonnePrenom { get { return Fields.PersonnePrenom[this]; } set { Fields.PersonnePrenom[this] = value; } }
                public partial class RowFields { public StringField PersonnePrenom; }

                        
                [DisplayName("Personne Nom Jeune Fille"), Expression("jPersonne.[NomJeuneFille]")]
                public String PersonneNomJeuneFille { get { return Fields.PersonneNomJeuneFille[this]; } set { Fields.PersonneNomJeuneFille[this] = value; } }
                public partial class RowFields { public StringField PersonneNomJeuneFille; }

                        
                [DisplayName("Personne Raison Sociale"), Expression("jPersonne.[RaisonSociale]")]
                public String PersonneRaisonSociale { get { return Fields.PersonneRaisonSociale[this]; } set { Fields.PersonneRaisonSociale[this] = value; } }
                public partial class RowFields { public StringField PersonneRaisonSociale; }

                        
                [DisplayName("Personne Birthday"), Expression("jPersonne.[Birthday]")]
                public DateTime? PersonneBirthday { get { return Fields.PersonneBirthday[this]; } set { Fields.PersonneBirthday[this] = value; } }
                public partial class RowFields { public DateTimeField PersonneBirthday; }

                        
                [DisplayName("Personne Sexe"), Expression("jPersonne.[Sexe]")]
                public Int16? PersonneSexe { get { return Fields.PersonneSexe[this]; } set { Fields.PersonneSexe[this] = value; } }
                public partial class RowFields { public Int16Field PersonneSexe; }

                        
                [DisplayName("Personne Situation Famille"), Expression("jPersonne.[SituationFamille]")]
                public Int16? PersonneSituationFamille { get { return Fields.PersonneSituationFamille[this]; } set { Fields.PersonneSituationFamille[this] = value; } }
                public partial class RowFields { public Int16Field PersonneSituationFamille; }

                        
                [DisplayName("Personne Ville Nassance"), Expression("jPersonne.[VilleNassance]")]
                public Guid? PersonneVilleNassance { get { return Fields.PersonneVilleNassance[this]; } set { Fields.PersonneVilleNassance[this] = value; } }
                public partial class RowFields { public GuidField PersonneVilleNassance; }

                        
                [DisplayName("Personne Pays Nassance"), Expression("jPersonne.[PaysNassance]")]
                public Guid? PersonnePaysNassance { get { return Fields.PersonnePaysNassance[this]; } set { Fields.PersonnePaysNassance[this] = value; } }
                public partial class RowFields { public GuidField PersonnePaysNassance; }

                        
                [DisplayName("Personne Pays Nationalite"), Expression("jPersonne.[PaysNationalite]")]
                public Guid? PersonnePaysNationalite { get { return Fields.PersonnePaysNationalite[this]; } set { Fields.PersonnePaysNationalite[this] = value; } }
                public partial class RowFields { public GuidField PersonnePaysNationalite; }

                        
                [DisplayName("Personne Photo"), Expression("jPersonne.[Photo]")]
                public Stream PersonnePhoto { get { return Fields.PersonnePhoto[this]; } set { Fields.PersonnePhoto[this] = value; } }
                public partial class RowFields { public StreamField PersonnePhoto; }

                        
                [DisplayName("Personne Telephone Perso"), Expression("jPersonne.[TelephonePerso]")]
                public String PersonneTelephonePerso { get { return Fields.PersonneTelephonePerso[this]; } set { Fields.PersonneTelephonePerso[this] = value; } }
                public partial class RowFields { public StringField PersonneTelephonePerso; }

                        
                [DisplayName("Personne Telephone Mobile"), Expression("jPersonne.[TelephoneMobile]")]
                public String PersonneTelephoneMobile { get { return Fields.PersonneTelephoneMobile[this]; } set { Fields.PersonneTelephoneMobile[this] = value; } }
                public partial class RowFields { public StringField PersonneTelephoneMobile; }

                        
                [DisplayName("Personne Telephone Prof"), Expression("jPersonne.[TelephoneProf]")]
                public String PersonneTelephoneProf { get { return Fields.PersonneTelephoneProf[this]; } set { Fields.PersonneTelephoneProf[this] = value; } }
                public partial class RowFields { public StringField PersonneTelephoneProf; }

                        
                [DisplayName("Personne Telephone Complementaire1"), Expression("jPersonne.[TelephoneComplementaire1]")]
                public String PersonneTelephoneComplementaire1 { get { return Fields.PersonneTelephoneComplementaire1[this]; } set { Fields.PersonneTelephoneComplementaire1[this] = value; } }
                public partial class RowFields { public StringField PersonneTelephoneComplementaire1; }

                        
                [DisplayName("Personne Telephone Complementaire2"), Expression("jPersonne.[TelephoneComplementaire2]")]
                public String PersonneTelephoneComplementaire2 { get { return Fields.PersonneTelephoneComplementaire2[this]; } set { Fields.PersonneTelephoneComplementaire2[this] = value; } }
                public partial class RowFields { public StringField PersonneTelephoneComplementaire2; }

                        
                [DisplayName("Personne Email1"), Expression("jPersonne.[Email1]")]
                public String PersonneEmail1 { get { return Fields.PersonneEmail1[this]; } set { Fields.PersonneEmail1[this] = value; } }
                public partial class RowFields { public StringField PersonneEmail1; }

                        
                [DisplayName("Personne Email2"), Expression("jPersonne.[Email2]")]
                public String PersonneEmail2 { get { return Fields.PersonneEmail2[this]; } set { Fields.PersonneEmail2[this] = value; } }
                public partial class RowFields { public StringField PersonneEmail2; }

                        
                [DisplayName("Personne Compte Bancaire"), Expression("jPersonne.[CompteBancaire]")]
                public Guid? PersonneCompteBancaire { get { return Fields.PersonneCompteBancaire[this]; } set { Fields.PersonneCompteBancaire[this] = value; } }
                public partial class RowFields { public GuidField PersonneCompteBancaire; }

                        
                [DisplayName("Personne Id Adresse"), Expression("jPersonne.[IdAdresse]")]
                public Guid? PersonneIdAdresse { get { return Fields.PersonneIdAdresse[this]; } set { Fields.PersonneIdAdresse[this] = value; } }
                public partial class RowFields { public GuidField PersonneIdAdresse; }

                        
                [DisplayName("Personne Description"), Expression("jPersonne.[Description]")]
                public String PersonneDescription { get { return Fields.PersonneDescription[this]; } set { Fields.PersonneDescription[this] = value; } }
                public partial class RowFields { public StringField PersonneDescription; }

                        
                [DisplayName("Personne Archive Date"), Expression("jPersonne.[ArchiveDate]")]
                public DateTime? PersonneArchiveDate { get { return Fields.PersonneArchiveDate[this]; } set { Fields.PersonneArchiveDate[this] = value; } }
                public partial class RowFields { public DateTimeField PersonneArchiveDate; }

                        
                [DisplayName("Niveau Galop Default Value"), Expression("jNiveauGalop.[DefaultValue]")]
                public Boolean? NiveauGalopDefaultValue { get { return Fields.NiveauGalopDefaultValue[this]; } set { Fields.NiveauGalopDefaultValue[this] = value; } }
                public partial class RowFields { public BooleanField NiveauGalopDefaultValue; }

                        
                [DisplayName("Niveau Galop Is Active"), Expression("jNiveauGalop.[IsActive]")]
                public Boolean? NiveauGalopIsActive { get { return Fields.NiveauGalopIsActive[this]; } set { Fields.NiveauGalopIsActive[this] = value; } }
                public partial class RowFields { public BooleanField NiveauGalopIsActive; }

                        
                [DisplayName("Niveau Galop Read Only"), Expression("jNiveauGalop.[ReadOnly]")]
                public Boolean? NiveauGalopReadOnly { get { return Fields.NiveauGalopReadOnly[this]; } set { Fields.NiveauGalopReadOnly[this] = value; } }
                public partial class RowFields { public BooleanField NiveauGalopReadOnly; }

                        
                [DisplayName("Niveau Galop Insert Date"), Expression("jNiveauGalop.[InsertDate]")]
                public DateTime? NiveauGalopInsertDate { get { return Fields.NiveauGalopInsertDate[this]; } set { Fields.NiveauGalopInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField NiveauGalopInsertDate; }

                        
                [DisplayName("Niveau Galop Insert User Id"), Expression("jNiveauGalop.[InsertUserId]")]
                public Int32? NiveauGalopInsertUserId { get { return Fields.NiveauGalopInsertUserId[this]; } set { Fields.NiveauGalopInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field NiveauGalopInsertUserId; }

                        
                [DisplayName("Niveau Galop Update Date"), Expression("jNiveauGalop.[UpdateDate]")]
                public DateTime? NiveauGalopUpdateDate { get { return Fields.NiveauGalopUpdateDate[this]; } set { Fields.NiveauGalopUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField NiveauGalopUpdateDate; }

                        
                [DisplayName("Niveau Galop Update User Id"), Expression("jNiveauGalop.[UpdateUserId]")]
                public Int32? NiveauGalopUpdateUserId { get { return Fields.NiveauGalopUpdateUserId[this]; } set { Fields.NiveauGalopUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field NiveauGalopUpdateUserId; }

                        
                [DisplayName("Niveau Galop Libele"), Expression("jNiveauGalop.[Libele]")]
                public String NiveauGalopLibele { get { return Fields.NiveauGalopLibele[this]; } set { Fields.NiveauGalopLibele[this] = value; } }
                public partial class RowFields { public StringField NiveauGalopLibele; }

                        
                [DisplayName("Niveau Galop Code"), Expression("jNiveauGalop.[Code]")]
                public String NiveauGalopCode { get { return Fields.NiveauGalopCode[this]; } set { Fields.NiveauGalopCode[this] = value; } }
                public partial class RowFields { public StringField NiveauGalopCode; }

                        
                [DisplayName("Licence Competition Default Value"), Expression("jLicenceCompetition.[DefaultValue]")]
                public Boolean? LicenceCompetitionDefaultValue { get { return Fields.LicenceCompetitionDefaultValue[this]; } set { Fields.LicenceCompetitionDefaultValue[this] = value; } }
                public partial class RowFields { public BooleanField LicenceCompetitionDefaultValue; }

                        
                [DisplayName("Licence Competition Is Active"), Expression("jLicenceCompetition.[IsActive]")]
                public Boolean? LicenceCompetitionIsActive { get { return Fields.LicenceCompetitionIsActive[this]; } set { Fields.LicenceCompetitionIsActive[this] = value; } }
                public partial class RowFields { public BooleanField LicenceCompetitionIsActive; }

                        
                [DisplayName("Licence Competition Read Only"), Expression("jLicenceCompetition.[ReadOnly]")]
                public Boolean? LicenceCompetitionReadOnly { get { return Fields.LicenceCompetitionReadOnly[this]; } set { Fields.LicenceCompetitionReadOnly[this] = value; } }
                public partial class RowFields { public BooleanField LicenceCompetitionReadOnly; }

                        
                [DisplayName("Licence Competition Insert Date"), Expression("jLicenceCompetition.[InsertDate]")]
                public DateTime? LicenceCompetitionInsertDate { get { return Fields.LicenceCompetitionInsertDate[this]; } set { Fields.LicenceCompetitionInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField LicenceCompetitionInsertDate; }

                        
                [DisplayName("Licence Competition Insert User Id"), Expression("jLicenceCompetition.[InsertUserId]")]
                public Int32? LicenceCompetitionInsertUserId { get { return Fields.LicenceCompetitionInsertUserId[this]; } set { Fields.LicenceCompetitionInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field LicenceCompetitionInsertUserId; }

                        
                [DisplayName("Licence Competition Update Date"), Expression("jLicenceCompetition.[UpdateDate]")]
                public DateTime? LicenceCompetitionUpdateDate { get { return Fields.LicenceCompetitionUpdateDate[this]; } set { Fields.LicenceCompetitionUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField LicenceCompetitionUpdateDate; }

                        
                [DisplayName("Licence Competition Update User Id"), Expression("jLicenceCompetition.[UpdateUserId]")]
                public Int32? LicenceCompetitionUpdateUserId { get { return Fields.LicenceCompetitionUpdateUserId[this]; } set { Fields.LicenceCompetitionUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field LicenceCompetitionUpdateUserId; }

                        
                [DisplayName("Licence Competition Libele"), Expression("jLicenceCompetition.[Libele]")]
                public String LicenceCompetitionLibele { get { return Fields.LicenceCompetitionLibele[this]; } set { Fields.LicenceCompetitionLibele[this] = value; } }
                public partial class RowFields { public StringField LicenceCompetitionLibele; }

                        
                [DisplayName("Licence Competition Code"), Expression("jLicenceCompetition.[Code]")]
                public String LicenceCompetitionCode { get { return Fields.LicenceCompetitionCode[this]; } set { Fields.LicenceCompetitionCode[this] = value; } }
                public partial class RowFields { public StringField LicenceCompetitionCode; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.LicFfe; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.LicFfe; }
            }
            #endregion Id and Name fields

    #region Constructor
    public CavaliersRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[CAVALIERS]")
    {
    LocalTextPrefix = "Ge.Cavaliers";
    }
    }
    #endregion RowFields
    }
    }
