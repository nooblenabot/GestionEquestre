
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Settings/GlobalsSettings/Country"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetCountryRow))]
    public class SetCountryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Settings/GlobalsSettings/Country/SetCountryIndex.cshtml");
        }
    }
}