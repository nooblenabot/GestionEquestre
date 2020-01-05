
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Management/Owner"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ManOwnerRow))]
    public class ManOwnerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Management/Owner/ManOwnerIndex.cshtml");
        }
    }
}