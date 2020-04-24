import { Component, ViewChild} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{

    constructor(private http: HttpClient){}

    @ViewChild('registerForm',{static: true}) private form: NgForm;
    

    onSubmit(registerForm: NgForm){
        const id: number = 0;
        const name: string = registerForm.value.name;
        const email: string = registerForm.value.email
        const userName: string = registerForm.value.userName;
        const password: string = registerForm.value.password;
        const token: string = 'blablabla'

        const userToPost: User = new User(id,name,email,userName,password,token);

        console.log(userToPost);
       this.http.post('http://localhost:8080/api/users', userToPost)
                    .subscribe((responseBody)=>{
                        console.log(responseBody);
                    });

    }
}