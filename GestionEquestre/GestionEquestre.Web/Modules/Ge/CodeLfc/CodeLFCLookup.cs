
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.CodeLfc")]
    public class CodeLfcLookup : RowLookupScript<Entities.CodeLfcRow>
    {
       public CodeLfcLookup()
        {
            IdField = Entities.CodeLfcRow.Fields.Id.PropertyName;
            TextField = Entities.CodeLfcRow.Fields.Libele.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CodeLfcRow.Fields;
            query.Distinct(true)
                .Select(fld.Id, fld.Libele)
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