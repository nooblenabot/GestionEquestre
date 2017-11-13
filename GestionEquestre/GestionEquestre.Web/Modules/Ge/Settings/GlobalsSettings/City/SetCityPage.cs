
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Settings/GlobalsSettings/City"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetCityRow))]
    public class SetCityController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Settings/GlobalsSettings/City/SetCityIndex.cshtml");
        }
    }
}