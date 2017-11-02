

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Ge/Pays", typeof(GestionEquestre.Ge.Pages.PaysController))]

namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Pays"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PaysRow))]
    public class PaysController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Pays/PaysIndex.cshtml");
        }
    }
}