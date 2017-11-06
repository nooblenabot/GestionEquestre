
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.SetUelnorga")]
    public class SetUelnorgaLookup : RowLookupScript<Entities.SetUelnorgaRow>
    {
       public SetUelnorgaLookup()
        {
            IdField = Entities.SetUelnorgaRow.Fields.Id.PropertyName;
          //  TextField = Entities.SetUelnorgaRow.Fields.Organization.PropertyName + "(" + Entities.SetUelnorgaRow.Fields.UelnOrganization.PropertyName + ")";
            TextField = Entities.SetUelnorgaRow.Fields.Organization.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SetUelnorgaRow.Fields;
            query.Distinct(true)
                .Select(fld.Id, fld.Organization, fld.UelnOrganization)
                .Where(
                new Criteria(fld.IsActive) == 1
                );
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        
        }
    }
}