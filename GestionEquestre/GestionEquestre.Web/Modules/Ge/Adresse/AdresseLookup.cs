
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.Adresse")]
    public class AdresseLookup : RowLookupScript<Entities.AdresseRow>
    {
       public AdresseLookup()
        {
            IdField = Entities.AdresseRow.Fields.Id.PropertyName;
            TextField = Entities.AdresseRow.Fields.Adresse1.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.AdresseRow.Fields;
            query.Distinct(true)
                .Select(fld.Id, fld.Adresse1)
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