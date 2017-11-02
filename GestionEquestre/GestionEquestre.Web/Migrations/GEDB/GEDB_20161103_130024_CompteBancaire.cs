using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103130024)]
    public class GEDB_20161103_130024_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("CodePaysIBAN").AsString(2).NotNullable()
                .WithColumn("CleIBAN").AsString(2).NotNullable()
                .WithColumn("Banque").AsString(5).NotNullable()
                .WithColumn("Guichet").AsString(5).NotNullable()
                .WithColumn("NumeroCompte").AsString(11).NotNullable()
                .WithColumn("CleRIB").AsString(2).NotNullable()
                .WithColumn("EmetteurRib").AsString(6).Nullable()
                .WithColumn("BIC").AsString(11).Nullable()
                .WithColumn("TitulaireCompte").AsString(50).NotNullable()
                .WithColumn("Domiciliation").AsString(200).NotNullable()
                .WithColumn("CodeICS").AsString(13).Nullable()
                .WithColumn("CodeRUM").AsString(35).Nullable()
                .WithColumn("DateSignatureMandat").AsDateTime().Nullable()
                .WithColumn("TypePrelevement").AsInt16().Nullable()
                .WithColumn("DateDernierPrelevement").AsDateTime().Nullable()
                .WithColumn("TypeDernierPrelevement").AsInt16().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("COMPTEBANCAIRE")
                .WithColumn("Id").AsGuid().WithDefaultValue(SystemMethods.NewSequentialId).PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("COMPTEBANCAIRE")
                .WithColumn("Id").AsGuid().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "COMPTEBANCAIRE", "Id");

        }
    }
}