

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Ge/CodeGalop", typeof(GestionEquestre.Ge.Pages.CodeGalopController))]

namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/CodeGalop"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CodeGalopRow))]
    public class CodeGalopController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/CodeGalop/CodeGalopIndex.cshtml");
        }
    }
}