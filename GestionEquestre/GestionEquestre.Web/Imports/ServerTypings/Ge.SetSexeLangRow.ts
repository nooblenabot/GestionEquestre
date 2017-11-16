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
            export declare const Id: string;
            export declare const SexeId: string;
            export declare const LanguageId: string;
            export declare const Caption: string;
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

