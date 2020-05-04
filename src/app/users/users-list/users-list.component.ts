import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service'
import { User } from '../user.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

    private usersList: User[];
    private subscription: Subscription;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.findUsers()
            .subscribe((responseData: User[]) => {
                console.log(responseData);
                this.usersList = responseData;
            });

        // this.subscription = this.userService.userListChg
        //     .subscribe((userListChg: User[]) => {
        //         this.usersList = userListChg;
        //     });
    }

    onDelete(userId: number): void {
        console.log(userId);
        this.userService.deleteUser(userId)
            .subscribe((responseData) => {
                console.log(responseData);

                this.userService.findUsers()
                    .subscribe((responseData: User[]) => {
                        console.log(responseData);
                        this.usersList = responseData;
                    });

            });
    }

    onUpdate(userId: number): void {
        console.log(userId);
    }


    ngOnDestroy() {
        //this.subscription.unsubscribe();
    }



}