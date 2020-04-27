import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {

    public isLoading: boolean = false;
    public isLoginMode: boolean = true;

    constructor(
        private router: Router,
        private authService: AuthService ) {}

    onSubmit(formData: NgForm) {
        const email = formData.value.email;
        const password = formData.value.password;
        this.authService.temporaryData.next({email, password});
        
        

        if (!this.isLoginMode) {
            this.router.navigate(['users', 'registration']);
        }else{
            this.router.navigate(['home']);
        };
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
}