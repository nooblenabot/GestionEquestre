
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), DisplayName("Comptebancaire"), InstanceName("Comptebancaire"), TwoLevelCached]
    [ReadPermission("Ge:COMPTEBANCAIRE:Read")]
    [InsertPermission("Ge:COMPTEBANCAIRE:Insert")]
    [UpdatePermission("Ge:COMPTEBANCAIRE:Update")]
    [DeletePermission("Ge:COMPTEBANCAIRE:Delete")]
    [LookupScript("Ge.Comptebancaire")]
    public sealed class ComptebancaireRow : Row, IIdRow, INameRow
    {        
            #region Id
            [DisplayName("Id"), PrimaryKey]
            public Guid? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
            public partial class RowFields { public GuidField Id; }
            #endregion Id
                
            #region Code Pays Iban
            [DisplayName("Code Pays Iban"), Column("CodePaysIBAN"), Size(2), NotNull, QuickSearch]
            public String CodePaysIban { get { return Fields.CodePaysIban[this]; } set { Fields.CodePaysIban[this] = value; } }
            public partial class RowFields { public StringField CodePaysIban; }
            #endregion CodePaysIban
                
            #region Cle Iban
            [DisplayName("Cle Iban"), Column("CleIBAN"), Size(2), NotNull]
            public String CleIban { get { return Fields.CleIban[this]; } set { Fields.CleIban[this] = value; } }
            public partial class RowFields { public StringField CleIban; }
            #endregion CleIban
                
            #region Banque
            [DisplayName("Banque"), Size(5), NotNull]
            public String Banque { get { return Fields.Banque[this]; } set { Fields.Banque[this] = value; } }
            public partial class RowFields { public StringField Banque; }
            #endregion Banque
                
            #region Guichet
            [DisplayName("Guichet"), Size(5), NotNull]
            public String Guichet { get { return Fields.Guichet[this]; } set { Fields.Guichet[this] = value; } }
            public partial class RowFields { public StringField Guichet; }
            #endregion Guichet
                
            #region Numero Compte
            [DisplayName("Numero Compte"), Size(11), NotNull]
            public String NumeroCompte { get { return Fields.NumeroCompte[this]; } set { Fields.NumeroCompte[this] = value; } }
            public partial class RowFields { public StringField NumeroCompte; }
            #endregion NumeroCompte
                
            #region Cle Rib
            [DisplayName("Cle Rib"), Column("CleRIB"), Size(2), NotNull]
            public String CleRib { get { return Fields.CleRib[this]; } set { Fields.CleRib[this] = value; } }
            public partial class RowFields { public StringField CleRib; }
            #endregion CleRib
                
            #region Emetteur Rib
            [DisplayName("Emetteur Rib"), Size(6)]
            public String EmetteurRib { get { return Fields.EmetteurRib[this]; } set { Fields.EmetteurRib[this] = value; } }
            public partial class RowFields { public StringField EmetteurRib; }
            #endregion EmetteurRib
                
            #region Bic
            [DisplayName("Bic"), Column("BIC"), Size(11)]
            public String Bic { get { return Fields.Bic[this]; } set { Fields.Bic[this] = value; } }
            public partial class RowFields { public StringField Bic; }
            #endregion Bic
                
            #region Titulaire Compte
            [DisplayName("Titulaire Compte"), Size(50), NotNull]
            public String TitulaireCompte { get { return Fields.TitulaireCompte[this]; } set { Fields.TitulaireCompte[this] = value; } }
            public partial class RowFields { public StringField TitulaireCompte; }
            #endregion TitulaireCompte
                
            #region Domiciliation
            [DisplayName("Domiciliation"), Size(200), NotNull]
            public String Domiciliation { get { return Fields.Domiciliation[this]; } set { Fields.Domiciliation[this] = value; } }
            public partial class RowFields { public StringField Domiciliation; }
            #endregion Domiciliation
                
            #region Code Ics
            [DisplayName("Code Ics"), Column("CodeICS"), Size(13)]
            public String CodeIcs { get { return Fields.CodeIcs[this]; } set { Fields.CodeIcs[this] = value; } }
            public partial class RowFields { public StringField CodeIcs; }
            #endregion CodeIcs
                
            #region Code Rum
            [DisplayName("Code Rum"), Column("CodeRUM"), Size(35)]
            public String CodeRum { get { return Fields.CodeRum[this]; } set { Fields.CodeRum[this] = value; } }
            public partial class RowFields { public StringField CodeRum; }
            #endregion CodeRum
                
            #region Date Signature Mandat
            [DisplayName("Date Signature Mandat")]
            public DateTime? DateSignatureMandat { get { return Fields.DateSignatureMandat[this]; } set { Fields.DateSignatureMandat[this] = value; } }
            public partial class RowFields { public DateTimeField DateSignatureMandat; }
            #endregion DateSignatureMandat
                
            #region Type Prelevement
            [DisplayName("Type Prelevement")]
            public Int16? TypePrelevement { get { return Fields.TypePrelevement[this]; } set { Fields.TypePrelevement[this] = value; } }
            public partial class RowFields { public Int16Field TypePrelevement; }
            #endregion TypePrelevement
                
            #region Date Dernier Prelevement
            [DisplayName("Date Dernier Prelevement")]
            public DateTime? DateDernierPrelevement { get { return Fields.DateDernierPrelevement[this]; } set { Fields.DateDernierPrelevement[this] = value; } }
            public partial class RowFields { public DateTimeField DateDernierPrelevement; }
            #endregion DateDernierPrelevement
                
            #region Type Dernier Prelevement
            [DisplayName("Type Dernier Prelevement")]
            public Int16? TypeDernierPrelevement { get { return Fields.TypeDernierPrelevement[this]; } set { Fields.TypeDernierPrelevement[this] = value; } }
            public partial class RowFields { public Int16Field TypeDernierPrelevement; }
            #endregion TypeDernierPrelevement
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.Id; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.CodePaysIban; }
            }
            #endregion Id and Name fields

    #region Constructor
    public ComptebancaireRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[COMPTEBANCAIRE]")
    {
    LocalTextPrefix = "Ge.Comptebancaire";
    }
    }
    #endregion RowFields
    }
    }
