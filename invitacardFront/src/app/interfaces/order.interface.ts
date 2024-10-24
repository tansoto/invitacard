// order.interface.ts
import { CartItem } from './cart-item.interface'; // Importar la interfaz del carrito

export interface Order {
    orderId: number; // Identificador único del pedido
    userId: number; // Identificador del usuario que realizó el pedido
    items: CartItem[]; // Lista de elementos en el pedido
    totalAmount: number; // Monto total del pedido
    orderDate: Date; // Fecha en que se realizó el pedido
}
