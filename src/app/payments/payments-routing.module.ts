import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { PaymentsHistoryComponent } from './payments-history/payments-history';

const routes: Routes = [
    {
        path:'',
        component: PaymentsComponent,
        children:[
            {path: 'paymentslist', component: PaymentsListComponent},
            {path: 'paymentshistory', component: PaymentsHistoryComponent}
        ]
    }

]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class PaymentsRoutingModule{}