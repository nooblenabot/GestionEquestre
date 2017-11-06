
namespace GestionEquestre.Ge {
    export interface ManHorsesRow {
        Ueln?: string;
        Sire?: string;
        CleSire?: string;
        Hnin?: string;
        BirthCountry?: string;
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
        BirthCountryCountry?: string;
        BirthCountryCode?: string;
        BirthCountryCodeUe?: number;
        BirthCountryIso3166Country?: string;
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

    export namespace ManHorsesRow {
        export const idProperty = 'Ueln';
        export const nameProperty = 'Ueln';
        export const localTextPrefix = 'Ge.ManHorses';

        export namespace Fields {
            export declare const Ueln;
            export declare const Sire;
            export declare const CleSire;
            export declare const Hnin;
            export declare const BirthCountry;
            export declare const BirthOrganization;
            export declare const Name;
            export declare const IsActive;
            export declare const NotArchive;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const Birthday;
            export declare const Sexe;
            export declare const Color;
            export declare const Race;
            export declare const Transponder;
            export declare const FinalExit;
            export declare const Description;
            export declare const ArchiveDate;
            export declare const BirthCountryDefaultValue;
            export declare const BirthCountryIsActive;
            export declare const BirthCountryInsertDate;
            export declare const BirthCountryInsertUserId;
            export declare const BirthCountryUpdateDate;
            export declare const BirthCountryUpdateUserId;
            export declare const BirthCountryCountry;
            export declare const BirthCountryCode;
            export declare const BirthCountryCodeUe;
            export declare const BirthCountryIso3166Country;
            export declare const BirthOrganizationDefaultValue;
            export declare const BirthOrganizationIsActive;
            export declare const BirthOrganizationInsertDate;
            export declare const BirthOrganizationInsertUserId;
            export declare const BirthOrganizationUpdateDate;
            export declare const BirthOrganizationUpdateUserId;
            export declare const BirthOrganizationOrganization;
            export declare const BirthOrganizationUelnOrganization;
            export declare const SexeDefaultValue;
            export declare const SexeIsActive;
            export declare const SexeInsertDate;
            export declare const SexeInsertUserId;
            export declare const SexeUpdateDate;
            export declare const SexeUpdateUserId;
            export declare const SexeCaption;
            export declare const SexeCivility;
        }

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
            'BirthOrganizationInsertDate',
            'BirthOrganizationInsertUserId',
            'BirthOrganizationUpdateDate',
            'BirthOrganizationUpdateUserId',
            'BirthOrganizationOrganization',
            'BirthOrganizationUelnOrganization',
            'SexeDefaultValue',
            'SexeIsActive',
            'SexeInsertDate',
            'SexeInsertUserId',
            'SexeUpdateDate',
            'SexeUpdateUserId',
            'SexeCaption',
            'SexeCivility'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}