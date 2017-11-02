

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Ge/Chevaux", typeof(GestionEquestre.Ge.Pages.ChevauxController))]

namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Chevaux"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ChevauxRow))]
    public class ChevauxController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Chevaux/ChevauxIndex.cshtml");
        }
    }
}