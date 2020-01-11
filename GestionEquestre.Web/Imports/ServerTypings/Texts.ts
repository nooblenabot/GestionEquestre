namespace GestionEquestre.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Ge {

            namespace AccBankaccount {
                export const AccountOnwer: string;
                export const BankAdress: string;
                export const Bban: string;
                export const Bic: string;
                export const CheckDigitsIban: string;
                export const Cis: string;
                export const CountryCodeIban: string;
                export const DateLastPrelevement: string;
                export const Id: string;
                export const MandateDateSign: string;
                export const TypeOfLastPayment: string;
                export const TypePayment: string;
                export const Urm: string;
            }

            namespace CorCorporate {
                export const ArchiveDate: string;
                export const BankAccount: string;
                export const BankAccountAccountOnwer: string;
                export const BankAccountBankAdress: string;
                export const BankAccountBban: string;
                export const BankAccountBic: string;
                export const BankAccountCheckDigitsIban: string;
                export const BankAccountCis: string;
                export const BankAccountCountryCodeIban: string;
                export const BankAccountDateLastPrelevement: string;
                export const BankAccountMandateDateSign: string;
                export const BankAccountTypeOfLastPayment: string;
                export const BankAccountTypePayment: string;
                export const BankAccountUrm: string;
                export const Caption: string;
                export const Email1: string;
                export const Email2: string;
                export const FrSiren: string;
                export const Gsm: string;
                export const Id: string;
                export const IdAdress: string;
                export const IdAdressAdress1: string;
                export const IdAdressAdress2: string;
                export const IdAdressAdress3: string;
                export const IdAdressArchiveDate: string;
                export const IdAdressBuilding: string;
                export const IdAdressCaption: string;
                export const IdAdressCedex: string;
                export const IdAdressCity: string;
                export const IdAdressCountry: string;
                export const IdAdressInsertDate: string;
                export const IdAdressInsertUserId: string;
                export const IdAdressIsActive: string;
                export const IdAdressIsArchive: string;
                export const IdAdressUpdateDate: string;
                export const IdAdressUpdateUserId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsArchive: string;
                export const Name: string;
                export const OtherPhone1: string;
                export const Phone: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace CorEtab {
                export const ArchiveDate: string;
                export const BankAccount: string;
                export const BankAccountAccountOnwer: string;
                export const BankAccountBankAdress: string;
                export const BankAccountBban: string;
                export const BankAccountBic: string;
                export const BankAccountCheckDigitsIban: string;
                export const BankAccountCis: string;
                export const BankAccountCountryCodeIban: string;
                export const BankAccountDateLastPrelevement: string;
                export const BankAccountMandateDateSign: string;
                export const BankAccountTypeOfLastPayment: string;
                export const BankAccountTypePayment: string;
                export const BankAccountUrm: string;
                export const Caption: string;
                export const Email1: string;
                export const Email2: string;
                export const FrSiret: string;
                export const Gsm: string;
                export const Id: string;
                export const IdAdress: string;
                export const IdAdressAdress1: string;
                export const IdAdressAdress2: string;
                export const IdAdressAdress3: string;
                export const IdAdressArchiveDate: string;
                export const IdAdressBuilding: string;
                export const IdAdressCaption: string;
                export const IdAdressCedex: string;
                export const IdAdressCity: string;
                export const IdAdressCountry: string;
                export const IdAdressInsertDate: string;
                export const IdAdressInsertUserId: string;
                export const IdAdressIsActive: string;
                export const IdAdressIsArchive: string;
                export const IdAdressUpdateDate: string;
                export const IdAdressUpdateUserId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsArchive: string;
                export const Name: string;
                export const OtherPhone1: string;
                export const Phone: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace LinkFolderCavalier {
                export const Cavalier: string;
                export const CavalierName: string;
                export const CavalierPerson: string;
                export const Folder: string;
                export const Id: string;
            }

            namespace LinkFolderHorse {
                export const Folder: string;
                export const Horse: string;
                export const HorseName: string;
                export const Id: string;
            }

            namespace LinkFolderPerson {
                export const Caption: string;
                export const Folder: string;
                export const Id: string;
                export const PersonBusinessName: string;
                export const PersonCaption: string;
                export const PersonFullName: string;
                export const PersonId: string;
                export const PersonIsMorale: string;
                export const PersonName: string;
                export const PersonSurname: string;
            }

            namespace ManAdress {
                export const Adress1: string;
                export const Adress2: string;
                export const Adress3: string;
                export const ArchiveDate: string;
                export const Building: string;
                export const Caption: string;
                export const Cedex: string;
                export const City: string;
                export const City1: string;
                export const CityCaption: string;
                export const CityCountry: string;
                export const CityDefaultValue: string;
                export const CityFrCodeInsee: string;
                export const CityInsertDate: string;
                export const CityInsertUserId: string;
                export const CityIsActive: string;
                export const CityPostCode: string;
                export const CityUpdateDate: string;
                export const CityUpdateUserId: string;
                export const Country: string;
                export const CountryCodeUe: string;
                export const CountryDefaultValue: string;
                export const CountryISOcode: string;
                export const CountryInsertDate: string;
                export const CountryInsertUserId: string;
                export const CountryIsActive: string;
                export const CountryName_EN_gb: string;
                export const CountryName_FR_fr: string;
                export const CountryUpdateDate: string;
                export const CountryUpdateUserId: string;
                export const Countryalpha2: string;
                export const Countryalpha3: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUsername: string;
                export const IsActive: string;
                export const IsArchive: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUsername: string;
            }

            namespace ManCavaliers {
                export const ArchiveDate: string;
                export const Caption: string;
                export const DateCertificatMedical: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUsername: string;
                export const IsActive: string;
                export const IsArchive: string;
                export const LicFfe: string;
                export const LicenceCompetition: string;
                export const LicenceCompetitionCaption: string;
                export const LicenceCompetitionCode: string;
                export const LicenceCompetitionDefaultValue: string;
                export const LicenceCompetitionInsertDate: string;
                export const LicenceCompetitionInsertUserId: string;
                export const LicenceCompetitionIsActive: string;
                export const LicenceCompetitionUpdateDate: string;
                export const LicenceCompetitionUpdateUserId: string;
                export const MilesimeLicnece: string;
                export const NiveauGalop: string;
                export const NiveauGalopCaption: string;
                export const NiveauGalopCode: string;
                export const NiveauGalopDefaultValue: string;
                export const NiveauGalopInsertDate: string;
                export const NiveauGalopInsertUserId: string;
                export const NiveauGalopIsActive: string;
                export const NiveauGalopUpdateDate: string;
                export const NiveauGalopUpdateUserId: string;
                export const Person: string;
                export const PersonArchiveDate: string;
                export const PersonBankAccount: string;
                export const PersonBirthCity: string;
                export const PersonBirthCountry: string;
                export const PersonBirthday: string;
                export const PersonBusinessName: string;
                export const PersonCaption: string;
                export const PersonEmail1: string;
                export const PersonEmail2: string;
                export const PersonFullName: string;
                export const PersonGsm: string;
                export const PersonIdAdress: string;
                export const PersonInsertDate: string;
                export const PersonInsertUserId: string;
                export const PersonIsActive: string;
                export const PersonIsArchive: string;
                export const PersonIsMorale: string;
                export const PersonMaidenName: string;
                export const PersonMaritalStatus: string;
                export const PersonName: string;
                export const PersonNationality: string;
                export const PersonOtherPhone1: string;
                export const PersonOtherPhone2: string;
                export const PersonPhone: string;
                export const PersonPhoto: string;
                export const PersonSexe: string;
                export const PersonSurname: string;
                export const PersonUpdateDate: string;
                export const PersonUpdateUserId: string;
                export const PersonWorkPhone: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUsername: string;
            }

            namespace ManFolder {
                export const ArchiveDate: string;
                export const Caption: string;
                export const CloseDate: string;
                export const CloseRaison: string;
                export const Comment: string;
                export const CreateDate: string;
                export const Establishment: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUsername: string;
                export const IsActive: string;
                export const IsArchive: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUsername: string;
            }

            namespace ManHorses {
                export const ArchiveDate: string;
                export const BirthCountry: string;
                export const BirthCountryDefaultValue: string;
                export const BirthCountryISOcode: string;
                export const BirthCountryInsertDate: string;
                export const BirthCountryInsertUserId: string;
                export const BirthCountryIsActive: string;
                export const BirthCountryName_FR_fr: string;
                export const BirthCountryUpdateDate: string;
                export const BirthCountryUpdateUserId: string;
                export const BirthCountryalpha3: string;
                export const BirthOrganization: string;
                export const BirthOrganizationDefaultValue: string;
                export const BirthOrganizationInsertDate: string;
                export const BirthOrganizationInsertUserId: string;
                export const BirthOrganizationIsActive: string;
                export const BirthOrganizationOrganization: string;
                export const BirthOrganizationUelnCode: string;
                export const BirthOrganizationUpdateDate: string;
                export const BirthOrganizationUpdateUserId: string;
                export const Birthday: string;
                export const CleSire: string;
                export const Color: string;
                export const Description: string;
                export const FinalExit: string;
                export const Hnin: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUsername: string;
                export const IsActive: string;
                export const IsArchive: string;
                export const Name: string;
                export const Race: string;
                export const Sexe: string;
                export const SexeCaption: string;
                export const SexeCivility: string;
                export const SexeDefaultValue: string;
                export const SexeInsertDate: string;
                export const SexeInsertUserId: string;
                export const SexeIsActive: string;
                export const SexeUpdateDate: string;
                export const SexeUpdateUserId: string;
                export const Sire: string;
                export const Transponder: string;
                export const Ueln: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUsername: string;
            }

            namespace ManOwner {
                export const Cavalier: string;
                export const CavalierArchiveDate: string;
                export const CavalierCaption: string;
                export const CavalierDateCertificatMedical: string;
                export const CavalierInsertDate: string;
                export const CavalierInsertUserId: string;
                export const CavalierIsActive: string;
                export const CavalierIsArchive: string;
                export const CavalierLicenceCompetition: string;
                export const CavalierMilesimeLicnece: string;
                export const CavalierNiveauGalop: string;
                export const CavalierPerson: string;
                export const CavalierUpdateDate: string;
                export const CavalierUpdateUserId: string;
                export const Horse: string;
                export const HorseArchiveDate: string;
                export const HorseBirthCountry: string;
                export const HorseBirthOrganization: string;
                export const HorseBirthday: string;
                export const HorseCleSire: string;
                export const HorseColor: string;
                export const HorseDescription: string;
                export const HorseFinalExit: string;
                export const HorseHnin: string;
                export const HorseInsertDate: string;
                export const HorseInsertUserId: string;
                export const HorseIsActive: string;
                export const HorseIsArchive: string;
                export const HorseName: string;
                export const HorseRace: string;
                export const HorseSexe: string;
                export const HorseSire: string;
                export const HorseTransponder: string;
                export const HorseUpdateDate: string;
                export const HorseUpdateUserId: string;
                export const Id: string;
                export const Part: string;
            }

            namespace ManPerson {
                export const ArchiveDate: string;
                export const BankAccount: string;
                export const BankAccountAccountOnwer: string;
                export const BankAccountBankAdress: string;
                export const BankAccountBban: string;
                export const BankAccountBic: string;
                export const BankAccountCheckDigitsIban: string;
                export const BankAccountCis: string;
                export const BankAccountCountryCodeIban: string;
                export const BankAccountDateLastPrelevement: string;
                export const BankAccountMandateDateSign: string;
                export const BankAccountTypeOfLastPayment: string;
                export const BankAccountTypePayment: string;
                export const BankAccountUrm: string;
                export const BirthCity: string;
                export const BirthCityCaption: string;
                export const BirthCityCity: string;
                export const BirthCityCountry: string;
                export const BirthCityDefaultValue: string;
                export const BirthCityFrCodeInsee: string;
                export const BirthCityInsertDate: string;
                export const BirthCityInsertUserId: string;
                export const BirthCityIsActive: string;
                export const BirthCityPostCode: string;
                export const BirthCityUpdateDate: string;
                export const BirthCityUpdateUserId: string;
                export const BirthCountry: string;
                export const BirthCountryCodeUe: string;
                export const BirthCountryDefaultValue: string;
                export const BirthCountryISOcode: string;
                export const BirthCountryInsertDate: string;
                export const BirthCountryInsertUserId: string;
                export const BirthCountryIsActive: string;
                export const BirthCountryName_EN_gb: string;
                export const BirthCountryName_FR_fr: string;
                export const BirthCountryUpdateDate: string;
                export const BirthCountryUpdateUserId: string;
                export const BirthCountryalpha2: string;
                export const BirthCountryalpha3: string;
                export const Birthday: string;
                export const BusinessName: string;
                export const Caption: string;
                export const Email1: string;
                export const Email2: string;
                export const FullName: string;
                export const Gsm: string;
                export const Id: string;
                export const IdAdress: string;
                export const IdAdressAdress1: string;
                export const IdAdressAdress2: string;
                export const IdAdressAdress3: string;
                export const IdAdressArchiveDate: string;
                export const IdAdressBuilding: string;
                export const IdAdressCaption: string;
                export const IdAdressCedex: string;
                export const IdAdressCity: string;
                export const IdAdressCountry: string;
                export const IdAdressInsertDate: string;
                export const IdAdressInsertUserId: string;
                export const IdAdressIsActive: string;
                export const IdAdressIsArchive: string;
                export const IdAdressUpdateDate: string;
                export const IdAdressUpdateUserId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUsername: string;
                export const IsActive: string;
                export const IsArchive: string;
                export const IsMorale: string;
                export const MaidenName: string;
                export const MaritalStatus: string;
                export const MaritalStatusCaption: string;
                export const MaritalStatusCode: string;
                export const MaritalStatusDefaultValue: string;
                export const MaritalStatusInsertDate: string;
                export const MaritalStatusInsertUserId: string;
                export const MaritalStatusIsActive: string;
                export const MaritalStatusUpdateDate: string;
                export const MaritalStatusUpdateUserId: string;
                export const Name: string;
                export const Nationality: string;
                export const NationalityCodeUe: string;
                export const NationalityDefaultValue: string;
                export const NationalityISOcode: string;
                export const NationalityInsertDate: string;
                export const NationalityInsertUserId: string;
                export const NationalityIsActive: string;
                export const NationalityName_EN_gb: string;
                export const NationalityName_FR_fr: string;
                export const NationalityUpdateDate: string;
                export const NationalityUpdateUserId: string;
                export const Nationalityalpha2: string;
                export const Nationalityalpha3: string;
                export const OtherPhone1: string;
                export const OtherPhone2: string;
                export const Phone: string;
                export const Photo: string;
                export const Sexe: string;
                export const SexeCaption: string;
                export const SexeCivility: string;
                export const SexeDefaultValue: string;
                export const SexeInsertDate: string;
                export const SexeInsertUserId: string;
                export const SexeIsActive: string;
                export const SexeUpdateDate: string;
                export const SexeUpdateUserId: string;
                export const Surname: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUsername: string;
                export const WorkPhone: string;
            }

            namespace SetCity {
                export const Caption: string;
                export const City: string;
                export const Country: string;
                export const CountryCodeUe: string;
                export const CountryDefaultValue: string;
                export const CountryISOcode: string;
                export const CountryInsertDate: string;
                export const CountryInsertUserId: string;
                export const CountryIsActive: string;
                export const CountryName_FR_fr: string;
                export const CountryUpdateDate: string;
                export const CountryUpdateUserId: string;
                export const Countryalpha3: string;
                export const DefaultValue: string;
                export const FrCodeInsee: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUsername: string;
                export const IsActive: string;
                export const PostCode: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUsername: string;
            }

            namespace SetCountry {
                export const CodeUe: string;
                export const DefaultValue: string;
                export const ISOcode: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUsername: string;
                export const IsActive: string;
                export const Name_EN_gb: string;
                export const Name_FR_fr: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUsername: string;
                export const alpha2: string;
                export const alpha3: string;
            }

            namespace SetGalop {
                export const Caption: string;
                export const Code: string;
                export const DefaultValue: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUsername: string;
                export const IsActive: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUsername: string;
            }

            namespace SetLfc {
                export const Caption: string;
                export const Code: string;
                export const DefaultValue: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUsername: string;
                export const IsActive: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUsername: string;
            }

            namespace SetMaritalstatus {
                export const Caption: string;
                export const Code: string;
                export const DefaultValue: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUsername: string;
                export const IsActive: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUsername: string;
            }

            namespace SetSexe {
                export const Caption: string;
                export const Civility: string;
                export const DefaultValue: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUsername: string;
                export const IsActive: string;
                export const SexeId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUsername: string;
            }

            namespace SetSexeLang {
                export const Caption: string;
                export const Id: string;
                export const LanguageId: string;
                export const SexeCaption: string;
                export const SexeCivility: string;
                export const SexeDefaultValue: string;
                export const SexeId: string;
                export const SexeInsertDate: string;
                export const SexeInsertUserId: string;
                export const SexeIsActive: string;
                export const SexeUpdateDate: string;
                export const SexeUpdateUserId: string;
            }

            namespace SetUelnorga {
                export const DefaultValue: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUsername: string;
                export const IsActive: string;
                export const Organization: string;
                export const UelnCode: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUsername: string;
            }
        }

        namespace Northwind {

            namespace Category {
                export const CategoryID: string;
                export const CategoryName: string;
                export const Description: string;
                export const Picture: string;
            }

            namespace CategoryLang {
                export const CategoryId: string;
                export const CategoryName: string;
                export const Description: string;
                export const Id: string;
                export const LanguageId: string;
            }

            namespace Customer {
                export const Address: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const Country: string;
                export const CustomerID: string;
                export const Email: string;
                export const Fax: string;
                export const ID: string;
                export const LastContactDate: string;
                export const LastContactedBy: string;
                export const NoteList: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
                export const Representatives: string;
                export const SendBulletin: string;
            }

            namespace CustomerCustomerDemo {
                export const CustomerAddress: string;
                export const CustomerCity: string;
                export const CustomerCompanyName: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountry: string;
                export const CustomerFax: string;
                export const CustomerID: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerRegion: string;
                export const CustomerTypeCustomerDesc: string;
                export const CustomerTypeID: string;
                export const ID: string;
            }

            namespace CustomerDemographic {
                export const CustomerDesc: string;
                export const CustomerTypeID: string;
                export const ID: string;
            }

            namespace CustomerDetails {
                export const Email: string;
                export const Id: string;
                export const LastContactDate: string;
                export const LastContactedBy: string;
                export const LastContactedByAddress: string;
                export const LastContactedByBirthDate: string;
                export const LastContactedByCity: string;
                export const LastContactedByCountry: string;
                export const LastContactedByExtension: string;
                export const LastContactedByFirstName: string;
                export const LastContactedByHireDate: string;
                export const LastContactedByHomePhone: string;
                export const LastContactedByLastName: string;
                export const LastContactedByNotes: string;
                export const LastContactedByPhoto: string;
                export const LastContactedByPhotoPath: string;
                export const LastContactedByPostalCode: string;
                export const LastContactedByRegion: string;
                export const LastContactedByReportsTo: string;
                export const LastContactedByTitle: string;
                export const LastContactedByTitleOfCourtesy: string;
                export const SendBulletin: string;
            }

            namespace CustomerGrossSales {
                export const ContactName: string;
                export const CustomerId: string;
                export const GrossAmount: string;
                export const ProductId: string;
                export const ProductName: string;
            }

            namespace CustomerRepresentatives {
                export const CustomerId: string;
                export const EmployeeId: string;
                export const RepresentativeId: string;
            }

            namespace DragDropSample {
                export const Id: string;
                export const ParentId: string;
                export const Title: string;
            }

            namespace Employee {
                export const Address: string;
                export const BirthDate: string;
                export const City: string;
                export const Country: string;
                export const EmployeeID: string;
                export const Extension: string;
                export const FirstName: string;
                export const FullName: string;
                export const Gender: string;
                export const HireDate: string;
                export const HomePhone: string;
                export const LastName: string;
                export const Notes: string;
                export const Photo: string;
                export const PhotoPath: string;
                export const PostalCode: string;
                export const Region: string;
                export const ReportsTo: string;
                export const ReportsToAddress: string;
                export const ReportsToBirthDate: string;
                export const ReportsToCity: string;
                export const ReportsToCountry: string;
                export const ReportsToExtension: string;
                export const ReportsToFirstName: string;
                export const ReportsToFullName: string;
                export const ReportsToHireDate: string;
                export const ReportsToHomePhone: string;
                export const ReportsToLastName: string;
                export const ReportsToNotes: string;
                export const ReportsToPhoto: string;
                export const ReportsToPhotoPath: string;
                export const ReportsToPostalCode: string;
                export const ReportsToRegion: string;
                export const ReportsToReportsTo: string;
                export const ReportsToTitle: string;
                export const ReportsToTitleOfCourtesy: string;
                export const Title: string;
                export const TitleOfCourtesy: string;
            }

            namespace EmployeeTerritory {
                export const EmployeeAddress: string;
                export const EmployeeBirthDate: string;
                export const EmployeeCity: string;
                export const EmployeeCountry: string;
                export const EmployeeExtension: string;
                export const EmployeeFirstName: string;
                export const EmployeeHireDate: string;
                export const EmployeeHomePhone: string;
                export const EmployeeID: string;
                export const EmployeeLastName: string;
                export const EmployeeNotes: string;
                export const EmployeePhoto: string;
                export const EmployeePhotoPath: string;
                export const EmployeePostalCode: string;
                export const EmployeeRegion: string;
                export const EmployeeReportsTo: string;
                export const EmployeeTitle: string;
                export const EmployeeTitleOfCourtesy: string;
                export const TerritoryID: string;
                export const TerritoryRegionID: string;
                export const TerritoryTerritoryDescription: string;
            }

            namespace Note {
                export const EntityId: string;
                export const EntityType: string;
                export const InsertDate: string;
                export const InsertUserDisplayName: string;
                export const InsertUserId: string;
                export const NoteId: string;
                export const Text: string;
            }

            namespace Order {
                export const CustomerCity: string;
                export const CustomerCompanyName: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountry: string;
                export const CustomerFax: string;
                export const CustomerID: string;
                export const CustomerPhone: string;
                export const CustomerRegion: string;
                export const DetailList: string;
                export const EmployeeFullName: string;
                export const EmployeeGender: string;
                export const EmployeeID: string;
                export const EmployeeReportsToFullName: string;
                export const Freight: string;
                export const OrderDate: string;
                export const OrderID: string;
                export const RequiredDate: string;
                export const ShipAddress: string;
                export const ShipCity: string;
                export const ShipCountry: string;
                export const ShipName: string;
                export const ShipPostalCode: string;
                export const ShipRegion: string;
                export const ShipVia: string;
                export const ShipViaCompanyName: string;
                export const ShipViaPhone: string;
                export const ShippedDate: string;
                export const ShippingState: string;
            }

            namespace OrderDetail {
                export const DetailID: string;
                export const Discount: string;
                export const LineTotal: string;
                export const OrderCustomerID: string;
                export const OrderDate: string;
                export const OrderEmployeeID: string;
                export const OrderID: string;
                export const OrderShipCity: string;
                export const OrderShipCountry: string;
                export const OrderShipVia: string;
                export const OrderShippedDate: string;
                export const ProductDiscontinued: string;
                export const ProductID: string;
                export const ProductName: string;
                export const ProductQuantityPerUnit: string;
                export const ProductSupplierID: string;
                export const ProductUnitPrice: string;
                export const Quantity: string;
                export const UnitPrice: string;
            }

            namespace Product {
                export const CategoryDescription: string;
                export const CategoryID: string;
                export const CategoryName: string;
                export const CategoryPicture: string;
                export const Discontinued: string;
                export const ProductID: string;
                export const ProductImage: string;
                export const ProductName: string;
                export const QuantityPerUnit: string;
                export const ReorderLevel: string;
                export const SupplierAddress: string;
                export const SupplierCity: string;
                export const SupplierCompanyName: string;
                export const SupplierContactName: string;
                export const SupplierContactTitle: string;
                export const SupplierCountry: string;
                export const SupplierFax: string;
                export const SupplierHomePage: string;
                export const SupplierID: string;
                export const SupplierPhone: string;
                export const SupplierPostalCode: string;
                export const SupplierRegion: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
            }

            namespace ProductLang {
                export const Id: string;
                export const LanguageId: string;
                export const ProductId: string;
                export const ProductName: string;
            }

            namespace ProductLog {
                export const CategoryID: string;
                export const ChangingUserId: string;
                export const Discontinued: string;
                export const OperationType: string;
                export const ProductID: string;
                export const ProductImage: string;
                export const ProductLogID: string;
                export const ProductName: string;
                export const QuantityPerUnit: string;
                export const ReorderLevel: string;
                export const SupplierID: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
                export const ValidFrom: string;
                export const ValidUntil: string;
            }

            namespace Region {
                export const RegionDescription: string;
                export const RegionID: string;
            }

            namespace SalesByCategory {
                export const CategoryId: string;
                export const CategoryName: string;
                export const ProductName: string;
                export const ProductSales: string;
            }

            namespace Shipper {
                export const CompanyName: string;
                export const Phone: string;
                export const ShipperID: string;
            }

            namespace Supplier {
                export const Address: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const Country: string;
                export const Fax: string;
                export const HomePage: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
                export const SupplierID: string;
            }

            namespace Territory {
                export const ID: string;
                export const RegionDescription: string;
                export const RegionID: string;
                export const TerritoryDescription: string;
                export const TerritoryID: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const NorthwindPhone: string;
        export const NorthwindPhoneMultiple: string;
        export const SavePrimaryKeyError: string;
    }

    GestionEquestre['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Ge:{AccBankaccount:{AccountOnwer:1,BankAdress:1,Bban:1,Bic:1,CheckDigitsIban:1,Cis:1,CountryCodeIban:1,DateLastPrelevement:1,Id:1,MandateDateSign:1,TypeOfLastPayment:1,TypePayment:1,Urm:1},CorCorporate:{ArchiveDate:1,BankAccount:1,BankAccountAccountOnwer:1,BankAccountBankAdress:1,BankAccountBban:1,BankAccountBic:1,BankAccountCheckDigitsIban:1,BankAccountCis:1,BankAccountCountryCodeIban:1,BankAccountDateLastPrelevement:1,BankAccountMandateDateSign:1,BankAccountTypeOfLastPayment:1,BankAccountTypePayment:1,BankAccountUrm:1,Caption:1,Email1:1,Email2:1,FrSiren:1,Gsm:1,Id:1,IdAdress:1,IdAdressAdress1:1,IdAdressAdress2:1,IdAdressAdress3:1,IdAdressArchiveDate:1,IdAdressBuilding:1,IdAdressCaption:1,IdAdressCedex:1,IdAdressCity:1,IdAdressCountry:1,IdAdressInsertDate:1,IdAdressInsertUserId:1,IdAdressIsActive:1,IdAdressIsArchive:1,IdAdressUpdateDate:1,IdAdressUpdateUserId:1,InsertDate:1,InsertUserId:1,IsActive:1,IsArchive:1,Name:1,OtherPhone1:1,Phone:1,UpdateDate:1,UpdateUserId:1},CorEtab:{ArchiveDate:1,BankAccount:1,BankAccountAccountOnwer:1,BankAccountBankAdress:1,BankAccountBban:1,BankAccountBic:1,BankAccountCheckDigitsIban:1,BankAccountCis:1,BankAccountCountryCodeIban:1,BankAccountDateLastPrelevement:1,BankAccountMandateDateSign:1,BankAccountTypeOfLastPayment:1,BankAccountTypePayment:1,BankAccountUrm:1,Caption:1,Email1:1,Email2:1,FrSiret:1,Gsm:1,Id:1,IdAdress:1,IdAdressAdress1:1,IdAdressAdress2:1,IdAdressAdress3:1,IdAdressArchiveDate:1,IdAdressBuilding:1,IdAdressCaption:1,IdAdressCedex:1,IdAdressCity:1,IdAdressCountry:1,IdAdressInsertDate:1,IdAdressInsertUserId:1,IdAdressIsActive:1,IdAdressIsArchive:1,IdAdressUpdateDate:1,IdAdressUpdateUserId:1,InsertDate:1,InsertUserId:1,IsActive:1,IsArchive:1,Name:1,OtherPhone1:1,Phone:1,UpdateDate:1,UpdateUserId:1},LinkFolderCavalier:{Cavalier:1,CavalierName:1,CavalierPerson:1,Folder:1,Id:1},LinkFolderHorse:{Folder:1,Horse:1,HorseName:1,Id:1},LinkFolderPerson:{Caption:1,Folder:1,Id:1,PersonBusinessName:1,PersonCaption:1,PersonFullName:1,PersonId:1,PersonIsMorale:1,PersonName:1,PersonSurname:1},ManAdress:{Adress1:1,Adress2:1,Adress3:1,ArchiveDate:1,Building:1,Caption:1,Cedex:1,City:1,City1:1,CityCaption:1,CityCountry:1,CityDefaultValue:1,CityFrCodeInsee:1,CityInsertDate:1,CityInsertUserId:1,CityIsActive:1,CityPostCode:1,CityUpdateDate:1,CityUpdateUserId:1,Country:1,CountryCodeUe:1,CountryDefaultValue:1,CountryISOcode:1,CountryInsertDate:1,CountryInsertUserId:1,CountryIsActive:1,CountryName_EN_gb:1,CountryName_FR_fr:1,CountryUpdateDate:1,CountryUpdateUserId:1,Countryalpha2:1,Countryalpha3:1,Id:1,InsertDate:1,InsertUserId:1,InsertUsername:1,IsActive:1,IsArchive:1,UpdateDate:1,UpdateUserId:1,UpdateUsername:1},ManCavaliers:{ArchiveDate:1,Caption:1,DateCertificatMedical:1,InsertDate:1,InsertUserId:1,InsertUsername:1,IsActive:1,IsArchive:1,LicFfe:1,LicenceCompetition:1,LicenceCompetitionCaption:1,LicenceCompetitionCode:1,LicenceCompetitionDefaultValue:1,LicenceCompetitionInsertDate:1,LicenceCompetitionInsertUserId:1,LicenceCompetitionIsActive:1,LicenceCompetitionUpdateDate:1,LicenceCompetitionUpdateUserId:1,MilesimeLicnece:1,NiveauGalop:1,NiveauGalopCaption:1,NiveauGalopCode:1,NiveauGalopDefaultValue:1,NiveauGalopInsertDate:1,NiveauGalopInsertUserId:1,NiveauGalopIsActive:1,NiveauGalopUpdateDate:1,NiveauGalopUpdateUserId:1,Person:1,PersonArchiveDate:1,PersonBankAccount:1,PersonBirthCity:1,PersonBirthCountry:1,PersonBirthday:1,PersonBusinessName:1,PersonCaption:1,PersonEmail1:1,PersonEmail2:1,PersonFullName:1,PersonGsm:1,PersonIdAdress:1,PersonInsertDate:1,PersonInsertUserId:1,PersonIsActive:1,PersonIsArchive:1,PersonIsMorale:1,PersonMaidenName:1,PersonMaritalStatus:1,PersonName:1,PersonNationality:1,PersonOtherPhone1:1,PersonOtherPhone2:1,PersonPhone:1,PersonPhoto:1,PersonSexe:1,PersonSurname:1,PersonUpdateDate:1,PersonUpdateUserId:1,PersonWorkPhone:1,UpdateDate:1,UpdateUserId:1,UpdateUsername:1},ManFolder:{ArchiveDate:1,Caption:1,CloseDate:1,CloseRaison:1,Comment:1,CreateDate:1,Establishment:1,Id:1,InsertDate:1,InsertUserId:1,InsertUsername:1,IsActive:1,IsArchive:1,UpdateDate:1,UpdateUserId:1,UpdateUsername:1},ManHorses:{ArchiveDate:1,BirthCountry:1,BirthCountryDefaultValue:1,BirthCountryISOcode:1,BirthCountryInsertDate:1,BirthCountryInsertUserId:1,BirthCountryIsActive:1,BirthCountryName_FR_fr:1,BirthCountryUpdateDate:1,BirthCountryUpdateUserId:1,BirthCountryalpha3:1,BirthOrganization:1,BirthOrganizationDefaultValue:1,BirthOrganizationInsertDate:1,BirthOrganizationInsertUserId:1,BirthOrganizationIsActive:1,BirthOrganizationOrganization:1,BirthOrganizationUelnCode:1,BirthOrganizationUpdateDate:1,BirthOrganizationUpdateUserId:1,Birthday:1,CleSire:1,Color:1,Description:1,FinalExit:1,Hnin:1,InsertDate:1,InsertUserId:1,InsertUsername:1,IsActive:1,IsArchive:1,Name:1,Race:1,Sexe:1,SexeCaption:1,SexeCivility:1,SexeDefaultValue:1,SexeInsertDate:1,SexeInsertUserId:1,SexeIsActive:1,SexeUpdateDate:1,SexeUpdateUserId:1,Sire:1,Transponder:1,Ueln:1,UpdateDate:1,UpdateUserId:1,UpdateUsername:1},ManOwner:{Cavalier:1,CavalierArchiveDate:1,CavalierCaption:1,CavalierDateCertificatMedical:1,CavalierInsertDate:1,CavalierInsertUserId:1,CavalierIsActive:1,CavalierIsArchive:1,CavalierLicenceCompetition:1,CavalierMilesimeLicnece:1,CavalierNiveauGalop:1,CavalierPerson:1,CavalierUpdateDate:1,CavalierUpdateUserId:1,Horse:1,HorseArchiveDate:1,HorseBirthCountry:1,HorseBirthOrganization:1,HorseBirthday:1,HorseCleSire:1,HorseColor:1,HorseDescription:1,HorseFinalExit:1,HorseHnin:1,HorseInsertDate:1,HorseInsertUserId:1,HorseIsActive:1,HorseIsArchive:1,HorseName:1,HorseRace:1,HorseSexe:1,HorseSire:1,HorseTransponder:1,HorseUpdateDate:1,HorseUpdateUserId:1,Id:1,Part:1},ManPerson:{ArchiveDate:1,BankAccount:1,BankAccountAccountOnwer:1,BankAccountBankAdress:1,BankAccountBban:1,BankAccountBic:1,BankAccountCheckDigitsIban:1,BankAccountCis:1,BankAccountCountryCodeIban:1,BankAccountDateLastPrelevement:1,BankAccountMandateDateSign:1,BankAccountTypeOfLastPayment:1,BankAccountTypePayment:1,BankAccountUrm:1,BirthCity:1,BirthCityCaption:1,BirthCityCity:1,BirthCityCountry:1,BirthCityDefaultValue:1,BirthCityFrCodeInsee:1,BirthCityInsertDate:1,BirthCityInsertUserId:1,BirthCityIsActive:1,BirthCityPostCode:1,BirthCityUpdateDate:1,BirthCityUpdateUserId:1,BirthCountry:1,BirthCountryCodeUe:1,BirthCountryDefaultValue:1,BirthCountryISOcode:1,BirthCountryInsertDate:1,BirthCountryInsertUserId:1,BirthCountryIsActive:1,BirthCountryName_EN_gb:1,BirthCountryName_FR_fr:1,BirthCountryUpdateDate:1,BirthCountryUpdateUserId:1,BirthCountryalpha2:1,BirthCountryalpha3:1,Birthday:1,BusinessName:1,Caption:1,Email1:1,Email2:1,FullName:1,Gsm:1,Id:1,IdAdress:1,IdAdressAdress1:1,IdAdressAdress2:1,IdAdressAdress3:1,IdAdressArchiveDate:1,IdAdressBuilding:1,IdAdressCaption:1,IdAdressCedex:1,IdAdressCity:1,IdAdressCountry:1,IdAdressInsertDate:1,IdAdressInsertUserId:1,IdAdressIsActive:1,IdAdressIsArchive:1,IdAdressUpdateDate:1,IdAdressUpdateUserId:1,InsertDate:1,InsertUserId:1,InsertUsername:1,IsActive:1,IsArchive:1,IsMorale:1,MaidenName:1,MaritalStatus:1,MaritalStatusCaption:1,MaritalStatusCode:1,MaritalStatusDefaultValue:1,MaritalStatusInsertDate:1,MaritalStatusInsertUserId:1,MaritalStatusIsActive:1,MaritalStatusUpdateDate:1,MaritalStatusUpdateUserId:1,Name:1,Nationality:1,NationalityCodeUe:1,NationalityDefaultValue:1,NationalityISOcode:1,NationalityInsertDate:1,NationalityInsertUserId:1,NationalityIsActive:1,NationalityName_EN_gb:1,NationalityName_FR_fr:1,NationalityUpdateDate:1,NationalityUpdateUserId:1,Nationalityalpha2:1,Nationalityalpha3:1,OtherPhone1:1,OtherPhone2:1,Phone:1,Photo:1,Sexe:1,SexeCaption:1,SexeCivility:1,SexeDefaultValue:1,SexeInsertDate:1,SexeInsertUserId:1,SexeIsActive:1,SexeUpdateDate:1,SexeUpdateUserId:1,Surname:1,UpdateDate:1,UpdateUserId:1,UpdateUsername:1,WorkPhone:1},SetCity:{Caption:1,City:1,Country:1,CountryCodeUe:1,CountryDefaultValue:1,CountryISOcode:1,CountryInsertDate:1,CountryInsertUserId:1,CountryIsActive:1,CountryName_FR_fr:1,CountryUpdateDate:1,CountryUpdateUserId:1,Countryalpha3:1,DefaultValue:1,FrCodeInsee:1,Id:1,InsertDate:1,InsertUserId:1,InsertUsername:1,IsActive:1,PostCode:1,UpdateDate:1,UpdateUserId:1,UpdateUsername:1},SetCountry:{CodeUe:1,DefaultValue:1,ISOcode:1,Id:1,InsertDate:1,InsertUserId:1,InsertUsername:1,IsActive:1,Name_EN_gb:1,Name_FR_fr:1,UpdateDate:1,UpdateUserId:1,UpdateUsername:1,alpha2:1,alpha3:1},SetGalop:{Caption:1,Code:1,DefaultValue:1,Id:1,InsertDate:1,InsertUserId:1,InsertUsername:1,IsActive:1,UpdateDate:1,UpdateUserId:1,UpdateUsername:1},SetLfc:{Caption:1,Code:1,DefaultValue:1,Id:1,InsertDate:1,InsertUserId:1,InsertUsername:1,IsActive:1,UpdateDate:1,UpdateUserId:1,UpdateUsername:1},SetMaritalstatus:{Caption:1,Code:1,DefaultValue:1,Id:1,InsertDate:1,InsertUserId:1,InsertUsername:1,IsActive:1,UpdateDate:1,UpdateUserId:1,UpdateUsername:1},SetSexe:{Caption:1,Civility:1,DefaultValue:1,InsertDate:1,InsertUserId:1,InsertUsername:1,IsActive:1,SexeId:1,UpdateDate:1,UpdateUserId:1,UpdateUsername:1},SetSexeLang:{Caption:1,Id:1,LanguageId:1,SexeCaption:1,SexeCivility:1,SexeDefaultValue:1,SexeId:1,SexeInsertDate:1,SexeInsertUserId:1,SexeIsActive:1,SexeUpdateDate:1,SexeUpdateUserId:1},SetUelnorga:{DefaultValue:1,Id:1,InsertDate:1,InsertUserId:1,InsertUsername:1,IsActive:1,Organization:1,UelnCode:1,UpdateDate:1,UpdateUserId:1,UpdateUsername:1}},Northwind:{Category:{CategoryID:1,CategoryName:1,Description:1,Picture:1},CategoryLang:{CategoryId:1,CategoryName:1,Description:1,Id:1,LanguageId:1},Customer:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,Country:1,CustomerID:1,Email:1,Fax:1,ID:1,LastContactDate:1,LastContactedBy:1,NoteList:1,Phone:1,PostalCode:1,Region:1,Representatives:1,SendBulletin:1},CustomerCustomerDemo:{CustomerAddress:1,CustomerCity:1,CustomerCompanyName:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountry:1,CustomerFax:1,CustomerID:1,CustomerPhone:1,CustomerPostalCode:1,CustomerRegion:1,CustomerTypeCustomerDesc:1,CustomerTypeID:1,ID:1},CustomerDemographic:{CustomerDesc:1,CustomerTypeID:1,ID:1},CustomerDetails:{Email:1,Id:1,LastContactDate:1,LastContactedBy:1,LastContactedByAddress:1,LastContactedByBirthDate:1,LastContactedByCity:1,LastContactedByCountry:1,LastContactedByExtension:1,LastContactedByFirstName:1,LastContactedByHireDate:1,LastContactedByHomePhone:1,LastContactedByLastName:1,LastContactedByNotes:1,LastContactedByPhoto:1,LastContactedByPhotoPath:1,LastContactedByPostalCode:1,LastContactedByRegion:1,LastContactedByReportsTo:1,LastContactedByTitle:1,LastContactedByTitleOfCourtesy:1,SendBulletin:1},CustomerGrossSales:{ContactName:1,CustomerId:1,GrossAmount:1,ProductId:1,ProductName:1},CustomerRepresentatives:{CustomerId:1,EmployeeId:1,RepresentativeId:1},DragDropSample:{Id:1,ParentId:1,Title:1},Employee:{Address:1,BirthDate:1,City:1,Country:1,EmployeeID:1,Extension:1,FirstName:1,FullName:1,Gender:1,HireDate:1,HomePhone:1,LastName:1,Notes:1,Photo:1,PhotoPath:1,PostalCode:1,Region:1,ReportsTo:1,ReportsToAddress:1,ReportsToBirthDate:1,ReportsToCity:1,ReportsToCountry:1,ReportsToExtension:1,ReportsToFirstName:1,ReportsToFullName:1,ReportsToHireDate:1,ReportsToHomePhone:1,ReportsToLastName:1,ReportsToNotes:1,ReportsToPhoto:1,ReportsToPhotoPath:1,ReportsToPostalCode:1,ReportsToRegion:1,ReportsToReportsTo:1,ReportsToTitle:1,ReportsToTitleOfCourtesy:1,Title:1,TitleOfCourtesy:1},EmployeeTerritory:{EmployeeAddress:1,EmployeeBirthDate:1,EmployeeCity:1,EmployeeCountry:1,EmployeeExtension:1,EmployeeFirstName:1,EmployeeHireDate:1,EmployeeHomePhone:1,EmployeeID:1,EmployeeLastName:1,EmployeeNotes:1,EmployeePhoto:1,EmployeePhotoPath:1,EmployeePostalCode:1,EmployeeRegion:1,EmployeeReportsTo:1,EmployeeTitle:1,EmployeeTitleOfCourtesy:1,TerritoryID:1,TerritoryRegionID:1,TerritoryTerritoryDescription:1},Note:{EntityId:1,EntityType:1,InsertDate:1,InsertUserDisplayName:1,InsertUserId:1,NoteId:1,Text:1},Order:{CustomerCity:1,CustomerCompanyName:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountry:1,CustomerFax:1,CustomerID:1,CustomerPhone:1,CustomerRegion:1,DetailList:1,EmployeeFullName:1,EmployeeGender:1,EmployeeID:1,EmployeeReportsToFullName:1,Freight:1,OrderDate:1,OrderID:1,RequiredDate:1,ShipAddress:1,ShipCity:1,ShipCountry:1,ShipName:1,ShipPostalCode:1,ShipRegion:1,ShipVia:1,ShipViaCompanyName:1,ShipViaPhone:1,ShippedDate:1,ShippingState:1},OrderDetail:{DetailID:1,Discount:1,LineTotal:1,OrderCustomerID:1,OrderDate:1,OrderEmployeeID:1,OrderID:1,OrderShipCity:1,OrderShipCountry:1,OrderShipVia:1,OrderShippedDate:1,ProductDiscontinued:1,ProductID:1,ProductName:1,ProductQuantityPerUnit:1,ProductSupplierID:1,ProductUnitPrice:1,Quantity:1,UnitPrice:1},Product:{CategoryDescription:1,CategoryID:1,CategoryName:1,CategoryPicture:1,Discontinued:1,ProductID:1,ProductImage:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,SupplierAddress:1,SupplierCity:1,SupplierCompanyName:1,SupplierContactName:1,SupplierContactTitle:1,SupplierCountry:1,SupplierFax:1,SupplierHomePage:1,SupplierID:1,SupplierPhone:1,SupplierPostalCode:1,SupplierRegion:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1},ProductLang:{Id:1,LanguageId:1,ProductId:1,ProductName:1},ProductLog:{CategoryID:1,ChangingUserId:1,Discontinued:1,OperationType:1,ProductID:1,ProductImage:1,ProductLogID:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,SupplierID:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1,ValidFrom:1,ValidUntil:1},Region:{RegionDescription:1,RegionID:1},SalesByCategory:{CategoryId:1,CategoryName:1,ProductName:1,ProductSales:1},Shipper:{CompanyName:1,Phone:1,ShipperID:1},Supplier:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,Country:1,Fax:1,HomePage:1,Phone:1,PostalCode:1,Region:1,SupplierID:1},Territory:{ID:1,RegionDescription:1,RegionID:1,TerritoryDescription:1,TerritoryID:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,NorthwindPhone:1,NorthwindPhoneMultiple:1,SavePrimaryKeyError:1}});
}

