
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.ManCavalier")]
    public class ManCavalierActiveLookup : RowLookupScript<Entities.ManCavaliersRow>
    {
       public ManCavalierActiveLookup()
        {
            IdField = Entities.ManCavaliersRow.Fields.LicFfe.PropertyName;
            TextField = Entities.ManCavaliersRow.Fields.Person.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ManCavaliersRow.Fields;
            query.Distinct(true)
                .Select(fld.LicFfe, fld.Person)
                .Where(
                new Criteria(fld.IsActive) == 1
                );
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        
        }
    }
}