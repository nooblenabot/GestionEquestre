
namespace GestionEquestre.Ge {
    export interface SetSexeLangRow {
        Id?: number;
        SexeId?: number;
        LanguageId?: number;
        Caption?: string;
        SexeDefaultValue?: boolean;
        SexeIsActive?: boolean;
        SexeInsertDate?: string;
        SexeInsertUserId?: number;
        SexeUpdateDate?: string;
        SexeUpdateUserId?: number;
        SexeCaption?: string;
        SexeCivility?: string;
    }

    export namespace SetSexeLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.SetSexeLang';

        export namespace Fields {
            export declare const Id;
            export declare const SexeId;
            export declare const LanguageId;
            export declare const Caption;
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
            'Id',
            'SexeId',
            'LanguageId',
            'Caption',
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