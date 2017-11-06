using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103130023)]
    public class GEDB_20161103_130023_Initial : AutoReversingMigration
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
                .WithColumn("Caption").AsString(50).Nullable()
                .WithColumn("Code").AsString(5).Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_LFC")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_LFC")
                .WithColumn("Id").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_LFC", "Id");

            Insert.IntoTable("SET_LFC").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "NOT",
                Caption = "Pas de licence competition"
            });

            Insert.IntoTable("SET_LFC").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "CLUB",
                Caption = "Licence Club"
            });

            Insert.IntoTable("SET_LFC").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "AMA",
                Caption = "Licence Amateur"
            });

            Insert.IntoTable("SET_LFC").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "PRO",
                Caption = "Licence Pro"
            });

        }
    }
}