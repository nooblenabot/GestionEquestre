
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/LinkFolderCavalier"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LinkFolderCavalierRow))]
    public class LinkFolderCavalierController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/LinkFolderCavalier/LinkFolderCavalierIndex.cshtml");
        }
    }
}