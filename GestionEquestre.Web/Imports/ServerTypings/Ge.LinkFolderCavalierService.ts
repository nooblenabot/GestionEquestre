namespace GestionEquestre.Ge {
    export namespace LinkFolderCavalierService {
        export const baseUrl = 'Ge/LinkFolderCavalier';

        export declare function Create(request: Serenity.SaveRequest<LinkFolderCavalierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<LinkFolderCavalierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LinkFolderCavalierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LinkFolderCavalierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Ge/LinkFolderCavalier/Create",
            Update = "Ge/LinkFolderCavalier/Update",
            Delete = "Ge/LinkFolderCavalier/Delete",
            Retrieve = "Ge/LinkFolderCavalier/Retrieve",
            List = "Ge/LinkFolderCavalier/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>LinkFolderCavalierService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

