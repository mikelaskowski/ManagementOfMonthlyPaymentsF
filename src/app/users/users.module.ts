import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { UsersRoutingModule } from './users-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
    declarations:[
        UsersComponent,
        RegistrationComponent,
        UsersListComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        RouterModule,
        UsersRoutingModule
    ]
})
export class UsersModule{}