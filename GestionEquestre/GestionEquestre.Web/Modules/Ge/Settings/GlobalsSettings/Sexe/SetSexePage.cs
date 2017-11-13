
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Settings/GlobalsSettings/Sexe"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetSexeRow))]
    public class SetSexeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Settings/GlobalsSettings/Sexe/SetSexeIndex.cshtml");
        }
    }
}