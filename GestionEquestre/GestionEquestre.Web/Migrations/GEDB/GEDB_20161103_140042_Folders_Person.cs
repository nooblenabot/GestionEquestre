using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103140043)]
    public class GEDB_20161103_140043_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("Folder").AsInt32().NotNullable()
                .WithColumn("PersonId").AsGuid()
                .WithColumn("Caption").AsString(200).Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("LINK_FOLDER_PERSON")
                .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("LINK_FOLDER_PERSON")
                .WithColumn("Id").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "LINK_FOLDER_PERSON", "Id");

            Create.ForeignKey("FK_L_PFOLDER_PERSON").FromTable("LINK_FOLDER_PERSON").ForeignColumn("PersonId").ToTable("MAN_PERSON").PrimaryColumn("Id");
            Create.ForeignKey("FK_L_PFOLDER_FOLDER").FromTable("LINK_FOLDER_PERSON").ForeignColumn("Folder").ToTable("MAN_FOLDER").PrimaryColumn("Id");
        }
    }
}