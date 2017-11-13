
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/ManPerson"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ManPersonRow))]
    public class ManPersonController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/ManPerson/ManPersonIndex.cshtml");
        }
    }
}