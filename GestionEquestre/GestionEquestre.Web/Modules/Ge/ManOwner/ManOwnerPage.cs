
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/ManOwner"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ManOwnerRow))]
    public class ManOwnerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/ManOwner/ManOwnerIndex.cshtml");
        }
    }
}