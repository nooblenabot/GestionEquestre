
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.ManPerson")]
    public class ManPersonActiveLookup : RowLookupScript<Entities.ManPersonRow>
    {
       public ManPersonActiveLookup()
        {

            string _Name = Entities.ManPersonRow.Fields.Name.PropertyName;
            string _Surname = Entities.ManPersonRow.Fields.Surname.PropertyName;

            _Surname = " " + _Surname.Trim();



            var txt = Entities.ManPersonRow.Fields.Name.PropertyName + "_" + Entities.ManPersonRow.Fields.Surname.PropertyName;
            IdField = Entities.ManPersonRow.Fields.Id.PropertyName;
            //TextField = Entities.ManPersonRow.Fields.FullName.PropertyName;
            //TextField = Entities.ManPersonRow.Fields.Name.PropertyName;
            TextField = string.Concat(_Name,_Surname);

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ManPersonRow.Fields;
            query.Distinct(true)
                .Select(fld.Id, fld.Name,fld.Surname)
                .Where(
                new Criteria(fld.IsActive) == 1
                );
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        
        }
    }
}