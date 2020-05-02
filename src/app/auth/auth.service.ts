import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService implements OnInit {

  public temporaryData = new BehaviorSubject<{ email: string, password: string }>({ email: "", password: "" });
  public loggedUser = new BehaviorSubject<User>(null);


  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit() { }

  public login(inputEmail: string, inputPassword: string): Observable<User> {
    console.log("z authService 1");
    return this.http.get<User>('http://localhost:8080/api/login/' + inputEmail,
      {
        params: {
          password: inputPassword
        }
      })
      .pipe(tap((respData) => {
        this.loggedUser.next(respData);
        localStorage.setItem('loggedUser', JSON.stringify(respData));
        console.log("z authService 2");
        console.log(this.loggedUser);
      })
      );
  }

  public autologin(): void {
    // load a value from local storage
    const localStorageUser: User = JSON.parse(localStorage.getItem('loggedUser'));
    this.loggedUser.next(localStorageUser);

    if (!localStorageUser) {
      return;
    }
  }
  

  public logout() {
    // assign to loggedUser (BehaviourSubject() ) null
    this.loggedUser.next(null);

    // remove from localStorage 'loggedUser'
    localStorage.removeItem('loggedUser');

    // redirect user to "/auth" -> authorization page
    this.router.navigate(['auth']);

  }

}