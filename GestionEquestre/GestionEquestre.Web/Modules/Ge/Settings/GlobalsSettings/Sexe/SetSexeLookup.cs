
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.SexeHorses")]
    public class SexeHorsesLookup : RowLookupScript<Entities.SetSexeRow>
    {
       public SexeHorsesLookup()
        {
            IdField = Entities.SetSexeRow.Fields.SexeId.PropertyName;
            //TextField = Entities.SetSexeLangRow.Fields.Caption.PropertyName;
            TextField = Entities.SetSexeRow.Fields.Caption.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SetSexeRow.Fields;
            query.Distinct(true)
                .Select(fld.SexeId, fld.Caption)
                .Where(
                new Criteria(fld.IsActive) == 1 &
                new Criteria(fld.Civility).IsNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        
        }
    }

    [LookupScript("Ge.SexePerson")]
    public class SexePersonLookup : RowLookupScript<Entities.SetSexeRow>
    {
        public SexePersonLookup()
        {
            IdField = Entities.SetSexeRow.Fields.SexeId.PropertyName;
            TextField = Entities.SetSexeRow.Fields.Caption.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SetSexeRow.Fields;
            query.Distinct(true)
                .Select(fld.SexeId, fld.Caption)
                .Where(
                new Criteria(fld.IsActive) == 1 &
                new Criteria(fld.Civility).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}