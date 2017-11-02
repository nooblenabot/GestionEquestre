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
				.WithColumn("Libele").AsString(50).Nullable()
                .WithColumn("Code").AsString(5).Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("CODE_STUATIONFAMILLE")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("CODE_STUATIONFAMILLE")
                .WithColumn("Id").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "CODE_STUATIONFAMILLE", "Id");

            Insert.IntoTable("CODE_STUATIONFAMILLE").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "C",
                Libele = "Celibataire"
            });

            Insert.IntoTable("CODE_STUATIONFAMILLE").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "M",
                Libele = "Marie"
            });

            Insert.IntoTable("CODE_STUATIONFAMILLE").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "P",
                Libele = "PACS"
            });

            Insert.IntoTable("CODE_STUATIONFAMILLE").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "D",
                Libele = "Divorce"
            });

            Insert.IntoTable("CODE_STUATIONFAMILLE").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "V",
                Libele = "Veuf"
            });

            Insert.IntoTable("CODE_STUATIONFAMILLE").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "K",
                Libele = "Vie Maritale"
            });

            Insert.IntoTable("CODE_STUATIONFAMILLE").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "S",
                Libele = "Separe"
            });

            Insert.IntoTable("CODE_STUATIONFAMILLE").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "CO",
                Libele = "En Collectivite"
            });

            Insert.IntoTable("CODE_STUATIONFAMILLE").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Code = "N",
                Libele = "Non Connue"
            });
        }
    }
}