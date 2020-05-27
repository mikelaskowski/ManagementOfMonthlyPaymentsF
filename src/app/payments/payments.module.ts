import { NgModule } from '@angular/core';
import { PaymentsComponent } from './payments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { PaymentsHistoryComponent } from './payments-history/payments-history';

@NgModule({
    declarations:[
        PaymentsComponent,
        PaymentsListComponent,
        PaymentsHistoryComponent
    ],
    imports:[
       FormsModule,
       ReactiveFormsModule,
       CommonModule,
       HttpClientModule,
       PaymentsRoutingModule
    ]
})
export class PaymentsModule{

}