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
    class AdresseForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AdresseForm {
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Adresse1: Serenity.StringEditor;
        Adresse2: Serenity.StringEditor;
        Adresse3: Serenity.StringEditor;
        Ville: Serenity.StringEditor;
        Pays: Serenity.StringEditor;
        Cedex: Serenity.StringEditor;
        Batiment: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface AdresseRow {
        Id?: string;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Adresse1?: string;
        Adresse2?: string;
        Adresse3?: string;
        Ville?: string;
        Pays?: string;
        Cedex?: string;
        Batiment?: string;
        Description?: string;
        ArchiveDate?: string;
        VilleDefaultValue?: boolean;
        VilleIsActive?: boolean;
        VilleReadOnly?: boolean;
        VilleInsertDate?: string;
        VilleInsertUserId?: number;
        VilleUpdateDate?: string;
        VilleUpdateUserId?: number;
        VilleCodeInsee?: string;
        VilleLibele?: string;
        VilleNomVille?: string;
        VilleCodePostal?: string;
        VillePays?: string;
        PaysDefaultValue?: boolean;
        PaysIsActive?: boolean;
        PaysReadOnly?: boolean;
        PaysInsertDate?: string;
        PaysInsertUserId?: number;
        PaysUpdateDate?: string;
        PaysUpdateUserId?: number;
        PaysLibele?: string;
        PaysCode?: string;
        PaysCodeUe?: number;
    }
    namespace AdresseRow {
        const idProperty = "Id";
        const nameProperty = "Adresse1";
        const localTextPrefix = "Ge.Adresse";
        namespace Fields {
            const Id: any;
            const IsActive: any;
            const NotArchive: any;
            const InsertDate: any;
            const InsertUserId: any;
            const UpdateDate: any;
            const UpdateUserId: any;
            const Adresse1: any;
            const Adresse2: any;
            const Adresse3: any;
            const Ville: any;
            const Pays: any;
            const Cedex: any;
            const Batiment: any;
            const Description: any;
            const ArchiveDate: any;
            const VilleDefaultValue: string;
            const VilleIsActive: string;
            const VilleReadOnly: string;
            const VilleInsertDate: string;
            const VilleInsertUserId: string;
            const VilleUpdateDate: string;
            const VilleUpdateUserId: string;
            const VilleCodeInsee: string;
            const VilleLibele: string;
            const VilleNomVille: string;
            const VilleCodePostal: string;
            const VillePays: string;
            const PaysDefaultValue: string;
            const PaysIsActive: string;
            const PaysReadOnly: string;
            const PaysInsertDate: string;
            const PaysInsertUserId: string;
            const PaysUpdateDate: string;
            const PaysUpdateUserId: string;
            const PaysLibele: string;
            const PaysCode: string;
            const PaysCodeUe: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace AdresseService {
        const baseUrl = "Ge/Adresse";
        function Create(request: Serenity.SaveRequest<AdresseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AdresseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AdresseRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AdresseRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
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
    class CavaliersForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CavaliersForm {
        Personne: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        MilesimeLicnece: Serenity.DateEditor;
        NiveauGalop: Serenity.IntegerEditor;
        LicenceCompetition: Serenity.IntegerEditor;
        DateCertificatMedical: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface CavaliersRow {
        LicFfe?: string;
        Personne?: string;
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
        Description?: string;
        ArchiveDate?: string;
        PersonneIsMorale?: boolean;
        PersonneIsActive?: boolean;
        PersonneNotArchive?: boolean;
        PersonneInsertDate?: string;
        PersonneInsertUserId?: number;
        PersonneUpdateDate?: string;
        PersonneUpdateUserId?: number;
        PersonneNom?: string;
        PersonnePrenom?: string;
        PersonneNomJeuneFille?: string;
        PersonneRaisonSociale?: string;
        PersonneBirthday?: string;
        PersonneSexe?: number;
        PersonneSituationFamille?: number;
        PersonneVilleNassance?: string;
        PersonnePaysNassance?: string;
        PersonnePaysNationalite?: string;
        PersonnePhoto?: number[];
        PersonneTelephonePerso?: string;
        PersonneTelephoneMobile?: string;
        PersonneTelephoneProf?: string;
        PersonneTelephoneComplementaire1?: string;
        PersonneTelephoneComplementaire2?: string;
        PersonneEmail1?: string;
        PersonneEmail2?: string;
        PersonneCompteBancaire?: string;
        PersonneIdAdresse?: string;
        PersonneDescription?: string;
        PersonneArchiveDate?: string;
        NiveauGalopDefaultValue?: boolean;
        NiveauGalopIsActive?: boolean;
        NiveauGalopReadOnly?: boolean;
        NiveauGalopInsertDate?: string;
        NiveauGalopInsertUserId?: number;
        NiveauGalopUpdateDate?: string;
        NiveauGalopUpdateUserId?: number;
        NiveauGalopLibele?: string;
        NiveauGalopCode?: string;
        LicenceCompetitionDefaultValue?: boolean;
        LicenceCompetitionIsActive?: boolean;
        LicenceCompetitionReadOnly?: boolean;
        LicenceCompetitionInsertDate?: string;
        LicenceCompetitionInsertUserId?: number;
        LicenceCompetitionUpdateDate?: string;
        LicenceCompetitionUpdateUserId?: number;
        LicenceCompetitionLibele?: string;
        LicenceCompetitionCode?: string;
    }
    namespace CavaliersRow {
        const idProperty = "LicFfe";
        const nameProperty = "LicFfe";
        const localTextPrefix = "Ge.Cavaliers";
        namespace Fields {
            const LicFfe: any;
            const Personne: any;
            const IsActive: any;
            const NotArchive: any;
            const InsertDate: any;
            const InsertUserId: any;
            const UpdateDate: any;
            const UpdateUserId: any;
            const MilesimeLicnece: any;
            const NiveauGalop: any;
            const LicenceCompetition: any;
            const DateCertificatMedical: any;
            const Description: any;
            const ArchiveDate: any;
            const PersonneIsMorale: string;
            const PersonneIsActive: string;
            const PersonneNotArchive: string;
            const PersonneInsertDate: string;
            const PersonneInsertUserId: string;
            const PersonneUpdateDate: string;
            const PersonneUpdateUserId: string;
            const PersonneNom: string;
            const PersonnePrenom: string;
            const PersonneNomJeuneFille: string;
            const PersonneRaisonSociale: string;
            const PersonneBirthday: string;
            const PersonneSexe: string;
            const PersonneSituationFamille: string;
            const PersonneVilleNassance: string;
            const PersonnePaysNassance: string;
            const PersonnePaysNationalite: string;
            const PersonnePhoto: string;
            const PersonneTelephonePerso: string;
            const PersonneTelephoneMobile: string;
            const PersonneTelephoneProf: string;
            const PersonneTelephoneComplementaire1: string;
            const PersonneTelephoneComplementaire2: string;
            const PersonneEmail1: string;
            const PersonneEmail2: string;
            const PersonneCompteBancaire: string;
            const PersonneIdAdresse: string;
            const PersonneDescription: string;
            const PersonneArchiveDate: string;
            const NiveauGalopDefaultValue: string;
            const NiveauGalopIsActive: string;
            const NiveauGalopReadOnly: string;
            const NiveauGalopInsertDate: string;
            const NiveauGalopInsertUserId: string;
            const NiveauGalopUpdateDate: string;
            const NiveauGalopUpdateUserId: string;
            const NiveauGalopLibele: string;
            const NiveauGalopCode: string;
            const LicenceCompetitionDefaultValue: string;
            const LicenceCompetitionIsActive: string;
            const LicenceCompetitionReadOnly: string;
            const LicenceCompetitionInsertDate: string;
            const LicenceCompetitionInsertUserId: string;
            const LicenceCompetitionUpdateDate: string;
            const LicenceCompetitionUpdateUserId: string;
            const LicenceCompetitionLibele: string;
            const LicenceCompetitionCode: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace CavaliersService {
        const baseUrl = "Ge/Cavaliers";
        function Create(request: Serenity.SaveRequest<CavaliersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CavaliersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CavaliersRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CavaliersRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
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
    class ChevauxForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChevauxForm {
        Sire: Serenity.StringEditor;
        CleSire: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Birthday: Serenity.DateEditor;
        Sexe: Serenity.IntegerEditor;
        Robe: Serenity.StringEditor;
        Transpondeur: Serenity.StringEditor;
        SortieDefinitive: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface ChevauxRow {
        Ueln?: string;
        Sire?: string;
        CleSire?: string;
        Name?: string;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Birthday?: string;
        Sexe?: number;
        Robe?: string;
        Transpondeur?: string;
        SortieDefinitive?: string;
        Description?: string;
        ArchiveDate?: string;
        SexeDefaultValue?: boolean;
        SexeIsActive?: boolean;
        SexeReadOnly?: boolean;
        SexeInsertDate?: string;
        SexeInsertUserId?: number;
        SexeUpdateDate?: string;
        SexeUpdateUserId?: number;
        SexeLibele?: string;
        SexeCivilite?: string;
        SexeLibeleUs?: string;
    }
    namespace ChevauxRow {
        const idProperty = "Ueln";
        const nameProperty = "Ueln";
        const localTextPrefix = "Ge.Chevaux";
        namespace Fields {
            const Ueln: any;
            const Sire: any;
            const CleSire: any;
            const Name: any;
            const IsActive: any;
            const NotArchive: any;
            const InsertDate: any;
            const InsertUserId: any;
            const UpdateDate: any;
            const UpdateUserId: any;
            const Birthday: any;
            const Sexe: any;
            const Robe: any;
            const Transpondeur: any;
            const SortieDefinitive: any;
            const Description: any;
            const ArchiveDate: any;
            const SexeDefaultValue: string;
            const SexeIsActive: string;
            const SexeReadOnly: string;
            const SexeInsertDate: string;
            const SexeInsertUserId: string;
            const SexeUpdateDate: string;
            const SexeUpdateUserId: string;
            const SexeLibele: string;
            const SexeCivilite: string;
            const SexeLibeleUs: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace ChevauxService {
        const baseUrl = "Ge/Chevaux";
        function Create(request: Serenity.SaveRequest<ChevauxRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ChevauxRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ChevauxRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ChevauxRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
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
    class CodeGalopForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CodeGalopForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        ReadOnly: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Libele: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface CodeGalopRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        ReadOnly?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Libele?: string;
        Code?: string;
    }
    namespace CodeGalopRow {
        const idProperty = "Id";
        const nameProperty = "Libele";
        const localTextPrefix = "Ge.CodeGalop";
        namespace Fields {
            const Id: any;
            const DefaultValue: any;
            const IsActive: any;
            const ReadOnly: any;
            const InsertDate: any;
            const InsertUserId: any;
            const UpdateDate: any;
            const UpdateUserId: any;
            const Libele: any;
            const Code: any;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace CodeGalopService {
        const baseUrl = "Ge/CodeGalop";
        function Create(request: Serenity.SaveRequest<CodeGalopRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CodeGalopRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CodeGalopRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CodeGalopRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
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
    class CodeLfcForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CodeLfcForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        ReadOnly: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Libele: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface CodeLfcRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        ReadOnly?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Libele?: string;
        Code?: string;
    }
    namespace CodeLfcRow {
        const idProperty = "Id";
        const nameProperty = "Libele";
        const localTextPrefix = "Ge.CodeLfc";
        namespace Fields {
            const Id: any;
            const DefaultValue: any;
            const IsActive: any;
            const ReadOnly: any;
            const InsertDate: any;
            const InsertUserId: any;
            const UpdateDate: any;
            const UpdateUserId: any;
            const Libele: any;
            const Code: any;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace CodeLfcService {
        const baseUrl = "Ge/CodeLfc";
        function Create(request: Serenity.SaveRequest<CodeLfcRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CodeLfcRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CodeLfcRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CodeLfcRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
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
    class CodeSexeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CodeSexeForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        ReadOnly: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Libele: Serenity.StringEditor;
        Civilite: Serenity.StringEditor;
        LibeleUs: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface CodeSexeRow {
        SexeId?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        ReadOnly?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Libele?: string;
        Civilite?: string;
        LibeleUs?: string;
    }
    namespace CodeSexeRow {
        const idProperty = "SexeId";
        const nameProperty = "Libele";
        const localTextPrefix = "Ge.CodeSexe";
        namespace Fields {
            const SexeId: any;
            const DefaultValue: any;
            const IsActive: any;
            const ReadOnly: any;
            const InsertDate: any;
            const InsertUserId: any;
            const UpdateDate: any;
            const UpdateUserId: any;
            const Libele: any;
            const Civilite: any;
            const LibeleUs: any;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace CodeSexeService {
        const baseUrl = "Ge/CodeSexe";
        function Create(request: Serenity.SaveRequest<CodeSexeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CodeSexeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CodeSexeRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CodeSexeRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
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
    class CodeStuationfamilleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CodeStuationfamilleForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        ReadOnly: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Libele: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface CodeStuationfamilleRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        ReadOnly?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Libele?: string;
        Code?: string;
    }
    namespace CodeStuationfamilleRow {
        const idProperty = "Id";
        const nameProperty = "Libele";
        const localTextPrefix = "Ge.CodeStuationfamille";
        namespace Fields {
            const Id: any;
            const DefaultValue: any;
            const IsActive: any;
            const ReadOnly: any;
            const InsertDate: any;
            const InsertUserId: any;
            const UpdateDate: any;
            const UpdateUserId: any;
            const Libele: any;
            const Code: any;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace CodeStuationfamilleService {
        const baseUrl = "Ge/CodeStuationfamille";
        function Create(request: Serenity.SaveRequest<CodeStuationfamilleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CodeStuationfamilleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CodeStuationfamilleRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CodeStuationfamilleRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
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
    class ComptebancaireForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ComptebancaireForm {
        CodePaysIban: Serenity.StringEditor;
        CleIban: Serenity.StringEditor;
        Banque: Serenity.StringEditor;
        Guichet: Serenity.StringEditor;
        NumeroCompte: Serenity.StringEditor;
        CleRib: Serenity.StringEditor;
        EmetteurRib: Serenity.StringEditor;
        Bic: Serenity.StringEditor;
        TitulaireCompte: Serenity.StringEditor;
        Domiciliation: Serenity.StringEditor;
        CodeIcs: Serenity.StringEditor;
        CodeRum: Serenity.StringEditor;
        DateSignatureMandat: Serenity.DateEditor;
        TypePrelevement: Serenity.IntegerEditor;
        DateDernierPrelevement: Serenity.DateEditor;
        TypeDernierPrelevement: Serenity.IntegerEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface ComptebancaireRow {
        Id?: string;
        CodePaysIban?: string;
        CleIban?: string;
        Banque?: string;
        Guichet?: string;
        NumeroCompte?: string;
        CleRib?: string;
        EmetteurRib?: string;
        Bic?: string;
        TitulaireCompte?: string;
        Domiciliation?: string;
        CodeIcs?: string;
        CodeRum?: string;
        DateSignatureMandat?: string;
        TypePrelevement?: number;
        DateDernierPrelevement?: string;
        TypeDernierPrelevement?: number;
    }
    namespace ComptebancaireRow {
        const idProperty = "Id";
        const nameProperty = "CodePaysIban";
        const localTextPrefix = "Ge.Comptebancaire";
        namespace Fields {
            const Id: any;
            const CodePaysIban: any;
            const CleIban: any;
            const Banque: any;
            const Guichet: any;
            const NumeroCompte: any;
            const CleRib: any;
            const EmetteurRib: any;
            const Bic: any;
            const TitulaireCompte: any;
            const Domiciliation: any;
            const CodeIcs: any;
            const CodeRum: any;
            const DateSignatureMandat: any;
            const TypePrelevement: any;
            const DateDernierPrelevement: any;
            const TypeDernierPrelevement: any;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace ComptebancaireService {
        const baseUrl = "Ge/Comptebancaire";
        function Create(request: Serenity.SaveRequest<ComptebancaireRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ComptebancaireRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ComptebancaireRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ComptebancaireRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
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
    class PaysForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PaysForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        ReadOnly: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Libele: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        CodeUe: Serenity.IntegerEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface PaysRow {
        Id?: string;
        DefaultValue?: boolean;
        IsActive?: boolean;
        ReadOnly?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Libele?: string;
        Code?: string;
        CodeUe?: number;
    }
    namespace PaysRow {
        const idProperty = "Id";
        const nameProperty = "Libele";
        const localTextPrefix = "Ge.Pays";
        namespace Fields {
            const Id: any;
            const DefaultValue: any;
            const IsActive: any;
            const ReadOnly: any;
            const InsertDate: any;
            const InsertUserId: any;
            const UpdateDate: any;
            const UpdateUserId: any;
            const Libele: any;
            const Code: any;
            const CodeUe: any;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace PaysService {
        const baseUrl = "Ge/Pays";
        function Create(request: Serenity.SaveRequest<PaysRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PaysRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PaysRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PaysRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
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
    class PersonneForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PersonneForm {
        IsMorale: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        NotArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Nom: Serenity.StringEditor;
        Prenom: Serenity.StringEditor;
        NomJeuneFille: Serenity.StringEditor;
        RaisonSociale: Serenity.StringEditor;
        Birthday: Serenity.DateEditor;
        Sexe: Serenity.IntegerEditor;
        SituationFamille: Serenity.IntegerEditor;
        VilleNassance: Serenity.StringEditor;
        PaysNassance: Serenity.StringEditor;
        PaysNationalite: Serenity.StringEditor;
        Photo: Serenity.StringEditor;
        TelephonePerso: Serenity.StringEditor;
        TelephoneMobile: Serenity.StringEditor;
        TelephoneProf: Serenity.StringEditor;
        TelephoneComplementaire1: Serenity.StringEditor;
        TelephoneComplementaire2: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        Email2: Serenity.StringEditor;
        CompteBancaire: Serenity.StringEditor;
        IdAdresse: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface PersonneRow {
        Id?: string;
        IsMorale?: boolean;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Nom?: string;
        Prenom?: string;
        NomJeuneFille?: string;
        RaisonSociale?: string;
        Birthday?: string;
        Sexe?: number;
        SituationFamille?: number;
        VilleNassance?: string;
        PaysNassance?: string;
        PaysNationalite?: string;
        Photo?: number[];
        TelephonePerso?: string;
        TelephoneMobile?: string;
        TelephoneProf?: string;
        TelephoneComplementaire1?: string;
        TelephoneComplementaire2?: string;
        Email1?: string;
        Email2?: string;
        CompteBancaire?: string;
        IdAdresse?: string;
        Description?: string;
        ArchiveDate?: string;
        SexeDefaultValue?: boolean;
        SexeIsActive?: boolean;
        SexeReadOnly?: boolean;
        SexeInsertDate?: string;
        SexeInsertUserId?: number;
        SexeUpdateDate?: string;
        SexeUpdateUserId?: number;
        SexeLibele?: string;
        SexeCivilite?: string;
        SexeLibeleUs?: string;
        SituationFamilleDefaultValue?: boolean;
        SituationFamilleIsActive?: boolean;
        SituationFamilleReadOnly?: boolean;
        SituationFamilleInsertDate?: string;
        SituationFamilleInsertUserId?: number;
        SituationFamilleUpdateDate?: string;
        SituationFamilleUpdateUserId?: number;
        SituationFamilleLibele?: string;
        SituationFamilleCode?: string;
        VilleNassanceDefaultValue?: boolean;
        VilleNassanceIsActive?: boolean;
        VilleNassanceReadOnly?: boolean;
        VilleNassanceInsertDate?: string;
        VilleNassanceInsertUserId?: number;
        VilleNassanceUpdateDate?: string;
        VilleNassanceUpdateUserId?: number;
        VilleNassanceCodeInsee?: string;
        VilleNassanceLibele?: string;
        VilleNassanceNomVille?: string;
        VilleNassanceCodePostal?: string;
        VilleNassancePays?: string;
        PaysNassanceDefaultValue?: boolean;
        PaysNassanceIsActive?: boolean;
        PaysNassanceReadOnly?: boolean;
        PaysNassanceInsertDate?: string;
        PaysNassanceInsertUserId?: number;
        PaysNassanceUpdateDate?: string;
        PaysNassanceUpdateUserId?: number;
        PaysNassanceLibele?: string;
        PaysNassanceCode?: string;
        PaysNassanceCodeUe?: number;
        PaysNationaliteDefaultValue?: boolean;
        PaysNationaliteIsActive?: boolean;
        PaysNationaliteReadOnly?: boolean;
        PaysNationaliteInsertDate?: string;
        PaysNationaliteInsertUserId?: number;
        PaysNationaliteUpdateDate?: string;
        PaysNationaliteUpdateUserId?: number;
        PaysNationaliteLibele?: string;
        PaysNationaliteCode?: string;
        PaysNationaliteCodeUe?: number;
        CompteBancaireCodePaysIban?: string;
        CompteBancaireCleIban?: string;
        CompteBancaireBanque?: string;
        CompteBancaireGuichet?: string;
        CompteBancaireNumeroCompte?: string;
        CompteBancaireCleRib?: string;
        CompteBancaireEmetteurRib?: string;
        CompteBancaireBic?: string;
        CompteBancaireTitulaireCompte?: string;
        CompteBancaireDomiciliation?: string;
        CompteBancaireCodeIcs?: string;
        CompteBancaireCodeRum?: string;
        CompteBancaireDateSignatureMandat?: string;
        CompteBancaireTypePrelevement?: number;
        CompteBancaireDateDernierPrelevement?: string;
        CompteBancaireTypeDernierPrelevement?: number;
        IdAdresseIsActive?: boolean;
        IdAdresseNotArchive?: boolean;
        IdAdresseInsertDate?: string;
        IdAdresseInsertUserId?: number;
        IdAdresseUpdateDate?: string;
        IdAdresseUpdateUserId?: number;
        IdAdresseAdresse1?: string;
        IdAdresseAdresse2?: string;
        IdAdresseAdresse3?: string;
        IdAdresseVille?: string;
        IdAdressePays?: string;
        IdAdresseCedex?: string;
        IdAdresseBatiment?: string;
        IdAdresseDescription?: string;
        IdAdresseArchiveDate?: string;
    }
    namespace PersonneRow {
        const idProperty = "Id";
        const nameProperty = "Nom";
        const localTextPrefix = "Ge.Personne";
        namespace Fields {
            const Id: any;
            const IsMorale: any;
            const IsActive: any;
            const NotArchive: any;
            const InsertDate: any;
            const InsertUserId: any;
            const UpdateDate: any;
            const UpdateUserId: any;
            const Nom: any;
            const Prenom: any;
            const NomJeuneFille: any;
            const RaisonSociale: any;
            const Birthday: any;
            const Sexe: any;
            const SituationFamille: any;
            const VilleNassance: any;
            const PaysNassance: any;
            const PaysNationalite: any;
            const Photo: any;
            const TelephonePerso: any;
            const TelephoneMobile: any;
            const TelephoneProf: any;
            const TelephoneComplementaire1: any;
            const TelephoneComplementaire2: any;
            const Email1: any;
            const Email2: any;
            const CompteBancaire: any;
            const IdAdresse: any;
            const Description: any;
            const ArchiveDate: any;
            const SexeDefaultValue: string;
            const SexeIsActive: string;
            const SexeReadOnly: string;
            const SexeInsertDate: string;
            const SexeInsertUserId: string;
            const SexeUpdateDate: string;
            const SexeUpdateUserId: string;
            const SexeLibele: string;
            const SexeCivilite: string;
            const SexeLibeleUs: string;
            const SituationFamilleDefaultValue: string;
            const SituationFamilleIsActive: string;
            const SituationFamilleReadOnly: string;
            const SituationFamilleInsertDate: string;
            const SituationFamilleInsertUserId: string;
            const SituationFamilleUpdateDate: string;
            const SituationFamilleUpdateUserId: string;
            const SituationFamilleLibele: string;
            const SituationFamilleCode: string;
            const VilleNassanceDefaultValue: string;
            const VilleNassanceIsActive: string;
            const VilleNassanceReadOnly: string;
            const VilleNassanceInsertDate: string;
            const VilleNassanceInsertUserId: string;
            const VilleNassanceUpdateDate: string;
            const VilleNassanceUpdateUserId: string;
            const VilleNassanceCodeInsee: string;
            const VilleNassanceLibele: string;
            const VilleNassanceNomVille: string;
            const VilleNassanceCodePostal: string;
            const VilleNassancePays: string;
            const PaysNassanceDefaultValue: string;
            const PaysNassanceIsActive: string;
            const PaysNassanceReadOnly: string;
            const PaysNassanceInsertDate: string;
            const PaysNassanceInsertUserId: string;
            const PaysNassanceUpdateDate: string;
            const PaysNassanceUpdateUserId: string;
            const PaysNassanceLibele: string;
            const PaysNassanceCode: string;
            const PaysNassanceCodeUe: string;
            const PaysNationaliteDefaultValue: string;
            const PaysNationaliteIsActive: string;
            const PaysNationaliteReadOnly: string;
            const PaysNationaliteInsertDate: string;
            const PaysNationaliteInsertUserId: string;
            const PaysNationaliteUpdateDate: string;
            const PaysNationaliteUpdateUserId: string;
            const PaysNationaliteLibele: string;
            const PaysNationaliteCode: string;
            const PaysNationaliteCodeUe: string;
            const CompteBancaireCodePaysIban: string;
            const CompteBancaireCleIban: string;
            const CompteBancaireBanque: string;
            const CompteBancaireGuichet: string;
            const CompteBancaireNumeroCompte: string;
            const CompteBancaireCleRib: string;
            const CompteBancaireEmetteurRib: string;
            const CompteBancaireBic: string;
            const CompteBancaireTitulaireCompte: string;
            const CompteBancaireDomiciliation: string;
            const CompteBancaireCodeIcs: string;
            const CompteBancaireCodeRum: string;
            const CompteBancaireDateSignatureMandat: string;
            const CompteBancaireTypePrelevement: string;
            const CompteBancaireDateDernierPrelevement: string;
            const CompteBancaireTypeDernierPrelevement: string;
            const IdAdresseIsActive: string;
            const IdAdresseNotArchive: string;
            const IdAdresseInsertDate: string;
            const IdAdresseInsertUserId: string;
            const IdAdresseUpdateDate: string;
            const IdAdresseUpdateUserId: string;
            const IdAdresseAdresse1: string;
            const IdAdresseAdresse2: string;
            const IdAdresseAdresse3: string;
            const IdAdresseVille: string;
            const IdAdressePays: string;
            const IdAdresseCedex: string;
            const IdAdresseBatiment: string;
            const IdAdresseDescription: string;
            const IdAdresseArchiveDate: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace PersonneService {
        const baseUrl = "Ge/Personne";
        function Create(request: Serenity.SaveRequest<PersonneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PersonneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PersonneRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PersonneRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
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
    class ProprietaireForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProprietaireForm {
        Cheval: Serenity.StringEditor;
        Cavalier: Serenity.StringEditor;
        Part: Serenity.DecimalEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface ProprietaireRow {
        Id?: number;
        Cheval?: string;
        Cavalier?: string;
        Part?: number;
        ChevalSire?: string;
        ChevalCleSire?: string;
        ChevalName?: string;
        ChevalIsActive?: boolean;
        ChevalNotArchive?: boolean;
        ChevalInsertDate?: string;
        ChevalInsertUserId?: number;
        ChevalUpdateDate?: string;
        ChevalUpdateUserId?: number;
        ChevalBirthday?: string;
        ChevalSexe?: number;
        ChevalRobe?: string;
        ChevalTranspondeur?: string;
        ChevalSortieDefinitive?: string;
        ChevalDescription?: string;
        ChevalArchiveDate?: string;
        CavalierPersonne?: string;
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
        CavalierDescription?: string;
        CavalierArchiveDate?: string;
    }
    namespace ProprietaireRow {
        const idProperty = "Id";
        const nameProperty = "Cheval";
        const localTextPrefix = "Ge.Proprietaire";
        namespace Fields {
            const Id: any;
            const Cheval: any;
            const Cavalier: any;
            const Part: any;
            const ChevalSire: string;
            const ChevalCleSire: string;
            const ChevalName: string;
            const ChevalIsActive: string;
            const ChevalNotArchive: string;
            const ChevalInsertDate: string;
            const ChevalInsertUserId: string;
            const ChevalUpdateDate: string;
            const ChevalUpdateUserId: string;
            const ChevalBirthday: string;
            const ChevalSexe: string;
            const ChevalRobe: string;
            const ChevalTranspondeur: string;
            const ChevalSortieDefinitive: string;
            const ChevalDescription: string;
            const ChevalArchiveDate: string;
            const CavalierPersonne: string;
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
            const CavalierDescription: string;
            const CavalierArchiveDate: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace ProprietaireService {
        const baseUrl = "Ge/Proprietaire";
        function Create(request: Serenity.SaveRequest<ProprietaireRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProprietaireRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProprietaireRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProprietaireRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
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
    class VilleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface VilleForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        ReadOnly: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        CodeInsee: Serenity.StringEditor;
        Libele: Serenity.StringEditor;
        NomVille: Serenity.StringEditor;
        CodePostal: Serenity.StringEditor;
        Pays: Serenity.StringEditor;
    }
}
declare namespace GestionEquestre.Ge {
    interface VilleRow {
        Id?: string;
        DefaultValue?: boolean;
        IsActive?: boolean;
        ReadOnly?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        CodeInsee?: string;
        Libele?: string;
        NomVille?: string;
        CodePostal?: string;
        Pays?: string;
        PaysDefaultValue?: boolean;
        PaysIsActive?: boolean;
        PaysReadOnly?: boolean;
        PaysInsertDate?: string;
        PaysInsertUserId?: number;
        PaysUpdateDate?: string;
        PaysUpdateUserId?: number;
        PaysLibele?: string;
        PaysCode?: string;
        PaysCodeUe?: number;
    }
    namespace VilleRow {
        const idProperty = "Id";
        const nameProperty = "CodeInsee";
        const localTextPrefix = "Ge.Ville";
        namespace Fields {
            const Id: any;
            const DefaultValue: any;
            const IsActive: any;
            const ReadOnly: any;
            const InsertDate: any;
            const InsertUserId: any;
            const UpdateDate: any;
            const UpdateUserId: any;
            const CodeInsee: any;
            const Libele: any;
            const NomVille: any;
            const CodePostal: any;
            const Pays: any;
            const PaysDefaultValue: string;
            const PaysIsActive: string;
            const PaysReadOnly: string;
            const PaysInsertDate: string;
            const PaysInsertUserId: string;
            const PaysUpdateDate: string;
            const PaysUpdateUserId: string;
            const PaysLibele: string;
            const PaysCode: string;
            const PaysCodeUe: string;
        }
    }
}
declare namespace GestionEquestre.Ge {
    namespace VilleService {
        const baseUrl = "Ge/Ville";
        function Create(request: Serenity.SaveRequest<VilleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VilleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VilleRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VilleRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
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
    class AdresseDialog extends Serenity.EntityDialog<AdresseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AdresseForm;
        dialogOpen(): void;
    }
}
declare namespace GestionEquestre.Ge {
    class AdresseEditor extends Common.GridEditorBase<AdresseRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AdresseEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class AdresseEditorDialog extends Common.GridEditorDialog<AdresseRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: AdresseForm;
    }
}
declare namespace GestionEquestre.Ge {
    class AdresseGrid extends Serenity.EntityGrid<AdresseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AdresseDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class CavaliersDialog extends Serenity.EntityDialog<CavaliersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CavaliersForm;
        dialogOpen(): void;
    }
}
declare namespace GestionEquestre.Ge {
    class CavaliersEditor extends Common.GridEditorBase<CavaliersRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CavaliersEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class CavaliersEditorDialog extends Common.GridEditorDialog<CavaliersRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CavaliersForm;
    }
}
declare namespace GestionEquestre.Ge {
    class CavaliersGrid extends Serenity.EntityGrid<CavaliersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CavaliersDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class ChevauxDialog extends Serenity.EntityDialog<ChevauxRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ChevauxForm;
        dialogOpen(): void;
    }
}
declare namespace GestionEquestre.Ge {
    class ChevauxEditor extends Common.GridEditorBase<ChevauxRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ChevauxEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class ChevauxEditorDialog extends Common.GridEditorDialog<ChevauxRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ChevauxForm;
    }
}
declare namespace GestionEquestre.Ge {
    class ChevauxGrid extends Serenity.EntityGrid<ChevauxRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ChevauxDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class CodeGalopDialog extends Serenity.EntityDialog<CodeGalopRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CodeGalopForm;
        dialogOpen(): void;
    }
}
declare namespace GestionEquestre.Ge {
    class CodeGalopEditor extends Common.GridEditorBase<CodeGalopRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CodeGalopEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class CodeGalopEditorDialog extends Common.GridEditorDialog<CodeGalopRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CodeGalopForm;
    }
}
declare namespace GestionEquestre.Ge {
    class CodeGalopGrid extends Serenity.EntityGrid<CodeGalopRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CodeGalopDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class CodeLfcDialog extends Serenity.EntityDialog<CodeLfcRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CodeLfcForm;
        dialogOpen(): void;
    }
}
declare namespace GestionEquestre.Ge {
    class CodeLfcEditor extends Common.GridEditorBase<CodeLfcRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CodeLfcEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class CodeLfcEditorDialog extends Common.GridEditorDialog<CodeLfcRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CodeLfcForm;
    }
}
declare namespace GestionEquestre.Ge {
    class CodeLfcGrid extends Serenity.EntityGrid<CodeLfcRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CodeLfcDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class CodeSexeDialog extends Serenity.EntityDialog<CodeSexeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CodeSexeForm;
        dialogOpen(): void;
    }
}
declare namespace GestionEquestre.Ge {
    class CodeSexeEditor extends Common.GridEditorBase<CodeSexeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CodeSexeEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class CodeSexeEditorDialog extends Common.GridEditorDialog<CodeSexeRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CodeSexeForm;
    }
}
declare namespace GestionEquestre.Ge {
    class CodeSexeGrid extends Serenity.EntityGrid<CodeSexeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CodeSexeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class CodeStuationfamilleDialog extends Serenity.EntityDialog<CodeStuationfamilleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CodeStuationfamilleForm;
        dialogOpen(): void;
    }
}
declare namespace GestionEquestre.Ge {
    class CodeStuationfamilleEditor extends Common.GridEditorBase<CodeStuationfamilleRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CodeStuationfamilleEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class CodeStuationfamilleEditorDialog extends Common.GridEditorDialog<CodeStuationfamilleRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CodeStuationfamilleForm;
    }
}
declare namespace GestionEquestre.Ge {
    class CodeStuationfamilleGrid extends Serenity.EntityGrid<CodeStuationfamilleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CodeStuationfamilleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class ComptebancaireDialog extends Serenity.EntityDialog<ComptebancaireRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ComptebancaireForm;
        dialogOpen(): void;
    }
}
declare namespace GestionEquestre.Ge {
    class ComptebancaireEditor extends Common.GridEditorBase<ComptebancaireRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ComptebancaireEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class ComptebancaireEditorDialog extends Common.GridEditorDialog<ComptebancaireRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ComptebancaireForm;
    }
}
declare namespace GestionEquestre.Ge {
    class ComptebancaireGrid extends Serenity.EntityGrid<ComptebancaireRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ComptebancaireDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class PaysDialog extends Serenity.EntityDialog<PaysRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PaysForm;
        dialogOpen(): void;
    }
}
declare namespace GestionEquestre.Ge {
    class PaysEditor extends Common.GridEditorBase<PaysRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaysEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class PaysEditorDialog extends Common.GridEditorDialog<PaysRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: PaysForm;
    }
}
declare namespace GestionEquestre.Ge {
    class PaysGrid extends Serenity.EntityGrid<PaysRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaysDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class PersonneDialog extends Serenity.EntityDialog<PersonneRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PersonneForm;
        dialogOpen(): void;
    }
}
declare namespace GestionEquestre.Ge {
    class PersonneEditor extends Common.GridEditorBase<PersonneRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PersonneEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class PersonneEditorDialog extends Common.GridEditorDialog<PersonneRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: PersonneForm;
    }
}
declare namespace GestionEquestre.Ge {
    class PersonneGrid extends Serenity.EntityGrid<PersonneRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PersonneDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class ProprietaireDialog extends Serenity.EntityDialog<ProprietaireRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProprietaireForm;
        dialogOpen(): void;
    }
}
declare namespace GestionEquestre.Ge {
    class ProprietaireEditor extends Common.GridEditorBase<ProprietaireRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProprietaireEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class ProprietaireEditorDialog extends Common.GridEditorDialog<ProprietaireRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ProprietaireForm;
    }
}
declare namespace GestionEquestre.Ge {
    class ProprietaireGrid extends Serenity.EntityGrid<ProprietaireRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProprietaireDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class VilleDialog extends Serenity.EntityDialog<VilleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VilleForm;
        dialogOpen(): void;
    }
}
declare namespace GestionEquestre.Ge {
    class VilleEditor extends Common.GridEditorBase<VilleRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VilleEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestionEquestre.Ge {
    class VilleEditorDialog extends Common.GridEditorDialog<VilleRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: VilleForm;
    }
}
declare namespace GestionEquestre.Ge {
    class VilleGrid extends Serenity.EntityGrid<VilleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VilleDialog;
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
