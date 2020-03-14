import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/model/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  formularioGrp: FormGroup;

  messages = {
    'usuario': {
      'required': 'El campo es obligatorio'
    },
    'contrasenia': {
      'required': 'El campo es obligatorio'
    },
    'perfil': {
      'required': 'El campo es obligatorio'
    }
  };
  formErrors = {
    'usuario': '',
    'contrasenia': '',
    'perfil': ''
  };

  constructor(private fb: FormBuilder, private router: Router, @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      usuario: ['', [Validators.required]],
      contrasenia: ['', [Validators.required]],
      perfil: ['', [Validators.required]]
    });

    this.formularioGrp.get('usuario').setValue('admin');
    this.formularioGrp.get('contrasenia').setValue('1234');
  }

  autenticar() {
    this.usuario.usuario = this.formularioGrp.get('usuario').value;
    this.usuario.contrasenia = this.formularioGrp.get('contrasenia').value;

    localStorage.setItem('user', JSON.stringify(this.usuario));
    this.user.setId = 1;
    this.user.setUsuario = this.usuario.usuario;
    this.user.setContrasenia = this.usuario.contrasenia;
    this.user.setIdUnidad = this.usuario.idUnidad;
    this.user.setIdTambo = this.usuario.idTambo;
    console.log(this.usuario);
    this.router.navigate(['/intranet/home']);
  }

}
