
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/AccBankaccount"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AccBankaccountRow))]
    public class AccBankaccountController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/AccBankaccount/AccBankaccountIndex.cshtml");
        }
    }
}