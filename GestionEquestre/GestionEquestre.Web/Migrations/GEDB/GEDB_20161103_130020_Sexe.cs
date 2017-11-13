using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103130020)]
    public class GEDB_20161103_130020_Initial : AutoReversingMigration
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
				.WithColumn("Caption").AsString(50).Nullable()
                .WithColumn("civility").AsString(50).Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_SEXE")
                .WithColumn("SexeId").AsInt16().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("SET_SEXE")
                .WithColumn("SexeId").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_SEXE", "SexeId");

            Insert.IntoTable("SET_SEXE").Row(new
            {
                SexeId = 00,
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Inconnu"
            });

            Insert.IntoTable("SET_SEXE").Row(new
            {
                SexeId = 10,
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                civility = "Monsieur",
                Caption = "Homme"
            });

            Insert.IntoTable("SET_SEXE").Row(new
            {
                SexeId = 11,
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Etalon"
            });

            Insert.IntoTable("SET_SEXE").Row(new
            {
                SexeId = 12,
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Hongre"
            });

            Insert.IntoTable("SET_SEXE").Row(new
            {
                SexeId = 20,
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                civility = "Madame",
                Caption = "Femme"
            });

            Insert.IntoTable("SET_SEXE").Row(new
            {
                SexeId = 21,
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Jument"
            });

            Insert.IntoTable("SET_SEXE").Row(new
            {
                SexeId = 22,
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Jument Sterile"
            });

            Insert.IntoTable("SET_SEXE").Row(new
            {
                SexeId = 30,
                DefaultValue = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Caption = "Hermaphrodite"
            });

            //Insert.IntoTable("SET_SEXE").Row(new
            //{
            //    SexeId = 00,
            //    DefaultValue = 1,
            //    InsertDate = new DateTime(2016, 11, 11),
            //    InsertUserId = 1,
            //    Caption = "Not Know"
            //});

            //Insert.IntoTable("SET_SEXE").Row(new
            //{
            //    SexeId = 10,
            //    DefaultValue = 1,
            //    InsertDate = new DateTime(2016, 11, 11),
            //    InsertUserId = 1,
            //    civility = "Monsieur",
            //    Caption = "Male"
            //});

            //Insert.IntoTable("SET_SEXE").Row(new
            //{
            //    SexeId = 11,
            //    DefaultValue = 1,
            //    InsertDate = new DateTime(2016, 11, 11),
            //    InsertUserId = 1,
            //    Caption = "Stallion"
            //});

            //Insert.IntoTable("SET_SEXE").Row(new
            //{
            //    SexeId = 12,
            //    DefaultValue = 1,
            //    InsertDate = new DateTime(2016, 11, 11),
            //    InsertUserId = 1,
            //    Caption = "Gelding"
            //});

            //Insert.IntoTable("SET_SEXE").Row(new
            //{
            //    SexeId = 20,
            //    DefaultValue = 1,
            //    InsertDate = new DateTime(2016, 11, 11),
            //    InsertUserId = 1,
            //    civility = "Madame",
            //    Caption = "Female"
            //});

            //Insert.IntoTable("SET_SEXE").Row(new
            //{
            //    SexeId = 21,
            //    DefaultValue = 1,
            //    InsertDate = new DateTime(2016, 11, 11),
            //    InsertUserId = 1,
            //    Caption = "Mare"
            //});

            //Insert.IntoTable("SET_SEXE").Row(new
            //{
            //    SexeId = 22,
            //    DefaultValue = 1,
            //    InsertDate = new DateTime(2016, 11, 11),
            //    InsertUserId = 1,
            //    Caption = "Spayed Mare"
            //});

            //Insert.IntoTable("SET_SEXE").Row(new
            //{
            //    SexeId = 30,
            //    DefaultValue = 1,
            //    InsertDate = new DateTime(2016, 11, 11),
            //    InsertUserId = 1,
            //    Caption = "Hermaphrodite"
            //});

            Action<ICreateTableWithColumnSyntax> addLocalizationColumns = expr => expr
                .WithColumn("SexeId").AsInt16().NotNullable()
                .WithColumn("LanguageId").AsInt16().NotNullable()
                .WithColumn("Caption").AsString(50).Nullable()
               // .WithColumn("civility").AsString(50).Nullable()
               ;

            addLocalizationColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SET_SEXELang")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addLocalizationColumns(IfDatabase("Oracle")
                .Create.Table("SET_SEXELang")
                .WithColumn("Id").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SET_SEXELang", "Id");

            Create.ForeignKey("FK_CAPTION_LANGUAGE").FromTable("SET_SEXELang").ForeignColumn("SexeId").ToTable("SET_SEXE").PrimaryColumn("SexeId");

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 00,
                LanguageId = 1,
                Caption = "Not Know"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 10,
                LanguageId = 1,
         //       civility = "Monsieur",
                Caption = "Male"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 11,
                LanguageId = 1,
                Caption = "Stallion"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 12,
                LanguageId = 1,
                Caption = "Gelding"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 20,
                LanguageId = 1,
               // civility = "Madame",
                Caption = "Female"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 21,
                LanguageId = 1,
                Caption = "Mare"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 22,
                LanguageId = 1,
                Caption = "Spayed Mare"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 30,
                LanguageId = 1,
                Caption = "Hermaphrodite"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 00,
                LanguageId = 2,
                Caption = "Inconnu"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 10,
                LanguageId = 2,
              //  civility = "Monsieur",
                Caption = "Homme"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 11,
                LanguageId = 2,
                Caption = "Etalon"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 12,
                LanguageId = 2,
                Caption = "Hongre"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 20,
                LanguageId = 2,
                // civility = "Madame",
                Caption = "Femme"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 21,
                LanguageId = 2,
                Caption = "Jument"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 22,
                LanguageId = 2,
                Caption = "Jument Sterile"
            });

            Insert.IntoTable("SET_SEXELang").Row(new
            {
                SexeId = 30,
                LanguageId = 2,
                Caption = "Hermaphrodite"
            });

        }
    }
}