import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    private isUpdateMode: boolean = false;

    public prepopulatedName: String;
    public prepopulatedUserName: String;
    public prepopulatedEmail: String;
    public prepopulatedPassword: String;

    constructor(private http: HttpClient,
        private userService: UserService,
        private authService: AuthService,
        private router: Router
    ) { }

    @ViewChild('registerForm', { static: true }) private form: NgForm;


    ngOnInit() {
        console.log('z RegisterComponent');
        this.isUpdateMode = !!this.userService.userToUpdate;
        console.log(this.isUpdateMode);

        // console.log(this.authService.loggedUser);
        // console.log(this.authService.temporaryData);
        // console.log(this.authService.test);

        if (!this.isUpdateMode) {
            // prepopulate inputs data from login page when click sign up button
            this.authService.temporaryData.subscribe((temporaryData) => {
                this.prepopulatedName ='';
                this.prepopulatedUserName='';
                this.prepopulatedEmail = (temporaryData.email);
                this.prepopulatedPassword = (temporaryData.password);
            });
        } else {
            // when we in update mode than we retrieve data from user subscription and prepopulate inputs
            // except passwords inputs
            this.userService.userToUpdate.subscribe((user)=>{
                this.prepopulatedName =user.name;
                this.prepopulatedUserName=user.userName;
                this.prepopulatedEmail = user.email;
                this.prepopulatedPassword = '';
            })

        }

    }

    onSubmit(registerForm: NgForm) {
        let id: number;
        let name: string;
        let email: string;
        let userName: string;
        let password: string;
        let token: string;

        if (!this.isUpdateMode) {
            id = 0;
            name = registerForm.value.name;
            email = registerForm.value.email
            userName = registerForm.value.userName;
            password = registerForm.value.password;
            token = 'blablabla';

            const userToPost: User = new User(id, name, email, userName, password, token);

            console.log(userToPost);
            this.userService.saveUser(userToPost)
                .subscribe((responseBody) => {
                    console.log(responseBody);
                });

            // clear all
            this.authService.temporaryData.unsubscribe();
            registerForm.reset();
            this.router.navigate(['auth']);

        } else {

            // when it is update mode. Retrieves data (id and token) from user subscription, and rest data
            // from form
            this.userService.userToUpdate.subscribe((user) => {
                id = user.id;
                token = user.token;
            })

            name = registerForm.value.name;
            email = registerForm.value.email
            userName = registerForm.value.userName;
            password = registerForm.value.password;


            const userToUpdate: User = new User(id, name, email, userName, password, token);

            console.log(userToUpdate);
            this.userService.updateUser(userToUpdate)
                .subscribe((responseBody) => {
                    console.log(responseBody);
                });


            // clear after update mode
            registerForm.reset();
            this.isUpdateMode = false;
            this.userService.userToUpdate.next(null);
            this.userService.userToUpdate.unsubscribe();
            this.router.navigate(['users', 'userslist']);
        }

    }
}