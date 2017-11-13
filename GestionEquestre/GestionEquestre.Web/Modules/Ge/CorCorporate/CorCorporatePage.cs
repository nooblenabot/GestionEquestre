
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/CorCorporate"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CorCorporateRow))]
    public class CorCorporateController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/CorCorporate/CorCorporateIndex.cshtml");
        }
    }
}