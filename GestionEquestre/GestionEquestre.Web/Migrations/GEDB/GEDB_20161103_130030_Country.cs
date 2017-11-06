using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103130030)]
    public class GEDB_20161103_130030_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("DefaultValue").AsBoolean().NotNullable().WithDefaultValue(0)
                .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("ReadOnly").AsBoolean().NotNullable().WithDefaultValue(0)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("Country").AsString(50).Nullable()
                .WithColumn("Code").AsString(3).Nullable()
                .WithColumn("CodeUE").AsInt16().Nullable()
                .WithColumn("ISO3166Country").AsFixedLengthString(3).Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_COUNTRY")
                .WithColumn("Id").AsGuid().WithDefaultValue(SystemMethods.NewSequentialId).PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_COUNTRY")
                .WithColumn("Id").AsGuid().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_COUNTRY", "Id");

            Insert.IntoTable("SET_COUNTRY").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "FRA",
                Country = "France",
                CodeUE = "1",
                ISO3166Country = "250"
            });

            Insert.IntoTable("SET_COUNTRY").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "MCO",
                Country = "Monaco",
                CodeUE = "9",
                ISO3166Country = "492"
            });

            Insert.IntoTable("SET_COUNTRY").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "BEL",
                Country = "Belgique",
                CodeUE = "2",
                ISO3166Country = "056"
            });
        }
    }
}