using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103140010)]
    public class GEDB_20161103_140010_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("Person").AsInt64().NotNullable()
                .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("NotArchive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("MilesimeLicnece").AsDate().Nullable()
                .WithColumn("NiveauGalop").AsInt16().Nullable().WithDefaultValue(1)
                .WithColumn("LicenceCompetition").AsInt16().Nullable()
                .WithColumn("DateCertificatMedical").AsDate().Nullable()
                .WithColumn("Caption").AsString(200).Nullable()
                .WithColumn("ArchiveDate").AsDateTime().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("MAN_CAVALIERS")
                .WithColumn("LIC_FFE").AsFixedLengthString(10).PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("MAN_CAVALIERS")
                .WithColumn("LIC_FFE").AsFixedLengthString(10).PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "MAN_CAVALIERS", "LIC_FFE");

            Create.ForeignKey("FK_CAVALIER_PERSON").FromTable("MAN_CAVALIERS").ForeignColumn("Person").ToTable("MAN_PERSON").PrimaryColumn("Id");
            Create.ForeignKey("FK_CAVALIER_GALOP").FromTable("MAN_CAVALIERS").ForeignColumn("NiveauGalop").ToTable("SET_GALOP").PrimaryColumn("Id");
            Create.ForeignKey("FK_CAVALIER_LFC").FromTable("MAN_CAVALIERS").ForeignColumn("LicenceCompetition").ToTable("SET_LFC").PrimaryColumn("Id");
        }
    }
}