import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService implements OnInit {

    usersList: User[] = [
        {
            id: 1,
            name: 'Michal',
            email: 'michal@wp.pl',
            userName: 'Scrappy',
            password: '12345s',
            token: 'str11111111'
           // tokenExpirationDate: new Date()
        },
        {
            id: 2,
            name: 'Andrzej',
            email: 'aaa@wp.pl',
            userName: 'Ziom',
            password: '123456',
            token: 'str11111112'
           // tokenExpirationDate: new Date()
        }
    ]

    constructor(private http: HttpClient) { }

    ngOnInit() {

    }

    public findUsers(): User[] {
        return this.usersList;
    }

    public saveUser(user: User): Observable<Object>{
       return this.http.post('http://localhost:8080/api/users',user);
    }


}