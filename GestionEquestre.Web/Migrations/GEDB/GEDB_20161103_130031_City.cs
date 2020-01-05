using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103130031)]
    public class GEDB_20161103_130031_Initial : AutoReversingMigration
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
                .WithColumn("FRCodeINSEE").AsString(6).Nullable()
                .WithColumn("Caption").AsString(50).Nullable()
                .WithColumn("City").AsString(50).Nullable()
                .WithColumn("PostCode").AsString(6).Nullable()
                .WithColumn("Country").AsInt16().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_CITY")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_CITY")
                .WithColumn("Id").AsInt64().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_CITY", "Id");

            Create.ForeignKey("FK_CITY_COUNTRY").FromTable("SET_CITY").ForeignColumn("Country").ToTable("SET_COUNTRY").PrimaryColumn("Id");


            //   Execute.EmbeddedScript("Insert_City.sql");

            Insert.IntoTable("SET_CITY").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                FRCodeINSEE = "42279",
                Caption = "Saint-Just-Saint-Rambert",
                City = "Saint-Just-Saint-Rambert",
                Country = "75",
                PostCode = "42170"
            });

            Insert.IntoTable("SET_CITY").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                FRCodeINSEE = "42095",
                Caption = "Firminy",
                City = "Firminy",
                Country = "75",
                PostCode = "42700"
            });

            Insert.IntoTable("SET_CITY").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                FRCodeINSEE = "42218",
                Caption = "Saint-Etienne",
                City = "Saint-Etienne",
                Country = "75",
                PostCode = "42000"
            });

            Insert.IntoTable("SET_CITY").Row(new
            {
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                FRCodeINSEE = "69318",
                Caption = "Lyon 2 arrondissement",
                City = "Lyon",
                Country = "75",
                PostCode = "69002"
            });

        }
    }
}