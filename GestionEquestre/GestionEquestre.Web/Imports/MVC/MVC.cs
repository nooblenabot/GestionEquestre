using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Ge
        {
            public static class Folder
            {
                public const string ManFolderIndex = "~/Modules/Ge/Folder/ManFolderIndex.cshtml";
            }

            public static class Management
            {
                public static class AccBankaccount
                {
                    public const string AccBankaccountIndex = "~/Modules/Ge/Management/AccBankaccount/AccBankaccountIndex.cshtml";
                }

                public static class Adress
                {
                    public const string ManAdressIndex = "~/Modules/Ge/Management/Adress/ManAdressIndex.cshtml";
                }

                public static class Cavaliers
                {
                    public const string ManCavaliersIndex = "~/Modules/Ge/Management/Cavaliers/ManCavaliersIndex.cshtml";
                }

                public static class Horses
                {
                    public const string ManHorsesIndex = "~/Modules/Ge/Management/Horses/ManHorsesIndex.cshtml";
                    public static class Owner
                    {
                        public const string ManOwnerIndex = "~/Modules/Ge/Management/Horses/Owner/ManOwnerIndex.cshtml";
                    }
                }

                public static class Person
                {
                    public const string ManPersonIndex = "~/Modules/Ge/Management/Person/ManPersonIndex.cshtml";
                }

            }

            public static class Settings
            {
                public static class Administration
                {
                    public static class CorCorporate
                    {
                        public const string CorCorporateIndex = "~/Modules/Ge/Settings/Administration/CorCorporate/CorCorporateIndex.cshtml";
                    }

                    public static class CorEtab
                    {
                        public const string CorEtabIndex = "~/Modules/Ge/Settings/Administration/CorEtab/CorEtabIndex.cshtml";
                    }

                }

                public static class GlobalsSettings
                {
                    public static class City
                    {
                        public const string SetCityIndex = "~/Modules/Ge/Settings/GlobalsSettings/City/SetCityIndex.cshtml";
                    }

                    public static class Country
                    {
                        public const string SetCountryIndex = "~/Modules/Ge/Settings/GlobalsSettings/Country/SetCountryIndex.cshtml";
                    }

                    public static class Galop
                    {
                        public const string SetGalopIndex = "~/Modules/Ge/Settings/GlobalsSettings/Galop/SetGalopIndex.cshtml";
                    }

                    public static class Lfc
                    {
                        public const string SetLfcIndex = "~/Modules/Ge/Settings/GlobalsSettings/Lfc/SetLfcIndex.cshtml";
                    }

                    public static class Maritalstatus
                    {
                        public const string SetMaritalstatusIndex = "~/Modules/Ge/Settings/GlobalsSettings/Maritalstatus/SetMaritalstatusIndex.cshtml";
                    }

                    public static class Sexe
                    {
                        public const string SetSexeIndex = "~/Modules/Ge/Settings/GlobalsSettings/Sexe/SetSexeIndex.cshtml";
                    }

                    public static class Uelnorga
                    {
                        public const string SetUelnorgaIndex = "~/Modules/Ge/Settings/GlobalsSettings/Uelnorga/SetUelnorgaIndex.cshtml";
                    }
                }
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }
    }
}

