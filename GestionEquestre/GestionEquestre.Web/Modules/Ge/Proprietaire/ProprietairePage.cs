

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Ge/Proprietaire", typeof(GestionEquestre.Ge.Pages.ProprietaireController))]

namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Proprietaire"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProprietaireRow))]
    public class ProprietaireController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Proprietaire/ProprietaireIndex.cshtml");
        }
    }
}