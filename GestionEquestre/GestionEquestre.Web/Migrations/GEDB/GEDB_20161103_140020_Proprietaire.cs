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
                .WithColumn("Cheval").AsFixedLengthString(15).NotNullable()
                .WithColumn("Cavalier").AsFixedLengthString(10).Nullable()
                .WithColumn("Part").AsFloat().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("PROPRIETAIRE")
                .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("PROPRIETAIRE")
                .WithColumn("Id").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "PROPRIETAIRE", "Id");

            Create.ForeignKey("FK_PROPRIETAIRE_CHEVAL").FromTable("PROPRIETAIRE").ForeignColumn("Cheval").ToTable("CHEVAUX").PrimaryColumn("UELN");
            Create.ForeignKey("FK_PROPRIETAIRE_CAVALIER").FromTable("PROPRIETAIRE").ForeignColumn("Cavalier").ToTable("CAVALIERS").PrimaryColumn("LIC_FFE");
        }
    }
}