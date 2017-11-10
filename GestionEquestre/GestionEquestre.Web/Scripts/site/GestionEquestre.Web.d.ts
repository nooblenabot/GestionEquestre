/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace GestionEquestre.Administration {
}
declare namespace GestionEquestre.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace GestionEquestre.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Administration {
}
declare namespace GestionEquestre.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace GestionEquestre.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace GestionEquestre.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace GestionEquestre.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace GestionEquestre.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
        }
    }
}
declare namespace GestionEquestre.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace GestionEquestre.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace GestionEquestre.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace GestionEquestre.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace GestionEquestre.Administration {
}
declare namespace GestionEquestre.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace GestionEquestre.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace GestionEquestre.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace GestionEquestre.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace GestionEquestre.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace GestionEquestre.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace GestionEquestre.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace GestionEquestre.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace GestionEquestre.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const UserImage: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace GestionEquestre.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace GestionEquestre.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace GestionEquestre.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace GestionEquestre.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace GestionEquestre.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace GestionEquestre.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace GestionEquestre {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace GestionEquestre {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class AccBankaccountForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AccBankaccountForm {
        CountryCodeIban: Serenity.StringEditor;
        CheckDigitsIban: Serenity.StringEditor;
        Bban: Serenity.StringEditor;
        Bic: Serenity.StringEditor;
        AccountOnwer: Serenity.StringEditor;
        BankAdress: Serenity.StringEditor;
        Cis: Serenity.StringEditor;
        Urm: Serenity.StringEditor;
        MandateDateSign: Serenity.DateEditor;
        TypePayment: Serenity.IntegerEditor;
        DateLastPrelevement: Serenity.DateEditor;
        TypeOfLastPayment: Serenity.IntegerEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface AccBankaccountRow {
        Id?: string;
        CountryCodeIban?: string;
        CheckDigitsIban?: string;
        Bban?: string;
        Bic?: string;
        AccountOnwer?: string;
        BankAdress?: string;
        Cis?: string;
        Urm?: string;
        MandateDateSign?: string;
        TypePayment?: number;
        DateLastPrelevement?: string;
        TypeOfLastPayment?: number;
    }
    namespace AccBankaccountRow {
        const idProperty = "Id";
        const nameProperty = "CountryCodeIban";
        const localTextPrefix = "Ge.AccBankaccount";
        namespace Fields {
            const Id: string;
            const CountryCodeIban: string;
            const CheckDigitsIban: string;
            const Bban: string;
            const Bic: string;
            const AccountOnwer: string;
            const BankAdress: string;
            const Cis: string;
            const Urm: string;
            const MandateDateSign: string;
            const TypePayment: string;
            const DateLastPrelevement: string;
            const TypeOfLastPayment: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace AccBankaccountService {
        const baseUrl = "Ge/AccBankaccount";
        function Create(request: Serenity.SaveRequest<AccBankaccountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AccBankaccountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccBankaccountRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccBankaccountRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class LinkFolderCavalierForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LinkFolderCavalierForm {
        Folder: Serenity.IntegerEditor;
        Cavalier: Serenity.LookupEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface LinkFolderCavalierRow {
        Id?: number;
        Folder?: number;
        Cavalier?: string;
        FolderIsActive?: boolean;
        FolderNotArchive?: boolean;
        FolderInsertDate?: string;
        FolderInsertUserId?: number;
        FolderUpdateDate?: string;
        FolderUpdateUserId?: number;
        FolderCaption?: string;
        FolderArchiveDate?: string;
        FolderNumber?: number;
        FolderCreateeDate?: string;
        FolderCloseRaison?: string;
        FolderCloseDate?: string;
        FolderEstablishment?: number;
        FolderComment?: string;
        CavalierPerson?: string;
        CavalierIsActive?: boolean;
        CavalierNotArchive?: boolean;
        CavalierInsertDate?: string;
        CavalierInsertUserId?: number;
        CavalierUpdateDate?: string;
        CavalierUpdateUserId?: number;
        CavalierMilesimeLicnece?: string;
        CavalierNiveauGalop?: number;
        CavalierLicenceCompetition?: number;
        CavalierDateCertificatMedical?: string;
        CavalierCaption?: string;
        CavalierArchiveDate?: string;
    }
    namespace LinkFolderCavalierRow {
        const idProperty = "Id";
        const nameProperty = "Cavalier";
        const localTextPrefix = "Ge.LinkFolderCavalier";
        namespace Fields {
            const Id: string;
            const Folder: string;
            const Cavalier: string;
            const FolderIsActive: string;
            const FolderNotArchive: string;
            const FolderInsertDate: string;
            const FolderInsertUserId: string;
            const FolderUpdateDate: string;
            const FolderUpdateUserId: string;
            const FolderCaption: string;
            const FolderArchiveDate: string;
            const FolderNumber: string;
            const FolderCreateeDate: string;
            const FolderCloseRaison: string;
            const FolderCloseDate: string;
            const FolderEstablishment: string;
            const FolderComment: string;
            const CavalierPerson: string;
            const CavalierIsActive: string;
            const CavalierNotArchive: string;
            const CavalierInsertDate: string;
            const CavalierInsertUserId: string;
            const CavalierUpdateDate: string;
            const CavalierUpdateUserId: string;
            const CavalierMilesimeLicnece: string;
            const CavalierNiveauGalop: string;
            const CavalierLicenceCompetition: string;
            const CavalierDateCertificatMedical: string;
            const CavalierCaption: string;
            const CavalierArchiveDate: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace LinkFolderCavalierService {
        const baseUrl = "Ge/LinkFolderCavalier";
        function Create(request: Serenity.SaveRequest<LinkFolderCavalierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LinkFolderCavalierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LinkFolderCavalierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LinkFolderCavalierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class LinkFolderHorseForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LinkFolderHorseForm {
        Folder: Serenity.IntegerEditor;
        Horse: Serenity.LookupEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface LinkFolderHorseRow {
        Id?: number;
        Folder?: number;
        Horse?: string;
        FolderIsActive?: boolean;
        FolderNotArchive?: boolean;
        FolderInsertDate?: string;
        FolderInsertUserId?: number;
        FolderUpdateDate?: string;
        FolderUpdateUserId?: number;
        FolderCaption?: string;
        FolderArchiveDate?: string;
        FolderNumber?: number;
        FolderCreateeDate?: string;
        FolderCloseRaison?: string;
        FolderCloseDate?: string;
        FolderEstablishment?: number;
        FolderComment?: string;
        HorseSire?: string;
        HorseCleSire?: string;
        HorseHnin?: string;
        HorseBirthCountry?: string;
        HorseBirthOrganization?: string;
        HorseName?: string;
        HorseIsActive?: boolean;
        HorseNotArchive?: boolean;
        HorseInsertDate?: string;
        HorseInsertUserId?: number;
        HorseUpdateDate?: string;
        HorseUpdateUserId?: number;
        HorseBirthday?: string;
        HorseSexe?: number;
        HorseColor?: string;
        HorseRace?: string;
        HorseTransponder?: string;
        HorseFinalExit?: string;
        HorseDescription?: string;
        HorseArchiveDate?: string;
    }
    namespace LinkFolderHorseRow {
        const idProperty = "Id";
        const nameProperty = "Horse";
        const localTextPrefix = "Ge.LinkFolderHorse";
        namespace Fields {
            const Id: string;
            const Folder: string;
            const Horse: string;
            const FolderIsActive: string;
            const FolderNotArchive: string;
            const FolderInsertDate: string;
            const FolderInsertUserId: string;
            const FolderUpdateDate: string;
            const FolderUpdateUserId: string;
            const FolderCaption: string;
            const FolderArchiveDate: string;
            const FolderNumber: string;
            const FolderCreateeDate: string;
            const FolderCloseRaison: string;
            const FolderCloseDate: string;
            const FolderEstablishment: string;
            const FolderComment: string;
            const HorseSire: string;
            const HorseCleSire: string;
            const HorseHnin: string;
            const HorseBirthCountry: string;
            const HorseBirthOrganization: string;
            const HorseName: string;
            const HorseIsActive: string;
            const HorseNotArchive: string;
            const HorseInsertDate: string;
            const HorseInsertUserId: string;
            const HorseUpdateDate: string;
            const HorseUpdateUserId: string;
            const HorseBirthday: string;
            const HorseSexe: string;
            const HorseColor: string;
            const HorseRace: string;
            const HorseTransponder: string;
            const HorseFinalExit: string;
            const HorseDescription: string;
            const HorseArchiveDate: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace LinkFolderHorseService {
        const baseUrl = "Ge/LinkFolderHorse";
        function Create(request: Serenity.SaveRequest<LinkFolderHorseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LinkFolderHorseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LinkFolderHorseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LinkFolderHorseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class LinkFolderPersonForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LinkFolderPersonForm {
        Folder: Serenity.IntegerEditor;
        PersonId: Serenity.LookupEditor;
        Caption: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface LinkFolderPersonRow {
        Id?: number;
        Folder?: number;
        PersonId?: string;
        Caption?: string;
        FolderIsActive?: boolean;
        FolderNotArchive?: boolean;
        FolderInsertDate?: string;
        FolderInsertUserId?: number;
        FolderUpdateDate?: string;
        FolderUpdateUserId?: number;
        FolderCaption?: string;
        FolderArchiveDate?: string;
        FolderNumber?: number;
        FolderCreateeDate?: string;
        FolderCloseRaison?: string;
        FolderCloseDate?: string;
        FolderEstablishment?: number;
        FolderComment?: string;
        PersonIsMorale?: boolean;
        PersonIsActive?: boolean;
        PersonNotArchive?: boolean;
        PersonInsertDate?: string;
        PersonInsertUserId?: number;
        PersonUpdateDate?: string;
        PersonUpdateUserId?: number;
        PersonSurname?: string;
        PersonName?: string;
        PersonMaidenName?: string;
        PersonBusinessName?: string;
        PersonBirthday?: string;
        PersonSexe?: number;
        PersonMaritalStatus?: number;
        PersonBirthCity?: string;
        PersonBirthCountry?: string;
        PersonNationality?: string;
        PersonPhoto?: number[];
        PersonPhone?: string;
        PersonGsm?: string;
        PersonWorkPhone?: string;
        PersonOtherPhone1?: string;
        PersonOtherPhone2?: string;
        PersonEmail1?: string;
        PersonEmail2?: string;
        PersonBankAccount?: string;
        PersonIdAdress?: string;
        PersonCaption?: string;
        PersonArchiveDate?: string;
    }
    namespace LinkFolderPersonRow {
        const idProperty = "Id";
        const nameProperty = "Caption";
        const localTextPrefix = "Ge.LinkFolderPerson";
        namespace Fields {
            const Id: string;
            const Folder: string;
            const PersonId: string;
            const Caption: string;
            const FolderIsActive: string;
            const FolderNotArchive: string;
            const FolderInsertDate: string;
            const FolderInsertUserId: string;
            const FolderUpdateDate: string;
            const FolderUpdateUserId: string;
            const FolderCaption: string;
            const FolderArchiveDate: string;
            const FolderNumber: string;
            const FolderCreateeDate: string;
            const FolderCloseRaison: string;
            const FolderCloseDate: string;
            const FolderEstablishment: string;
            const FolderComment: string;
            const PersonIsMorale: string;
            const PersonIsActive: string;
            const PersonNotArchive: string;
            const PersonInsertDate: string;
            const PersonInsertUserId: string;
            const PersonUpdateDate: string;
            const PersonUpdateUserId: string;
            const PersonSurname: string;
            const PersonName: string;
            const PersonMaidenName: string;
            const PersonBusinessName: string;
            const PersonBirthday: string;
            const PersonSexe: string;
            const PersonMaritalStatus: string;
            const PersonBirthCity: string;
            const PersonBirthCountry: string;
            const PersonNationality: string;
            const PersonPhoto: string;
            const PersonPhone: string;
            const PersonGsm: string;
            const PersonWorkPhone: string;
            const PersonOtherPhone1: string;
            const PersonOtherPhone2: string;
            const PersonEmail1: string;
            const PersonEmail2: string;
            const PersonBankAccount: string;
            const PersonIdAdress: string;
            const PersonCaption: string;
            const PersonArchiveDate: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace LinkFolderPersonService {
        const baseUrl = "Ge/LinkFolderPerson";
        function Create(request: Serenity.SaveRequest<LinkFolderPersonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LinkFolderPersonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LinkFolderPersonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LinkFolderPersonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class ManAdressForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ManAdressForm {
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Adress1: Serenity.StringEditor;
        Adress2: Serenity.StringEditor;
        Adress3: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Cedex: Serenity.StringEditor;
        Building: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface ManAdressRow {
        Id?: string;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Adress1?: string;
        Adress2?: string;
        Adress3?: string;
        City?: string;
        Country?: string;
        Cedex?: string;
        Building?: string;
        Caption?: string;
        ArchiveDate?: string;
        CityDefaultValue?: boolean;
        CityIsActive?: boolean;
        CityInsertDate?: string;
        CityInsertUserId?: number;
        CityUpdateDate?: string;
        CityUpdateUserId?: number;
        CityFrCodeInsee?: string;
        CityCaption?: string;
        City1?: string;
        CityPostCode?: string;
        CityCountry?: string;
        CountryDefaultValue?: boolean;
        CountryIsActive?: boolean;
        CountryInsertDate?: string;
        CountryInsertUserId?: number;
        CountryUpdateDate?: string;
        CountryUpdateUserId?: number;
        Country1?: string;
        CountryCode?: string;
        CountryCodeUe?: number;
        CountryIso3166Country?: string;
    }
    namespace ManAdressRow {
        const idProperty = "Id";
        const nameProperty = "Adress1";
        const localTextPrefix = "Ge.ManAdress";
        namespace Fields {
            const Id: string;
            const IsActive: string;
            const NotArchive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Adress1: string;
            const Adress2: string;
            const Adress3: string;
            const City: string;
            const Country: string;
            const Cedex: string;
            const Building: string;
            const Caption: string;
            const ArchiveDate: string;
            const CityDefaultValue: string;
            const CityIsActive: string;
            const CityInsertDate: string;
            const CityInsertUserId: string;
            const CityUpdateDate: string;
            const CityUpdateUserId: string;
            const CityFrCodeInsee: string;
            const CityCaption: string;
            const City1: string;
            const CityPostCode: string;
            const CityCountry: string;
            const CountryDefaultValue: string;
            const CountryIsActive: string;
            const CountryInsertDate: string;
            const CountryInsertUserId: string;
            const CountryUpdateDate: string;
            const CountryUpdateUserId: string;
            const Country1: string;
            const CountryCode: string;
            const CountryCodeUe: string;
            const CountryIso3166Country: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace ManAdressService {
        const baseUrl = "Ge/ManAdress";
        function Create(request: Serenity.SaveRequest<ManAdressRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ManAdressRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ManAdressRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ManAdressRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class ManCavaliersForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ManCavaliersForm {
        LicFfe: Serenity.StringEditor;
        Person: Serenity.LookupEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        MilesimeLicnece: Serenity.DateEditor;
        NiveauGalop: Serenity.LookupEditor;
        LicenceCompetition: Serenity.LookupEditor;
        DateCertificatMedical: Serenity.DateEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface ManCavaliersRow {
        LicFfe?: string;
        Person?: string;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        MilesimeLicnece?: string;
        NiveauGalop?: number;
        LicenceCompetition?: number;
        DateCertificatMedical?: string;
        Caption?: string;
        ArchiveDate?: string;
        PersonIsMorale?: boolean;
        PersonIsActive?: boolean;
        PersonNotArchive?: boolean;
        PersonInsertDate?: string;
        PersonInsertUserId?: number;
        PersonUpdateDate?: string;
        PersonUpdateUserId?: number;
        PersonSurname?: string;
        PersonName?: string;
        PersonMaidenName?: string;
        PersonBusinessName?: string;
        PersonBirthday?: string;
        PersonSexe?: number;
        PersonMaritalStatus?: number;
        PersonBirthCity?: string;
        PersonBirthCountry?: string;
        PersonNationality?: string;
        PersonPhoto?: number[];
        PersonPhone?: string;
        PersonGsm?: string;
        PersonWorkPhone?: string;
        PersonOtherPhone1?: string;
        PersonOtherPhone2?: string;
        PersonEmail1?: string;
        PersonEmail2?: string;
        PersonBankAccount?: string;
        PersonIdAdress?: string;
        PersonCaption?: string;
        PersonArchiveDate?: string;
        NiveauGalopDefaultValue?: boolean;
        NiveauGalopIsActive?: boolean;
        NiveauGalopInsertDate?: string;
        NiveauGalopInsertUserId?: number;
        NiveauGalopUpdateDate?: string;
        NiveauGalopUpdateUserId?: number;
        NiveauGalopCaption?: string;
        NiveauGalopCode?: string;
        LicenceCompetitionDefaultValue?: boolean;
        LicenceCompetitionIsActive?: boolean;
        LicenceCompetitionInsertDate?: string;
        LicenceCompetitionInsertUserId?: number;
        LicenceCompetitionUpdateDate?: string;
        LicenceCompetitionUpdateUserId?: number;
        LicenceCompetitionCaption?: string;
        LicenceCompetitionCode?: string;
    }
    namespace ManCavaliersRow {
        const idProperty = "LicFfe";
        const nameProperty = "LicFfe";
        const localTextPrefix = "Ge.ManCavaliers";
        const lookupKey = "Ge.ManCavalier";
        function getLookup(): Q.Lookup<ManCavaliersRow>;
        namespace Fields {
            const LicFfe: string;
            const Person: string;
            const IsActive: string;
            const NotArchive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const MilesimeLicnece: string;
            const NiveauGalop: string;
            const LicenceCompetition: string;
            const DateCertificatMedical: string;
            const Caption: string;
            const ArchiveDate: string;
            const PersonIsMorale: string;
            const PersonIsActive: string;
            const PersonNotArchive: string;
            const PersonInsertDate: string;
            const PersonInsertUserId: string;
            const PersonUpdateDate: string;
            const PersonUpdateUserId: string;
            const PersonSurname: string;
            const PersonName: string;
            const PersonMaidenName: string;
            const PersonBusinessName: string;
            const PersonBirthday: string;
            const PersonSexe: string;
            const PersonMaritalStatus: string;
            const PersonBirthCity: string;
            const PersonBirthCountry: string;
            const PersonNationality: string;
            const PersonPhoto: string;
            const PersonPhone: string;
            const PersonGsm: string;
            const PersonWorkPhone: string;
            const PersonOtherPhone1: string;
            const PersonOtherPhone2: string;
            const PersonEmail1: string;
            const PersonEmail2: string;
            const PersonBankAccount: string;
            const PersonIdAdress: string;
            const PersonCaption: string;
            const PersonArchiveDate: string;
            const NiveauGalopDefaultValue: string;
            const NiveauGalopIsActive: string;
            const NiveauGalopInsertDate: string;
            const NiveauGalopInsertUserId: string;
            const NiveauGalopUpdateDate: string;
            const NiveauGalopUpdateUserId: string;
            const NiveauGalopCaption: string;
            const NiveauGalopCode: string;
            const LicenceCompetitionDefaultValue: string;
            const LicenceCompetitionIsActive: string;
            const LicenceCompetitionInsertDate: string;
            const LicenceCompetitionInsertUserId: string;
            const LicenceCompetitionUpdateDate: string;
            const LicenceCompetitionUpdateUserId: string;
            const LicenceCompetitionCaption: string;
            const LicenceCompetitionCode: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace ManCavaliersService {
        const baseUrl = "Ge/ManCavaliers";
        function Create(request: Serenity.SaveRequest<ManCavaliersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ManCavaliersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ManCavaliersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ManCavaliersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class ManFolderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ManFolderForm {
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
        Number: Serenity.IntegerEditor;
        CreateeDate: Serenity.DateEditor;
        CloseRaison: Serenity.StringEditor;
        CloseDate: Serenity.DateEditor;
        Establishment: Serenity.LookupEditor;
        Comment: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface ManFolderRow {
        Id?: number;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        ArchiveDate?: string;
        Number?: number;
        CreateeDate?: string;
        CloseRaison?: string;
        CloseDate?: string;
        Establishment?: number;
        Comment?: string;
    }
    namespace ManFolderRow {
        const idProperty = "Id";
        const nameProperty = "Caption";
        const localTextPrefix = "Ge.ManFolder";
        namespace Fields {
            const Id: string;
            const IsActive: string;
            const NotArchive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Caption: string;
            const ArchiveDate: string;
            const Number: string;
            const CreateeDate: string;
            const CloseRaison: string;
            const CloseDate: string;
            const Establishment: string;
            const Comment: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace ManFolderService {
        const baseUrl = "Ge/ManFolder";
        function Create(request: Serenity.SaveRequest<ManFolderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ManFolderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ManFolderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ManFolderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class ManHorsesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ManHorsesForm {
        Ueln: Serenity.StringEditor;
        Sire: Serenity.StringEditor;
        CleSire: Serenity.StringEditor;
        Hnin: Serenity.StringEditor;
        BirthCountry: Serenity.LookupEditor;
        BirthOrganization: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Birthday: Serenity.DateEditor;
        Sexe: Serenity.LookupEditor;
        Color: Serenity.StringEditor;
        Race: Serenity.StringEditor;
        Transponder: Serenity.StringEditor;
        FinalExit: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface ManHorsesRow {
        Ueln?: string;
        Sire?: string;
        CleSire?: string;
        Hnin?: string;
        BirthCountry?: number;
        BirthOrganization?: string;
        Name?: string;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Birthday?: string;
        Sexe?: number;
        Color?: string;
        Race?: string;
        Transponder?: string;
        FinalExit?: string;
        Description?: string;
        ArchiveDate?: string;
        BirthCountryDefaultValue?: boolean;
        BirthCountryIsActive?: boolean;
        BirthCountryInsertDate?: string;
        BirthCountryInsertUserId?: number;
        BirthCountryUpdateDate?: string;
        BirthCountryUpdateUserId?: number;
        BirthCountryName_FR_fr?: string;
        BirthCountryalpha3?: string;
        BirthCountryISOcode?: number;
        BirthOrganizationDefaultValue?: boolean;
        BirthOrganizationIsActive?: boolean;
        BirthOrganizationInsertDate?: string;
        BirthOrganizationInsertUserId?: number;
        BirthOrganizationUpdateDate?: string;
        BirthOrganizationUpdateUserId?: number;
        BirthOrganizationOrganization?: string;
        BirthOrganizationUelnOrganization?: string;
        SexeDefaultValue?: boolean;
        SexeIsActive?: boolean;
        SexeInsertDate?: string;
        SexeInsertUserId?: number;
        SexeUpdateDate?: string;
        SexeUpdateUserId?: number;
        SexeCaption?: string;
        SexeCivility?: string;
    }
    namespace ManHorsesRow {
        const idProperty = "Ueln";
        const nameProperty = "Ueln";
        const localTextPrefix = "Ge.ManHorses";
        namespace Fields {
            const Ueln: string;
            const Sire: string;
            const CleSire: string;
            const Hnin: string;
            const BirthCountry: string;
            const BirthOrganization: string;
            const Name: string;
            const IsActive: string;
            const NotArchive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Birthday: string;
            const Sexe: string;
            const Color: string;
            const Race: string;
            const Transponder: string;
            const FinalExit: string;
            const Description: string;
            const ArchiveDate: string;
            const BirthCountryDefaultValue: string;
            const BirthCountryIsActive: string;
            const BirthCountryInsertDate: string;
            const BirthCountryInsertUserId: string;
            const BirthCountryUpdateDate: string;
            const BirthCountryUpdateUserId: string;
            const BirthCountryName_FR_fr: string;
            const BirthCountryalpha3: string;
            const BirthCountryISOcode: string;
            const BirthOrganizationDefaultValue: string;
            const BirthOrganizationIsActive: string;
            const BirthOrganizationInsertDate: string;
            const BirthOrganizationInsertUserId: string;
            const BirthOrganizationUpdateDate: string;
            const BirthOrganizationUpdateUserId: string;
            const BirthOrganizationOrganization: string;
            const BirthOrganizationUelnOrganization: string;
            const SexeDefaultValue: string;
            const SexeIsActive: string;
            const SexeInsertDate: string;
            const SexeInsertUserId: string;
            const SexeUpdateDate: string;
            const SexeUpdateUserId: string;
            const SexeCaption: string;
            const SexeCivility: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace ManHorsesService {
        const baseUrl = "Ge/ManHorses";
        function Create(request: Serenity.SaveRequest<ManHorsesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ManHorsesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ManHorsesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ManHorsesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class ManOwnerForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ManOwnerForm {
        Horse: Serenity.StringEditor;
        Cavalier: Serenity.LookupEditor;
        Part: Serenity.DecimalEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface ManOwnerRow {
        Id?: number;
        Horse?: string;
        Cavalier?: string;
        Part?: number;
        HorseSire?: string;
        HorseCleSire?: string;
        HorseHnin?: string;
        HorseBirthCountry?: string;
        HorseBirthOrganization?: string;
        HorseName?: string;
        HorseIsActive?: boolean;
        HorseNotArchive?: boolean;
        HorseInsertDate?: string;
        HorseInsertUserId?: number;
        HorseUpdateDate?: string;
        HorseUpdateUserId?: number;
        HorseBirthday?: string;
        HorseSexe?: number;
        HorseColor?: string;
        HorseRace?: string;
        HorseTransponder?: string;
        HorseFinalExit?: string;
        HorseDescription?: string;
        HorseArchiveDate?: string;
        CavalierPerson?: string;
        CavalierIsActive?: boolean;
        CavalierNotArchive?: boolean;
        CavalierInsertDate?: string;
        CavalierInsertUserId?: number;
        CavalierUpdateDate?: string;
        CavalierUpdateUserId?: number;
        CavalierMilesimeLicnece?: string;
        CavalierNiveauGalop?: number;
        CavalierLicenceCompetition?: number;
        CavalierDateCertificatMedical?: string;
        CavalierCaption?: string;
        CavalierArchiveDate?: string;
    }
    namespace ManOwnerRow {
        const idProperty = "Id";
        const nameProperty = "Horse";
        const localTextPrefix = "Ge.ManOwner";
        namespace Fields {
            const Id: string;
            const Horse: string;
            const Cavalier: string;
            const Part: string;
            const HorseSire: string;
            const HorseCleSire: string;
            const HorseHnin: string;
            const HorseBirthCountry: string;
            const HorseBirthOrganization: string;
            const HorseName: string;
            const HorseIsActive: string;
            const HorseNotArchive: string;
            const HorseInsertDate: string;
            const HorseInsertUserId: string;
            const HorseUpdateDate: string;
            const HorseUpdateUserId: string;
            const HorseBirthday: string;
            const HorseSexe: string;
            const HorseColor: string;
            const HorseRace: string;
            const HorseTransponder: string;
            const HorseFinalExit: string;
            const HorseDescription: string;
            const HorseArchiveDate: string;
            const CavalierPerson: string;
            const CavalierIsActive: string;
            const CavalierNotArchive: string;
            const CavalierInsertDate: string;
            const CavalierInsertUserId: string;
            const CavalierUpdateDate: string;
            const CavalierUpdateUserId: string;
            const CavalierMilesimeLicnece: string;
            const CavalierNiveauGalop: string;
            const CavalierLicenceCompetition: string;
            const CavalierDateCertificatMedical: string;
            const CavalierCaption: string;
            const CavalierArchiveDate: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace ManOwnerService {
        const baseUrl = "Ge/ManOwner";
        function Create(request: Serenity.SaveRequest<ManOwnerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ManOwnerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ManOwnerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ManOwnerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class ManPersonForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ManPersonForm {
        IsMorale: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Surname: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        MaidenName: Serenity.StringEditor;
        BusinessName: Serenity.StringEditor;
        Birthday: Serenity.DateEditor;
        Sexe: Serenity.IntegerEditor;
        MaritalStatus: Serenity.IntegerEditor;
        BirthCity: Serenity.StringEditor;
        BirthCountry: Serenity.StringEditor;
        Nationality: Serenity.StringEditor;
        Photo: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Gsm: Serenity.StringEditor;
        WorkPhone: Serenity.StringEditor;
        OtherPhone1: Serenity.StringEditor;
        OtherPhone2: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        Email2: Serenity.StringEditor;
        BankAccount: Serenity.StringEditor;
        IdAdress: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface ManPersonRow {
        Id?: string;
        IsMorale?: boolean;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Surname?: string;
        Name?: string;
        MaidenName?: string;
        BusinessName?: string;
        Birthday?: string;
        Sexe?: number;
        MaritalStatus?: number;
        BirthCity?: string;
        BirthCountry?: number;
        Nationality?: number;
        Photo?: number[];
        Phone?: string;
        Gsm?: string;
        WorkPhone?: string;
        OtherPhone1?: string;
        OtherPhone2?: string;
        Email1?: string;
        Email2?: string;
        BankAccount?: string;
        IdAdress?: string;
        Caption?: string;
        ArchiveDate?: string;
        SexeDefaultValue?: boolean;
        SexeIsActive?: boolean;
        SexeInsertDate?: string;
        SexeInsertUserId?: number;
        SexeUpdateDate?: string;
        SexeUpdateUserId?: number;
        SexeCaption?: string;
        SexeCivility?: string;
        MaritalStatusDefaultValue?: boolean;
        MaritalStatusIsActive?: boolean;
        MaritalStatusInsertDate?: string;
        MaritalStatusInsertUserId?: number;
        MaritalStatusUpdateDate?: string;
        MaritalStatusUpdateUserId?: number;
        MaritalStatusCaption?: string;
        MaritalStatusCode?: string;
        BirthCityDefaultValue?: boolean;
        BirthCityIsActive?: boolean;
        BirthCityInsertDate?: string;
        BirthCityInsertUserId?: number;
        BirthCityUpdateDate?: string;
        BirthCityUpdateUserId?: number;
        BirthCityFrCodeInsee?: string;
        BirthCityCaption?: string;
        BirthCityCity?: string;
        BirthCityPostCode?: string;
        BirthCityCountry?: string;
        BirthCountryDefaultValue?: boolean;
        BirthCountryIsActive?: boolean;
        BirthCountryInsertDate?: string;
        BirthCountryInsertUserId?: number;
        BirthCountryUpdateDate?: string;
        BirthCountryUpdateUserId?: number;
        BirthCountryCountry?: string;
        BirthCountryCode?: string;
        BirthCountryCodeUe?: number;
        BirthCountryIso3166Country?: string;
        NationalityDefaultValue?: boolean;
        NationalityIsActive?: boolean;
        NationalityInsertDate?: string;
        NationalityInsertUserId?: number;
        NationalityUpdateDate?: string;
        NationalityUpdateUserId?: number;
        NationalityCountry?: string;
        NationalityCode?: string;
        NationalityCodeUe?: number;
        NationalityIso3166Country?: string;
        BankAccountCountryCodeIban?: string;
        BankAccountCheckDigitsIban?: string;
        BankAccountBban?: string;
        BankAccountBic?: string;
        BankAccountAccountOnwer?: string;
        BankAccountBankAdress?: string;
        BankAccountCis?: string;
        BankAccountUrm?: string;
        BankAccountMandateDateSign?: string;
        BankAccountTypePayment?: number;
        BankAccountDateLastPrelevement?: string;
        BankAccountTypeOfLastPayment?: number;
        IdAdressIsActive?: boolean;
        IdAdressNotArchive?: boolean;
        IdAdressInsertDate?: string;
        IdAdressInsertUserId?: number;
        IdAdressUpdateDate?: string;
        IdAdressUpdateUserId?: number;
        IdAdressAdress1?: string;
        IdAdressAdress2?: string;
        IdAdressAdress3?: string;
        IdAdressCity?: string;
        IdAdressCountry?: string;
        IdAdressCedex?: string;
        IdAdressBuilding?: string;
        IdAdressCaption?: string;
        IdAdressArchiveDate?: string;
    }
    namespace ManPersonRow {
        const idProperty = "Id";
        const nameProperty = "Surname";
        const localTextPrefix = "Ge.ManPerson";
        const lookupKey = "Ge.ManPerson";
        function getLookup(): Q.Lookup<ManPersonRow>;
        namespace Fields {
            const Id: string;
            const IsMorale: string;
            const IsActive: string;
            const NotArchive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Surname: string;
            const Name: string;
            const MaidenName: string;
            const BusinessName: string;
            const Birthday: string;
            const Sexe: string;
            const MaritalStatus: string;
            const BirthCity: string;
            const BirthCountry: string;
            const Nationality: string;
            const Photo: string;
            const Phone: string;
            const Gsm: string;
            const WorkPhone: string;
            const OtherPhone1: string;
            const OtherPhone2: string;
            const Email1: string;
            const Email2: string;
            const BankAccount: string;
            const IdAdress: string;
            const Caption: string;
            const ArchiveDate: string;
            const SexeDefaultValue: string;
            const SexeIsActive: string;
            const SexeInsertDate: string;
            const SexeInsertUserId: string;
            const SexeUpdateDate: string;
            const SexeUpdateUserId: string;
            const SexeCaption: string;
            const SexeCivility: string;
            const MaritalStatusDefaultValue: string;
            const MaritalStatusIsActive: string;
            const MaritalStatusInsertDate: string;
            const MaritalStatusInsertUserId: string;
            const MaritalStatusUpdateDate: string;
            const MaritalStatusUpdateUserId: string;
            const MaritalStatusCaption: string;
            const MaritalStatusCode: string;
            const BirthCityDefaultValue: string;
            const BirthCityIsActive: string;
            const BirthCityInsertDate: string;
            const BirthCityInsertUserId: string;
            const BirthCityUpdateDate: string;
            const BirthCityUpdateUserId: string;
            const BirthCityFrCodeInsee: string;
            const BirthCityCaption: string;
            const BirthCityCity: string;
            const BirthCityPostCode: string;
            const BirthCityCountry: string;
            const BirthCountryDefaultValue: string;
            const BirthCountryIsActive: string;
            const BirthCountryInsertDate: string;
            const BirthCountryInsertUserId: string;
            const BirthCountryUpdateDate: string;
            const BirthCountryUpdateUserId: string;
            const BirthCountryCountry: string;
            const BirthCountryCode: string;
            const BirthCountryCodeUe: string;
            const BirthCountryIso3166Country: string;
            const NationalityDefaultValue: string;
            const NationalityIsActive: string;
            const NationalityInsertDate: string;
            const NationalityInsertUserId: string;
            const NationalityUpdateDate: string;
            const NationalityUpdateUserId: string;
            const NationalityCountry: string;
            const NationalityCode: string;
            const NationalityCodeUe: string;
            const NationalityIso3166Country: string;
            const BankAccountCountryCodeIban: string;
            const BankAccountCheckDigitsIban: string;
            const BankAccountBban: string;
            const BankAccountBic: string;
            const BankAccountAccountOnwer: string;
            const BankAccountBankAdress: string;
            const BankAccountCis: string;
            const BankAccountUrm: string;
            const BankAccountMandateDateSign: string;
            const BankAccountTypePayment: string;
            const BankAccountDateLastPrelevement: string;
            const BankAccountTypeOfLastPayment: string;
            const IdAdressIsActive: string;
            const IdAdressNotArchive: string;
            const IdAdressInsertDate: string;
            const IdAdressInsertUserId: string;
            const IdAdressUpdateDate: string;
            const IdAdressUpdateUserId: string;
            const IdAdressAdress1: string;
            const IdAdressAdress2: string;
            const IdAdressAdress3: string;
            const IdAdressCity: string;
            const IdAdressCountry: string;
            const IdAdressCedex: string;
            const IdAdressBuilding: string;
            const IdAdressCaption: string;
            const IdAdressArchiveDate: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace ManPersonService {
        const baseUrl = "Ge/ManPerson";
        function Create(request: Serenity.SaveRequest<ManPersonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ManPersonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ManPersonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ManPersonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class SetCityForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetCityForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        FrCodeInsee: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        City: Serenity.StringEditor;
        PostCode: Serenity.StringEditor;
        Country: Serenity.IntegerEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface SetCityRow {
        Id?: string;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        FrCodeInsee?: string;
        Caption?: string;
        City?: string;
        PostCode?: string;
        Country?: number;
        CountryDefaultValue?: boolean;
        CountryIsActive?: boolean;
        CountryInsertDate?: string;
        CountryInsertUserId?: number;
        CountryUpdateDate?: string;
        CountryUpdateUserId?: number;
        CountryName_FR_fr?: string;
        Countryalpha3?: string;
        CountryCodeUe?: number;
        CountryISOcode?: number;
    }
    namespace SetCityRow {
        const idProperty = "Id";
        const nameProperty = "FrCodeInsee";
        const localTextPrefix = "Ge.SetCity";
        const lookupKey = "Ge.SetCity";
        function getLookup(): Q.Lookup<SetCityRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const FrCodeInsee: string;
            const Caption: string;
            const City: string;
            const PostCode: string;
            const Country: string;
            const CountryDefaultValue: string;
            const CountryIsActive: string;
            const CountryInsertDate: string;
            const CountryInsertUserId: string;
            const CountryUpdateDate: string;
            const CountryUpdateUserId: string;
            const CountryName_FR_fr: string;
            const Countryalpha3: string;
            const CountryCodeUe: string;
            const CountryISOcode: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace SetCityService {
        const baseUrl = "Ge/SetCity";
        function Create(request: Serenity.SaveRequest<SetCityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetCityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetCityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetCityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class SetCountryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetCountryForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Name_FR_fr: Serenity.StringEditor;
        Name_EN_gb: Serenity.StringEditor;
        alpha3: Serenity.StringEditor;
        alpha2: Serenity.StringEditor;
        CodeUe: Serenity.IntegerEditor;
        ISOcode: Serenity.IntegerEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface SetCountryRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Name_FR_fr?: string;
        Name_EN_gb?: string;
        alpha3?: string;
        alpha2?: string;
        CodeUe?: number;
        ISOcode?: number;
    }
    namespace SetCountryRow {
        const idProperty = "Id";
        const nameProperty = "Name_FR_fr";
        const localTextPrefix = "Ge.SetCountry";
        const lookupKey = "Ge.SetCountry";
        function getLookup(): Q.Lookup<SetCountryRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Name_FR_fr: string;
            const Name_EN_gb: string;
            const alpha3: string;
            const alpha2: string;
            const CodeUe: string;
            const ISOcode: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace SetCountryService {
        const baseUrl = "Ge/SetCountry";
        function Create(request: Serenity.SaveRequest<SetCountryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetCountryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetCountryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetCountryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class SetGalopForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetGalopForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Caption: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface SetGalopRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        Code?: string;
    }
    namespace SetGalopRow {
        const idProperty = "Id";
        const nameProperty = "Caption";
        const localTextPrefix = "Ge.SetGalop";
        const lookupKey = "Ge.SetGalop";
        function getLookup(): Q.Lookup<SetGalopRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Caption: string;
            const Code: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace SetGalopService {
        const baseUrl = "Ge/SetGalop";
        function Create(request: Serenity.SaveRequest<SetGalopRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetGalopRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetGalopRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetGalopRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class SetLfcForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetLfcForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Caption: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface SetLfcRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        Code?: string;
    }
    namespace SetLfcRow {
        const idProperty = "Id";
        const nameProperty = "Caption";
        const localTextPrefix = "Ge.SetLfc";
        const lookupKey = "Ge.SetLfc";
        function getLookup(): Q.Lookup<SetLfcRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Caption: string;
            const Code: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace SetLfcService {
        const baseUrl = "Ge/SetLfc";
        function Create(request: Serenity.SaveRequest<SetLfcRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetLfcRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetLfcRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetLfcRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class SetMaritalstatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetMaritalstatusForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Caption: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface SetMaritalstatusRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        Code?: string;
    }
    namespace SetMaritalstatusRow {
        const idProperty = "Id";
        const nameProperty = "Caption";
        const localTextPrefix = "Ge.SetMaritalstatus";
        const lookupKey = "Ge.SetMaritalstatus";
        function getLookup(): Q.Lookup<SetMaritalstatusRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Caption: string;
            const Code: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace SetMaritalstatusService {
        const baseUrl = "Ge/SetMaritalstatus";
        function Create(request: Serenity.SaveRequest<SetMaritalstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetMaritalstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetMaritalstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetMaritalstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class SetSexeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetSexeForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Caption: Serenity.StringEditor;
        Civility: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface SetSexeRow {
        SexeId?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        Civility?: string;
    }
    namespace SetSexeRow {
        const idProperty = "SexeId";
        const nameProperty = "Caption";
        const localTextPrefix = "Ge.SetSexe";
        const lookupKey = "Ge.SexeHorses";
        function getLookup(): Q.Lookup<SetSexeRow>;
        namespace Fields {
            const SexeId: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Caption: string;
            const Civility: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace SetSexeService {
        const baseUrl = "Ge/SetSexe";
        function Create(request: Serenity.SaveRequest<SetSexeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetSexeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetSexeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetSexeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
}
declare namespace GestionEquestre.Ge {
    class SetUelnorgaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SetUelnorgaForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.LookupEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Organization: Serenity.StringEditor;
        UelnOrganization: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface SetUelnorgaRow {
        Id?: string;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Organization?: string;
        UelnOrganization?: string;
    }
    namespace SetUelnorgaRow {
        const idProperty = "Id";
        const nameProperty = "Organization";
        const localTextPrefix = "Ge.SetUelnorga";
        const lookupKey = "Ge.SetUelnorga";
        function getLookup(): Q.Lookup<SetUelnorgaRow>;
        namespace Fields {
            const Id: string;
            const DefaultValue: string;
            const IsActive: string;
            const InsertDate: string;
            const InsertUserId: string;
            const UpdateDate: string;
            const UpdateUserId: string;
            const Organization: string;
            const UelnOrganization: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace SetUelnorgaService {
        const baseUrl = "Ge/SetUelnorga";
        function Create(request: Serenity.SaveRequest<SetUelnorgaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SetUelnorgaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SetUelnorgaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SetUelnorgaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestionEquestre {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace GestionEquestre {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace GestionEquestre.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace GestionEquestre.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace GestionEquestre.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace GestionEquestre.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace GestionEquestre.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
}
declare namespace GestionEquestre.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace GestionEquestre.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace GestionEquestre.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace GestionEquestre.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace GestionEquestre.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace GestionEquestre {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace GestionEquestre.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace GestionEquestre.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace GestionEquestre.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace GestionEquestre.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace GestionEquestre.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace GestionEquestre.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace GestionEquestre.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace GestionEquestre.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace GestionEquestre.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace GestionEquestre.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private roleOrImplicit(key);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace GestionEquestre.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace GestionEquestre.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace GestionEquestre.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace GestionEquestre {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace GestionEquestre.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace GestionEquestre.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace GestionEquestre.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace GestionEquestre.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace GestionEquestre.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace GestionEquestre.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace GestionEquestre.LanguageList {
    function getValue(): string[][];
}
declare namespace GestionEquestre.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace GestionEquestre.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace GestionEquestre.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace GestionEquestre.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace GestionEquestre.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace GestionEquestre.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace GestionEquestre.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace GestionEquestre.ScriptInitialization {
}
declare namespace GestionEquestre.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace GestionEquestre.Ge {
    class AccBankaccountDialog extends Serenity.EntityDialog<AccBankaccountRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AccBankaccountForm;
    }
}
declare namespace GestionEquestre.Ge {
    class AccBankaccountGrid extends Serenity.EntityGrid<AccBankaccountRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccBankaccountDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class LinkFolderCavalierDialog extends Serenity.EntityDialog<LinkFolderCavalierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LinkFolderCavalierForm;
    }
}
declare namespace GestionEquestre.Ge {
    class LinkFolderCavalierGrid extends Serenity.EntityGrid<LinkFolderCavalierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LinkFolderCavalierDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class LinkFolderHorseDialog extends Serenity.EntityDialog<LinkFolderHorseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LinkFolderHorseForm;
    }
}
declare namespace GestionEquestre.Ge {
    class LinkFolderHorseGrid extends Serenity.EntityGrid<LinkFolderHorseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LinkFolderHorseDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class LinkFolderPersonDialog extends Serenity.EntityDialog<LinkFolderPersonRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LinkFolderPersonForm;
    }
}
declare namespace GestionEquestre.Ge {
    class LinkFolderPersonGrid extends Serenity.EntityGrid<LinkFolderPersonRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LinkFolderPersonDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class ManAdressDialog extends Serenity.EntityDialog<ManAdressRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ManAdressForm;
    }
}
declare namespace GestionEquestre.Ge {
    class ManAdressGrid extends Serenity.EntityGrid<ManAdressRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ManAdressDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class ManCavaliersDialog extends Serenity.EntityDialog<ManCavaliersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ManCavaliersForm;
    }
}
declare namespace GestionEquestre.Ge {
    class ManCavaliersGrid extends Serenity.EntityGrid<ManCavaliersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ManCavaliersDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class ManFolderDialog extends Serenity.EntityDialog<ManFolderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ManFolderForm;
    }
}
declare namespace GestionEquestre.Ge {
    class ManFolderGrid extends Serenity.EntityGrid<ManFolderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ManFolderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class ManHorsesDialog extends Serenity.EntityDialog<ManHorsesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ManHorsesForm;
    }
}
declare namespace GestionEquestre.Ge {
    class ManHorsesGrid extends Serenity.EntityGrid<ManHorsesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ManHorsesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class ManOwnerDialog extends Serenity.EntityDialog<ManOwnerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ManOwnerForm;
    }
}
declare namespace GestionEquestre.Ge {
    class ManOwnerGrid extends Serenity.EntityGrid<ManOwnerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ManOwnerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class ManPersonDialog extends Serenity.EntityDialog<ManPersonRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ManPersonForm;
    }
}
declare namespace GestionEquestre.Ge {
    class ManPersonGrid extends Serenity.EntityGrid<ManPersonRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ManPersonDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class SetCityDialog extends Serenity.EntityDialog<SetCityRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetCityForm;
    }
}
declare namespace GestionEquestre.Ge {
    class SetCityGrid extends Serenity.EntityGrid<SetCityRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetCityDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class SetCountryDialog extends Serenity.EntityDialog<SetCountryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetCountryForm;
    }
}
declare namespace GestionEquestre.Ge {
    class SetCountryGrid extends Serenity.EntityGrid<SetCountryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetCountryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class SetGalopDialog extends Serenity.EntityDialog<SetGalopRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetGalopForm;
    }
}
declare namespace GestionEquestre.Ge {
    class SetGalopGrid extends Serenity.EntityGrid<SetGalopRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetGalopDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class SetLfcDialog extends Serenity.EntityDialog<SetLfcRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetLfcForm;
    }
}
declare namespace GestionEquestre.Ge {
    class SetLfcGrid extends Serenity.EntityGrid<SetLfcRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetLfcDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class SetMaritalstatusDialog extends Serenity.EntityDialog<SetMaritalstatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetMaritalstatusForm;
    }
}
declare namespace GestionEquestre.Ge {
    class SetMaritalstatusGrid extends Serenity.EntityGrid<SetMaritalstatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetMaritalstatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class SetSexeDialog extends Serenity.EntityDialog<SetSexeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetSexeForm;
    }
}
declare namespace GestionEquestre.Ge {
    class SetSexeGrid extends Serenity.EntityGrid<SetSexeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetSexeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class SetUelnorgaDialog extends Serenity.EntityDialog<SetUelnorgaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SetUelnorgaForm;
    }
}
declare namespace GestionEquestre.Ge {
    class SetUelnorgaGrid extends Serenity.EntityGrid<SetUelnorgaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SetUelnorgaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
