using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103130021)]
    public class GEDB_20161103_130021_Initial : AutoReversingMigration
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
                .Create.Table("SET_MARITALSTATUS")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_MARITALSTATUS")
                .WithColumn("Id").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_MARITALSTATUS", "Id");

            Insert.IntoTable("SET_MARITALSTATUS").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "C",
                Caption = "Celibataire"
            });

            Insert.IntoTable("SET_MARITALSTATUS").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "M",
                Caption = "Marie"
            });

            Insert.IntoTable("SET_MARITALSTATUS").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "O",
                Caption = "PACS"
            });

            Insert.IntoTable("SET_MARITALSTATUS").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "D",
                Caption = "Divorce"
            });

            Insert.IntoTable("SET_MARITALSTATUS").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "V",
                Caption = "Veuf"
            });

            Insert.IntoTable("SET_MARITALSTATUS").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "K",
                Caption = "Vie Maritale"
            });

            Insert.IntoTable("SET_MARITALSTATUS").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "D",
                Caption = "Separe"
            });

            Insert.IntoTable("SET_MARITALSTATUS").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "CO",
                Caption = "En Collectivite"
            });

            Insert.IntoTable("SET_MARITALSTATUS").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "N",
                Caption = "Non Connue"
            });
        }
    }
}