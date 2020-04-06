import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations:[
        UsersComponent,
        RegistrationComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        UsersRoutingModule
    ]
})
export class UsersModule{}