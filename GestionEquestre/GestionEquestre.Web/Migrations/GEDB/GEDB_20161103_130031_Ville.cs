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
                .WithColumn("ReadOnly").AsBoolean().NotNullable().WithDefaultValue(0)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("CodeINSEE").AsString(6).Nullable()
                .WithColumn("Libele").AsString(50).Nullable()
                .WithColumn("NomVille").AsString(50).Nullable()
                .WithColumn("CodePostal").AsString(6).Nullable()
                .WithColumn("Pays").AsGuid().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("VILLE")
                .WithColumn("Id").AsGuid().WithDefaultValue(SystemMethods.NewSequentialId).PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("VILLE")
                .WithColumn("Id").AsGuid().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "VILLE", "Id");

            Create.ForeignKey("FK_VILLE_PAYS").FromTable("VILLE").ForeignColumn("Pays").ToTable("PAYS").PrimaryColumn("Id");

            Insert.IntoTable("VILLE").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                CodeINSEE = "42279",
                Libele = "Saint-Just-Saint-Rambert",
                NomVille = "Saint-Just-Saint-Rambert",
                CodePostal = "42170"  //,
              //  Pays = InsertId from PAYS where Code = 'FR'

            });

            Insert.IntoTable("VILLE").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                CodeINSEE = "42095",
                Libele = "Firminy",
                NomVille = "Firminy",
                CodePostal = "42700"  //,
                //  Pays = InsertId from PAYS where Code = 'FR'

            });

            Insert.IntoTable("VILLE").Row(new
            {
                DefaultValue = 1,
                ReadOnly = 1,
                InsertDate = new DateTime(2016, 11, 11),
                InsertUserId = 1,
                CodeINSEE = "42218",
                Libele = "Saint-Etienne",
                NomVille = "Saint-Etienne",
                CodePostal = "42000"  //,
                //  Pays = InsertId from PAYS where Code = 'FR'

            });
        
        }
    }
}