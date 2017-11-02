/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace GestionEquestre.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('GestionEquestre');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}