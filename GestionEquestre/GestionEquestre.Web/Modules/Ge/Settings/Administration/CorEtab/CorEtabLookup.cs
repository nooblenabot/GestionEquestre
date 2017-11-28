
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.CorEtab")]
    public class CorEtabLookup : RowLookupScript<Entities.CorEtabRow>
    {
       public CorEtabLookup()
        {
            IdField = Entities.CorEtabRow.Fields.Id.PropertyName;
          //TextField = string.Concat(Entities.SetUelnorgaRow.Fields.Organization.PropertyName, Entities.SetUelnorgaRow.Fields.UelnCode.PropertyName);
            TextField = Entities.CorEtabRow.Fields.Name.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CorEtabRow.Fields;
            query.Distinct(true)
                .Select(fld.Id, fld.Name)
                .Where(
                new Criteria(fld.IsActive) == 1
                );
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        
        }
    }
}