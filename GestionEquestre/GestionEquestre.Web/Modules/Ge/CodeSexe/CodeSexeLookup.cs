
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.SexeChevaux")]
    public class SexeChevauxLookup : RowLookupScript<Entities.CodeSexeRow>
    {
       public SexeChevauxLookup()
        {
            IdField = Entities.CodeSexeRow.Fields.SexeId.PropertyName;
            TextField = Entities.CodeSexeRow.Fields.Libele.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CodeSexeRow.Fields;
            query.Distinct(true)
                .Select(fld.SexeId, fld.Libele)
                .Where(
                new Criteria(fld.IsActive) == 1 &
                new Criteria(fld.Civilite).IsNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        
        }
    }

    [LookupScript("Ge.SexePersonne")]
    public class SexePersonneLookup : RowLookupScript<Entities.CodeSexeRow>
    {
        public SexePersonneLookup()
        {
            IdField = Entities.CodeSexeRow.Fields.SexeId.PropertyName;
            TextField = Entities.CodeSexeRow.Fields.Libele.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CodeSexeRow.Fields;
            query.Distinct(true)
                .Select(fld.SexeId, fld.Libele)
                .Where(
                new Criteria(fld.IsActive) == 1 &
                new Criteria(fld.Civilite).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}