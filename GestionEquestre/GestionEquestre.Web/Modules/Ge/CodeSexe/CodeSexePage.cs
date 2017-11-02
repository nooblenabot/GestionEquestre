

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Ge/CodeSexe", typeof(GestionEquestre.Ge.Pages.CodeSexeController))]

namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/CodeSexe"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CodeSexeRow))]
    public class CodeSexeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/CodeSexe/CodeSexeIndex.cshtml");
        }
    }
}