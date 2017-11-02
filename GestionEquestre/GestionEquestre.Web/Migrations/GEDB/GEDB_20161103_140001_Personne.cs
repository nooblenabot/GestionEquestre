using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103140001)]
    public class GEDB_20161103_140001_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
                .WithColumn("IsMorale").AsBoolean().NotNullable().WithDefaultValue(0)
                .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("NotArchive").AsBoolean().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("Nom").AsString(50).Nullable()
                .WithColumn("Prenom").AsString(50).Nullable()
                .WithColumn("NomJeuneFille").AsString(50).Nullable()
                .WithColumn("RaisonSociale").AsString(200).Nullable()
                .WithColumn("Birthday").AsDate().Nullable()
                .WithColumn("Sexe").AsInt16().Nullable().WithDefaultValue(00)
                .WithColumn("SituationFamille").AsInt16().Nullable()
                .WithColumn("VilleNassance").AsGuid().Nullable()
                .WithColumn("PaysNassance").AsGuid().Nullable()
                .WithColumn("PaysNationalite").AsGuid().Nullable()
                .WithColumn("Photo").AsBinary().Nullable()
                .WithColumn("TelephonePerso").AsString(20).Nullable()
                .WithColumn("TelephoneMobile").AsString(20).Nullable()
                .WithColumn("TelephoneProf").AsString(20).Nullable()
                .WithColumn("TelephoneComplementaire1").AsString(20).Nullable()
                .WithColumn("TelephoneComplementaire2").AsString(20).Nullable()
                .WithColumn("Email1").AsString(80).Nullable()
                .WithColumn("Email2").AsString(80).Nullable()
                .WithColumn("CompteBancaire").AsGuid().Nullable()
                .WithColumn("IdAdresse").AsGuid().Nullable()
                .WithColumn("Description").AsString(200).Nullable()
                .WithColumn("ArchiveDate").AsDateTime().Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("PERSONNE")
                .WithColumn("Id").AsGuid().WithDefaultValue(SystemMethods.NewSequentialId).PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("PERSONNE")
                .WithColumn("Id").AsGuid().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "PERSONNE", "Id");

            Create.ForeignKey("FK_PERSONNE_SEXE").FromTable("PERSONNE").ForeignColumn("Sexe").ToTable("CODE_SEXE").PrimaryColumn("SexeId");
            Create.ForeignKey("FK_PERSONNE_SITUATIONFAMILLE").FromTable("PERSONNE").ForeignColumn("SituationFamille").ToTable("CODE_STUATIONFAMILLE").PrimaryColumn("Id");
            Create.ForeignKey("FK_PERSONNE_VILLE_NAISSANCE").FromTable("PERSONNE").ForeignColumn("VilleNassance").ToTable("VILLE").PrimaryColumn("Id");
            Create.ForeignKey("FK_PERSONNE_PAYS_NAISSANCE").FromTable("PERSONNE").ForeignColumn("PaysNassance").ToTable("PAYS").PrimaryColumn("Id");
            Create.ForeignKey("FK_PERSONNE_PAYS_NATIONALITE").FromTable("PERSONNE").ForeignColumn("PaysNationalite").ToTable("PAYS").PrimaryColumn("Id");
            Create.ForeignKey("FK_ADRESSE_PERSONNE").FromTable("PERSONNE").ForeignColumn("IdAdresse").ToTable("ADRESSE").PrimaryColumn("Id");
            Create.ForeignKey("FK_PERSONNE_COMPTEBANQUE").FromTable("PERSONNE").ForeignColumn("CompteBancaire").ToTable("COMPTEBANCAIRE").PrimaryColumn("Id");
        }
    }
}