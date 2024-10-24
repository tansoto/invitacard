export interface Invitacion {
    id: number; // Identificador único del producto
    name: string; // Nombre del producto
    description: string; // Descripción del producto
    price: number; // Precio del producto
    imageUrl: string; // URL de la imagen del producto
    categoria: string; // Categoría del producto
    formato: string; // Formato de la invitacion, video imagen etc
}