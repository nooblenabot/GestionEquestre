
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/ManFolder"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ManFolderRow))]
    public class ManFolderController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/ManFolder/ManFolderIndex.cshtml");
        }
    }
}