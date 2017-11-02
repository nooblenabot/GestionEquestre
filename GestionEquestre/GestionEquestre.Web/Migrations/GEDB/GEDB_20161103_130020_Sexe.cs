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
                .WithColumn("ReadOnly").AsBoolean().NotNullable().WithDefaultValue(0)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("Libele").AsString(50).Nullable()
                .WithColumn("Civilite").AsString(50).Nullable()
				.WithColumn("LibeleUS").AsString(50).Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("CODE_SEXE")
                .WithColumn("SexeId").AsInt16().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("CODE_SEXE")
                .WithColumn("SexeId").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "CODE_SEXE", "SexeId");

            Insert.IntoTable("CODE_SEXE").Row(new
            {
                SexeId = 00,
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Libele = "Inconnu",
                LibeleUS = "Not Know"
            });

            Insert.IntoTable("CODE_SEXE").Row(new
            {
                SexeId = 10,
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Civilite = "Monsieur",
                Libele = "Homme",
                LibeleUS = "Male"
            });

            Insert.IntoTable("CODE_SEXE").Row(new
            {
                SexeId = 11,
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Libele = "Etalon",
                LibeleUS = "Stallion"
            });

            Insert.IntoTable("CODE_SEXE").Row(new
            {
                SexeId = 12,
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Libele = "Hongre",
                LibeleUS = "Gelding"
            });

            Insert.IntoTable("CODE_SEXE").Row(new
            {
                SexeId = 20,
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Civilite = "Madame",
                Libele = "Femme",
                LibeleUS = "Female"
            });

            Insert.IntoTable("CODE_SEXE").Row(new
            {
                SexeId = 21,
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Libele = "Jument",
                LibeleUS = "Mare"
            });

            Insert.IntoTable("CODE_SEXE").Row(new
            {
                SexeId = 22,
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Libele = "Jument Sterile",
                LibeleUS = "Spayed Mare"
            });

            Insert.IntoTable("CODE_SEXE").Row(new
            {
                SexeId = 30,
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                Libele = "Hermaphrodite",
                LibeleUS = "Hermaphrodite"
            });
        }
    }
}