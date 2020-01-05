namespace GestionEquestre.Ge {
    export namespace LinkFolderHorseService {
        export const baseUrl = 'Ge/LinkFolderHorse';

        export declare function Create(request: Serenity.SaveRequest<LinkFolderHorseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<LinkFolderHorseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LinkFolderHorseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LinkFolderHorseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Ge/LinkFolderHorse/Create",
            Update = "Ge/LinkFolderHorse/Update",
            Delete = "Ge/LinkFolderHorse/Delete",
            Retrieve = "Ge/LinkFolderHorse/Retrieve",
            List = "Ge/LinkFolderHorse/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>LinkFolderHorseService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

