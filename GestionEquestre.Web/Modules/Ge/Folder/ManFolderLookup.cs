
namespace GestionEquestre.Ge.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Ge.ManFolder")]
    public class FoldersIdLookup : RowLookupScript<Entities.ManFolderRow>
    {
        public FoldersIdLookup()
        {
            IdField = TextField = Entities.ManFolderRow.Fields.Id.PropertyName;

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ManFolderRow.Fields;
            query.Distinct(true)
                .Select(fld.Id)
                .Where(
                new Criteria(fld.IsActive) == 1
                & new Criteria(fld.IsArchive) == 1

                );
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }

    }
    //[LookupScript("Ge.SetCountry")]
    //public class SetCISOcodeLookup : RowLookupScript<Entities.SetCountryRow>
    //{
    //    public SetCISOcodeLookup()
    //    {
    //        IdField = Entities.SetCountryRow.Fields.ISOcode.PropertyName;
    //        TextField = Entities.SetCountryRow.Fields.Name_FR_fr.PropertyName;

    //    }

    //    protected override void PrepareQuery(SqlQuery query)
    //    {
    //        var fld = Entities.SetCountryRow.Fields;
    //        query.Distinct(true)
    //            .Select(fld.Id, fld.Name_FR_fr, fld.ISOcode)
    //            .Where(
    //            new Criteria(fld.IsActive) == 1
    //            );
    //    }

    //    protected override void ApplyOrder(SqlQuery query)
    //    {
        
    //    }
    //}
}