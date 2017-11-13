
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.SetGalop")]
    public class SetGalopLookup : RowLookupScript<Entities.SetGalopRow>
    {
       public SetGalopLookup()
        {
            IdField = Entities.SetGalopRow.Fields.Id.PropertyName;
            TextField = Entities.SetGalopRow.Fields.Caption.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SetGalopRow.Fields;
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