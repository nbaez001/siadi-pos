import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  id: number;
  usuario: string;
  contrasenia: string;
  idUnidad: number;
  idTambo: number;
  nomUnidad: string;
  nomTambo: string;

  constructor() { }

  set setId(id: number) { this.id = id; }
  set setUsuario(usuario: string) { this.usuario = usuario; }
  set setContrasenia(contrasenia: string) { this.contrasenia = contrasenia; }
  set setIdUnidad(idUnidad: number) { this.idUnidad = idUnidad; }
  set setIdTambo(idTambo: number) { this.idTambo = idTambo; }

  get getId() { return this.id; }
  get getUsuario() { return this.usuario; }
  get getContrasenia() { return this.contrasenia; }
  get getIdUnidad() { return this.idUnidad; }
  get getIdTambo() { return this.idTambo; }

  public limpiarRegistro(): void {
    this.id = null;
    this.usuario = null;
    this.contrasenia = null;
    this.idUnidad = null;
    this.idTambo = null;
    return null;
  }
}
