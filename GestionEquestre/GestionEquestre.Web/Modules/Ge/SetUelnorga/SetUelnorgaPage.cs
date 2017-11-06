﻿
namespace GestionEquestre.Ge.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ge/SetUelnorga"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SetUelnorgaRow))]
    public class SetUelnorgaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Ge/SetUelnorga/SetUelnorgaIndex.cshtml");
        }
    }
}