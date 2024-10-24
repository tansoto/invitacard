import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { User } from '../../interfaces/user.interface';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  usuarios: User[] = [];
  nuevoUsuario: User = {
    nombre: '',
    email: '',
    password: '',
    fechaRegistro: new Date()
  };

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private usuarioService: UsuarioService, private messageService: MessageService) {
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value 
          ? null : { mismatch: true };
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.crearUsuario();
    console.log(this.registerForm.value);
    // Aquí puedes agregar la lógica para enviar los datos al backend.
  }
  
  // Método para crear un usuario
  crearUsuario(): void {

    console.log('Usuario a crear antes:', this.nuevoUsuario);
    this.nuevoUsuario.nombre = this.registerForm.get('fullName')?.value;
    this.nuevoUsuario.email = this.registerForm.get('email')?.value;
    this.nuevoUsuario.password = this.registerForm.get('password')?.value;
    console.log('Usuario a crear despues:', this.nuevoUsuario);

    this.usuarioService.crearUsuario(this.nuevoUsuario).subscribe(
      (usuario: User) => {
        console.log('Usuario creado:', usuario);
        this.msjExito();
      },
      (error) => {
        console.error('Error al crear usuario:', error);
        this.msjError();
      }
    );
    
  }    

  msjExito() {
    this.messageService.clear();
    this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Se registro correctamente' });
  }
  msjError() {
    this.messageService.clear();
    this.messageService.add({ severity: 'error', summary: 'error', detail: 'Email incorrecto o ya existente' });
}
}