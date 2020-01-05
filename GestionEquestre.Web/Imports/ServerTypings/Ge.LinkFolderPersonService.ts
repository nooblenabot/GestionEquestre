namespace GestionEquestre.Ge {
    export namespace LinkFolderPersonService {
        export const baseUrl = 'Ge/LinkFolderPerson';

        export declare function Create(request: Serenity.SaveRequest<LinkFolderPersonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<LinkFolderPersonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LinkFolderPersonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LinkFolderPersonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Ge/LinkFolderPerson/Create",
            Update = "Ge/LinkFolderPerson/Update",
            Delete = "Ge/LinkFolderPerson/Delete",
            Retrieve = "Ge/LinkFolderPerson/Retrieve",
            List = "Ge/LinkFolderPerson/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>LinkFolderPersonService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

