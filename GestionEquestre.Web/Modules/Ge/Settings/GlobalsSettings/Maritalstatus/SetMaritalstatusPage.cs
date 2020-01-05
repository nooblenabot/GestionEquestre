﻿
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/Settings/GlobalsSettings/Maritalstatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetMaritalstatusRow))]
    public class SetMaritalstatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/Settings/GlobalsSettings/Maritalstatus/SetMaritalstatusIndex.cshtml");
        }
    }
}