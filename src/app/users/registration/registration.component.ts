import { Component, ViewChild, OnInit} from '@angular/core';
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
export class RegistrationComponent implements OnInit{

    public prepopulatedEmail: String;
    public prepopulatedPassword: String;

    constructor(private http: HttpClient,
                private userService: UserService,
                private authService: AuthService,
                private router: Router
                ){}

    @ViewChild('registerForm',{static: true}) private form: NgForm;
    
    
    ngOnInit(){
        console.log('z RegisterComponent')
        // console.log(this.authService.loggedUser);
        // console.log(this.authService.temporaryData);
        // console.log(this.authService.test);
        this.authService.temporaryData.subscribe((temporaryData)=>{
            this.prepopulatedEmail = (temporaryData.email);
            this.prepopulatedPassword = (temporaryData.password);
        });

    }

    onSubmit(registerForm: NgForm){
        const id: number = 0;
        const name: string = registerForm.value.name;
        const email: string = registerForm.value.email
        const userName: string = registerForm.value.userName;
        const password: string = registerForm.value.password;
        const token: string = 'blablabla'

        const userToPost: User = new User(id,name,email,userName,password,token);

        console.log(userToPost);
       this.userService.saveUser(userToPost)
                       .subscribe((responseBody)=>{
                        console.log(responseBody);
                    });

        // clear all
        this.authService.temporaryData.unsubscribe();
        registerForm.reset();
        this.router.navigate(['auth']);

    }
}