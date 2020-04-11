import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService implements OnInit {

    usersList: User[] = [
        {
            id: 1,
            name: 'Michal',
            email: 'michal@wp.pl',
            userName: 'Scrappy',
            password: '12345s',
            token: 'str11111111',
            tokenExpirationDate: new Date()
        },
        {
            id: 2,
            name: 'Andrzej',
            email: 'aaa@wp.pl',
            userName: 'Ziom',
            password: '123456',
            token: 'str11111112',
            tokenExpirationDate: new Date()
        }
    ]

    constructor() { }

    ngOnInit() {

    }

    public findUsers(): User[] {
        return this.usersList;
    }
}