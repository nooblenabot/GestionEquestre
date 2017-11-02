

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Ge/CodeLfc", typeof(GestionEquestre.Ge.Pages.CodeLfcController))]

namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/CodeLfc"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CodeLfcRow))]
    public class CodeLfcController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/CodeLfc/CodeLfcIndex.cshtml");
        }
    }
}