
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.Personne")]
    [BasedOnRow(typeof(Entities.PersonneRow))]
    public class PersonneForm
    {
        public Boolean IsMorale { get; set; }
        public Boolean IsActive { get; set; }
        public Boolean NotArchive { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public String Nom { get; set; }
        public String Prenom { get; set; }
        public String NomJeuneFille { get; set; }
        public String RaisonSociale { get; set; }
        public DateTime Birthday { get; set; }
        public Int16 Sexe { get; set; }
        public Int16 SituationFamille { get; set; }
        public Guid VilleNassance { get; set; }
        public Guid PaysNassance { get; set; }
        public Guid PaysNationalite { get; set; }
        public Stream Photo { get; set; }
        public String TelephonePerso { get; set; }
        public String TelephoneMobile { get; set; }
        public String TelephoneProf { get; set; }
        public String TelephoneComplementaire1 { get; set; }
        public String TelephoneComplementaire2 { get; set; }
        public String Email1 { get; set; }
        public String Email2 { get; set; }
        public Guid CompteBancaire { get; set; }
        public Guid IdAdresse { get; set; }
        public String Description { get; set; }
        public DateTime ArchiveDate { get; set; }
    }
}