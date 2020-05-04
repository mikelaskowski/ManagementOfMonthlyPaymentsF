import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService implements OnInit {

  // public userListChg = new BehaviorSubject<User[]>(null);


    constructor(private http: HttpClient) {}

    ngOnInit() {

    }

    public findUsers(): Observable<Object> {
        //return this.usersList;
        return this.http.get<User[]>('http://localhost:8080/api/users');
    }

    public getUserById(id: number):Observable<Object>{
        return this.http.get<User>('http://localhost:8080/api/users/'+id);
    }

    public saveUser(user: User): Observable<Object>{
       return this.http.post<User>('http://localhost:8080/api/users',user);
    }

    public updateUser(user: User): Observable<Object>{
        return this.http.put<User>('http://localhost:8080/api/users',user);
     }

    public deleteUser(id: number): Observable<Object>{
        return this.http.delete('http://localhost:8080/api/users/'+id);
    }


}