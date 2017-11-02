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
                .WithColumn("Personne").AsGuid().NotNullable()
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
                .WithColumn("Description").AsString(200).Nullable()
                .WithColumn("ArchiveDate").AsDateTime().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("CAVALIERS")
                .WithColumn("LIC_FFE").AsFixedLengthString(10).PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("CAVALIERS")
                .WithColumn("LIC_FFE").AsFixedLengthString(10).PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "CAVALIERS", "LIC_FFE");

            Create.ForeignKey("FK_CAVALIER_PERSONNE").FromTable("CAVALIERS").ForeignColumn("Personne").ToTable("PERSONNE").PrimaryColumn("Id");
            Create.ForeignKey("FK_CAVALIER_GALOP").FromTable("CAVALIERS").ForeignColumn("NiveauGalop").ToTable("CODE_GALOP").PrimaryColumn("Id");
            Create.ForeignKey("FK_CAVALIER_LFC").FromTable("CAVALIERS").ForeignColumn("LicenceCompetition").ToTable("CODE_LFC").PrimaryColumn("Id");
        }
    }
}