
namespace GestionEquestre.Administration.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Settings/Administration/Language"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LanguageRow))]
    public class LanguageController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Language.LanguageIndex);
        }
    }
}