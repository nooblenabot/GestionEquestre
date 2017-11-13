
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Management/Horses"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ManHorsesRow))]
    public class ManHorsesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Management/Horses/ManHorsesIndex.cshtml");
        }
    }
}