
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), DisplayName("Chevaux"), InstanceName("Chevaux"), TwoLevelCached]
    [ReadPermission("Ge:CHEVAUX:Read")]
    [InsertPermission("Ge:CHEVAUX:Insert")]
    [UpdatePermission("Ge:CHEVAUX:Update")]
    [DeletePermission("Ge:CHEVAUX:Delete")]
    [LookupScript("Ge.Chevaux")]
    public sealed class ChevauxRow : Row, IIdRow, INameRow
    {        
            #region Ueln
            [DisplayName("Ueln"), Column("UELN"), Size(15), PrimaryKey, QuickSearch]
            public String Ueln { get { return Fields.Ueln[this]; } set { Fields.Ueln[this] = value; } }
            public partial class RowFields { public StringField Ueln; }
            #endregion Ueln
                
            #region Sire
            [DisplayName("Sire"), Column("SIRE"), Size(8), NotNull]
            public String Sire { get { return Fields.Sire[this]; } set { Fields.Sire[this] = value; } }
            public partial class RowFields { public StringField Sire; }
            #endregion Sire
                
            #region Cle Sire
            [DisplayName("Cle Sire"), Column("CLE_SIRE"), Size(1), NotNull]
            public String CleSire { get { return Fields.CleSire[this]; } set { Fields.CleSire[this] = value; } }
            public partial class RowFields { public StringField CleSire; }
            #endregion CleSire
                
            #region Name
            [DisplayName("Name"), Size(100), NotNull]
            public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
            public partial class RowFields { public StringField Name; }
            #endregion Name
                
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
                
            #region Birthday
            [DisplayName("Birthday")]
            public DateTime? Birthday { get { return Fields.Birthday[this]; } set { Fields.Birthday[this] = value; } }
            public partial class RowFields { public DateTimeField Birthday; }
            #endregion Birthday
                
            #region Sexe
            [DisplayName("Sexe"), ForeignKey("[dbo].[CODE_SEXE]", "SexeId"), LeftJoin("jSexe"), TextualField("SexeLibele")]
        //[LookupEditor(typeof(Ge.Entities.CodeSexeRow),MinimumResultsForSearch = 1, InplaceAdd = false)]
        [LookupEditor(typeof(Ge.Scripts.SexeChevauxLookup), MinimumResultsForSearch = 1, InplaceAdd = false)]
        public Int16? Sexe { get { return Fields.Sexe[this]; } set { Fields.Sexe[this] = value; } }
            public partial class RowFields { public Int16Field Sexe; }
            #endregion Sexe
                
            #region Robe
            [DisplayName("Robe"), Size(50)]
            public String Robe { get { return Fields.Robe[this]; } set { Fields.Robe[this] = value; } }
            public partial class RowFields { public StringField Robe; }
            #endregion Robe
                
            #region Transpondeur
            [DisplayName("Transpondeur"), Size(18)]
            public String Transpondeur { get { return Fields.Transpondeur[this]; } set { Fields.Transpondeur[this] = value; } }
            public partial class RowFields { public StringField Transpondeur; }
            #endregion Transpondeur
                
            #region Sortie Definitive
            [DisplayName("Sortie Definitive")]
            public DateTime? SortieDefinitive { get { return Fields.SortieDefinitive[this]; } set { Fields.SortieDefinitive[this] = value; } }
            public partial class RowFields { public DateTimeField SortieDefinitive; }
            #endregion SortieDefinitive
                
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
                public String SexeCivilite { get { return Fields.SexeCivilite[this]; } set { Fields.SexeCivilite[this] =value; } }
                public partial class RowFields { public StringField SexeCivilite; }

                        
                [DisplayName("Sexe Libele Us"), Expression("jSexe.[LibeleUS]")]
                public String SexeLibeleUs { get { return Fields.SexeLibeleUs[this]; } set { Fields.SexeLibeleUs[this] = value; } }
                public partial class RowFields { public StringField SexeLibeleUs; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.Ueln; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Ueln; }
            }
            #endregion Id and Name fields

    #region Constructor
    public ChevauxRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[CHEVAUX]")
    {
    LocalTextPrefix = "Ge.Chevaux";
    }
    }
    #endregion RowFields
    }
    }
