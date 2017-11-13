
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/SetLfc"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetLfcRow))]
    public class SetLfcController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/SetLfc/SetLfcIndex.cshtml");
        }
    }
}