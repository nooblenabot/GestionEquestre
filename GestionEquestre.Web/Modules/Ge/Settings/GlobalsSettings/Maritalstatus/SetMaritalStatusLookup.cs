
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.SetMaritalstatus")]
    public class SetMaritalstatusLookup : RowLookupScript<Entities.SetMaritalstatusRow>
    {
       public SetMaritalstatusLookup()
        {
            IdField = Entities.SetMaritalstatusRow.Fields.Id.PropertyName;
            TextField = Entities.SetMaritalstatusRow.Fields.Caption.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SetMaritalstatusRow.Fields;
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