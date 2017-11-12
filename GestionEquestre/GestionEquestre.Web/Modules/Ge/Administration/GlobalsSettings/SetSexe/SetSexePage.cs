
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/SetSexe"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetSexeRow))]
    public class SetSexeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/SetSexe/SetSexeIndex.cshtml");
        }
    }
}