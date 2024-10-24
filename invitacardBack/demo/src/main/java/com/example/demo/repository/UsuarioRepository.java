package com.example.demo.repository;//indicamos el paquete donde se encuentra
import com.example.demo.model.Usuario;  //importamos la clase Usuario
import org.springframework.data.jpa.repository.JpaRepository;   //importamos la interfaz JpaRepository

//Interfaz que extiende de JpaRepository para poder realizar las operaciones CRUD
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
