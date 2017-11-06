using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103140041)]
    public class GEDB_20161103_140041_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("Folder").AsInt32().NotNullable()
                .WithColumn("Horse").AsFixedLengthString(15).NotNullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("LINK_FOLDER_HORSE")
                .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("LINK_FOLDER_HORSE")
                .WithColumn("Id").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "LINK_FOLDER_HORSE", "Id");

            Create.ForeignKey("FK_L_HFOLDER_HORSE").FromTable("LINK_FOLDER_HORSE").ForeignColumn("Horse").ToTable("MAN_HORSES").PrimaryColumn("UELN");
            Create.ForeignKey("FK_L_HFOLDER_FOLDER").FromTable("LINK_FOLDER_HORSE").ForeignColumn("Folder").ToTable("MAN_FOLDER").PrimaryColumn("Id");
        }
    }
}