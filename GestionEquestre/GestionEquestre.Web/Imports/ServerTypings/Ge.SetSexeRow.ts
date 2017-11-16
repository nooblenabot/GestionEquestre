namespace GestionEquestre.Ge {
    export interface SetSexeRow {
        SexeId?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Caption?: string;
        Civility?: string;
        InsertUsername?: string;
        UpdateUsername?: string;
    }

    export namespace SetSexeRow {
        export const idProperty = 'SexeId';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'Ge.SetSexe';
        export const lookupKey = 'Ge.SexeHorses';

        export function getLookup(): Q.Lookup<SetSexeRow> {
            return Q.getLookup<SetSexeRow>('Ge.SexeHorses');
        }

        export namespace Fields {
            export declare const SexeId: string;
            export declare const DefaultValue: string;
            export declare const IsActive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Caption: string;
            export declare const Civility: string;
            export declare const InsertUsername: string;
            export declare const UpdateUsername: string;
        }

        [
            'SexeId', 
            'DefaultValue', 
            'IsActive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Caption', 
            'Civility', 
            'InsertUsername', 
            'UpdateUsername'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

