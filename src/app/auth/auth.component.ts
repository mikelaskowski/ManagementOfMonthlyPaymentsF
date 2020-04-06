import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {

    public isLoading: boolean = false;
    public isLoginMode: boolean = true;

    constructor(
        private router: Router) { }

    onSubmit(formData: NgForm) {
        console.log(formData);
        if (!this.isLoginMode) {
            this.router.navigate(['users', 'registration']);
        }
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
}