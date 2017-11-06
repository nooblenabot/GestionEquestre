
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/LinkFolderHorse"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LinkFolderHorseRow))]
    public class LinkFolderHorseController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/LinkFolderHorse/LinkFolderHorseIndex.cshtml");
        }
    }
}