
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Settings/GlobalsSettings/Galop"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetGalopRow))]
    public class SetGalopController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Settings/GlobalsSettings/Galop/SetGalopIndex.cshtml");
        }
    }
}