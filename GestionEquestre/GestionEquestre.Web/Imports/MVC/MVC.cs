﻿using System;

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
            public static class AccBankaccount
            {
                public const string AccBankaccountIndex = "~/Modules/Ge/AccBankaccount/AccBankaccountIndex.cshtml";
            }

            public static class LinkFolderCavalier
            {
                public const string LinkFolderCavalierIndex = "~/Modules/Ge/LinkFolderCavalier/LinkFolderCavalierIndex.cshtml";
            }

            public static class LinkFolderHorse
            {
                public const string LinkFolderHorseIndex = "~/Modules/Ge/LinkFolderHorse/LinkFolderHorseIndex.cshtml";
            }

            public static class LinkFolderPerson
            {
                public const string LinkFolderPersonIndex = "~/Modules/Ge/LinkFolderPerson/LinkFolderPersonIndex.cshtml";
            }

            public static class ManAdress
            {
                public const string ManAdressIndex = "~/Modules/Ge/ManAdress/ManAdressIndex.cshtml";
            }

            public static class ManCavaliers
            {
                public const string ManCavaliersIndex = "~/Modules/Ge/ManCavaliers/ManCavaliersIndex.cshtml";
            }

            public static class ManFolder
            {
                public const string ManFolderIndex = "~/Modules/Ge/ManFolder/ManFolderIndex.cshtml";
            }

            public static class ManHorses
            {
                public const string ManHorsesIndex = "~/Modules/Ge/ManHorses/ManHorsesIndex.cshtml";
            }

            public static class ManOwner
            {
                public const string ManOwnerIndex = "~/Modules/Ge/ManOwner/ManOwnerIndex.cshtml";
            }

            public static class ManPerson
            {
                public const string ManPersonIndex = "~/Modules/Ge/ManPerson/ManPersonIndex.cshtml";
            }

            public static class SetCity
            {
                public const string SetCityIndex = "~/Modules/Ge/SetCity/SetCityIndex.cshtml";
            }

            public static class SetCountry
            {
                public const string SetCountryIndex = "~/Modules/Ge/SetCountry/SetCountryIndex.cshtml";
            }

            public static class SetGalop
            {
                public const string SetGalopIndex = "~/Modules/Ge/SetGalop/SetGalopIndex.cshtml";
            }

            public static class SetLfc
            {
                public const string SetLfcIndex = "~/Modules/Ge/SetLfc/SetLfcIndex.cshtml";
            }

            public static class SetMaritalstatus
            {
                public const string SetMaritalstatusIndex = "~/Modules/Ge/SetMaritalstatus/SetMaritalstatusIndex.cshtml";
            }

            public static class SetSexe
            {
                public const string SetSexeIndex = "~/Modules/Ge/SetSexe/SetSexeIndex.cshtml";
            }

            public static class SetUelnorga
            {
                public const string SetUelnorgaIndex = "~/Modules/Ge/SetUelnorga/SetUelnorgaIndex.cshtml";
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

