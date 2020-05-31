import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment.model';
import { PaymentService } from '../payment.service';

@Component({
    selector: 'app-payments-list',
    templateUrl: './payments-list.component.html',
    styleUrls: ['./payments-list.component.css']
})
export class PaymentsListComponent implements OnInit {

    private payments: Payment[];

    constructor(private paymentService: PaymentService) { }

    ngOnInit() {
     this.payments = this.paymentService.samplePayments;
    }
}