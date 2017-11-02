
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.Ville")]
    public class VilleLookup : RowLookupScript<Entities.VilleRow>
    {
       public VilleLookup()
        {
            IdField = Entities.VilleRow.Fields.Id.PropertyName;
            TextField = Entities.VilleRow.Fields.Libele.PropertyName;// +'(' + Entities.VilleRow.Fields.CodePostal.PropertyName+ ')';

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.VilleRow.Fields;
            query.Distinct(true)
                .Select(fld.Id, fld.Libele,fld.CodePostal)
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