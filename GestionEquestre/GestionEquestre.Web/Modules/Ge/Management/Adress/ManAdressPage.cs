
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Management/Adress"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ManAdressRow))]
    public class ManAdressController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Management/Adress/ManAdressIndex.cshtml");
        }
    }
}