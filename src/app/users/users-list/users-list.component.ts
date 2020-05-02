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
    
    constructor(private userService: UserService) { }

    ngOnInit() {
    this.userService.findUsers()
                    .subscribe((responseData: User[])=>{
                        console.log(responseData);
                        this.usersList=responseData;
                    });

                
    }
}