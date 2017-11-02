
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;


    [ConnectionKey("GE"), DisplayName("Code Sexe"), InstanceName("Code Sexe"), TwoLevelCached]
    [ReadPermission("Ge:CODE_SEXE:Read")]
    [InsertPermission("Ge:CODE_SEXE:Insert")]
    [UpdatePermission("Ge:CODE_SEXE:Update")]
    [DeletePermission("Ge:CODE_SEXE:Delete")]
    //[LookupScript("Ge.CodeSexe")]
    public sealed class CodeSexeRow : Row, IIdRow, INameRow//, IUpdateLogRow
    {        
            #region Sexe Id
            [DisplayName("Sexe Id"), LookupInclude, PrimaryKey]
            public Int16? SexeId { get { return Fields.SexeId[this]; } set { Fields.SexeId[this] = value; } }
            public partial class RowFields { public Int16Field SexeId; }
            #endregion SexeId
                
            #region Default Value
            [DisplayName("Default Value"), NotNull]
            public Boolean? DefaultValue { get { return Fields.DefaultValue[this]; } set { Fields.DefaultValue[this] = value; } }
            public partial class RowFields { public BooleanField DefaultValue; }
            #endregion DefaultValue
                
            #region Is Active
            [DisplayName("Actif"), NotNull]
            public Boolean? IsActive { get { return Fields.IsActive[this]; } set { Fields.IsActive[this] = value; } }
            public partial class RowFields { public BooleanField IsActive; }
            #endregion IsActive
                
            #region Read Only
            [DisplayName("Read Only"), NotNull]
            public Boolean? ReadOnly { get { return Fields.ReadOnly[this]; } set { Fields.ReadOnly[this] = value; } }
            public partial class RowFields { public BooleanField ReadOnly; }
            #endregion ReadOnly
                
            #region Insert Date
            [DisplayName("Date De Creation"), NotNull]
            public DateTime? InsertDate { get { return Fields.InsertDate[this]; } set { Fields.InsertDate[this] = value; } }
            public partial class RowFields { public DateTimeField InsertDate; }
            #endregion InsertDate
                
            #region Insert User Id
            [DisplayName("Cree Par"), ForeignKey("Users", "UserId"), LeftJoin("jUser"),NotNull, Updatable(false)]
            public Int32? InsertUserId { get { return Fields.InsertUserId[this]; } set { Fields.InsertUserId[this] = value; } }
            public partial class RowFields { public Int32Field InsertUserId; }


            //[DisplayName("Cree Par"), Expression("jUsers.Username")]
            //public String UserName
            //{
            //    get { return Fields.UserName[this]; }
            //    set { Fields.UserName[this] = value; }
            //}
        #endregion InsertUserId

        #region Update Date
        [DisplayName("Update Date")]
            public DateTime? UpdateDate { get { return Fields.UpdateDate[this]; } set { Fields.UpdateDate[this] = value; } }
            public partial class RowFields { public DateTimeField UpdateDate; }
            #endregion UpdateDate

            #region Update User Id
            [DisplayName("Update User Id"),Insertable(false), Updatable(false)]
            public Int32? UpdateUserId
            {
                get { return Fields.UpdateUserId[this]; }
                set { Fields.UpdateUserId[this] = value; }
            }
            public partial class RowFields { public Int32Field UpdateUserId; }
            #endregion UpdateUserId

            #region Libele
            [DisplayName("Libele"), Size(50),LookupInclude, QuickSearch]
            public String Libele { get { return Fields.Libele[this]; } set { Fields.Libele[this] = value; } }
            public partial class RowFields { public StringField Libele; }
            #endregion Libele
                
            #region Civilite
            [DisplayName("Civilite"), Size(50)]
            public String Civilite { get { return Fields.Civilite[this]; } set { Fields.Civilite[this] = value; } }
            public partial class RowFields { public StringField Civilite; }
            #endregion Civilite
                
            #region Libele Us
            [DisplayName("Libele Us"), Column("LibeleUS"), Size(50)]
            public String LibeleUs { get { return Fields.LibeleUs[this]; } set { Fields.LibeleUs[this] = value; } }
            public partial class RowFields { public StringField LibeleUs; }
        #endregion LibeleUs


        #region Foreign Fields
        
        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
            {
            get { return Fields.SexeId; }
            }
        
            StringField INameRow.NameField
            {
            get { return Fields.Libele; }
            }
    #endregion Id and Name fields

    #region Constructor
    public CodeSexeRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
            //public StringField UserName;
            public RowFields()
    : base("[dbo].[CODE_SEXE]")
    {
    LocalTextPrefix = "Ge.CodeSexe";
    }
    }
    #endregion RowFields
    }
    }
