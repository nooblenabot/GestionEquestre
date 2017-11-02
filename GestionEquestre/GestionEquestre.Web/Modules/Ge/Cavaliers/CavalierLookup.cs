
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.Cavalier")]
    public class CavalierLookup : RowLookupScript<Entities.CavaliersRow>
    {
       public CavalierLookup()
        {
            IdField = Entities.CavaliersRow.Fields.LicFfe.PropertyName;
            TextField = Entities.CavaliersRow.Fields.PersonneNom.PropertyName + Entities.CavaliersRow.Fields.PersonnePrenom.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CavaliersRow.Fields;
            query.Distinct(true)
                .Select(fld.LicFfe, fld.PersonneNom, fld.PersonnePrenom)
                .Where(
                new Criteria(fld.IsActive) == 1
                //& new Criteria(fld.Civilite).IsNull()
                );
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        
        }
    }
}