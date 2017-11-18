
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[LINK_FOLDER_CAVALIER]")]
    [DisplayName("Link Folder Cavalier"), InstanceName("Link Folder Cavalier"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class LinkFolderCavalierRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Folder"), PrimaryKey, ForeignKey(typeof(ManFolderRow), "Id"), LeftJoin("jFolder")]
        public Int64? Folder
        {
            get { return Fields.Folder[this]; }
            set { Fields.Folder[this] = value; }
        }

        [DisplayName("Cavalier"), Size(10), ForeignKey("[dbo].[MAN_CAVALIERS]", "LIC_FFE"), LeftJoin("jCavalier"), QuickSearch, TextualField("CavalierLicNumber")]
        [LookupEditor(typeof(ManCavaliersRow))]
        public String Cavalier
        {
            get { return Fields.Cavalier[this]; }
            set { Fields.Cavalier[this] = value; }
        }
        [DisplayName("Cavalier Person"), Expression("jCavalier.[Person]")]
        public Int64? CavalierPerson
        {
            get { return Fields.CavalierPerson[this]; }
            set { Fields.CavalierPerson[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Cavalier; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LinkFolderCavalierRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field Folder;
            public StringField Cavalier;

            public Int64Field CavalierPerson;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.LinkFolderCavalier";
            }
        }
    }
}
