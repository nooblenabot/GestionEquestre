
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), DisplayName("Ville"), InstanceName("Ville"), TwoLevelCached]
    [ReadPermission("Ge:VILLE:Read")]
    [InsertPermission("Ge:VILLE:Insert")]
    [UpdatePermission("Ge:VILLE:Update")]
    [DeletePermission("Ge:VILLE:Delete")]
    [LookupScript("Ge.Ville")]
    public sealed class VilleRow : Row, IIdRow, INameRow
    {        
            #region Id
            [DisplayName("Id"), PrimaryKey]
            public Guid? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
            public partial class RowFields { public GuidField Id; }
            #endregion Id
                
            #region Default Value
            [DisplayName("Default Value"), NotNull]
            public Boolean? DefaultValue { get { return Fields.DefaultValue[this]; } set { Fields.DefaultValue[this] = value; } }
            public partial class RowFields { public BooleanField DefaultValue; }
            #endregion DefaultValue
                
            #region Is Active
            [DisplayName("Is Active"), NotNull]
            public Boolean? IsActive { get { return Fields.IsActive[this]; } set { Fields.IsActive[this] = value; } }
            public partial class RowFields { public BooleanField IsActive; }
            #endregion IsActive
                
            #region Read Only
            [DisplayName("Read Only"), NotNull]
            public Boolean? ReadOnly { get { return Fields.ReadOnly[this]; } set { Fields.ReadOnly[this] = value; } }
            public partial class RowFields { public BooleanField ReadOnly; }
            #endregion ReadOnly
                
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
                
            #region Code Insee
            [DisplayName("Code Insee"), Column("CodeINSEE"), Size(6), QuickSearch]
            public String CodeInsee { get { return Fields.CodeInsee[this]; } set { Fields.CodeInsee[this] = value; } }
            public partial class RowFields { public StringField CodeInsee; }
            #endregion CodeInsee
                
            #region Libele
            [DisplayName("Libele"), Size(50)]
            public String Libele { get { return Fields.Libele[this]; } set { Fields.Libele[this] = value; } }
            public partial class RowFields { public StringField Libele; }
            #endregion Libele
                
            #region Nom Ville
            [DisplayName("Nom Ville"), Size(50),QuickSearch]
            public String NomVille { get { return Fields.NomVille[this]; } set { Fields.NomVille[this] = value; } }
            public partial class RowFields { public StringField NomVille; }
            #endregion NomVille
                
            #region Code Postal
            [DisplayName("Code Postal"), Size(6), QuickSearch]
            public String CodePostal { get { return Fields.CodePostal[this]; } set { Fields.CodePostal[this] = value; } }
            public partial class RowFields { public StringField CodePostal; }
            #endregion CodePostal
                
            #region Pays
            [DisplayName("Pays"), ForeignKey("[dbo].[PAYS]", "Id"), LeftJoin("jPays"), TextualField("PaysLibele")]
            [LookupEditor(typeof(Ge.Entities.PaysRow), InplaceAdd = true)]
            public Guid? Pays { get { return Fields.Pays[this]; } set { Fields.Pays[this] = value; } }
            public partial class RowFields { public GuidField Pays; }
            #endregion Pays
        

    #region Foreign Fields
            
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
            get { return Fields.CodeInsee; }
            }
            #endregion Id and Name fields

    #region Constructor
    public VilleRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[VILLE]")
    {
    LocalTextPrefix = "Ge.Ville";
    }
    }
    #endregion RowFields
    }
    }
