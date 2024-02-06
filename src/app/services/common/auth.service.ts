import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService) { }

  identityCheck() {

    //const decodeToken = this.jwtHelper.decodeToken(token);
    //const expirationDate: Date = this.jwtHelper.getTokenExpirationDate(token);
    
    if (typeof localStorage !== 'undefined') {
      const token: string = localStorage.getItem('accessToken');
      let expired: boolean;
      try {
        expired = this.jwtHelper.isTokenExpired(token);
      } catch {
        expired = true;
      }
  
      _isAuthenticated = token != null && !expired;
    } else {
      // localStorage mevcut değilse (örneğin, sunucu taraflı işleme durumu) bu durumu işleyin
      console.error('localStorage mevcut değil.');
    }

  }

  get isAuthenticated(): boolean {
    return _isAuthenticated;
  }
}

export let _isAuthenticated: boolean;
