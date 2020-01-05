
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Management/Cavaliers"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ManCavaliersRow))]
    public class ManCavaliersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Management/Cavaliers/ManCavaliersIndex.cshtml");
        }
    }
}