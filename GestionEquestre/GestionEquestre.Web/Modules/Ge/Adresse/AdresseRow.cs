
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), DisplayName("Adresse"), InstanceName("Adresse"), TwoLevelCached]
    [ReadPermission("Ge:ADRESSE:Read")]
    [InsertPermission("Ge:ADRESSE:Insert")]
    [UpdatePermission("Ge:ADRESSE:Update")]
    [DeletePermission("Ge:ADRESSE:Delete")]
    [LookupScript("Ge.Adresse")]
    public sealed class AdresseRow : Row, IIdRow, INameRow
    {        
            #region Id
            [DisplayName("Id"), PrimaryKey]
            public Guid? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
            public partial class RowFields { public GuidField Id; }
            #endregion Id
                
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
                
            #region Adresse 1
            [DisplayName("Adresse 1"), Column("Adresse_1"), Size(50), QuickSearch]
            public String Adresse1 { get { return Fields.Adresse1[this]; } set { Fields.Adresse1[this] = value; } }
            public partial class RowFields { public StringField Adresse1; }
            #endregion Adresse1
                
            #region Adresse 2
            [DisplayName("Adresse 2"), Column("Adresse_2"), Size(50)]
            public String Adresse2 { get { return Fields.Adresse2[this]; } set { Fields.Adresse2[this] = value; } }
            public partial class RowFields { public StringField Adresse2; }
            #endregion Adresse2
                
            #region Adresse 3
            [DisplayName("Adresse 3"), Column("Adresse_3"), Size(50)]
            public String Adresse3 { get { return Fields.Adresse3[this]; } set { Fields.Adresse3[this] = value; } }
            public partial class RowFields { public StringField Adresse3; }
            #endregion Adresse3
                
            #region Ville
            [DisplayName("Ville"), ForeignKey("[dbo].[VILLE]", "Id"), LeftJoin("jVille"), TextualField("VilleCodeInsee")]
            [LookupEditor(typeof(Ge.Entities.VilleRow), InplaceAdd = true)]
            public Guid? Ville { get { return Fields.Ville[this]; } set { Fields.Ville[this] = value; } }
            public partial class RowFields { public GuidField Ville; }
            #endregion Ville
                
            #region Pays
            [DisplayName("Pays"), ForeignKey("[dbo].[PAYS]", "Id"), LeftJoin("jPays"), TextualField("PaysLibele")]
            [LookupEditor(typeof(Ge.Entities.PaysRow), InplaceAdd = true)]
            public Guid? Pays { get { return Fields.Pays[this]; } set { Fields.Pays[this] = value; } }
            public partial class RowFields { public GuidField Pays; }
            #endregion Pays
                
            #region Cedex
            [DisplayName("Cedex"), Size(50)]
            public String Cedex { get { return Fields.Cedex[this]; } set { Fields.Cedex[this] = value; } }
            public partial class RowFields { public StringField Cedex; }
            #endregion Cedex
                
            #region Batiment
            [DisplayName("Batiment"), Size(20)]
            public String Batiment { get { return Fields.Batiment[this]; } set { Fields.Batiment[this] = value; } }
            public partial class RowFields { public StringField Batiment; }
            #endregion Batiment
                
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
            
                [DisplayName("Ville Default Value"), Expression("jVille.[DefaultValue]")]
                public Boolean? VilleDefaultValue { get { return Fields.VilleDefaultValue[this]; } set { Fields.VilleDefaultValue[this] = value; } }
                public partial class RowFields { public BooleanField VilleDefaultValue; }

                        
                [DisplayName("Ville Is Active"), Expression("jVille.[IsActive]")]
                public Boolean? VilleIsActive { get { return Fields.VilleIsActive[this]; } set { Fields.VilleIsActive[this] = value; } }
                public partial class RowFields { public BooleanField VilleIsActive; }

                        
                [DisplayName("Ville Read Only"), Expression("jVille.[ReadOnly]")]
                public Boolean? VilleReadOnly { get { return Fields.VilleReadOnly[this]; } set { Fields.VilleReadOnly[this] = value; } }
                public partial class RowFields { public BooleanField VilleReadOnly; }

                        
                [DisplayName("Ville Insert Date"), Expression("jVille.[InsertDate]")]
                public DateTime? VilleInsertDate { get { return Fields.VilleInsertDate[this]; } set { Fields.VilleInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField VilleInsertDate; }

                        
                [DisplayName("Ville Insert User Id"), Expression("jVille.[InsertUserId]")]
                public Int32? VilleInsertUserId { get { return Fields.VilleInsertUserId[this]; } set { Fields.VilleInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field VilleInsertUserId; }

                        
                [DisplayName("Ville Update Date"), Expression("jVille.[UpdateDate]")]
                public DateTime? VilleUpdateDate { get { return Fields.VilleUpdateDate[this]; } set { Fields.VilleUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField VilleUpdateDate; }

                        
                [DisplayName("Ville Update User Id"), Expression("jVille.[UpdateUserId]")]
                public Int32? VilleUpdateUserId { get { return Fields.VilleUpdateUserId[this]; } set { Fields.VilleUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field VilleUpdateUserId; }

                        
                [DisplayName("Ville Code Insee"), Expression("jVille.[CodeINSEE]")]
                public String VilleCodeInsee { get { return Fields.VilleCodeInsee[this]; } set { Fields.VilleCodeInsee[this] = value; } }
                public partial class RowFields { public StringField VilleCodeInsee; }

                        
                [DisplayName("Ville Libele"), Expression("jVille.[Libele]")]
                public String VilleLibele { get { return Fields.VilleLibele[this]; } set { Fields.VilleLibele[this] = value; } }
                public partial class RowFields { public StringField VilleLibele; }

                        
                [DisplayName("Ville Nom Ville"), Expression("jVille.[NomVille]")]
                public String VilleNomVille { get { return Fields.VilleNomVille[this]; } set { Fields.VilleNomVille[this] = value; } }
                public partial class RowFields { public StringField VilleNomVille; }

                        
                [DisplayName("Ville Code Postal"), Expression("jVille.[CodePostal]")]
                public String VilleCodePostal { get { return Fields.VilleCodePostal[this]; } set { Fields.VilleCodePostal[this] = value; } }
                public partial class RowFields { public StringField VilleCodePostal; }

                        
                [DisplayName("Ville Pays"), Expression("jVille.[Pays]")]
                public Guid? VillePays { get { return Fields.VillePays[this]; } set { Fields.VillePays[this] = value; } }
                public partial class RowFields { public GuidField VillePays; }

                        
                [DisplayName("Pays Default Value"), Expression("jPays.[DefaultValue]")]
                public Boolean? PaysDefaultValue { get { return Fields.PaysDefaultValue[this]; } set { Fields.PaysDefaultValue[this] = value; } }
                public partial class RowFields { public BooleanField PaysDefaultValue; }

                        
                [DisplayName("Pays Is Active"), Expression("jPays.[IsActive]")]
                public Boolean? PaysIsActive { get { return Fields.PaysIsActive[this]; } set { Fields.PaysIsActive[this] = value; } }
                public partial class RowFields { public BooleanField PaysIsActive; }

                        
                [DisplayName("Pays Read Only"), Expression("jPays.[ReadOnly]")]
                public Boolean? PaysReadOnly { get { return Fields.PaysReadOnly[this]; } set { Fields.PaysReadOnly[this] = value; } }
                public partial class RowFields { public BooleanField PaysReadOnly; }

                        
                [DisplayName("Pays Insert Date"), Expression("jPays.[InsertDate]")]
                public DateTime? PaysInsertDate { get { return Fields.PaysInsertDate[this]; } set { Fields.PaysInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField PaysInsertDate; }

                        
                [DisplayName("Pays Insert User Id"), Expression("jPays.[InsertUserId]")]
                public Int32? PaysInsertUserId { get { return Fields.PaysInsertUserId[this]; } set { Fields.PaysInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field PaysInsertUserId; }

                        
                [DisplayName("Pays Update Date"), Expression("jPays.[UpdateDate]")]
                public DateTime? PaysUpdateDate { get { return Fields.PaysUpdateDate[this]; } set { Fields.PaysUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField PaysUpdateDate; }

                        
                [DisplayName("Pays Update User Id"), Expression("jPays.[UpdateUserId]")]
                public Int32? PaysUpdateUserId { get { return Fields.PaysUpdateUserId[this]; } set { Fields.PaysUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field PaysUpdateUserId; }

                        
                [DisplayName("Pays Libele"), Expression("jPays.[Libele]")]
                public String PaysLibele { get { return Fields.PaysLibele[this]; } set { Fields.PaysLibele[this] = value; } }
                public partial class RowFields { public StringField PaysLibele; }

                        
                [DisplayName("Pays Code"), Expression("jPays.[Code]")]
                public String PaysCode { get { return Fields.PaysCode[this]; } set { Fields.PaysCode[this] = value; } }
                public partial class RowFields { public StringField PaysCode; }

                        
                [DisplayName("Pays Code Ue"), Expression("jPays.[CodeUE]")]
                public Int16? PaysCodeUe { get { return Fields.PaysCodeUe[this]; } set { Fields.PaysCodeUe[this] = value; } }
                public partial class RowFields { public Int16Field PaysCodeUe; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.Id; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Adresse1; }
            }
            #endregion Id and Name fields

    #region Constructor
    public AdresseRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[ADRESSE]")
    {
    LocalTextPrefix = "Ge.Adresse";
    }
    }
    #endregion RowFields
    }
    }
