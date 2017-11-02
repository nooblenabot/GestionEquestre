
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.Personne")]
    public class PersonneLookup : RowLookupScript<Entities.PersonneRow>
    {
       public PersonneLookup()
        {
            IdField = Entities.PersonneRow.Fields.Id.PropertyName;
            TextField = Entities.PersonneRow.Fields.Nom.PropertyName + Entities.PersonneRow.Fields.Prenom.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.PersonneRow.Fields;
            query.Distinct(true)
                .Select(fld.Id, fld.Nom,fld.Prenom)
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