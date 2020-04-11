import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { User } from '../user.model';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

    private usersList: User[] ;
    
    /* = [
        {
            id: 1,
            name: 'Michal',
            email: 'michal@wp.pl',
            userName: 'Scrappy',
            password: '12345s',
            token: 'str11111111',
            tokenExpirationDate: new Date()
        }
    ]; */

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.usersList = this.userService.findUsers();
    }
}