

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Ge/Comptebancaire", typeof(GestionEquestre.Ge.Pages.ComptebancaireController))]

namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Comptebancaire"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ComptebancaireRow))]
    public class ComptebancaireController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Comptebancaire/ComptebancaireIndex.cshtml");
        }
    }
}