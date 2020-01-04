using Serenity.Services;

namespace GestionEquestre.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}