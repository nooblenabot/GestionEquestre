
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), DisplayName("Code Stuationfamille"), InstanceName("Code Stuationfamille"), TwoLevelCached]
    [ReadPermission("Ge:CODE_STUATIONFAMILLE:Read")]
    [InsertPermission("Ge:CODE_STUATIONFAMILLE:Insert")]
    [UpdatePermission("Ge:CODE_STUATIONFAMILLE:Update")]
    [DeletePermission("Ge:CODE_STUATIONFAMILLE:Delete")]
    [LookupScript("Ge.CodeStuationfamille")]
    public sealed class CodeStuationfamilleRow : Row, IIdRow, INameRow
    {        
            #region Id
            [DisplayName("Id"), Identity]
            public Int16? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
            public partial class RowFields { public Int16Field Id; }
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
                
            #region Libele
            [DisplayName("Libele"), Size(50), QuickSearch]
            public String Libele { get { return Fields.Libele[this]; } set { Fields.Libele[this] = value; } }
            public partial class RowFields { public StringField Libele; }
            #endregion Libele
                
            #region Code
            [DisplayName("Code"), Size(5)]
            public String Code { get { return Fields.Code[this]; } set { Fields.Code[this] = value; } }
            public partial class RowFields { public StringField Code; }
            #endregion Code
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.Id; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Libele; }
            }
            #endregion Id and Name fields

    #region Constructor
    public CodeStuationfamilleRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[CODE_STUATIONFAMILLE]")
    {
    LocalTextPrefix = "Ge.CodeStuationfamille";
    }
    }
    #endregion RowFields
    }
    }
