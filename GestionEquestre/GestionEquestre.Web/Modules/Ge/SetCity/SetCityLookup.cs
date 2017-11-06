
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.SetCity")]
    public class SetCityLookup : RowLookupScript<Entities.SetCityRow>
    {
       public SetCityLookup()
        {
            IdField = Entities.SetCityRow.Fields.Id.PropertyName;
            TextField = Entities.SetCityRow.Fields.Caption.PropertyName;// +'(' + Entities.VilleRow.Fields.CodePostal.PropertyName+ ')';

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SetCityRow.Fields;
            query.Distinct(true)
                .Select(fld.Id, fld.Caption,fld.PostCode)
                .Where(
                new Criteria(fld.IsActive) == 1
                & new Criteria(fld.CountryIsActive) == 1
                //& new Criteria(fld.Country1)
                );
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        
        }
    }
}