import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('Sg09aQsiQwF6sFmFYdWtPRG5CZAlgy05', 'ngocsonqs.auth0.com', {
    theme : {
      logo : "./app/image/icon.png",
      primaryColor : "#e43733"
    },
    languageDictionary : {
      title : "LUONG QUY NGOC"
    }
  });

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult : any) => {

      // lay ve thong tin profile
      this.lock.getProfile( authResult.idToken, ( error : any, profile : any ) => {
        if ( error ) {
          throw new Error( error );
        }
        localStorage.setItem('profile', JSON.stringify(profile));
      });

      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');

    // xoa thong tin profile khi logout
    localStorage.removeItem("profile");
  }
}
