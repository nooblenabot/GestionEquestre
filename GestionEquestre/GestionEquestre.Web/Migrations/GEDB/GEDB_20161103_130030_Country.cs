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
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("Name_FR_fr").AsString(50).NotNullable()
                .WithColumn("Name_EN_gb").AsString(50).NotNullable()
                .WithColumn("alpha3").AsString(3).NotNullable().Unique()
                .WithColumn("alpha2").AsString(2).NotNullable().Unique()
                .WithColumn("CodeUE").AsInt16().Nullable()
                .WithColumn("ISOcode").AsString(3).NotNullable().Unique();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_COUNTRY")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_COUNTRY")
                .WithColumn("Id").AsInt16().PrimaryKey().Unique().NotNullable());

            Utils.AddOracleIdentity(this, "SET_COUNTRY", "Id");

            //   Execute.EmbeddedScript("Insert_Contry.sql");

            Insert.IntoTable("SET_COUNTRY").Row(new
            {
                Id = "75",
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                alpha3 = "FRA",
                alpha2 = "FR",
                Name_FR_fr = "France",
                Name_EN_gb = "France",
                CodeUE = "1",
                ISOcode = "250"
            });

            Insert.IntoTable("SET_COUNTRY").Row(new
            {
                Id = "140",
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                alpha3 = "MCO",
                alpha2 = "MC",
                Name_FR_fr = "Monaco",
                Name_EN_gb = "Monaco",
                CodeUE = "9",
                ISOcode = "492"
            });

            Insert.IntoTable("SET_COUNTRY").Row(new
            {
                Id = "18",
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                alpha3 = "BEL",
                alpha2 = "BE",
                Name_FR_fr = "Belgique",
                Name_EN_gb = "Belgique",
                CodeUE = "2",
                ISOcode = "056"
            });
        }
    }
}