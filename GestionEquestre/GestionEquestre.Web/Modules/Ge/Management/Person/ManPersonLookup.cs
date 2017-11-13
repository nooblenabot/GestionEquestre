
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.ManPerson")]
    public class ManPersonActiveLookup : RowLookupScript<Entities.ManPersonRow>
    {
       public ManPersonActiveLookup()
        {
            IdField = Entities.ManPersonRow.Fields.Id.PropertyName;
            TextField = Entities.ManPersonRow.Fields.Name.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ManPersonRow.Fields;
            query.Distinct(true)
                .Select(fld.Id, fld.Name,fld.Surname)
                .Where(
                new Criteria(fld.IsActive) == 1
                );
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        
        }
    }
}