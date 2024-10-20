import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {
// este servicio se encarga de la autenticacion con google
  constructor(private oAuthService: OAuthService ) { 
    this.initLogin();//inicializamos la autenticacion
  }
// este metodo inicializa la autenticacion
  initLogin(){
    //configuracion de la autenticacion con google
    const config:AuthConfig = {
      issuer: 'https://accounts.google.com',//emisor del token
      strictDiscoveryDocumentValidation: false,//validacion del documento de descubrimiento
      clientId: '470362744997-1c9siru71mt849t5c4rq7cp733ub9sld.apps.googleusercontent.com',//id del cliente
      redirectUri: window.location.origin+'/pages/main',//url de redireccion
      scope: 'openid profile email',//permisos que se le piden al usuario
    }
    this.oAuthService.configure(config);//configuramos el servicio con la configuracion que acabamos de hacer
    this.oAuthService.setupAutomaticSilentRefresh();//configuramos el refresco automatico de la sesion para que no expire
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();//cargamos el documento de descubrimiento y tratamos de iniciar sesion
  }
  // este metodo inicia la sesion
  login(){
    this.oAuthService.initLoginFlow();
  }
  // este metodo cierra la sesion
  logout(){
    this.oAuthService.logOut();
  }
  // este  metodo retorna el perfil del usuario
  getProfile(){
    return this.oAuthService.getIdentityClaims();
  }
}
