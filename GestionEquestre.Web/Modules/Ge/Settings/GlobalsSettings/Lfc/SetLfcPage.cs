
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Settings/GlobalsSettings/Lfc"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetLfcRow))]
    public class SetLfcController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Settings/GlobalsSettings/Lfc/SetLfcIndex.cshtml");
        }
    }
}