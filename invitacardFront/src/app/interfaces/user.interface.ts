// Esta interfaz se encargará de definir la estructura de los usuarios que utilizan la aplicación.
export interface User {
    nombre: string; // Nombre del usuario
    email: string; // Correo electrónico del usuario
    password: string; // Contraseña del usuario (si es necesario)
    fechaRegistro: Date; // Fecha de registro del usuario
}
