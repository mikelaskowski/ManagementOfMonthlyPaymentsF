import { Injectable, OnInit } from '@angular/core';
import { Payment } from './payment.model';

@Injectable({ providedIn: 'root' })
export class PaymentService implements OnInit{

    public samplePayments: Payment[]=[
        new Payment(1,'Bilet', 'Transport', 'MPK Wrocław', '0000 000 000 00000 00 0000','UrbanCard', 60, 'miesiąc', 15, 6, false, 'ww/ww//ww'),
        new Payment(2,'Kredyt hipoteczny', 'Kredyt', 'MPK Bank', '0000 000 000 00000 00 0000','Spłata raty 6/2020', 2500, 'miesiąc', 20, 6, false, 'ww/ww//ww')
    ];

ngOnInit(){
    this.samplePayments.push(new Payment(3,'Kredyt sprzęt AGD', 'Kredyt', 'MPK Bank', '0000 000 000 00000 00 0000','Spłata raty 6/2020', 500, 'miesiąc', 20, 6, false, 'ww/ww//ww'))
}

}
