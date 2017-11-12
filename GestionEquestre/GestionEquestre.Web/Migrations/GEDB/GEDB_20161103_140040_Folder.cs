using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace GestionEquestre.Migrations.GEDB
{

    [Migration(20161103140040)]
    public class GEDB_20161103_140040_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
               .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(1)
               .WithColumn("NotArchive").AsBoolean().NotNullable().WithDefaultValue(1)
               .WithColumn("InsertDate").AsDateTime().NotNullable()
               .WithColumn("InsertUserId").AsInt32().NotNullable()
               .WithColumn("UpdateDate").AsDateTime().Nullable()
               .WithColumn("UpdateUserId").AsInt32().Nullable()
               .WithColumn("Caption").AsString(50).Nullable()
               .WithColumn("ArchiveDate").AsDateTime().Nullable()
               .WithColumn("Number").AsInt32().NotNullable()
               .WithColumn("CreateeDate").AsDateTime().Nullable()
               .WithColumn("CloseRaison").AsString(50).Nullable()
               .WithColumn("CloseDate").AsDateTime().Nullable()
               .WithColumn("establishment").AsInt32().NotNullable()
               .WithColumn("Comment").AsString(200).Nullable();

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("MAN_FOLDER")
                .WithColumn("Id").AsInt64().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("MAN_FOLDER")
                .WithColumn("Id").AsInt64().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "MAN_FOLDER", "Id");

         //   Create.ForeignKey("FK_PERSON_SEXE").FromTable("MAN_FOLDER").ForeignColumn("Sexe").ToTable("SET_SEXE").PrimaryColumn("SexeId");
         //   Create.ForeignKey("FK_PERSON_MARITALSTATUS").FromTable("MAN_FOLDER").ForeignColumn("MaritalStatus").ToTable("SET_MARITALSTATUS").PrimaryColumn("Id");
         //   Create.ForeignKey("FK_PERSON_BIRTH_CITY").FromTable("MAN_FOLDER").ForeignColumn("BirthCity").ToTable("SET_CITY").PrimaryColumn("Id");
        }
    }
}