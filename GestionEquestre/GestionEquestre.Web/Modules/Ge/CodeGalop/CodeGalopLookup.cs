
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.CodeGalop")]
    public class CodeGalopLookup : RowLookupScript<Entities.CodeGalopRow>
    {
       public CodeGalopLookup()
        {
            IdField = Entities.CodeGalopRow.Fields.Id.PropertyName;
            TextField = Entities.CodeGalopRow.Fields.Libele.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CodeGalopRow.Fields;
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