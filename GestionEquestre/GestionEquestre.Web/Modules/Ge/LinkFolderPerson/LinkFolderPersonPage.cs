
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/LinkFolderPerson"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LinkFolderPersonRow))]
    public class LinkFolderPersonController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/LinkFolderPerson/LinkFolderPersonIndex.cshtml");
        }
    }
}