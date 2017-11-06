var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LanguageForm;
        }(Serenity.PrefixedContext));
        LanguageForm.formKey = 'Administration.Language';
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            [
                'Id',
                'LanguageId',
                'LanguageName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RoleForm;
        }(Serenity.PrefixedContext));
        RoleForm.formKey = 'Administration.Role';
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            [
                'RolePermissionId',
                'RoleId',
                'PermissionKey',
                'RoleRoleName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            [
                'RoleId',
                'RoleName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return UserForm;
        }(Serenity.PrefixedContext));
        UserForm.formKey = 'Administration.User';
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            [
                'UserPermissionId',
                'UserId',
                'PermissionKey',
                'Granted',
                'Username',
                'User'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            [
                'UserRoleId',
                'UserId',
                'RoleId',
                'Username',
                'User'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            [
                'UserId',
                'Username',
                'Source',
                'PasswordHash',
                'PasswordSalt',
                'DisplayName',
                'Email',
                'UserImage',
                'LastDirectoryUpdate',
                'IsActive',
                'Password',
                'PasswordConfirm',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDate'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            [
                'UserPreferenceId',
                'UserId',
                'PreferenceType',
                'Name',
                'Value'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var AccBankaccountForm = (function (_super) {
            __extends(AccBankaccountForm, _super);
            function AccBankaccountForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return AccBankaccountForm;
        }(Serenity.PrefixedContext));
        AccBankaccountForm.formKey = 'Ge.AccBankaccount';
        Ge.AccBankaccountForm = AccBankaccountForm;
        [,
            ['CountryCodeIban', function () { return Serenity.StringEditor; }],
            ['CheckDigitsIban', function () { return Serenity.StringEditor; }],
            ['Bban', function () { return Serenity.StringEditor; }],
            ['Bic', function () { return Serenity.StringEditor; }],
            ['AccountOnwer', function () { return Serenity.StringEditor; }],
            ['BankAdress', function () { return Serenity.StringEditor; }],
            ['Cis', function () { return Serenity.StringEditor; }],
            ['Urm', function () { return Serenity.StringEditor; }],
            ['MandateDateSign', function () { return Serenity.DateEditor; }],
            ['TypePayment', function () { return Serenity.IntegerEditor; }],
            ['DateLastPrelevement', function () { return Serenity.DateEditor; }],
            ['TypeOfLastPayment', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AccBankaccountForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var AccBankaccountRow;
        (function (AccBankaccountRow) {
            AccBankaccountRow.idProperty = 'Id';
            AccBankaccountRow.nameProperty = 'CountryCodeIban';
            AccBankaccountRow.localTextPrefix = 'Ge.AccBankaccount';
            var Fields;
            (function (Fields) {
            })(Fields = AccBankaccountRow.Fields || (AccBankaccountRow.Fields = {}));
            [
                'Id',
                'CountryCodeIban',
                'CheckDigitsIban',
                'Bban',
                'Bic',
                'AccountOnwer',
                'BankAdress',
                'Cis',
                'Urm',
                'MandateDateSign',
                'TypePayment',
                'DateLastPrelevement',
                'TypeOfLastPayment'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AccBankaccountRow = Ge.AccBankaccountRow || (Ge.AccBankaccountRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var AccBankaccountService;
        (function (AccBankaccountService) {
            AccBankaccountService.baseUrl = 'Ge/AccBankaccount';
            var Methods;
            (function (Methods) {
            })(Methods = AccBankaccountService.Methods || (AccBankaccountService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AccBankaccountService[x] = function (r, s, o) {
                    return Q.serviceRequest(AccBankaccountService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AccBankaccountService.baseUrl + '/' + x;
            });
        })(AccBankaccountService = Ge.AccBankaccountService || (Ge.AccBankaccountService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManAdressForm = (function (_super) {
            __extends(ManAdressForm, _super);
            function ManAdressForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ManAdressForm;
        }(Serenity.PrefixedContext));
        ManAdressForm.formKey = 'Ge.ManAdress';
        Ge.ManAdressForm = ManAdressForm;
        [,
            ['IsActive', function () { return Serenity.BooleanEditor; }],
            ['NotArchive', function () { return Serenity.BooleanEditor; }],
            ['InsertDate', function () { return Serenity.DateEditor; }],
            ['InsertUserId', function () { return Serenity.IntegerEditor; }],
            ['UpdateDate', function () { return Serenity.DateEditor; }],
            ['UpdateUserId', function () { return Serenity.IntegerEditor; }],
            ['Adress1', function () { return Serenity.StringEditor; }],
            ['Adress2', function () { return Serenity.StringEditor; }],
            ['Adress3', function () { return Serenity.StringEditor; }],
            ['City', function () { return Serenity.StringEditor; }],
            ['Country', function () { return Serenity.StringEditor; }],
            ['Cedex', function () { return Serenity.StringEditor; }],
            ['Building', function () { return Serenity.StringEditor; }],
            ['Caption', function () { return Serenity.StringEditor; }],
            ['ArchiveDate', function () { return Serenity.DateEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ManAdressForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManAdressRow;
        (function (ManAdressRow) {
            ManAdressRow.idProperty = 'Id';
            ManAdressRow.nameProperty = 'Adress1';
            ManAdressRow.localTextPrefix = 'Ge.ManAdress';
            var Fields;
            (function (Fields) {
            })(Fields = ManAdressRow.Fields || (ManAdressRow.Fields = {}));
            [
                'Id',
                'IsActive',
                'NotArchive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Adress1',
                'Adress2',
                'Adress3',
                'City',
                'Country',
                'Cedex',
                'Building',
                'Caption',
                'ArchiveDate',
                'CityDefaultValue',
                'CityIsActive',
                'CityReadOnly',
                'CityInsertDate',
                'CityInsertUserId',
                'CityUpdateDate',
                'CityUpdateUserId',
                'CityFrCodeInsee',
                'CityCaption',
                'City1',
                'CityPostCode',
                'CityCountry',
                'CountryDefaultValue',
                'CountryIsActive',
                'CountryReadOnly',
                'CountryInsertDate',
                'CountryInsertUserId',
                'CountryUpdateDate',
                'CountryUpdateUserId',
                'Country1',
                'CountryCode',
                'CountryCodeUe',
                'CountryIso3166Country'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ManAdressRow = Ge.ManAdressRow || (Ge.ManAdressRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManAdressService;
        (function (ManAdressService) {
            ManAdressService.baseUrl = 'Ge/ManAdress';
            var Methods;
            (function (Methods) {
            })(Methods = ManAdressService.Methods || (ManAdressService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ManAdressService[x] = function (r, s, o) {
                    return Q.serviceRequest(ManAdressService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ManAdressService.baseUrl + '/' + x;
            });
        })(ManAdressService = Ge.ManAdressService || (Ge.ManAdressService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManCavaliersForm = (function (_super) {
            __extends(ManCavaliersForm, _super);
            function ManCavaliersForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ManCavaliersForm;
        }(Serenity.PrefixedContext));
        ManCavaliersForm.formKey = 'Ge.ManCavaliers';
        Ge.ManCavaliersForm = ManCavaliersForm;
        [,
            ['Person', function () { return Serenity.StringEditor; }],
            ['IsActive', function () { return Serenity.BooleanEditor; }],
            ['NotArchive', function () { return Serenity.BooleanEditor; }],
            ['InsertDate', function () { return Serenity.DateEditor; }],
            ['InsertUserId', function () { return Serenity.IntegerEditor; }],
            ['UpdateDate', function () { return Serenity.DateEditor; }],
            ['UpdateUserId', function () { return Serenity.IntegerEditor; }],
            ['MilesimeLicnece', function () { return Serenity.DateEditor; }],
            ['NiveauGalop', function () { return Serenity.IntegerEditor; }],
            ['LicenceCompetition', function () { return Serenity.IntegerEditor; }],
            ['DateCertificatMedical', function () { return Serenity.DateEditor; }],
            ['Caption', function () { return Serenity.StringEditor; }],
            ['ArchiveDate', function () { return Serenity.DateEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ManCavaliersForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManCavaliersRow;
        (function (ManCavaliersRow) {
            ManCavaliersRow.idProperty = 'LicFfe';
            ManCavaliersRow.nameProperty = 'LicFfe';
            ManCavaliersRow.localTextPrefix = 'Ge.ManCavaliers';
            var Fields;
            (function (Fields) {
            })(Fields = ManCavaliersRow.Fields || (ManCavaliersRow.Fields = {}));
            [
                'LicFfe',
                'Person',
                'IsActive',
                'NotArchive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'MilesimeLicnece',
                'NiveauGalop',
                'LicenceCompetition',
                'DateCertificatMedical',
                'Caption',
                'ArchiveDate',
                'PersonIsMorale',
                'PersonIsActive',
                'PersonNotArchive',
                'PersonInsertDate',
                'PersonInsertUserId',
                'PersonUpdateDate',
                'PersonUpdateUserId',
                'PersonSurname',
                'PersonName',
                'PersonMaidenName',
                'PersonBusinessName',
                'PersonBirthday',
                'PersonSexe',
                'PersonMaritalStatus',
                'PersonBirthCity',
                'PersonBirthCountry',
                'PersonNationality',
                'PersonPhoto',
                'PersonPhone',
                'PersonGsm',
                'PersonWorkPhone',
                'PersonOtherPhone1',
                'PersonOtherPhone2',
                'PersonEmail1',
                'PersonEmail2',
                'PersonBankAccount',
                'PersonIdAdress',
                'PersonCaption',
                'PersonArchiveDate',
                'NiveauGalopDefaultValue',
                'NiveauGalopIsActive',
                'NiveauGalopReadOnly',
                'NiveauGalopInsertDate',
                'NiveauGalopInsertUserId',
                'NiveauGalopUpdateDate',
                'NiveauGalopUpdateUserId',
                'NiveauGalopCaption',
                'NiveauGalopCode',
                'LicenceCompetitionDefaultValue',
                'LicenceCompetitionIsActive',
                'LicenceCompetitionReadOnly',
                'LicenceCompetitionInsertDate',
                'LicenceCompetitionInsertUserId',
                'LicenceCompetitionUpdateDate',
                'LicenceCompetitionUpdateUserId',
                'LicenceCompetitionCaption',
                'LicenceCompetitionCode'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ManCavaliersRow = Ge.ManCavaliersRow || (Ge.ManCavaliersRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManCavaliersService;
        (function (ManCavaliersService) {
            ManCavaliersService.baseUrl = 'Ge/ManCavaliers';
            var Methods;
            (function (Methods) {
            })(Methods = ManCavaliersService.Methods || (ManCavaliersService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ManCavaliersService[x] = function (r, s, o) {
                    return Q.serviceRequest(ManCavaliersService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ManCavaliersService.baseUrl + '/' + x;
            });
        })(ManCavaliersService = Ge.ManCavaliersService || (Ge.ManCavaliersService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManHorsesForm = (function (_super) {
            __extends(ManHorsesForm, _super);
            function ManHorsesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ManHorsesForm;
        }(Serenity.PrefixedContext));
        ManHorsesForm.formKey = 'Ge.ManHorses';
        Ge.ManHorsesForm = ManHorsesForm;
        [,
            ['Sire', function () { return Serenity.StringEditor; }],
            ['CleSire', function () { return Serenity.StringEditor; }],
            ['Hnin', function () { return Serenity.StringEditor; }],
            ['BirthCountry', function () { return Serenity.StringEditor; }],
            ['BirthOrganization', function () { return Serenity.StringEditor; }],
            ['Name', function () { return Serenity.StringEditor; }],
            ['IsActive', function () { return Serenity.BooleanEditor; }],
            ['NotArchive', function () { return Serenity.BooleanEditor; }],
            ['InsertDate', function () { return Serenity.DateEditor; }],
            ['InsertUserId', function () { return Serenity.IntegerEditor; }],
            ['UpdateDate', function () { return Serenity.DateEditor; }],
            ['UpdateUserId', function () { return Serenity.IntegerEditor; }],
            ['Birthday', function () { return Serenity.DateEditor; }],
            ['Sexe', function () { return Serenity.IntegerEditor; }],
            ['Color', function () { return Serenity.StringEditor; }],
            ['Race', function () { return Serenity.StringEditor; }],
            ['Transponder', function () { return Serenity.StringEditor; }],
            ['FinalExit', function () { return Serenity.DateEditor; }],
            ['Description', function () { return Serenity.StringEditor; }],
            ['ArchiveDate', function () { return Serenity.DateEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ManHorsesForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManHorsesRow;
        (function (ManHorsesRow) {
            ManHorsesRow.idProperty = 'Ueln';
            ManHorsesRow.nameProperty = 'Ueln';
            ManHorsesRow.localTextPrefix = 'Ge.ManHorses';
            var Fields;
            (function (Fields) {
            })(Fields = ManHorsesRow.Fields || (ManHorsesRow.Fields = {}));
            [
                'Ueln',
                'Sire',
                'CleSire',
                'Hnin',
                'BirthCountry',
                'BirthOrganization',
                'Name',
                'IsActive',
                'NotArchive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Birthday',
                'Sexe',
                'Color',
                'Race',
                'Transponder',
                'FinalExit',
                'Description',
                'ArchiveDate',
                'BirthCountryDefaultValue',
                'BirthCountryIsActive',
                'BirthCountryReadOnly',
                'BirthCountryInsertDate',
                'BirthCountryInsertUserId',
                'BirthCountryUpdateDate',
                'BirthCountryUpdateUserId',
                'BirthCountryCountry',
                'BirthCountryCode',
                'BirthCountryCodeUe',
                'BirthCountryIso3166Country',
                'BirthOrganizationDefaultValue',
                'BirthOrganizationIsActive',
                'BirthOrganizationReadOnly',
                'BirthOrganizationInsertDate',
                'BirthOrganizationInsertUserId',
                'BirthOrganizationUpdateDate',
                'BirthOrganizationUpdateUserId',
                'BirthOrganizationOrganization',
                'BirthOrganizationUelnOrganization',
                'SexeDefaultValue',
                'SexeIsActive',
                'SexeReadOnly',
                'SexeInsertDate',
                'SexeInsertUserId',
                'SexeUpdateDate',
                'SexeUpdateUserId',
                'SexeCaption',
                'SexeCivility'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ManHorsesRow = Ge.ManHorsesRow || (Ge.ManHorsesRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManHorsesService;
        (function (ManHorsesService) {
            ManHorsesService.baseUrl = 'Ge/ManHorses';
            var Methods;
            (function (Methods) {
            })(Methods = ManHorsesService.Methods || (ManHorsesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ManHorsesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ManHorsesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ManHorsesService.baseUrl + '/' + x;
            });
        })(ManHorsesService = Ge.ManHorsesService || (Ge.ManHorsesService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManOwnerForm = (function (_super) {
            __extends(ManOwnerForm, _super);
            function ManOwnerForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ManOwnerForm;
        }(Serenity.PrefixedContext));
        ManOwnerForm.formKey = 'Ge.ManOwner';
        Ge.ManOwnerForm = ManOwnerForm;
        [,
            ['Horse', function () { return Serenity.StringEditor; }],
            ['Cavalier', function () { return Serenity.StringEditor; }],
            ['Part', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ManOwnerForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManOwnerRow;
        (function (ManOwnerRow) {
            ManOwnerRow.idProperty = 'Id';
            ManOwnerRow.nameProperty = 'Horse';
            ManOwnerRow.localTextPrefix = 'Ge.ManOwner';
            var Fields;
            (function (Fields) {
            })(Fields = ManOwnerRow.Fields || (ManOwnerRow.Fields = {}));
            [
                'Id',
                'Horse',
                'Cavalier',
                'Part',
                'HorseSire',
                'HorseCleSire',
                'HorseHnin',
                'HorseBirthCountry',
                'HorseBirthOrganization',
                'HorseName',
                'HorseIsActive',
                'HorseNotArchive',
                'HorseInsertDate',
                'HorseInsertUserId',
                'HorseUpdateDate',
                'HorseUpdateUserId',
                'HorseBirthday',
                'HorseSexe',
                'HorseColor',
                'HorseRace',
                'HorseTransponder',
                'HorseFinalExit',
                'HorseDescription',
                'HorseArchiveDate',
                'CavalierPerson',
                'CavalierIsActive',
                'CavalierNotArchive',
                'CavalierInsertDate',
                'CavalierInsertUserId',
                'CavalierUpdateDate',
                'CavalierUpdateUserId',
                'CavalierMilesimeLicnece',
                'CavalierNiveauGalop',
                'CavalierLicenceCompetition',
                'CavalierDateCertificatMedical',
                'CavalierCaption',
                'CavalierArchiveDate'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ManOwnerRow = Ge.ManOwnerRow || (Ge.ManOwnerRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManOwnerService;
        (function (ManOwnerService) {
            ManOwnerService.baseUrl = 'Ge/ManOwner';
            var Methods;
            (function (Methods) {
            })(Methods = ManOwnerService.Methods || (ManOwnerService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ManOwnerService[x] = function (r, s, o) {
                    return Q.serviceRequest(ManOwnerService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ManOwnerService.baseUrl + '/' + x;
            });
        })(ManOwnerService = Ge.ManOwnerService || (Ge.ManOwnerService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManPersonForm = (function (_super) {
            __extends(ManPersonForm, _super);
            function ManPersonForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ManPersonForm;
        }(Serenity.PrefixedContext));
        ManPersonForm.formKey = 'Ge.ManPerson';
        Ge.ManPersonForm = ManPersonForm;
        [,
            ['IsMorale', function () { return Serenity.BooleanEditor; }],
            ['IsActive', function () { return Serenity.BooleanEditor; }],
            ['NotArchive', function () { return Serenity.BooleanEditor; }],
            ['InsertDate', function () { return Serenity.DateEditor; }],
            ['InsertUserId', function () { return Serenity.IntegerEditor; }],
            ['UpdateDate', function () { return Serenity.DateEditor; }],
            ['UpdateUserId', function () { return Serenity.IntegerEditor; }],
            ['Surname', function () { return Serenity.StringEditor; }],
            ['Name', function () { return Serenity.StringEditor; }],
            ['MaidenName', function () { return Serenity.StringEditor; }],
            ['BusinessName', function () { return Serenity.StringEditor; }],
            ['Birthday', function () { return Serenity.DateEditor; }],
            ['Sexe', function () { return Serenity.IntegerEditor; }],
            ['MaritalStatus', function () { return Serenity.IntegerEditor; }],
            ['BirthCity', function () { return Serenity.StringEditor; }],
            ['BirthCountry', function () { return Serenity.StringEditor; }],
            ['Nationality', function () { return Serenity.StringEditor; }],
            ['Photo', function () { return Serenity.StringEditor; }],
            ['Phone', function () { return Serenity.StringEditor; }],
            ['Gsm', function () { return Serenity.StringEditor; }],
            ['WorkPhone', function () { return Serenity.StringEditor; }],
            ['OtherPhone1', function () { return Serenity.StringEditor; }],
            ['OtherPhone2', function () { return Serenity.StringEditor; }],
            ['Email1', function () { return Serenity.StringEditor; }],
            ['Email2', function () { return Serenity.StringEditor; }],
            ['BankAccount', function () { return Serenity.StringEditor; }],
            ['IdAdress', function () { return Serenity.StringEditor; }],
            ['Caption', function () { return Serenity.StringEditor; }],
            ['ArchiveDate', function () { return Serenity.DateEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ManPersonForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManPersonRow;
        (function (ManPersonRow) {
            ManPersonRow.idProperty = 'Id';
            ManPersonRow.nameProperty = 'Surname';
            ManPersonRow.localTextPrefix = 'Ge.ManPerson';
            var Fields;
            (function (Fields) {
            })(Fields = ManPersonRow.Fields || (ManPersonRow.Fields = {}));
            [
                'Id',
                'IsMorale',
                'IsActive',
                'NotArchive',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Surname',
                'Name',
                'MaidenName',
                'BusinessName',
                'Birthday',
                'Sexe',
                'MaritalStatus',
                'BirthCity',
                'BirthCountry',
                'Nationality',
                'Photo',
                'Phone',
                'Gsm',
                'WorkPhone',
                'OtherPhone1',
                'OtherPhone2',
                'Email1',
                'Email2',
                'BankAccount',
                'IdAdress',
                'Caption',
                'ArchiveDate',
                'SexeDefaultValue',
                'SexeIsActive',
                'SexeReadOnly',
                'SexeInsertDate',
                'SexeInsertUserId',
                'SexeUpdateDate',
                'SexeUpdateUserId',
                'SexeCaption',
                'SexeCivility',
                'MaritalStatusDefaultValue',
                'MaritalStatusIsActive',
                'MaritalStatusReadOnly',
                'MaritalStatusInsertDate',
                'MaritalStatusInsertUserId',
                'MaritalStatusUpdateDate',
                'MaritalStatusUpdateUserId',
                'MaritalStatusCaption',
                'MaritalStatusCode',
                'BirthCityDefaultValue',
                'BirthCityIsActive',
                'BirthCityReadOnly',
                'BirthCityInsertDate',
                'BirthCityInsertUserId',
                'BirthCityUpdateDate',
                'BirthCityUpdateUserId',
                'BirthCityFrCodeInsee',
                'BirthCityCaption',
                'BirthCityCity',
                'BirthCityPostCode',
                'BirthCityCountry',
                'BirthCountryDefaultValue',
                'BirthCountryIsActive',
                'BirthCountryReadOnly',
                'BirthCountryInsertDate',
                'BirthCountryInsertUserId',
                'BirthCountryUpdateDate',
                'BirthCountryUpdateUserId',
                'BirthCountryCountry',
                'BirthCountryCode',
                'BirthCountryCodeUe',
                'BirthCountryIso3166Country',
                'NationalityDefaultValue',
                'NationalityIsActive',
                'NationalityReadOnly',
                'NationalityInsertDate',
                'NationalityInsertUserId',
                'NationalityUpdateDate',
                'NationalityUpdateUserId',
                'NationalityCountry',
                'NationalityCode',
                'NationalityCodeUe',
                'NationalityIso3166Country',
                'BankAccountCountryCodeIban',
                'BankAccountCheckDigitsIban',
                'BankAccountBban',
                'BankAccountBic',
                'BankAccountAccountOnwer',
                'BankAccountBankAdress',
                'BankAccountCis',
                'BankAccountUrm',
                'BankAccountMandateDateSign',
                'BankAccountTypePayment',
                'BankAccountDateLastPrelevement',
                'BankAccountTypeOfLastPayment',
                'IdAdressIsActive',
                'IdAdressNotArchive',
                'IdAdressInsertDate',
                'IdAdressInsertUserId',
                'IdAdressUpdateDate',
                'IdAdressUpdateUserId',
                'IdAdressAdress1',
                'IdAdressAdress2',
                'IdAdressAdress3',
                'IdAdressCity',
                'IdAdressCountry',
                'IdAdressCedex',
                'IdAdressBuilding',
                'IdAdressCaption',
                'IdAdressArchiveDate'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ManPersonRow = Ge.ManPersonRow || (Ge.ManPersonRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManPersonService;
        (function (ManPersonService) {
            ManPersonService.baseUrl = 'Ge/ManPerson';
            var Methods;
            (function (Methods) {
            })(Methods = ManPersonService.Methods || (ManPersonService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ManPersonService[x] = function (r, s, o) {
                    return Q.serviceRequest(ManPersonService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ManPersonService.baseUrl + '/' + x;
            });
        })(ManPersonService = Ge.ManPersonService || (Ge.ManPersonService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetCityForm = (function (_super) {
            __extends(SetCityForm, _super);
            function SetCityForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SetCityForm;
        }(Serenity.PrefixedContext));
        SetCityForm.formKey = 'Ge.SetCity';
        Ge.SetCityForm = SetCityForm;
        [,
            ['DefaultValue', function () { return Serenity.BooleanEditor; }],
            ['IsActive', function () { return Serenity.BooleanEditor; }],
            ['ReadOnly', function () { return Serenity.BooleanEditor; }],
            ['InsertDate', function () { return Serenity.DateEditor; }],
            ['InsertUserId', function () { return Serenity.IntegerEditor; }],
            ['UpdateDate', function () { return Serenity.DateEditor; }],
            ['UpdateUserId', function () { return Serenity.IntegerEditor; }],
            ['FrCodeInsee', function () { return Serenity.StringEditor; }],
            ['Caption', function () { return Serenity.StringEditor; }],
            ['City', function () { return Serenity.StringEditor; }],
            ['PostCode', function () { return Serenity.StringEditor; }],
            ['Country', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SetCityForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetCityRow;
        (function (SetCityRow) {
            SetCityRow.idProperty = 'Id';
            SetCityRow.nameProperty = 'FrCodeInsee';
            SetCityRow.localTextPrefix = 'Ge.SetCity';
            var Fields;
            (function (Fields) {
            })(Fields = SetCityRow.Fields || (SetCityRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'ReadOnly',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'FrCodeInsee',
                'Caption',
                'City',
                'PostCode',
                'Country',
                'CountryDefaultValue',
                'CountryIsActive',
                'CountryReadOnly',
                'CountryInsertDate',
                'CountryInsertUserId',
                'CountryUpdateDate',
                'CountryUpdateUserId',
                'Country1',
                'CountryCode',
                'CountryCodeUe',
                'CountryIso3166Country'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetCityRow = Ge.SetCityRow || (Ge.SetCityRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetCityService;
        (function (SetCityService) {
            SetCityService.baseUrl = 'Ge/SetCity';
            var Methods;
            (function (Methods) {
            })(Methods = SetCityService.Methods || (SetCityService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetCityService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetCityService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetCityService.baseUrl + '/' + x;
            });
        })(SetCityService = Ge.SetCityService || (Ge.SetCityService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetCountryForm = (function (_super) {
            __extends(SetCountryForm, _super);
            function SetCountryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SetCountryForm;
        }(Serenity.PrefixedContext));
        SetCountryForm.formKey = 'Ge.SetCountry';
        Ge.SetCountryForm = SetCountryForm;
        [,
            ['DefaultValue', function () { return Serenity.BooleanEditor; }],
            ['IsActive', function () { return Serenity.BooleanEditor; }],
            ['ReadOnly', function () { return Serenity.BooleanEditor; }],
            ['InsertDate', function () { return Serenity.DateEditor; }],
            ['InsertUserId', function () { return Serenity.IntegerEditor; }],
            ['UpdateDate', function () { return Serenity.DateEditor; }],
            ['UpdateUserId', function () { return Serenity.IntegerEditor; }],
            ['Country', function () { return Serenity.StringEditor; }],
            ['Code', function () { return Serenity.StringEditor; }],
            ['CodeUe', function () { return Serenity.IntegerEditor; }],
            ['Iso3166Country', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SetCountryForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetCountryRow;
        (function (SetCountryRow) {
            SetCountryRow.idProperty = 'Id';
            SetCountryRow.nameProperty = 'Country';
            SetCountryRow.localTextPrefix = 'Ge.SetCountry';
            var Fields;
            (function (Fields) {
            })(Fields = SetCountryRow.Fields || (SetCountryRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'ReadOnly',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Country',
                'Code',
                'CodeUe',
                'Iso3166Country'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetCountryRow = Ge.SetCountryRow || (Ge.SetCountryRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetCountryService;
        (function (SetCountryService) {
            SetCountryService.baseUrl = 'Ge/SetCountry';
            var Methods;
            (function (Methods) {
            })(Methods = SetCountryService.Methods || (SetCountryService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetCountryService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetCountryService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetCountryService.baseUrl + '/' + x;
            });
        })(SetCountryService = Ge.SetCountryService || (Ge.SetCountryService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetGalopForm = (function (_super) {
            __extends(SetGalopForm, _super);
            function SetGalopForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SetGalopForm;
        }(Serenity.PrefixedContext));
        SetGalopForm.formKey = 'Ge.SetGalop';
        Ge.SetGalopForm = SetGalopForm;
        [,
            ['DefaultValue', function () { return Serenity.BooleanEditor; }],
            ['IsActive', function () { return Serenity.BooleanEditor; }],
            ['ReadOnly', function () { return Serenity.BooleanEditor; }],
            ['InsertDate', function () { return Serenity.DateEditor; }],
            ['InsertUserId', function () { return Serenity.IntegerEditor; }],
            ['UpdateDate', function () { return Serenity.DateEditor; }],
            ['UpdateUserId', function () { return Serenity.IntegerEditor; }],
            ['Caption', function () { return Serenity.StringEditor; }],
            ['Code', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SetGalopForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetGalopRow;
        (function (SetGalopRow) {
            SetGalopRow.idProperty = 'Id';
            SetGalopRow.nameProperty = 'Caption';
            SetGalopRow.localTextPrefix = 'Ge.SetGalop';
            var Fields;
            (function (Fields) {
            })(Fields = SetGalopRow.Fields || (SetGalopRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'ReadOnly',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Caption',
                'Code'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetGalopRow = Ge.SetGalopRow || (Ge.SetGalopRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetGalopService;
        (function (SetGalopService) {
            SetGalopService.baseUrl = 'Ge/SetGalop';
            var Methods;
            (function (Methods) {
            })(Methods = SetGalopService.Methods || (SetGalopService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetGalopService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetGalopService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetGalopService.baseUrl + '/' + x;
            });
        })(SetGalopService = Ge.SetGalopService || (Ge.SetGalopService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetLfcForm = (function (_super) {
            __extends(SetLfcForm, _super);
            function SetLfcForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SetLfcForm;
        }(Serenity.PrefixedContext));
        SetLfcForm.formKey = 'Ge.SetLfc';
        Ge.SetLfcForm = SetLfcForm;
        [,
            ['DefaultValue', function () { return Serenity.BooleanEditor; }],
            ['IsActive', function () { return Serenity.BooleanEditor; }],
            ['ReadOnly', function () { return Serenity.BooleanEditor; }],
            ['InsertDate', function () { return Serenity.DateEditor; }],
            ['InsertUserId', function () { return Serenity.IntegerEditor; }],
            ['UpdateDate', function () { return Serenity.DateEditor; }],
            ['UpdateUserId', function () { return Serenity.IntegerEditor; }],
            ['Caption', function () { return Serenity.StringEditor; }],
            ['Code', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SetLfcForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetLfcRow;
        (function (SetLfcRow) {
            SetLfcRow.idProperty = 'Id';
            SetLfcRow.nameProperty = 'Caption';
            SetLfcRow.localTextPrefix = 'Ge.SetLfc';
            var Fields;
            (function (Fields) {
            })(Fields = SetLfcRow.Fields || (SetLfcRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'ReadOnly',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Caption',
                'Code'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetLfcRow = Ge.SetLfcRow || (Ge.SetLfcRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetLfcService;
        (function (SetLfcService) {
            SetLfcService.baseUrl = 'Ge/SetLfc';
            var Methods;
            (function (Methods) {
            })(Methods = SetLfcService.Methods || (SetLfcService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetLfcService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetLfcService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetLfcService.baseUrl + '/' + x;
            });
        })(SetLfcService = Ge.SetLfcService || (Ge.SetLfcService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetMaritalstatusForm = (function (_super) {
            __extends(SetMaritalstatusForm, _super);
            function SetMaritalstatusForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SetMaritalstatusForm;
        }(Serenity.PrefixedContext));
        SetMaritalstatusForm.formKey = 'Ge.SetMaritalstatus';
        Ge.SetMaritalstatusForm = SetMaritalstatusForm;
        [,
            ['DefaultValue', function () { return Serenity.BooleanEditor; }],
            ['IsActive', function () { return Serenity.BooleanEditor; }],
            ['ReadOnly', function () { return Serenity.BooleanEditor; }],
            ['InsertDate', function () { return Serenity.DateEditor; }],
            ['InsertUserId', function () { return Serenity.IntegerEditor; }],
            ['UpdateDate', function () { return Serenity.DateEditor; }],
            ['UpdateUserId', function () { return Serenity.IntegerEditor; }],
            ['Caption', function () { return Serenity.StringEditor; }],
            ['Code', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SetMaritalstatusForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetMaritalstatusRow;
        (function (SetMaritalstatusRow) {
            SetMaritalstatusRow.idProperty = 'Id';
            SetMaritalstatusRow.nameProperty = 'Caption';
            SetMaritalstatusRow.localTextPrefix = 'Ge.SetMaritalstatus';
            var Fields;
            (function (Fields) {
            })(Fields = SetMaritalstatusRow.Fields || (SetMaritalstatusRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'ReadOnly',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Caption',
                'Code'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetMaritalstatusRow = Ge.SetMaritalstatusRow || (Ge.SetMaritalstatusRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetMaritalstatusService;
        (function (SetMaritalstatusService) {
            SetMaritalstatusService.baseUrl = 'Ge/SetMaritalstatus';
            var Methods;
            (function (Methods) {
            })(Methods = SetMaritalstatusService.Methods || (SetMaritalstatusService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetMaritalstatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetMaritalstatusService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetMaritalstatusService.baseUrl + '/' + x;
            });
        })(SetMaritalstatusService = Ge.SetMaritalstatusService || (Ge.SetMaritalstatusService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetSexeForm = (function (_super) {
            __extends(SetSexeForm, _super);
            function SetSexeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SetSexeForm;
        }(Serenity.PrefixedContext));
        SetSexeForm.formKey = 'Ge.SetSexe';
        Ge.SetSexeForm = SetSexeForm;
        [,
            ['DefaultValue', function () { return Serenity.BooleanEditor; }],
            ['IsActive', function () { return Serenity.BooleanEditor; }],
            ['ReadOnly', function () { return Serenity.BooleanEditor; }],
            ['InsertDate', function () { return Serenity.DateEditor; }],
            ['InsertUserId', function () { return Serenity.IntegerEditor; }],
            ['UpdateDate', function () { return Serenity.DateEditor; }],
            ['UpdateUserId', function () { return Serenity.IntegerEditor; }],
            ['Caption', function () { return Serenity.StringEditor; }],
            ['Civility', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SetSexeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetSexeRow;
        (function (SetSexeRow) {
            SetSexeRow.idProperty = 'SexeId';
            SetSexeRow.nameProperty = 'Caption';
            SetSexeRow.localTextPrefix = 'Ge.SetSexe';
            var Fields;
            (function (Fields) {
            })(Fields = SetSexeRow.Fields || (SetSexeRow.Fields = {}));
            [
                'SexeId',
                'DefaultValue',
                'IsActive',
                'ReadOnly',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Caption',
                'Civility'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetSexeRow = Ge.SetSexeRow || (Ge.SetSexeRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetSexeService;
        (function (SetSexeService) {
            SetSexeService.baseUrl = 'Ge/SetSexe';
            var Methods;
            (function (Methods) {
            })(Methods = SetSexeService.Methods || (SetSexeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetSexeService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetSexeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetSexeService.baseUrl + '/' + x;
            });
        })(SetSexeService = Ge.SetSexeService || (Ge.SetSexeService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetUelnorgaForm = (function (_super) {
            __extends(SetUelnorgaForm, _super);
            function SetUelnorgaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SetUelnorgaForm;
        }(Serenity.PrefixedContext));
        SetUelnorgaForm.formKey = 'Ge.SetUelnorga';
        Ge.SetUelnorgaForm = SetUelnorgaForm;
        [,
            ['DefaultValue', function () { return Serenity.BooleanEditor; }],
            ['IsActive', function () { return Serenity.BooleanEditor; }],
            ['ReadOnly', function () { return Serenity.BooleanEditor; }],
            ['InsertDate', function () { return Serenity.DateEditor; }],
            ['InsertUserId', function () { return Serenity.IntegerEditor; }],
            ['UpdateDate', function () { return Serenity.DateEditor; }],
            ['UpdateUserId', function () { return Serenity.IntegerEditor; }],
            ['Organization', function () { return Serenity.StringEditor; }],
            ['UelnOrganization', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SetUelnorgaForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetUelnorgaRow;
        (function (SetUelnorgaRow) {
            SetUelnorgaRow.idProperty = 'Id';
            SetUelnorgaRow.nameProperty = 'Organization';
            SetUelnorgaRow.localTextPrefix = 'Ge.SetUelnorga';
            var Fields;
            (function (Fields) {
            })(Fields = SetUelnorgaRow.Fields || (SetUelnorgaRow.Fields = {}));
            [
                'Id',
                'DefaultValue',
                'IsActive',
                'ReadOnly',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'Organization',
                'UelnOrganization'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SetUelnorgaRow = Ge.SetUelnorgaRow || (Ge.SetUelnorgaRow = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetUelnorgaService;
        (function (SetUelnorgaService) {
            SetUelnorgaService.baseUrl = 'Ge/SetUelnorga';
            var Methods;
            (function (Methods) {
            })(Methods = SetUelnorgaService.Methods || (SetUelnorgaService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SetUelnorgaService[x] = function (r, s, o) {
                    return Q.serviceRequest(SetUelnorgaService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SetUelnorgaService.baseUrl + '/' + x;
            });
        })(SetUelnorgaService = Ge.SetUelnorgaService || (Ge.SetUelnorgaService = {}));
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        ChangePasswordForm.formKey = 'Membership.ChangePassword';
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = GestionEquestre.Membership || (GestionEquestre.Membership = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = GestionEquestre.Membership || (GestionEquestre.Membership = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LoginForm;
        }(Serenity.PrefixedContext));
        LoginForm.formKey = 'Membership.Login';
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = GestionEquestre.Membership || (GestionEquestre.Membership = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        ResetPasswordForm.formKey = 'Membership.ResetPassword';
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = GestionEquestre.Membership || (GestionEquestre.Membership = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SignUpForm;
        }(Serenity.PrefixedContext));
        SignUpForm.formKey = 'Membership.SignUp';
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = GestionEquestre.Membership || (GestionEquestre.Membership = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            return LanguageDialog;
        }(Serenity.EntityDialog));
        LanguageDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageDialog);
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            return LanguageGrid;
        }(Serenity.EntityGrid));
        LanguageGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageGrid);
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            return RoleDialog;
        }(Serenity.EntityDialog));
        RoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleDialog);
        Administration.RoleDialog = RoleDialog;
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            return RoleGrid;
        }(Serenity.EntityGrid));
        RoleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleGrid);
        Administration.RoleGrid = RoleGrid;
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        RolePermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RolePermissionDialog);
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            return TranslationGrid;
        }(Serenity.EntityGrid));
        TranslationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TranslationGrid);
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = GestionEquestre.Authorization || (GestionEquestre.Authorization = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            return UserDialog;
        }(Serenity.EntityDialog));
        UserDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserDialog);
        Administration.UserDialog = UserDialog;
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            return UserGrid;
        }(Serenity.EntityGrid));
        UserGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserGrid);
        Administration.UserGrid = UserGrid;
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        PermissionCheckEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
        ], PermissionCheckEditor);
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        UserPermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserPermissionDialog);
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        RoleCheckEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], RoleCheckEditor);
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        UserRoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserRoleDialog);
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = GestionEquestre.Administration || (GestionEquestre.Administration = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    GestionEquestre.BasicProgressDialog = BasicProgressDialog;
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new GestionEquestre.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = GestionEquestre.DialogUtils || (GestionEquestre.DialogUtils = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            return EnumSelectFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "enumKey", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "allowClear", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
        EnumSelectFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EnumSelectFormatter);
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            return GridEditorBase;
        }(Serenity.EntityGrid));
        GridEditorBase = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], GridEditorBase);
        Common.GridEditorBase = GridEditorBase;
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        GridEditorDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GridEditorDialog);
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = GestionEquestre.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = GestionEquestre.LanguageList || (GestionEquestre.LanguageList = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var ReportDialog = (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var ReportPage = (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var GestionEquestre;
(function (GestionEquestre) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('GestionEquestre');
        Serenity.EntityDialog.defaultLanguageList = GestionEquestre.LanguageList.getValue;
    })(ScriptInitialization = GestionEquestre.ScriptInitialization || (GestionEquestre.ScriptInitialization = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = GestionEquestre.Common || (GestionEquestre.Common = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var AccBankaccountDialog = (function (_super) {
            __extends(AccBankaccountDialog, _super);
            function AccBankaccountDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.AccBankaccountForm(_this.idPrefix);
                return _this;
            }
            AccBankaccountDialog.prototype.getFormKey = function () { return Ge.AccBankaccountForm.formKey; };
            AccBankaccountDialog.prototype.getIdProperty = function () { return Ge.AccBankaccountRow.idProperty; };
            AccBankaccountDialog.prototype.getLocalTextPrefix = function () { return Ge.AccBankaccountRow.localTextPrefix; };
            AccBankaccountDialog.prototype.getNameProperty = function () { return Ge.AccBankaccountRow.nameProperty; };
            AccBankaccountDialog.prototype.getService = function () { return Ge.AccBankaccountService.baseUrl; };
            return AccBankaccountDialog;
        }(Serenity.EntityDialog));
        AccBankaccountDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], AccBankaccountDialog);
        Ge.AccBankaccountDialog = AccBankaccountDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var AccBankaccountGrid = (function (_super) {
            __extends(AccBankaccountGrid, _super);
            function AccBankaccountGrid(container) {
                return _super.call(this, container) || this;
            }
            AccBankaccountGrid.prototype.getColumnsKey = function () { return 'Ge.AccBankaccount'; };
            AccBankaccountGrid.prototype.getDialogType = function () { return Ge.AccBankaccountDialog; };
            AccBankaccountGrid.prototype.getIdProperty = function () { return Ge.AccBankaccountRow.idProperty; };
            AccBankaccountGrid.prototype.getLocalTextPrefix = function () { return Ge.AccBankaccountRow.localTextPrefix; };
            AccBankaccountGrid.prototype.getService = function () { return Ge.AccBankaccountService.baseUrl; };
            return AccBankaccountGrid;
        }(Serenity.EntityGrid));
        AccBankaccountGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], AccBankaccountGrid);
        Ge.AccBankaccountGrid = AccBankaccountGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManAdressDialog = (function (_super) {
            __extends(ManAdressDialog, _super);
            function ManAdressDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.ManAdressForm(_this.idPrefix);
                return _this;
            }
            ManAdressDialog.prototype.getFormKey = function () { return Ge.ManAdressForm.formKey; };
            ManAdressDialog.prototype.getIdProperty = function () { return Ge.ManAdressRow.idProperty; };
            ManAdressDialog.prototype.getLocalTextPrefix = function () { return Ge.ManAdressRow.localTextPrefix; };
            ManAdressDialog.prototype.getNameProperty = function () { return Ge.ManAdressRow.nameProperty; };
            ManAdressDialog.prototype.getService = function () { return Ge.ManAdressService.baseUrl; };
            return ManAdressDialog;
        }(Serenity.EntityDialog));
        ManAdressDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ManAdressDialog);
        Ge.ManAdressDialog = ManAdressDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManAdressGrid = (function (_super) {
            __extends(ManAdressGrid, _super);
            function ManAdressGrid(container) {
                return _super.call(this, container) || this;
            }
            ManAdressGrid.prototype.getColumnsKey = function () { return 'Ge.ManAdress'; };
            ManAdressGrid.prototype.getDialogType = function () { return Ge.ManAdressDialog; };
            ManAdressGrid.prototype.getIdProperty = function () { return Ge.ManAdressRow.idProperty; };
            ManAdressGrid.prototype.getLocalTextPrefix = function () { return Ge.ManAdressRow.localTextPrefix; };
            ManAdressGrid.prototype.getService = function () { return Ge.ManAdressService.baseUrl; };
            return ManAdressGrid;
        }(Serenity.EntityGrid));
        ManAdressGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ManAdressGrid);
        Ge.ManAdressGrid = ManAdressGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManCavaliersDialog = (function (_super) {
            __extends(ManCavaliersDialog, _super);
            function ManCavaliersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.ManCavaliersForm(_this.idPrefix);
                return _this;
            }
            ManCavaliersDialog.prototype.getFormKey = function () { return Ge.ManCavaliersForm.formKey; };
            ManCavaliersDialog.prototype.getIdProperty = function () { return Ge.ManCavaliersRow.idProperty; };
            ManCavaliersDialog.prototype.getLocalTextPrefix = function () { return Ge.ManCavaliersRow.localTextPrefix; };
            ManCavaliersDialog.prototype.getNameProperty = function () { return Ge.ManCavaliersRow.nameProperty; };
            ManCavaliersDialog.prototype.getService = function () { return Ge.ManCavaliersService.baseUrl; };
            return ManCavaliersDialog;
        }(Serenity.EntityDialog));
        ManCavaliersDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ManCavaliersDialog);
        Ge.ManCavaliersDialog = ManCavaliersDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManCavaliersGrid = (function (_super) {
            __extends(ManCavaliersGrid, _super);
            function ManCavaliersGrid(container) {
                return _super.call(this, container) || this;
            }
            ManCavaliersGrid.prototype.getColumnsKey = function () { return 'Ge.ManCavaliers'; };
            ManCavaliersGrid.prototype.getDialogType = function () { return Ge.ManCavaliersDialog; };
            ManCavaliersGrid.prototype.getIdProperty = function () { return Ge.ManCavaliersRow.idProperty; };
            ManCavaliersGrid.prototype.getLocalTextPrefix = function () { return Ge.ManCavaliersRow.localTextPrefix; };
            ManCavaliersGrid.prototype.getService = function () { return Ge.ManCavaliersService.baseUrl; };
            return ManCavaliersGrid;
        }(Serenity.EntityGrid));
        ManCavaliersGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ManCavaliersGrid);
        Ge.ManCavaliersGrid = ManCavaliersGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManHorsesDialog = (function (_super) {
            __extends(ManHorsesDialog, _super);
            function ManHorsesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.ManHorsesForm(_this.idPrefix);
                return _this;
            }
            ManHorsesDialog.prototype.getFormKey = function () { return Ge.ManHorsesForm.formKey; };
            ManHorsesDialog.prototype.getIdProperty = function () { return Ge.ManHorsesRow.idProperty; };
            ManHorsesDialog.prototype.getLocalTextPrefix = function () { return Ge.ManHorsesRow.localTextPrefix; };
            ManHorsesDialog.prototype.getNameProperty = function () { return Ge.ManHorsesRow.nameProperty; };
            ManHorsesDialog.prototype.getService = function () { return Ge.ManHorsesService.baseUrl; };
            return ManHorsesDialog;
        }(Serenity.EntityDialog));
        ManHorsesDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ManHorsesDialog);
        Ge.ManHorsesDialog = ManHorsesDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManHorsesGrid = (function (_super) {
            __extends(ManHorsesGrid, _super);
            function ManHorsesGrid(container) {
                return _super.call(this, container) || this;
            }
            ManHorsesGrid.prototype.getColumnsKey = function () { return 'Ge.ManHorses'; };
            ManHorsesGrid.prototype.getDialogType = function () { return Ge.ManHorsesDialog; };
            ManHorsesGrid.prototype.getIdProperty = function () { return Ge.ManHorsesRow.idProperty; };
            ManHorsesGrid.prototype.getLocalTextPrefix = function () { return Ge.ManHorsesRow.localTextPrefix; };
            ManHorsesGrid.prototype.getService = function () { return Ge.ManHorsesService.baseUrl; };
            return ManHorsesGrid;
        }(Serenity.EntityGrid));
        ManHorsesGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ManHorsesGrid);
        Ge.ManHorsesGrid = ManHorsesGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManOwnerDialog = (function (_super) {
            __extends(ManOwnerDialog, _super);
            function ManOwnerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.ManOwnerForm(_this.idPrefix);
                return _this;
            }
            ManOwnerDialog.prototype.getFormKey = function () { return Ge.ManOwnerForm.formKey; };
            ManOwnerDialog.prototype.getIdProperty = function () { return Ge.ManOwnerRow.idProperty; };
            ManOwnerDialog.prototype.getLocalTextPrefix = function () { return Ge.ManOwnerRow.localTextPrefix; };
            ManOwnerDialog.prototype.getNameProperty = function () { return Ge.ManOwnerRow.nameProperty; };
            ManOwnerDialog.prototype.getService = function () { return Ge.ManOwnerService.baseUrl; };
            return ManOwnerDialog;
        }(Serenity.EntityDialog));
        ManOwnerDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ManOwnerDialog);
        Ge.ManOwnerDialog = ManOwnerDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManOwnerGrid = (function (_super) {
            __extends(ManOwnerGrid, _super);
            function ManOwnerGrid(container) {
                return _super.call(this, container) || this;
            }
            ManOwnerGrid.prototype.getColumnsKey = function () { return 'Ge.ManOwner'; };
            ManOwnerGrid.prototype.getDialogType = function () { return Ge.ManOwnerDialog; };
            ManOwnerGrid.prototype.getIdProperty = function () { return Ge.ManOwnerRow.idProperty; };
            ManOwnerGrid.prototype.getLocalTextPrefix = function () { return Ge.ManOwnerRow.localTextPrefix; };
            ManOwnerGrid.prototype.getService = function () { return Ge.ManOwnerService.baseUrl; };
            return ManOwnerGrid;
        }(Serenity.EntityGrid));
        ManOwnerGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ManOwnerGrid);
        Ge.ManOwnerGrid = ManOwnerGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManPersonDialog = (function (_super) {
            __extends(ManPersonDialog, _super);
            function ManPersonDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.ManPersonForm(_this.idPrefix);
                return _this;
            }
            ManPersonDialog.prototype.getFormKey = function () { return Ge.ManPersonForm.formKey; };
            ManPersonDialog.prototype.getIdProperty = function () { return Ge.ManPersonRow.idProperty; };
            ManPersonDialog.prototype.getLocalTextPrefix = function () { return Ge.ManPersonRow.localTextPrefix; };
            ManPersonDialog.prototype.getNameProperty = function () { return Ge.ManPersonRow.nameProperty; };
            ManPersonDialog.prototype.getService = function () { return Ge.ManPersonService.baseUrl; };
            return ManPersonDialog;
        }(Serenity.EntityDialog));
        ManPersonDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ManPersonDialog);
        Ge.ManPersonDialog = ManPersonDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var ManPersonGrid = (function (_super) {
            __extends(ManPersonGrid, _super);
            function ManPersonGrid(container) {
                return _super.call(this, container) || this;
            }
            ManPersonGrid.prototype.getColumnsKey = function () { return 'Ge.ManPerson'; };
            ManPersonGrid.prototype.getDialogType = function () { return Ge.ManPersonDialog; };
            ManPersonGrid.prototype.getIdProperty = function () { return Ge.ManPersonRow.idProperty; };
            ManPersonGrid.prototype.getLocalTextPrefix = function () { return Ge.ManPersonRow.localTextPrefix; };
            ManPersonGrid.prototype.getService = function () { return Ge.ManPersonService.baseUrl; };
            return ManPersonGrid;
        }(Serenity.EntityGrid));
        ManPersonGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ManPersonGrid);
        Ge.ManPersonGrid = ManPersonGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetCityDialog = (function (_super) {
            __extends(SetCityDialog, _super);
            function SetCityDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.SetCityForm(_this.idPrefix);
                return _this;
            }
            SetCityDialog.prototype.getFormKey = function () { return Ge.SetCityForm.formKey; };
            SetCityDialog.prototype.getIdProperty = function () { return Ge.SetCityRow.idProperty; };
            SetCityDialog.prototype.getLocalTextPrefix = function () { return Ge.SetCityRow.localTextPrefix; };
            SetCityDialog.prototype.getNameProperty = function () { return Ge.SetCityRow.nameProperty; };
            SetCityDialog.prototype.getService = function () { return Ge.SetCityService.baseUrl; };
            return SetCityDialog;
        }(Serenity.EntityDialog));
        SetCityDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], SetCityDialog);
        Ge.SetCityDialog = SetCityDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetCityGrid = (function (_super) {
            __extends(SetCityGrid, _super);
            function SetCityGrid(container) {
                return _super.call(this, container) || this;
            }
            SetCityGrid.prototype.getColumnsKey = function () { return 'Ge.SetCity'; };
            SetCityGrid.prototype.getDialogType = function () { return Ge.SetCityDialog; };
            SetCityGrid.prototype.getIdProperty = function () { return Ge.SetCityRow.idProperty; };
            SetCityGrid.prototype.getLocalTextPrefix = function () { return Ge.SetCityRow.localTextPrefix; };
            SetCityGrid.prototype.getService = function () { return Ge.SetCityService.baseUrl; };
            return SetCityGrid;
        }(Serenity.EntityGrid));
        SetCityGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SetCityGrid);
        Ge.SetCityGrid = SetCityGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetCountryDialog = (function (_super) {
            __extends(SetCountryDialog, _super);
            function SetCountryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.SetCountryForm(_this.idPrefix);
                return _this;
            }
            SetCountryDialog.prototype.getFormKey = function () { return Ge.SetCountryForm.formKey; };
            SetCountryDialog.prototype.getIdProperty = function () { return Ge.SetCountryRow.idProperty; };
            SetCountryDialog.prototype.getLocalTextPrefix = function () { return Ge.SetCountryRow.localTextPrefix; };
            SetCountryDialog.prototype.getNameProperty = function () { return Ge.SetCountryRow.nameProperty; };
            SetCountryDialog.prototype.getService = function () { return Ge.SetCountryService.baseUrl; };
            return SetCountryDialog;
        }(Serenity.EntityDialog));
        SetCountryDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], SetCountryDialog);
        Ge.SetCountryDialog = SetCountryDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetCountryGrid = (function (_super) {
            __extends(SetCountryGrid, _super);
            function SetCountryGrid(container) {
                return _super.call(this, container) || this;
            }
            SetCountryGrid.prototype.getColumnsKey = function () { return 'Ge.SetCountry'; };
            SetCountryGrid.prototype.getDialogType = function () { return Ge.SetCountryDialog; };
            SetCountryGrid.prototype.getIdProperty = function () { return Ge.SetCountryRow.idProperty; };
            SetCountryGrid.prototype.getLocalTextPrefix = function () { return Ge.SetCountryRow.localTextPrefix; };
            SetCountryGrid.prototype.getService = function () { return Ge.SetCountryService.baseUrl; };
            return SetCountryGrid;
        }(Serenity.EntityGrid));
        SetCountryGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SetCountryGrid);
        Ge.SetCountryGrid = SetCountryGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetGalopDialog = (function (_super) {
            __extends(SetGalopDialog, _super);
            function SetGalopDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.SetGalopForm(_this.idPrefix);
                return _this;
            }
            SetGalopDialog.prototype.getFormKey = function () { return Ge.SetGalopForm.formKey; };
            SetGalopDialog.prototype.getIdProperty = function () { return Ge.SetGalopRow.idProperty; };
            SetGalopDialog.prototype.getLocalTextPrefix = function () { return Ge.SetGalopRow.localTextPrefix; };
            SetGalopDialog.prototype.getNameProperty = function () { return Ge.SetGalopRow.nameProperty; };
            SetGalopDialog.prototype.getService = function () { return Ge.SetGalopService.baseUrl; };
            return SetGalopDialog;
        }(Serenity.EntityDialog));
        SetGalopDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], SetGalopDialog);
        Ge.SetGalopDialog = SetGalopDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetGalopGrid = (function (_super) {
            __extends(SetGalopGrid, _super);
            function SetGalopGrid(container) {
                return _super.call(this, container) || this;
            }
            SetGalopGrid.prototype.getColumnsKey = function () { return 'Ge.SetGalop'; };
            SetGalopGrid.prototype.getDialogType = function () { return Ge.SetGalopDialog; };
            SetGalopGrid.prototype.getIdProperty = function () { return Ge.SetGalopRow.idProperty; };
            SetGalopGrid.prototype.getLocalTextPrefix = function () { return Ge.SetGalopRow.localTextPrefix; };
            SetGalopGrid.prototype.getService = function () { return Ge.SetGalopService.baseUrl; };
            return SetGalopGrid;
        }(Serenity.EntityGrid));
        SetGalopGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SetGalopGrid);
        Ge.SetGalopGrid = SetGalopGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetLfcDialog = (function (_super) {
            __extends(SetLfcDialog, _super);
            function SetLfcDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.SetLfcForm(_this.idPrefix);
                return _this;
            }
            SetLfcDialog.prototype.getFormKey = function () { return Ge.SetLfcForm.formKey; };
            SetLfcDialog.prototype.getIdProperty = function () { return Ge.SetLfcRow.idProperty; };
            SetLfcDialog.prototype.getLocalTextPrefix = function () { return Ge.SetLfcRow.localTextPrefix; };
            SetLfcDialog.prototype.getNameProperty = function () { return Ge.SetLfcRow.nameProperty; };
            SetLfcDialog.prototype.getService = function () { return Ge.SetLfcService.baseUrl; };
            return SetLfcDialog;
        }(Serenity.EntityDialog));
        SetLfcDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], SetLfcDialog);
        Ge.SetLfcDialog = SetLfcDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetLfcGrid = (function (_super) {
            __extends(SetLfcGrid, _super);
            function SetLfcGrid(container) {
                return _super.call(this, container) || this;
            }
            SetLfcGrid.prototype.getColumnsKey = function () { return 'Ge.SetLfc'; };
            SetLfcGrid.prototype.getDialogType = function () { return Ge.SetLfcDialog; };
            SetLfcGrid.prototype.getIdProperty = function () { return Ge.SetLfcRow.idProperty; };
            SetLfcGrid.prototype.getLocalTextPrefix = function () { return Ge.SetLfcRow.localTextPrefix; };
            SetLfcGrid.prototype.getService = function () { return Ge.SetLfcService.baseUrl; };
            return SetLfcGrid;
        }(Serenity.EntityGrid));
        SetLfcGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SetLfcGrid);
        Ge.SetLfcGrid = SetLfcGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetMaritalstatusDialog = (function (_super) {
            __extends(SetMaritalstatusDialog, _super);
            function SetMaritalstatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.SetMaritalstatusForm(_this.idPrefix);
                return _this;
            }
            SetMaritalstatusDialog.prototype.getFormKey = function () { return Ge.SetMaritalstatusForm.formKey; };
            SetMaritalstatusDialog.prototype.getIdProperty = function () { return Ge.SetMaritalstatusRow.idProperty; };
            SetMaritalstatusDialog.prototype.getLocalTextPrefix = function () { return Ge.SetMaritalstatusRow.localTextPrefix; };
            SetMaritalstatusDialog.prototype.getNameProperty = function () { return Ge.SetMaritalstatusRow.nameProperty; };
            SetMaritalstatusDialog.prototype.getService = function () { return Ge.SetMaritalstatusService.baseUrl; };
            return SetMaritalstatusDialog;
        }(Serenity.EntityDialog));
        SetMaritalstatusDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], SetMaritalstatusDialog);
        Ge.SetMaritalstatusDialog = SetMaritalstatusDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetMaritalstatusGrid = (function (_super) {
            __extends(SetMaritalstatusGrid, _super);
            function SetMaritalstatusGrid(container) {
                return _super.call(this, container) || this;
            }
            SetMaritalstatusGrid.prototype.getColumnsKey = function () { return 'Ge.SetMaritalstatus'; };
            SetMaritalstatusGrid.prototype.getDialogType = function () { return Ge.SetMaritalstatusDialog; };
            SetMaritalstatusGrid.prototype.getIdProperty = function () { return Ge.SetMaritalstatusRow.idProperty; };
            SetMaritalstatusGrid.prototype.getLocalTextPrefix = function () { return Ge.SetMaritalstatusRow.localTextPrefix; };
            SetMaritalstatusGrid.prototype.getService = function () { return Ge.SetMaritalstatusService.baseUrl; };
            return SetMaritalstatusGrid;
        }(Serenity.EntityGrid));
        SetMaritalstatusGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SetMaritalstatusGrid);
        Ge.SetMaritalstatusGrid = SetMaritalstatusGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetSexeDialog = (function (_super) {
            __extends(SetSexeDialog, _super);
            function SetSexeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.SetSexeForm(_this.idPrefix);
                return _this;
            }
            SetSexeDialog.prototype.getFormKey = function () { return Ge.SetSexeForm.formKey; };
            SetSexeDialog.prototype.getIdProperty = function () { return Ge.SetSexeRow.idProperty; };
            SetSexeDialog.prototype.getLocalTextPrefix = function () { return Ge.SetSexeRow.localTextPrefix; };
            SetSexeDialog.prototype.getNameProperty = function () { return Ge.SetSexeRow.nameProperty; };
            SetSexeDialog.prototype.getService = function () { return Ge.SetSexeService.baseUrl; };
            return SetSexeDialog;
        }(Serenity.EntityDialog));
        SetSexeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], SetSexeDialog);
        Ge.SetSexeDialog = SetSexeDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetSexeGrid = (function (_super) {
            __extends(SetSexeGrid, _super);
            function SetSexeGrid(container) {
                return _super.call(this, container) || this;
            }
            SetSexeGrid.prototype.getColumnsKey = function () { return 'Ge.SetSexe'; };
            SetSexeGrid.prototype.getDialogType = function () { return Ge.SetSexeDialog; };
            SetSexeGrid.prototype.getIdProperty = function () { return Ge.SetSexeRow.idProperty; };
            SetSexeGrid.prototype.getLocalTextPrefix = function () { return Ge.SetSexeRow.localTextPrefix; };
            SetSexeGrid.prototype.getService = function () { return Ge.SetSexeService.baseUrl; };
            return SetSexeGrid;
        }(Serenity.EntityGrid));
        SetSexeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SetSexeGrid);
        Ge.SetSexeGrid = SetSexeGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetUelnorgaDialog = (function (_super) {
            __extends(SetUelnorgaDialog, _super);
            function SetUelnorgaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Ge.SetUelnorgaForm(_this.idPrefix);
                return _this;
            }
            SetUelnorgaDialog.prototype.getFormKey = function () { return Ge.SetUelnorgaForm.formKey; };
            SetUelnorgaDialog.prototype.getIdProperty = function () { return Ge.SetUelnorgaRow.idProperty; };
            SetUelnorgaDialog.prototype.getLocalTextPrefix = function () { return Ge.SetUelnorgaRow.localTextPrefix; };
            SetUelnorgaDialog.prototype.getNameProperty = function () { return Ge.SetUelnorgaRow.nameProperty; };
            SetUelnorgaDialog.prototype.getService = function () { return Ge.SetUelnorgaService.baseUrl; };
            return SetUelnorgaDialog;
        }(Serenity.EntityDialog));
        SetUelnorgaDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], SetUelnorgaDialog);
        Ge.SetUelnorgaDialog = SetUelnorgaDialog;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Ge;
    (function (Ge) {
        var SetUelnorgaGrid = (function (_super) {
            __extends(SetUelnorgaGrid, _super);
            function SetUelnorgaGrid(container) {
                return _super.call(this, container) || this;
            }
            SetUelnorgaGrid.prototype.getColumnsKey = function () { return 'Ge.SetUelnorga'; };
            SetUelnorgaGrid.prototype.getDialogType = function () { return Ge.SetUelnorgaDialog; };
            SetUelnorgaGrid.prototype.getIdProperty = function () { return Ge.SetUelnorgaRow.idProperty; };
            SetUelnorgaGrid.prototype.getLocalTextPrefix = function () { return Ge.SetUelnorgaRow.localTextPrefix; };
            SetUelnorgaGrid.prototype.getService = function () { return Ge.SetUelnorgaService.baseUrl; };
            return SetUelnorgaGrid;
        }(Serenity.EntityGrid));
        SetUelnorgaGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SetUelnorgaGrid);
        Ge.SetUelnorgaGrid = SetUelnorgaGrid;
    })(Ge = GestionEquestre.Ge || (GestionEquestre.Ge = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        ChangePasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangePasswordPanel);
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = GestionEquestre.Membership || (GestionEquestre.Membership = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        ForgotPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ForgotPasswordPanel);
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = GestionEquestre.Membership || (GestionEquestre.Membership = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        ResetPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ResetPasswordPanel);
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = GestionEquestre.Membership || (GestionEquestre.Membership = {}));
})(GestionEquestre || (GestionEquestre = {}));
var GestionEquestre;
(function (GestionEquestre) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        SignUpPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], SignUpPanel);
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = GestionEquestre.Membership || (GestionEquestre.Membership = {}));
})(GestionEquestre || (GestionEquestre = {}));
//# sourceMappingURL=GestionEquestre.Web.js.map