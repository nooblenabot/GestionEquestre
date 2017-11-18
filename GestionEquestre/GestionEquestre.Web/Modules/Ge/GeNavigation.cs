﻿using Serenity.Navigation;
using MyPages = GestionEquestre.Ge.Pages;
using Administration = GestionEquestre.Administration.Pages;

[assembly: NavigationLink(int.MaxValue, "Ge/Acc Bankaccount", typeof(MyPages.AccBankaccountController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Ge/Cor Corporate", typeof(MyPages.CorCorporateController), icon: null)]

[assembly: NavigationLink(1001, "Folders", typeof(MyPages.ManFolderController), icon: "fa-folder")]
[assembly: NavigationMenu(1100, "Management", icon: "fa-desktop")]
[assembly: NavigationLink(1100, "Management/Adress", typeof(MyPages.ManAdressController), icon: null)]
[assembly: NavigationLink(1100, "Management/Cavaliers", typeof(MyPages.ManCavaliersController), icon: null)]
[assembly: NavigationLink(1100, "Management/Owner", typeof(MyPages.ManOwnerController), icon: null)]
[assembly: NavigationLink(1100, "Management/Person", typeof(MyPages.ManPersonController), icon: null)]
[assembly: NavigationLink(1100, "Management/Horses", typeof(MyPages.ManHorsesController), icon: null)]
[assembly: NavigationMenu(9000, "Settings", icon: "fa-desktop")]
[assembly: NavigationMenu(9000, "Settings/Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Settings/Administration/Exceptions Log", url: "~/errorlog.axd", permission: GestionEquestre.Administration.PermissionKeys.Security, icon: "icon-ban", Target = "_blank")]
[assembly: NavigationLink(9000, "Settings/Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Settings/Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "Settings/Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Settings/Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationMenu(9100, "Settings/Globals Settings", icon: null)]
[assembly: NavigationLink(9100, "Settings/Globals Settings/City", typeof(MyPages.SetCityController), icon: null)]
[assembly: NavigationLink(9100, "Settings/Globals Settings/Country", typeof(MyPages.SetCountryController), icon: null)]
[assembly: NavigationLink(9100, "Settings/Globals Settings/Galop", typeof(MyPages.SetGalopController), icon: null)]
[assembly: NavigationLink(9100, "Settings/Globals Settings/Lfc", typeof(MyPages.SetLfcController), icon: null)]
[assembly: NavigationLink(9100, "Settings/Globals Settings/Maritalstatus", typeof(MyPages.SetMaritalstatusController), icon: null)]
[assembly: NavigationLink(9100, "Settings/Globals Settings/Sexe", typeof(MyPages.SetSexeController), icon: null)]
[assembly: NavigationLink(9100, "Settings/Globals Settings/Ueln organisation", typeof(MyPages.SetUelnorgaController), icon: null)]
