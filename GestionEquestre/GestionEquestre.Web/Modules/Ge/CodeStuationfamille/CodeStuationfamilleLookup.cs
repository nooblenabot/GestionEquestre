
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.CodeStuationfamille")]
    public class CodeStuationfamilleLookup : RowLookupScript<Entities.CodeStuationfamilleRow>
    {
       public CodeStuationfamilleLookup()
        {
            IdField = Entities.CodeStuationfamilleRow.Fields.Id.PropertyName;
            TextField = Entities.CodeStuationfamilleRow.Fields.Libele.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CodeStuationfamilleRow.Fields;
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