import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UsuarioModel } from '../models/usuario.model';

// Para utilizar este provider debe tener instalado el plugin cordova-sqlite-storage y el npm @ionic/storage
@Injectable()
export class UserService {

  private usuario: UsuarioModel;

  constructor(public storage: Storage) { }

  init(): Promise<any> {
    return Promise.resolve(this.storage.get('usuario').then((res) => {
      if(res == null)
        this.usuario = new UsuarioModel();
      else
        this.usuario = res;
    }));
  }

  setUserToken(token: string) {
    this.usuario.token = token;
  }

  getUserToken(): string {
    return this.usuario.token;
  }

  isUserLogged(): boolean {
    if(!this.usuario.token || this.usuario.token.length === 0)
      return false;
    else
      return true;
  }

  cleanSesion() {
    this.usuario = new UsuarioModel();
    this.persistUser();
  }

  persistUser() {
    this.storage.set('usuario', this.usuario);
  }


}
