
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/CorEtab"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CorEtabRow))]
    public class CorEtabController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/CorEtab/CorEtabIndex.cshtml");
        }
    }
}