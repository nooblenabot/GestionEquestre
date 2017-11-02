using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103130040)]
    public class GEDB_20161103_130040_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("NotArchive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("Adresse_1").AsString(50).Nullable()
                .WithColumn("Adresse_2").AsString(50).Nullable()
                .WithColumn("Adresse_3").AsString(50).Nullable()
                .WithColumn("Ville").AsGuid().Nullable()
                .WithColumn("Pays").AsGuid().Nullable()
                .WithColumn("Cedex").AsString(50).Nullable()
                .WithColumn("Batiment").AsString(20).Nullable()
                .WithColumn("Description").AsString(200).Nullable()
                .WithColumn("ArchiveDate").AsDateTime().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("ADRESSE")
                .WithColumn("Id").AsGuid().WithDefaultValue(SystemMethods.NewSequentialId).PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("ADRESSE")
                .WithColumn("Id").AsGuid().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "ADRESSE", "Id");

            Create.ForeignKey("FK_ADRESSE_VILLE").FromTable("ADRESSE").ForeignColumn("Ville").ToTable("VILLE").PrimaryColumn("Id");
            Create.ForeignKey("FK_ADRESSE_PAYS").FromTable("ADRESSE").ForeignColumn("Pays").ToTable("PAYS").PrimaryColumn("Id");
        }
    }
}