
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.SetLfc")]
    public class SetLfcLookup : RowLookupScript<Entities.SetLfcRow>
    {
       public SetLfcLookup()
        {
            IdField = Entities.SetLfcRow.Fields.Id.PropertyName;
            TextField = Entities.SetLfcRow.Fields.Caption.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SetLfcRow.Fields;
            query.Distinct(true)
                .Select(fld.Id, fld.Caption)
                .Where(
                new Criteria(fld.IsActive) == 1
                );
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        
        }
    }
}