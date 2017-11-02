
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.Comptebancaire")]
    [BasedOnRow(typeof(Entities.ComptebancaireRow))]
    public class ComptebancaireForm
    {
        public String CodePaysIban { get; set; }
        public String CleIban { get; set; }
        public String Banque { get; set; }
        public String Guichet { get; set; }
        public String NumeroCompte { get; set; }
        public String CleRib { get; set; }
        public String EmetteurRib { get; set; }
        public String Bic { get; set; }
        public String TitulaireCompte { get; set; }
        public String Domiciliation { get; set; }
        public String CodeIcs { get; set; }
        public String CodeRum { get; set; }
        public DateTime DateSignatureMandat { get; set; }
        public Int16 TypePrelevement { get; set; }
        public DateTime DateDernierPrelevement { get; set; }
        public Int16 TypeDernierPrelevement { get; set; }
    }
}