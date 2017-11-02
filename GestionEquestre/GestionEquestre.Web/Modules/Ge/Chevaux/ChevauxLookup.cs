
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.Chevaux")]
    public class ChevauxLookup : RowLookupScript<Entities.ChevauxRow>
    {
       public ChevauxLookup()
        {
            IdField = Entities.ChevauxRow.Fields.Ueln.PropertyName;
            TextField = Entities.ChevauxRow.Fields.Name.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ChevauxRow.Fields;
            query.Distinct(true)
                .Select(fld.Ueln, fld.Name)
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