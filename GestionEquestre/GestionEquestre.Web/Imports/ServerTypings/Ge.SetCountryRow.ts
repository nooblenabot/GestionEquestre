
namespace GestionEquestre.Ge {
    export interface SetCountryRow {
        Id?: string;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Country?: string;
        Code?: string;
        CodeUe?: number;
        Iso3166Country?: string;
    }

    export namespace SetCountryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Country';
        export const localTextPrefix = 'Ge.SetCountry';

        export namespace Fields {
            export declare const Id;
            export declare const DefaultValue;
            export declare const IsActive;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const Country;
            export declare const Code;
            export declare const CodeUe;
            export declare const Iso3166Country;
        }

        [
            'Id',
            'DefaultValue',
            'IsActive',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'Country',
            'Code',
            'CodeUe',
            'Iso3166Country'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}