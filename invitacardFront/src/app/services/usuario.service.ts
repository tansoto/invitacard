import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';  // Crea una interfaz o modelo para Usuario

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/usuarios';  // Cambia a tu URL del backend

  constructor(private http: HttpClient) { }

  // Método para crear un usuario (POST)
  crearUsuario(usuario: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(this.apiUrl, usuario, { headers });
  }

  // Método para obtener todos los usuarios (GET)
  obtenerUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
