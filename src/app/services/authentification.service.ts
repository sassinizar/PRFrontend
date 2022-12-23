import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { offset } from '@popperjs/core';
import { Observable, of, throwError } from 'rxjs';
import { AppUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  users : AppUser[]=[];
 authenticatedUser : AppUser | undefined;
  constructor() {
    this.users.push({userId : "1234", username : "user1", password : "1234", roles :["USER"]});
    this.users.push({userId : "1235", username : "user2", password : "1234", roles :["USER"]});
    this.users.push({userId : "1236", username : "admin", password : "1234", roles :["USER","ADMIN"]});
   }

   public login(username : string, password :string): Observable<AppUser>{
    let appUser = this.users.find( u => u.username==username );
    if(!appUser) return throwError(new Error("user not found"));
    if(appUser.password != password){
      return throwError(new Error("Bad Credentials"))
    }
    return of(appUser);
   }

   public authenticate(appUser : AppUser){
    this.authenticatedUser = appUser;
   }
}
