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
            export declare const Ueln: string;
            export declare const Sire: string;
            export declare const CleSire: string;
            export declare const Hnin: string;
            export declare const BirthCountry: string;
            export declare const BirthOrganization: string;
            export declare const Name: string;
            export declare const IsActive: string;
            export declare const NotArchive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Birthday: string;
            export declare const Sexe: string;
            export declare const Color: string;
            export declare const Race: string;
            export declare const Transponder: string;
            export declare const FinalExit: string;
            export declare const Description: string;
            export declare const ArchiveDate: string;
            export declare const BirthCountryDefaultValue: string;
            export declare const BirthCountryIsActive: string;
            export declare const BirthCountryInsertDate: string;
            export declare const BirthCountryInsertUserId: string;
            export declare const BirthCountryUpdateDate: string;
            export declare const BirthCountryUpdateUserId: string;
            export declare const BirthCountryCountry: string;
            export declare const BirthCountryCode: string;
            export declare const BirthCountryCodeUe: string;
            export declare const BirthCountryIso3166Country: string;
            export declare const BirthOrganizationDefaultValue: string;
            export declare const BirthOrganizationIsActive: string;
            export declare const BirthOrganizationInsertDate: string;
            export declare const BirthOrganizationInsertUserId: string;
            export declare const BirthOrganizationUpdateDate: string;
            export declare const BirthOrganizationUpdateUserId: string;
            export declare const BirthOrganizationOrganization: string;
            export declare const BirthOrganizationUelnOrganization: string;
            export declare const SexeDefaultValue: string;
            export declare const SexeIsActive: string;
            export declare const SexeInsertDate: string;
            export declare const SexeInsertUserId: string;
            export declare const SexeUpdateDate: string;
            export declare const SexeUpdateUserId: string;
            export declare const SexeCaption: string;
            export declare const SexeCivility: string;
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

