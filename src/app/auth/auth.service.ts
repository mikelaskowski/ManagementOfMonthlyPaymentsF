import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService implements OnInit{    

   public temporaryData = new BehaviorSubject<{email: string, password: string}>({email:"", password:""});
   public loggedUser = new BehaviorSubject<User>(null);

   constructor(private http: HttpClient){}

   public login(inputEmail: string, inputPassword: string): Observable<User> {
   return this.http.get<User>('http://localhost:8080/api/login/'+ inputEmail,
    {
        params: {
          password: inputPassword
        }
      })
      .pipe(tap((respData)=>{
          this.loggedUser.next(respData);
      })
      );
}

    ngOnInit(){}
}