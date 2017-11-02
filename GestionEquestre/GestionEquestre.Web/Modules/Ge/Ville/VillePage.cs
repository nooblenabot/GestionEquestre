

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Ge/Ville", typeof(GestionEquestre.Ge.Pages.VilleController))]

namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Ville"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VilleRow))]
    public class VilleController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Ville/VilleIndex.cshtml");
        }
    }
}