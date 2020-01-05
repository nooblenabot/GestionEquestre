namespace GestionEquestre.Ge {
    export interface ManPersonForm {
        IsMorale: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Surname: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        FullName: Serenity.StringEditor;
        MaidenName: Serenity.StringEditor;
        BusinessName: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        Birthday: Serenity.DateEditor;
        Sexe: Serenity.LookupEditor;
        MaritalStatus: Serenity.LookupEditor;
        BirthCity: Serenity.LookupEditor;
        BirthCountry: Serenity.LookupEditor;
        Nationality: Serenity.LookupEditor;
        Photo: Serenity.ImageUploadEditor;
        Phone: Serenity.StringEditor;
        Gsm: Serenity.StringEditor;
        WorkPhone: Serenity.StringEditor;
        OtherPhone1: Serenity.StringEditor;
        OtherPhone2: Serenity.StringEditor;
        Email1: Serenity.EmailEditor;
        Email2: Serenity.EmailEditor;
        BankAccount: Serenity.StringEditor;
        IdAdress: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    export class ManPersonForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManPerson';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ManPersonForm.init)  {
                ManPersonForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.LookupEditor;
                var w4 = s.ImageUploadEditor;
                var w5 = s.EmailEditor;

                Q.initFormType(ManPersonForm, [
                    'IsMorale', w0,
                    'IsActive', w0,
                    'IsArchive', w0,
                    'InsertDate', w1,
                    'InsertUsername', w2,
                    'UpdateDate', w1,
                    'UpdateUsername', w2,
                    'Surname', w2,
                    'Name', w2,
                    'FullName', w2,
                    'MaidenName', w2,
                    'BusinessName', w2,
                    'Caption', w2,
                    'Birthday', w1,
                    'Sexe', w3,
                    'MaritalStatus', w3,
                    'BirthCity', w3,
                    'BirthCountry', w3,
                    'Nationality', w3,
                    'Photo', w4,
                    'Phone', w2,
                    'Gsm', w2,
                    'WorkPhone', w2,
                    'OtherPhone1', w2,
                    'OtherPhone2', w2,
                    'Email1', w5,
                    'Email2', w5,
                    'BankAccount', w2,
                    'IdAdress', w2,
                    'ArchiveDate', w1
                ]);
            }
        }
    }
}

