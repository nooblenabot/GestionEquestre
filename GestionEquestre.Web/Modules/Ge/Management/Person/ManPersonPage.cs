
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Management/Person"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ManPersonRow))]
    public class ManPersonController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Management/Person/ManPersonIndex.cshtml");
        }
    }
}