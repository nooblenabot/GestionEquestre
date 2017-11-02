

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Ge/Cavaliers", typeof(GestionEquestre.Ge.Pages.CavaliersController))]

namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Cavaliers"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CavaliersRow))]
    public class CavaliersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Cavaliers/CavaliersIndex.cshtml");
        }
    }
}