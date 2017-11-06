using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103140042)]
    public class GEDB_20161103_140042_Initial : AutoReversingMigration
    {
        
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("Folder").AsInt32().NotNullable()
                .WithColumn("Cavalier").AsFixedLengthString(10).Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("LINK_FOLDER_CAVALIER")
                .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("LINK_FOLDER_CAVALIER")
                .WithColumn("Id").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "LINK_FOLDER_CAVALIER", "Id");

            Create.ForeignKey("FK_L_CFOLDER_CAVALIER").FromTable("LINK_FOLDER_CAVALIER").ForeignColumn("Cavalier").ToTable("MAN_CAVALIERS").PrimaryColumn("LIC_FFE");
            Create.ForeignKey("FK_L_CFOLDER_FOLDER").FromTable("LINK_FOLDER_CAVALIER").ForeignColumn("Folder").ToTable("MAN_FOLDER").PrimaryColumn("Id");
        }
    }
}