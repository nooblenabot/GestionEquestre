

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Ge/Adresse", typeof(GestionEquestre.Ge.Pages.AdresseController))]

namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Adresse"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AdresseRow))]
    public class AdresseController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Adresse/AdresseIndex.cshtml");
        }
    }
}