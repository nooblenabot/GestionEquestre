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
                .WithColumn("SIRE").AsFixedLengthString(8).NotNullable()
                .WithColumn("CLE_SIRE").AsFixedLengthString(1).NotNullable()
                .WithColumn("Name").AsString(100).NotNullable()
                .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("NotArchive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("Birthday").AsDate().Nullable()
                .WithColumn("Sexe").AsInt16().Nullable().WithDefaultValue(00)
                .WithColumn("Robe").AsString(50).Nullable()
                .WithColumn("Transpondeur").AsFixedLengthString(18).Nullable()
                .WithColumn("SortieDefinitive").AsDateTime().Nullable()
                .WithColumn("Description").AsString(200).Nullable()
                .WithColumn("ArchiveDate").AsDateTime().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("CHEVAUX")
                .WithColumn("UELN").AsFixedLengthString(15).PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("CHEVAUX")
                .WithColumn("UELN").AsFixedLengthString(15).PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "CHEVAUX", "UELN");

            Create.ForeignKey("FK_CHEVAL_SEXE").FromTable("CHEVAUX").ForeignColumn("Sexe").ToTable("CODE_SEXE").PrimaryColumn("SexeId");
        }
    }
}