import { Component, Inject, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { Usuario } from 'src/app/core/model/usuario.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() showSubmenu1: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.consultarUsuario();
    console.log(this.user);
  }

  get getUser(): UsuarioService {
    return this.user;
  }

  public consultarUsuario() {
    let usuario: Usuario = JSON.parse(localStorage.getItem('user'));
    this.user.setId = 1;
    this.user.setUsuario = usuario.usuario;
    this.user.setContrasenia = usuario.contrasenia;
    this.user.idUnidad = usuario.idUnidad;
    this.user.idTambo = usuario.idTambo;
    this.user.nomUnidad = usuario.nomUnidad;
    this.user.nomTambo = usuario.nomTambo;
  }

  salir() {
    this.router.navigate(['/sesion/login']);
  }
}
