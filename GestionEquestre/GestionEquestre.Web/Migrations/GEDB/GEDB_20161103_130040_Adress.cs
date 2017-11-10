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
                .WithColumn("Adress_1").AsString(50).Nullable()
                .WithColumn("Adress_2").AsString(50).Nullable()
                .WithColumn("Adress_3").AsString(50).Nullable()
                .WithColumn("City").AsGuid().Nullable()
                .WithColumn("Country").AsInt16().Nullable()
                .WithColumn("Cedex").AsString(50).Nullable()
                .WithColumn("building").AsString(20).Nullable()
                .WithColumn("Caption").AsString(200).Nullable()
                .WithColumn("ArchiveDate").AsDateTime().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("MAN_ADRESS")
                .WithColumn("Id").AsGuid().WithDefaultValue(SystemMethods.NewSequentialId).PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("MAN_ADRESS")
                .WithColumn("Id").AsGuid().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "MAN_ADRESS", "Id");

            Create.ForeignKey("FK_ADRESS_CITY").FromTable("MAN_ADRESS").ForeignColumn("City").ToTable("SET_CITY").PrimaryColumn("Id");
            Create.ForeignKey("FK_ADRESS_COUNTRY").FromTable("MAN_ADRESS").ForeignColumn("Country").ToTable("SET_COUNTRY").PrimaryColumn("Id");
        }
    }
}