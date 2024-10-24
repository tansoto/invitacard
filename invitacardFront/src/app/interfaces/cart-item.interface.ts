//Esta interfaz definirá los elementos que se agregan al carrito de compras, incluyendo el producto y sus opciones de personalización.

import { Invitacion} from './invitacion.interface'; // Importar la interfaz del producto
import { Customization } from './customization.interface'; // Importar la interfaz de personalización

export interface CartItem {
    product: Invitacion; // El producto seleccionado
    customization: Customization; // Opciones de personalización del producto
}
