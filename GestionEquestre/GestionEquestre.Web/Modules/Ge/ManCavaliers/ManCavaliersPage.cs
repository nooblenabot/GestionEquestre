
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/ManCavaliers"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ManCavaliersRow))]
    public class ManCavaliersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/ManCavaliers/ManCavaliersIndex.cshtml");
        }
    }
}