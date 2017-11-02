

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Ge/CodeStuationfamille", typeof(GestionEquestre.Ge.Pages.CodeStuationfamilleController))]

namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/CodeStuationfamille"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CodeStuationfamilleRow))]
    public class CodeStuationfamilleController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/CodeStuationfamille/CodeStuationfamilleIndex.cshtml");
        }
    }
}