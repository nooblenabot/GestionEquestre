using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103130032)]
    public class GEDB_20161103_130032_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("DefaultValue").AsBoolean().NotNullable().WithDefaultValue(0)
                .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("Organization").AsString(80).Nullable()
                .WithColumn("UELNCode").AsString(3).Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_UELNORGA")
                .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_UELNORGA")
                .WithColumn("Id").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_UELNORGA", "Id");

            Insert.IntoTable("SET_UELNORGA").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                UELNCode = "001",
                Organization = "IFCE",
            });

        }
    }
}