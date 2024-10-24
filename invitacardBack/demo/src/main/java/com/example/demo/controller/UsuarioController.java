package com.example.demo.controller;
import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController//Indica que es un controlador
@RequestMapping("/usuarios")//Indica la ruta de acceso
public class UsuarioController {
    @Autowired//Inyección de dependencias
    private UsuarioRepository usuarioRepository;//Instancia de la interfaz UsuarioRepository

    //Método para agregar un usuario
    @PostMapping
    public Usuario agregarUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    //Método para obtener todos los usuarios
    @GetMapping
    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    //Método para obtener un usuario por su id
    @GetMapping("/{id}")
    public Usuario obtenerUsuario(@PathVariable Long id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    //Método para actualizar un usuario
    @PutMapping("/{id}")
    public Usuario actualizarUsuario(@PathVariable Long id, @RequestBody Usuario usuario) {
        Usuario usuarioActual = usuarioRepository.findById(id).orElse(null);
        if (usuarioActual != null) {
            usuarioActual.setNombre(usuario.getNombre());
            usuarioActual.setEmail(usuario.getEmail());
            usuarioActual.setPassword(usuario.getPassword());
            return usuarioRepository.save(usuarioActual);
        }
        return null;
    }
    //metodo para eliminar un usuario
    @DeleteMapping("/{id}")
    public void eliminarUsuario(@PathVariable Long id){
        usuarioRepository.deleteById(id);
    }
}
