
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/SetCountry"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetCountryRow))]
    public class SetCountryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/SetCountry/SetCountryIndex.cshtml");
        }
    }
}