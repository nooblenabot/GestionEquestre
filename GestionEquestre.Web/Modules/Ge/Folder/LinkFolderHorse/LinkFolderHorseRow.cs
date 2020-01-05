
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[LINK_FOLDER_HORSE]")]
    [DisplayName("Link Folder Horse"), InstanceName("Link Folder Horse"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class LinkFolderHorseRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Folder"),PrimaryKey, ForeignKey(typeof(ManFolderRow), "Id"),LeftJoin("jFolder")]
        public Int64? Folder
        {
            get { return Fields.Folder[this]; }
            set { Fields.Folder[this] = value; }
        }

        [DisplayName("Horse"), Size(15), NotNull, ForeignKey("[dbo].[MAN_HORSES]", "UELN"), LeftJoin("jHorse"), QuickSearch, TextualField("Horse")]
        [LookupEditor(typeof(ManHorsesRow))]
        public String Horse
        {
            get { return Fields.Horse[this]; }
            set { Fields.Horse[this] = value; }
        }

        [DisplayName("Horse Name"), Expression("jHorse.[Name]")]
        public String HorseName
        {
            get { return Fields.HorseName[this]; }
            set { Fields.HorseName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Horse; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LinkFolderHorseRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field Folder;
            public StringField Horse;

            public StringField HorseName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.LinkFolderHorse";
            }
        }
    }
}
