
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/ManAdress"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ManAdressRow))]
    public class ManAdressController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/ManAdress/ManAdressIndex.cshtml");
        }
    }
}