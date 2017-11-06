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
                .WithColumn("CountryCodeIBAN").AsString(2).NotNullable()
                .WithColumn("CheckDigitsIBAN").AsString(2).NotNullable()
                .WithColumn("BBAN").AsString(30).NotNullable()
                .WithColumn("BIC").AsString(11).NotNullable()
                .WithColumn("AccountOnwer").AsString(50).NotNullable()
                .WithColumn("BankAdress").AsString(200).NotNullable()
                .WithColumn("CIS").AsString(13).Nullable()
                .WithColumn("URM").AsString(35).Nullable()
                .WithColumn("MandateDateSign").AsDateTime().Nullable()
                .WithColumn("TypePayment").AsInt16().Nullable()
                .WithColumn("DateLastPrelevement").AsDateTime().Nullable()
                .WithColumn("TypeOfLastPayment").AsInt16().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("ACC_BANKACCOUNT")
                .WithColumn("Id").AsGuid().WithDefaultValue(SystemMethods.NewSequentialId).PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("ACC_BANKACCOUNT")
                .WithColumn("Id").AsGuid().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "ACC_BANKACCOUNT", "Id");

        }
    }
}