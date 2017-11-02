
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), DisplayName("Personne"), InstanceName("Personne"), TwoLevelCached]
    [ReadPermission("Ge:PERSONNE:Read")]
    [InsertPermission("Ge:PERSONNE:Insert")]
    [UpdatePermission("Ge:PERSONNE:Update")]
    [DeletePermission("Ge:PERSONNE:Delete")]
    [LookupScript("Ge.Personne")]
    public sealed class PersonneRow : Row, IIdRow, INameRow
    {        
            #region Id
            [DisplayName("Id"), PrimaryKey]
            public Guid? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
            public partial class RowFields { public GuidField Id; }
            #endregion Id
                
            #region Is Morale
            [DisplayName("Is Morale"), NotNull]
            public Boolean? IsMorale { get { return Fields.IsMorale[this]; } set { Fields.IsMorale[this] = value; } }
            public partial class RowFields { public BooleanField IsMorale; }
            #endregion IsMorale
                
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
                
            #region Nom
            [DisplayName("Nom"), Size(50), QuickSearch]
            public String Nom { get { return Fields.Nom[this]; } set { Fields.Nom[this] = value; } }
            public partial class RowFields { public StringField Nom; }
            #endregion Nom
                
            #region Prenom
            [DisplayName("Prenom"), Size(50)]
            public String Prenom { get { return Fields.Prenom[this]; } set { Fields.Prenom[this] = value; } }
            public partial class RowFields { public StringField Prenom; }
            #endregion Prenom
                
            #region Nom Jeune Fille
            [DisplayName("Nom Jeune Fille"), Size(50)]
            public String NomJeuneFille { get { return Fields.NomJeuneFille[this]; } set { Fields.NomJeuneFille[this] = value; } }
            public partial class RowFields { public StringField NomJeuneFille; }
            #endregion NomJeuneFille
                
            #region Raison Sociale
            [DisplayName("Raison Sociale"), Size(200)]
            public String RaisonSociale { get { return Fields.RaisonSociale[this]; } set { Fields.RaisonSociale[this] = value; } }
            public partial class RowFields { public StringField RaisonSociale; }
            #endregion RaisonSociale
                
            #region Birthday
            [DisplayName("Birthday")]
            public DateTime? Birthday { get { return Fields.Birthday[this]; } set { Fields.Birthday[this] = value; } }
            public partial class RowFields { public DateTimeField Birthday; }
            #endregion Birthday
                
            #region Sexe
            [DisplayName("Sexe"), ForeignKey("[dbo].[CODE_SEXE]", "SexeId"), LeftJoin("jSexe"), TextualField("SexeLibele")]
            [LookupEditor(typeof(Ge.Scripts.SexePersonneLookup), InplaceAdd = false)]
            public Int16? Sexe { get { return Fields.Sexe[this]; } set { Fields.Sexe[this] = value; } }
            public partial class RowFields { public Int16Field Sexe; }
            #endregion Sexe
                
            #region Situation Famille
            [DisplayName("Situation Famille"), ForeignKey("[dbo].[CODE_STUATIONFAMILLE]", "Id"), LeftJoin("jSituationFamille"), TextualField("SituationFamilleLibele")]
            [LookupEditor(typeof(Ge.Entities.CodeStuationfamilleRow), InplaceAdd = true)]
            public Int16? SituationFamille { get { return Fields.SituationFamille[this]; } set { Fields.SituationFamille[this] = value; } }
            public partial class RowFields { public Int16Field SituationFamille; }
            #endregion SituationFamille
                
            #region Ville Nassance
            [DisplayName("Ville Nassance"), ForeignKey("[dbo].[VILLE]", "Id"), LeftJoin("jVilleNassance"), TextualField("VilleNassanceCodeInsee")]
            [LookupEditor(typeof(Ge.Entities.VilleRow), InplaceAdd = true)]
            public Guid? VilleNassance { get { return Fields.VilleNassance[this]; } set { Fields.VilleNassance[this] = value; } }
            public partial class RowFields { public GuidField VilleNassance; }
            #endregion VilleNassance
                
            #region Pays Nassance
            [DisplayName("Pays Nassance"), ForeignKey("[dbo].[PAYS]", "Id"), LeftJoin("jPaysNassance"), TextualField("PaysNassanceLibele")]
            [LookupEditor(typeof(Ge.Entities.PaysRow), InplaceAdd = true)]
            public Guid? PaysNassance { get { return Fields.PaysNassance[this]; } set { Fields.PaysNassance[this] = value; } }
            public partial class RowFields { public GuidField PaysNassance; }
            #endregion PaysNassance
                
            #region Pays Nationalite
            [DisplayName("Pays Nationalite"), ForeignKey("[dbo].[PAYS]", "Id"), LeftJoin("jPaysNationalite"), TextualField("PaysNationaliteLibele")]
            [LookupEditor(typeof(Ge.Entities.PaysRow), InplaceAdd = true)]
            public Guid? PaysNationalite { get { return Fields.PaysNationalite[this]; } set { Fields.PaysNationalite[this] = value; } }
            public partial class RowFields { public GuidField PaysNationalite; }
            #endregion PaysNationalite
                
            #region Photo
            [DisplayName("Photo"), Size(8000)]
            public Stream Photo { get { return Fields.Photo[this]; } set { Fields.Photo[this] = value; } }
            public partial class RowFields { public StreamField Photo; }
            #endregion Photo
                
            #region Telephone Perso
            [DisplayName("Telephone Perso"), Size(20)]
            public String TelephonePerso { get { return Fields.TelephonePerso[this]; } set { Fields.TelephonePerso[this] = value; } }
            public partial class RowFields { public StringField TelephonePerso; }
            #endregion TelephonePerso
                
            #region Telephone Mobile
            [DisplayName("Telephone Mobile"), Size(20)]
            public String TelephoneMobile { get { return Fields.TelephoneMobile[this]; } set { Fields.TelephoneMobile[this] = value; } }
            public partial class RowFields { public StringField TelephoneMobile; }
            #endregion TelephoneMobile
                
            #region Telephone Prof
            [DisplayName("Telephone Prof"), Size(20)]
            public String TelephoneProf { get { return Fields.TelephoneProf[this]; } set { Fields.TelephoneProf[this] = value; } }
            public partial class RowFields { public StringField TelephoneProf; }
            #endregion TelephoneProf
                
            #region Telephone Complementaire1
            [DisplayName("Telephone Complementaire1"), Size(20)]
            public String TelephoneComplementaire1 { get { return Fields.TelephoneComplementaire1[this]; } set { Fields.TelephoneComplementaire1[this] = value; } }
            public partial class RowFields { public StringField TelephoneComplementaire1; }
            #endregion TelephoneComplementaire1
                
            #region Telephone Complementaire2
            [DisplayName("Telephone Complementaire2"), Size(20)]
            public String TelephoneComplementaire2 { get { return Fields.TelephoneComplementaire2[this]; } set { Fields.TelephoneComplementaire2[this] = value; } }
            public partial class RowFields { public StringField TelephoneComplementaire2; }
            #endregion TelephoneComplementaire2
                
            #region Email1
            [DisplayName("Email1"), Size(80)]
            public String Email1 { get { return Fields.Email1[this]; } set { Fields.Email1[this] = value; } }
            public partial class RowFields { public StringField Email1; }
            #endregion Email1
                
            #region Email2
            [DisplayName("Email2"), Size(80)]
            public String Email2 { get { return Fields.Email2[this]; } set { Fields.Email2[this] = value; } }
            public partial class RowFields { public StringField Email2; }
            #endregion Email2
                
            #region Compte Bancaire
            [DisplayName("Compte Bancaire"), ForeignKey("[dbo].[COMPTEBANCAIRE]", "Id"), LeftJoin("jCompteBancaire"), TextualField("CompteBancaireCodePaysIban")]
            [LookupEditor(typeof(Ge.Entities.ComptebancaireRow), InplaceAdd = true)]
            public Guid? CompteBancaire { get { return Fields.CompteBancaire[this]; } set { Fields.CompteBancaire[this] = value; } }
            public partial class RowFields { public GuidField CompteBancaire; }
            #endregion CompteBancaire
                
            #region Id Adresse
            [DisplayName("Id Adresse"), ForeignKey("[dbo].[ADRESSE]", "Id"), LeftJoin("jIdAdresse"), TextualField("IdAdresseAdresse1")]
            [LookupEditor(typeof(Ge.Entities.AdresseRow), InplaceAdd = true)]
            public Guid? IdAdresse { get { return Fields.IdAdresse[this]; } set { Fields.IdAdresse[this] = value; } }
            public partial class RowFields { public GuidField IdAdresse; }
            #endregion IdAdresse
                
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
            
                [DisplayName("Sexe Default Value"), Expression("jSexe.[DefaultValue]")]
                public Boolean? SexeDefaultValue { get { return Fields.SexeDefaultValue[this]; } set { Fields.SexeDefaultValue[this] = value; } }
                public partial class RowFields { public BooleanField SexeDefaultValue; }

                        
                [DisplayName("Sexe Is Active"), Expression("jSexe.[IsActive]")]
                public Boolean? SexeIsActive { get { return Fields.SexeIsActive[this]; } set { Fields.SexeIsActive[this] = value; } }
                public partial class RowFields { public BooleanField SexeIsActive; }

                        
                [DisplayName("Sexe Read Only"), Expression("jSexe.[ReadOnly]")]
                public Boolean? SexeReadOnly { get { return Fields.SexeReadOnly[this]; } set { Fields.SexeReadOnly[this] = value; } }
                public partial class RowFields { public BooleanField SexeReadOnly; }

                        
                [DisplayName("Sexe Insert Date"), Expression("jSexe.[InsertDate]")]
                public DateTime? SexeInsertDate { get { return Fields.SexeInsertDate[this]; } set { Fields.SexeInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField SexeInsertDate; }

                        
                [DisplayName("Sexe Insert User Id"), Expression("jSexe.[InsertUserId]")]
                public Int32? SexeInsertUserId { get { return Fields.SexeInsertUserId[this]; } set { Fields.SexeInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field SexeInsertUserId; }

                        
                [DisplayName("Sexe Update Date"), Expression("jSexe.[UpdateDate]")]
                public DateTime? SexeUpdateDate { get { return Fields.SexeUpdateDate[this]; } set { Fields.SexeUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField SexeUpdateDate; }

                        
                [DisplayName("Sexe Update User Id"), Expression("jSexe.[UpdateUserId]")]
                public Int32? SexeUpdateUserId { get { return Fields.SexeUpdateUserId[this]; } set { Fields.SexeUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field SexeUpdateUserId; }

                        
                [DisplayName("Sexe Libele"), Expression("jSexe.[Libele]")]
                public String SexeLibele { get { return Fields.SexeLibele[this]; } set { Fields.SexeLibele[this] = value; } }
                public partial class RowFields { public StringField SexeLibele; }

                        
                [DisplayName("Sexe Civilite"), Expression("jSexe.[Civilite]")]
                public String SexeCivilite { get { return Fields.SexeCivilite[this]; } set { Fields.SexeCivilite[this] = value; } }
                public partial class RowFields { public StringField SexeCivilite; }

                        
                [DisplayName("Sexe Libele Us"), Expression("jSexe.[LibeleUS]")]
                public String SexeLibeleUs { get { return Fields.SexeLibeleUs[this]; } set { Fields.SexeLibeleUs[this] = value; } }
                public partial class RowFields { public StringField SexeLibeleUs; }

                        
                [DisplayName("Situation Famille Default Value"), Expression("jSituationFamille.[DefaultValue]")]
                public Boolean? SituationFamilleDefaultValue { get { return Fields.SituationFamilleDefaultValue[this]; } set { Fields.SituationFamilleDefaultValue[this] = value; } }
                public partial class RowFields { public BooleanField SituationFamilleDefaultValue; }

                        
                [DisplayName("Situation Famille Is Active"), Expression("jSituationFamille.[IsActive]")]
                public Boolean? SituationFamilleIsActive { get { return Fields.SituationFamilleIsActive[this]; } set { Fields.SituationFamilleIsActive[this] = value; } }
                public partial class RowFields { public BooleanField SituationFamilleIsActive; }

                        
                [DisplayName("Situation Famille Read Only"), Expression("jSituationFamille.[ReadOnly]")]
                public Boolean? SituationFamilleReadOnly { get { return Fields.SituationFamilleReadOnly[this]; } set { Fields.SituationFamilleReadOnly[this] = value; } }
                public partial class RowFields { public BooleanField SituationFamilleReadOnly; }

                        
                [DisplayName("Situation Famille Insert Date"), Expression("jSituationFamille.[InsertDate]")]
                public DateTime? SituationFamilleInsertDate { get { return Fields.SituationFamilleInsertDate[this]; } set { Fields.SituationFamilleInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField SituationFamilleInsertDate; }

                        
                [DisplayName("Situation Famille Insert User Id"), Expression("jSituationFamille.[InsertUserId]")]
                public Int32? SituationFamilleInsertUserId { get { return Fields.SituationFamilleInsertUserId[this]; } set { Fields.SituationFamilleInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field SituationFamilleInsertUserId; }

                        
                [DisplayName("Situation Famille Update Date"), Expression("jSituationFamille.[UpdateDate]")]
                public DateTime? SituationFamilleUpdateDate { get { return Fields.SituationFamilleUpdateDate[this]; } set { Fields.SituationFamilleUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField SituationFamilleUpdateDate; }

                        
                [DisplayName("Situation Famille Update User Id"), Expression("jSituationFamille.[UpdateUserId]")]
                public Int32? SituationFamilleUpdateUserId { get { return Fields.SituationFamilleUpdateUserId[this]; } set { Fields.SituationFamilleUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field SituationFamilleUpdateUserId; }

                        
                [DisplayName("Situation Famille Libele"), Expression("jSituationFamille.[Libele]")]
                public String SituationFamilleLibele { get { return Fields.SituationFamilleLibele[this]; } set { Fields.SituationFamilleLibele[this] = value; } }
                public partial class RowFields { public StringField SituationFamilleLibele; }

                        
                [DisplayName("Situation Famille Code"), Expression("jSituationFamille.[Code]")]
                public String SituationFamilleCode { get { return Fields.SituationFamilleCode[this]; } set { Fields.SituationFamilleCode[this] = value; } }
                public partial class RowFields { public StringField SituationFamilleCode; }

                        
                [DisplayName("Ville Nassance Default Value"), Expression("jVilleNassance.[DefaultValue]")]
                public Boolean? VilleNassanceDefaultValue { get { return Fields.VilleNassanceDefaultValue[this]; } set { Fields.VilleNassanceDefaultValue[this] = value; } }
                public partial class RowFields { public BooleanField VilleNassanceDefaultValue; }

                        
                [DisplayName("Ville Nassance Is Active"), Expression("jVilleNassance.[IsActive]")]
                public Boolean? VilleNassanceIsActive { get { return Fields.VilleNassanceIsActive[this]; } set { Fields.VilleNassanceIsActive[this] = value; } }
                public partial class RowFields { public BooleanField VilleNassanceIsActive; }

                        
                [DisplayName("Ville Nassance Read Only"), Expression("jVilleNassance.[ReadOnly]")]
                public Boolean? VilleNassanceReadOnly { get { return Fields.VilleNassanceReadOnly[this]; } set { Fields.VilleNassanceReadOnly[this] = value; } }
                public partial class RowFields { public BooleanField VilleNassanceReadOnly; }

                        
                [DisplayName("Ville Nassance Insert Date"), Expression("jVilleNassance.[InsertDate]")]
                public DateTime? VilleNassanceInsertDate { get { return Fields.VilleNassanceInsertDate[this]; } set { Fields.VilleNassanceInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField VilleNassanceInsertDate; }

                        
                [DisplayName("Ville Nassance Insert User Id"), Expression("jVilleNassance.[InsertUserId]")]
                public Int32? VilleNassanceInsertUserId { get { return Fields.VilleNassanceInsertUserId[this]; } set { Fields.VilleNassanceInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field VilleNassanceInsertUserId; }

                        
                [DisplayName("Ville Nassance Update Date"), Expression("jVilleNassance.[UpdateDate]")]
                public DateTime? VilleNassanceUpdateDate { get { return Fields.VilleNassanceUpdateDate[this]; } set { Fields.VilleNassanceUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField VilleNassanceUpdateDate; }

                        
                [DisplayName("Ville Nassance Update User Id"), Expression("jVilleNassance.[UpdateUserId]")]
                public Int32? VilleNassanceUpdateUserId { get { return Fields.VilleNassanceUpdateUserId[this]; } set { Fields.VilleNassanceUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field VilleNassanceUpdateUserId; }

                        
                [DisplayName("Ville Nassance Code Insee"), Expression("jVilleNassance.[CodeINSEE]")]
                public String VilleNassanceCodeInsee { get { return Fields.VilleNassanceCodeInsee[this]; } set { Fields.VilleNassanceCodeInsee[this] = value; } }
                public partial class RowFields { public StringField VilleNassanceCodeInsee; }

                        
                [DisplayName("Ville Nassance Libele"), Expression("jVilleNassance.[Libele]")]
                public String VilleNassanceLibele { get { return Fields.VilleNassanceLibele[this]; } set { Fields.VilleNassanceLibele[this] = value; } }
                public partial class RowFields { public StringField VilleNassanceLibele; }

                        
                [DisplayName("Ville Nassance Nom Ville"), Expression("jVilleNassance.[NomVille]")]
                public String VilleNassanceNomVille { get { return Fields.VilleNassanceNomVille[this]; } set { Fields.VilleNassanceNomVille[this] = value; } }
                public partial class RowFields { public StringField VilleNassanceNomVille; }

                        
                [DisplayName("Ville Nassance Code Postal"), Expression("jVilleNassance.[CodePostal]")]
                public String VilleNassanceCodePostal { get { return Fields.VilleNassanceCodePostal[this]; } set { Fields.VilleNassanceCodePostal[this] = value; } }
                public partial class RowFields { public StringField VilleNassanceCodePostal; }

                        
                [DisplayName("Ville Nassance Pays"), Expression("jVilleNassance.[Pays]")]
                public Guid? VilleNassancePays { get { return Fields.VilleNassancePays[this]; } set { Fields.VilleNassancePays[this] = value; } }
                public partial class RowFields { public GuidField VilleNassancePays; }

                        
                [DisplayName("Pays Nassance Default Value"), Expression("jPaysNassance.[DefaultValue]")]
                public Boolean? PaysNassanceDefaultValue { get { return Fields.PaysNassanceDefaultValue[this]; } set { Fields.PaysNassanceDefaultValue[this] = value; } }
                public partial class RowFields { public BooleanField PaysNassanceDefaultValue; }

                        
                [DisplayName("Pays Nassance Is Active"), Expression("jPaysNassance.[IsActive]")]
                public Boolean? PaysNassanceIsActive { get { return Fields.PaysNassanceIsActive[this]; } set { Fields.PaysNassanceIsActive[this] = value; } }
                public partial class RowFields { public BooleanField PaysNassanceIsActive; }

                        
                [DisplayName("Pays Nassance Read Only"), Expression("jPaysNassance.[ReadOnly]")]
                public Boolean? PaysNassanceReadOnly { get { return Fields.PaysNassanceReadOnly[this]; } set { Fields.PaysNassanceReadOnly[this] = value; } }
                public partial class RowFields { public BooleanField PaysNassanceReadOnly; }

                        
                [DisplayName("Pays Nassance Insert Date"), Expression("jPaysNassance.[InsertDate]")]
                public DateTime? PaysNassanceInsertDate { get { return Fields.PaysNassanceInsertDate[this]; } set { Fields.PaysNassanceInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField PaysNassanceInsertDate; }

                        
                [DisplayName("Pays Nassance Insert User Id"), Expression("jPaysNassance.[InsertUserId]")]
                public Int32? PaysNassanceInsertUserId { get { return Fields.PaysNassanceInsertUserId[this]; } set { Fields.PaysNassanceInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field PaysNassanceInsertUserId; }

                        
                [DisplayName("Pays Nassance Update Date"), Expression("jPaysNassance.[UpdateDate]")]
                public DateTime? PaysNassanceUpdateDate { get { return Fields.PaysNassanceUpdateDate[this]; } set { Fields.PaysNassanceUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField PaysNassanceUpdateDate; }

                        
                [DisplayName("Pays Nassance Update User Id"), Expression("jPaysNassance.[UpdateUserId]")]
                public Int32? PaysNassanceUpdateUserId { get { return Fields.PaysNassanceUpdateUserId[this]; } set { Fields.PaysNassanceUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field PaysNassanceUpdateUserId; }

                        
                [DisplayName("Pays Nassance Libele"), Expression("jPaysNassance.[Libele]")]
                public String PaysNassanceLibele { get { return Fields.PaysNassanceLibele[this]; } set { Fields.PaysNassanceLibele[this] = value; } }
                public partial class RowFields { public StringField PaysNassanceLibele; }

                        
                [DisplayName("Pays Nassance Code"), Expression("jPaysNassance.[Code]")]
                public String PaysNassanceCode { get { return Fields.PaysNassanceCode[this]; } set { Fields.PaysNassanceCode[this] = value; } }
                public partial class RowFields { public StringField PaysNassanceCode; }

                        
                [DisplayName("Pays Nassance Code Ue"), Expression("jPaysNassance.[CodeUE]")]
                public Int16? PaysNassanceCodeUe { get { return Fields.PaysNassanceCodeUe[this]; } set { Fields.PaysNassanceCodeUe[this] = value; } }
                public partial class RowFields { public Int16Field PaysNassanceCodeUe; }

                        
                [DisplayName("Pays Nationalite Default Value"), Expression("jPaysNationalite.[DefaultValue]")]
                public Boolean? PaysNationaliteDefaultValue { get { return Fields.PaysNationaliteDefaultValue[this]; } set { Fields.PaysNationaliteDefaultValue[this] = value; } }
                public partial class RowFields { public BooleanField PaysNationaliteDefaultValue; }

                        
                [DisplayName("Pays Nationalite Is Active"), Expression("jPaysNationalite.[IsActive]")]
                public Boolean? PaysNationaliteIsActive { get { return Fields.PaysNationaliteIsActive[this]; } set { Fields.PaysNationaliteIsActive[this] = value; } }
                public partial class RowFields { public BooleanField PaysNationaliteIsActive; }

                        
                [DisplayName("Pays Nationalite Read Only"), Expression("jPaysNationalite.[ReadOnly]")]
                public Boolean? PaysNationaliteReadOnly { get { return Fields.PaysNationaliteReadOnly[this]; } set { Fields.PaysNationaliteReadOnly[this] = value; } }
                public partial class RowFields { public BooleanField PaysNationaliteReadOnly; }

                        
                [DisplayName("Pays Nationalite Insert Date"), Expression("jPaysNationalite.[InsertDate]")]
                public DateTime? PaysNationaliteInsertDate { get { return Fields.PaysNationaliteInsertDate[this]; } set { Fields.PaysNationaliteInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField PaysNationaliteInsertDate; }

                        
                [DisplayName("Pays Nationalite Insert User Id"), Expression("jPaysNationalite.[InsertUserId]")]
                public Int32? PaysNationaliteInsertUserId { get { return Fields.PaysNationaliteInsertUserId[this]; } set { Fields.PaysNationaliteInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field PaysNationaliteInsertUserId; }

                        
                [DisplayName("Pays Nationalite Update Date"), Expression("jPaysNationalite.[UpdateDate]")]
                public DateTime? PaysNationaliteUpdateDate { get { return Fields.PaysNationaliteUpdateDate[this]; } set { Fields.PaysNationaliteUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField PaysNationaliteUpdateDate; }

                        
                [DisplayName("Pays Nationalite Update User Id"), Expression("jPaysNationalite.[UpdateUserId]")]
                public Int32? PaysNationaliteUpdateUserId { get { return Fields.PaysNationaliteUpdateUserId[this]; } set { Fields.PaysNationaliteUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field PaysNationaliteUpdateUserId; }

                        
                [DisplayName("Pays Nationalite Libele"), Expression("jPaysNationalite.[Libele]")]
                public String PaysNationaliteLibele { get { return Fields.PaysNationaliteLibele[this]; } set { Fields.PaysNationaliteLibele[this] = value; } }
                public partial class RowFields { public StringField PaysNationaliteLibele; }

                        
                [DisplayName("Pays Nationalite Code"), Expression("jPaysNationalite.[Code]")]
                public String PaysNationaliteCode { get { return Fields.PaysNationaliteCode[this]; } set { Fields.PaysNationaliteCode[this] = value; } }
                public partial class RowFields { public StringField PaysNationaliteCode; }

                        
                [DisplayName("Pays Nationalite Code Ue"), Expression("jPaysNationalite.[CodeUE]")]
                public Int16? PaysNationaliteCodeUe { get { return Fields.PaysNationaliteCodeUe[this]; } set { Fields.PaysNationaliteCodeUe[this] = value; } }
                public partial class RowFields { public Int16Field PaysNationaliteCodeUe; }

                        
                [DisplayName("Compte Bancaire Code Pays Iban"), Expression("jCompteBancaire.[CodePaysIBAN]")]
                public String CompteBancaireCodePaysIban { get { return Fields.CompteBancaireCodePaysIban[this]; } set { Fields.CompteBancaireCodePaysIban[this] = value; } }
                public partial class RowFields { public StringField CompteBancaireCodePaysIban; }

                        
                [DisplayName("Compte Bancaire Cle Iban"), Expression("jCompteBancaire.[CleIBAN]")]
                public String CompteBancaireCleIban { get { return Fields.CompteBancaireCleIban[this]; } set { Fields.CompteBancaireCleIban[this] = value; } }
                public partial class RowFields { public StringField CompteBancaireCleIban; }

                        
                [DisplayName("Compte Bancaire Banque"), Expression("jCompteBancaire.[Banque]")]
                public String CompteBancaireBanque { get { return Fields.CompteBancaireBanque[this]; } set { Fields.CompteBancaireBanque[this] = value; } }
                public partial class RowFields { public StringField CompteBancaireBanque; }

                        
                [DisplayName("Compte Bancaire Guichet"), Expression("jCompteBancaire.[Guichet]")]
                public String CompteBancaireGuichet { get { return Fields.CompteBancaireGuichet[this]; } set { Fields.CompteBancaireGuichet[this] = value; } }
                public partial class RowFields { public StringField CompteBancaireGuichet; }

                        
                [DisplayName("Compte Bancaire Numero Compte"), Expression("jCompteBancaire.[NumeroCompte]")]
                public String CompteBancaireNumeroCompte { get { return Fields.CompteBancaireNumeroCompte[this]; } set { Fields.CompteBancaireNumeroCompte[this] = value; } }
                public partial class RowFields { public StringField CompteBancaireNumeroCompte; }

                        
                [DisplayName("Compte Bancaire Cle Rib"), Expression("jCompteBancaire.[CleRIB]")]
                public String CompteBancaireCleRib { get { return Fields.CompteBancaireCleRib[this]; } set { Fields.CompteBancaireCleRib[this] = value; } }
                public partial class RowFields { public StringField CompteBancaireCleRib; }

                        
                [DisplayName("Compte Bancaire Emetteur Rib"), Expression("jCompteBancaire.[EmetteurRib]")]
                public String CompteBancaireEmetteurRib { get { return Fields.CompteBancaireEmetteurRib[this]; } set { Fields.CompteBancaireEmetteurRib[this] = value; } }
                public partial class RowFields { public StringField CompteBancaireEmetteurRib; }

                        
                [DisplayName("Compte Bancaire Bic"), Expression("jCompteBancaire.[BIC]")]
                public String CompteBancaireBic { get { return Fields.CompteBancaireBic[this]; } set { Fields.CompteBancaireBic[this] = value; } }
                public partial class RowFields { public StringField CompteBancaireBic; }

                        
                [DisplayName("Compte Bancaire Titulaire Compte"), Expression("jCompteBancaire.[TitulaireCompte]")]
                public String CompteBancaireTitulaireCompte { get { return Fields.CompteBancaireTitulaireCompte[this]; } set { Fields.CompteBancaireTitulaireCompte[this] = value; } }
                public partial class RowFields { public StringField CompteBancaireTitulaireCompte; }

                        
                [DisplayName("Compte Bancaire Domiciliation"), Expression("jCompteBancaire.[Domiciliation]")]
                public String CompteBancaireDomiciliation { get { return Fields.CompteBancaireDomiciliation[this]; } set { Fields.CompteBancaireDomiciliation[this] = value; } }
                public partial class RowFields { public StringField CompteBancaireDomiciliation; }

                        
                [DisplayName("Compte Bancaire Code Ics"), Expression("jCompteBancaire.[CodeICS]")]
                public String CompteBancaireCodeIcs { get { return Fields.CompteBancaireCodeIcs[this]; } set { Fields.CompteBancaireCodeIcs[this] = value; } }
                public partial class RowFields { public StringField CompteBancaireCodeIcs; }

                        
                [DisplayName("Compte Bancaire Code Rum"), Expression("jCompteBancaire.[CodeRUM]")]
                public String CompteBancaireCodeRum { get { return Fields.CompteBancaireCodeRum[this]; } set { Fields.CompteBancaireCodeRum[this] = value; } }
                public partial class RowFields { public StringField CompteBancaireCodeRum; }

                        
                [DisplayName("Compte Bancaire Date Signature Mandat"), Expression("jCompteBancaire.[DateSignatureMandat]")]
                public DateTime? CompteBancaireDateSignatureMandat { get { return Fields.CompteBancaireDateSignatureMandat[this]; } set { Fields.CompteBancaireDateSignatureMandat[this] = value; } }
                public partial class RowFields { public DateTimeField CompteBancaireDateSignatureMandat; }

                        
                [DisplayName("Compte Bancaire Type Prelevement"), Expression("jCompteBancaire.[TypePrelevement]")]
                public Int16? CompteBancaireTypePrelevement { get { return Fields.CompteBancaireTypePrelevement[this]; } set { Fields.CompteBancaireTypePrelevement[this] = value; } }
                public partial class RowFields { public Int16Field CompteBancaireTypePrelevement; }

                        
                [DisplayName("Compte Bancaire Date Dernier Prelevement"), Expression("jCompteBancaire.[DateDernierPrelevement]")]
                public DateTime? CompteBancaireDateDernierPrelevement { get { return Fields.CompteBancaireDateDernierPrelevement[this]; } set { Fields.CompteBancaireDateDernierPrelevement[this] = value; } }
                public partial class RowFields { public DateTimeField CompteBancaireDateDernierPrelevement; }

                        
                [DisplayName("Compte Bancaire Type Dernier Prelevement"), Expression("jCompteBancaire.[TypeDernierPrelevement]")]
                public Int16? CompteBancaireTypeDernierPrelevement { get { return Fields.CompteBancaireTypeDernierPrelevement[this]; } set { Fields.CompteBancaireTypeDernierPrelevement[this] = value; } }
                public partial class RowFields { public Int16Field CompteBancaireTypeDernierPrelevement; }

                        
                [DisplayName("Id Adresse Is Active"), Expression("jIdAdresse.[IsActive]")]
                public Boolean? IdAdresseIsActive { get { return Fields.IdAdresseIsActive[this]; } set { Fields.IdAdresseIsActive[this] = value; } }
                public partial class RowFields { public BooleanField IdAdresseIsActive; }

                        
                [DisplayName("Id Adresse Not Archive"), Expression("jIdAdresse.[NotArchive]")]
                public Boolean? IdAdresseNotArchive { get { return Fields.IdAdresseNotArchive[this]; } set { Fields.IdAdresseNotArchive[this] = value; } }
                public partial class RowFields { public BooleanField IdAdresseNotArchive; }

                        
                [DisplayName("Id Adresse Insert Date"), Expression("jIdAdresse.[InsertDate]")]
                public DateTime? IdAdresseInsertDate { get { return Fields.IdAdresseInsertDate[this]; } set { Fields.IdAdresseInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField IdAdresseInsertDate; }

                        
                [DisplayName("Id Adresse Insert User Id"), Expression("jIdAdresse.[InsertUserId]")]
                public Int32? IdAdresseInsertUserId { get { return Fields.IdAdresseInsertUserId[this]; } set { Fields.IdAdresseInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field IdAdresseInsertUserId; }

                        
                [DisplayName("Id Adresse Update Date"), Expression("jIdAdresse.[UpdateDate]")]
                public DateTime? IdAdresseUpdateDate { get { return Fields.IdAdresseUpdateDate[this]; } set { Fields.IdAdresseUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField IdAdresseUpdateDate; }

                        
                [DisplayName("Id Adresse Update User Id"), Expression("jIdAdresse.[UpdateUserId]")]
                public Int32? IdAdresseUpdateUserId { get { return Fields.IdAdresseUpdateUserId[this]; } set { Fields.IdAdresseUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field IdAdresseUpdateUserId; }

                        
                [DisplayName("Id Adresse Adresse 1"), Expression("jIdAdresse.[Adresse_1]")]
                public String IdAdresseAdresse1 { get { return Fields.IdAdresseAdresse1[this]; } set { Fields.IdAdresseAdresse1[this] = value; } }
                public partial class RowFields { public StringField IdAdresseAdresse1; }

                        
                [DisplayName("Id Adresse Adresse 2"), Expression("jIdAdresse.[Adresse_2]")]
                public String IdAdresseAdresse2 { get { return Fields.IdAdresseAdresse2[this]; } set { Fields.IdAdresseAdresse2[this] = value; } }
                public partial class RowFields { public StringField IdAdresseAdresse2; }

                        
                [DisplayName("Id Adresse Adresse 3"), Expression("jIdAdresse.[Adresse_3]")]
                public String IdAdresseAdresse3 { get { return Fields.IdAdresseAdresse3[this]; } set { Fields.IdAdresseAdresse3[this] = value; } }
                public partial class RowFields { public StringField IdAdresseAdresse3; }

                        
                [DisplayName("Id Adresse Ville"), Expression("jIdAdresse.[Ville]")]
                public Guid? IdAdresseVille { get { return Fields.IdAdresseVille[this]; } set { Fields.IdAdresseVille[this] = value; } }
                public partial class RowFields { public GuidField IdAdresseVille; }

                        
                [DisplayName("Id Adresse Pays"), Expression("jIdAdresse.[Pays]")]
                public Guid? IdAdressePays { get { return Fields.IdAdressePays[this]; } set { Fields.IdAdressePays[this] = value; } }
                public partial class RowFields { public GuidField IdAdressePays; }

                        
                [DisplayName("Id Adresse Cedex"), Expression("jIdAdresse.[Cedex]")]
                public String IdAdresseCedex { get { return Fields.IdAdresseCedex[this]; } set { Fields.IdAdresseCedex[this] = value; } }
                public partial class RowFields { public StringField IdAdresseCedex; }

                        
                [DisplayName("Id Adresse Batiment"), Expression("jIdAdresse.[Batiment]")]
                public String IdAdresseBatiment { get { return Fields.IdAdresseBatiment[this]; } set { Fields.IdAdresseBatiment[this] = value; } }
                public partial class RowFields { public StringField IdAdresseBatiment; }

                        
                [DisplayName("Id Adresse Description"), Expression("jIdAdresse.[Description]")]
                public String IdAdresseDescription { get { return Fields.IdAdresseDescription[this]; } set { Fields.IdAdresseDescription[this] = value; } }
                public partial class RowFields { public StringField IdAdresseDescription; }

                        
                [DisplayName("Id Adresse Archive Date"), Expression("jIdAdresse.[ArchiveDate]")]
                public DateTime? IdAdresseArchiveDate { get { return Fields.IdAdresseArchiveDate[this]; } set { Fields.IdAdresseArchiveDate[this] = value; } }
                public partial class RowFields { public DateTimeField IdAdresseArchiveDate; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.Id; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Nom; }
            }
            #endregion Id and Name fields

    #region Constructor
    public PersonneRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[PERSONNE]")
    {
    LocalTextPrefix = "Ge.Personne";
    }
    }
    #endregion RowFields
    }
    }
