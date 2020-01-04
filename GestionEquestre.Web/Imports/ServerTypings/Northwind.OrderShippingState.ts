namespace GestionEquestre.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'GestionEquestre.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

