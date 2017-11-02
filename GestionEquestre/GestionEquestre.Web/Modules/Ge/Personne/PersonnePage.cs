

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Ge/Personne", typeof(GestionEquestre.Ge.Pages.PersonneController))]

namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Personne"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PersonneRow))]
    public class PersonneController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Personne/PersonneIndex.cshtml");
        }
    }
}