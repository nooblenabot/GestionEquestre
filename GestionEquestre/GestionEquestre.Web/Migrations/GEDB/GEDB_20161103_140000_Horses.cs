using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103140000)]
    public class GEDB_20161103_140000_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("SIRE").AsFixedLengthString(8).Nullable()
                .WithColumn("CLE_SIRE").AsFixedLengthString(1).Nullable()
                .WithColumn("HNIN").AsFixedLengthString(9).NotNullable()
                .WithColumn("BirthCountry").AsString(3).NotNullable()
                .WithColumn("BirthOrganization").AsInt32().NotNullable()
                .WithColumn("Name").AsString(100).NotNullable()
                .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("NotArchive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("Birthday").AsDate().Nullable()
                .WithColumn("Sexe").AsInt16().Nullable().WithDefaultValue(00)
                .WithColumn("Color").AsString(50).Nullable()
                .WithColumn("Race").AsString(50).Nullable()
                .WithColumn("Transponder").AsFixedLengthString(18).Nullable()
                .WithColumn("FinalExit").AsDateTime().Nullable()
                .WithColumn("Description").AsString(200).Nullable()
                .WithColumn("ArchiveDate").AsDateTime().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("MAN_HORSES")
                .WithColumn("UELN").AsFixedLengthString(15).PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("MAN_HORSES")
                .WithColumn("UELN").AsFixedLengthString(15).PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "MAN_HORSES", "UELN");

            Create.ForeignKey("FK_HORSE_SEXE").FromTable("MAN_HORSES").ForeignColumn("Sexe").ToTable("SET_SEXE").PrimaryColumn("SexeId");
            Create.ForeignKey("FK_HORSE_COUNTRY").FromTable("MAN_HORSES").ForeignColumn("BirthCountry").ToTable("SET_COUNTRY").PrimaryColumn("ISOcode");
            Create.ForeignKey("FK_HORSE_ORGANIZATION").FromTable("MAN_HORSES").ForeignColumn("BirthOrganization").ToTable("SET_UELNORGA").PrimaryColumn("Id");
        }
    }
}