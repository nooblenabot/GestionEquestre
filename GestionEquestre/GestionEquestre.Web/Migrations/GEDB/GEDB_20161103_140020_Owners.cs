using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103140020)]
    public class GEDB_20161103_140020_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("Horse").AsFixedLengthString(15).NotNullable()
                .WithColumn("Cavalier").AsFixedLengthString(10).Nullable()
                .WithColumn("Part").AsFloat().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("MAN_OWNER")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("MAN_OWNER")
                .WithColumn("Id").AsInt64().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "MAN_OWNER", "Id");

            Create.ForeignKey("FK_OWNER_HORSE").FromTable("MAN_OWNER").ForeignColumn("Horse").ToTable("MAN_HORSES").PrimaryColumn("UELN");
            Create.ForeignKey("FK_OWNER_CAVALIER").FromTable("MAN_OWNER").ForeignColumn("Cavalier").ToTable("MAN_CAVALIERS").PrimaryColumn("LIC_FFE");
        }
    }
}