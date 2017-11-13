using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103140002)]
    public class GEDB_20161103_140002_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                //.WithColumn("IsMorale").AsBoolean().NotNullable().WithDefaultValue(0)
                .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("NotArchive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("Name").AsString(80).Nullable()
                .WithColumn("Phone").AsString(20).Nullable()
                .WithColumn("GSM").AsString(20).Nullable()
                .WithColumn("OtherPhone1").AsString(20).Nullable()
                .WithColumn("Email1").AsString(80).Nullable()
                .WithColumn("Email2").AsString(80).Nullable()
                .WithColumn("BankAccount").AsInt64().Nullable()
                .WithColumn("IdAdress").AsInt64().Nullable()
                .WithColumn("FR_Siren").AsString(9).Nullable()
                .WithColumn("Caption").AsString(200).Nullable()
                .WithColumn("ArchiveDate").AsDateTime().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("COR_CORPORATE")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("COR_CORPORATE")
                .WithColumn("Id").AsInt16().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "COR_CORPORATE", "Id");

            //Create.ForeignKey("FK_PERSON_SEXE").FromTable("MAN_PERSON").ForeignColumn("Sexe").ToTable("SET_SEXE").PrimaryColumn("SexeId");
            //Create.ForeignKey("FK_PERSON_MARITALSTATUS").FromTable("MAN_PERSON").ForeignColumn("MaritalStatus").ToTable("SET_MARITALSTATUS").PrimaryColumn("Id");
            //Create.ForeignKey("FK_PERSON_BIRTH_CITY").FromTable("MAN_PERSON").ForeignColumn("BirthCity").ToTable("SET_CITY").PrimaryColumn("Id");
            //Create.ForeignKey("FK_PERSON_BIRTH_COUNTRY").FromTable("MAN_PERSON").ForeignColumn("BirthCountry").ToTable("SET_COUNTRY").PrimaryColumn("Id");
            //Create.ForeignKey("FK_PERSON_NATIONALITY").FromTable("MAN_PERSON").ForeignColumn("nationality").ToTable("SET_COUNTRY").PrimaryColumn("Id");
            Create.ForeignKey("FK_ADRESS_CORPORATE").FromTable("COR_CORPORATE").ForeignColumn("IdAdress").ToTable("MAN_ADRESS").PrimaryColumn("Id");
            Create.ForeignKey("FK_CORPORATE_BANKACCOUNT").FromTable("COR_CORPORATE").ForeignColumn("BankAccount").ToTable("ACC_BANKACCOUNT").PrimaryColumn("Id");
        }
    }
}