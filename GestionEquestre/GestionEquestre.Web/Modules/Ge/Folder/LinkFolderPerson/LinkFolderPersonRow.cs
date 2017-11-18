
namespace GestionEquestre.Ge.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GE"), TableName("[dbo].[LINK_FOLDER_PERSON]")]
    [DisplayName("Link Folder Person"), InstanceName("Link Folder Person"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class LinkFolderPersonRow : Row, IIdRow, INameRow
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

        [DisplayName("Person"), NotNull, ForeignKey("[dbo].[MAN_PERSON]", "Id"), LeftJoin("jPerson"), TextualField("PersonId")]
        [LookupEditor(typeof(ManPersonRow))]
        public Int64? PersonId
        {
            get { return Fields.PersonId[this]; }
            set { Fields.PersonId[this] = value; }
        }

        [DisplayName("Caption"), Size(200), QuickSearch]
        public String Caption
        {
            get { return Fields.Caption[this]; }
            set { Fields.Caption[this] = value; }
        }

        [DisplayName("Person Is Morale"), Expression("jPerson.[IsMorale]")]
        public Boolean? PersonIsMorale
        {
            get { return Fields.PersonIsMorale[this]; }
            set { Fields.PersonIsMorale[this] = value; }
        }
        
        [DisplayName("Person Surname"), Expression("jPerson.[Surname]")]
        public String PersonSurname
        {
            get { return Fields.PersonSurname[this]; }
            set { Fields.PersonSurname[this] = value; }
        }
        [DisplayName("Person Name"), Expression("jPerson.[Name]")]
        public String PersonName
        {
            get { return Fields.PersonName[this]; }
            set { Fields.PersonName[this] = value; }
        }
        [DisplayName("Person Maiden Name"), Expression("jPerson.[MaidenName]")]
        public String PersonMaidenName
        {
            get { return Fields.PersonMaidenName[this]; }
            set { Fields.PersonMaidenName[this] = value; }
        }
        [DisplayName("Person Business Name"), Expression("jPerson.[BusinessName]")]
        public String PersonBusinessName
        {
            get { return Fields.PersonBusinessName[this]; }
            set { Fields.PersonBusinessName[this] = value; }
        }

        [DisplayName("Person Caption"), Expression("jPerson.[Caption]")]
        public String PersonCaption
        {
            get { return Fields.PersonCaption[this]; }
            set { Fields.PersonCaption[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Caption; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LinkFolderPersonRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field Folder;
            public Int64Field PersonId;
            public StringField Caption;

            public BooleanField PersonIsMorale;
            public StringField PersonSurname;
            public StringField PersonName;
            public StringField PersonMaidenName;
            public StringField PersonBusinessName;

            public StringField PersonCaption;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Ge.LinkFolderPerson";
            }
        }
    }
}
