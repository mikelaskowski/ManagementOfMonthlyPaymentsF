import { Injectable, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService implements OnInit{

   public temporaryData = new BehaviorSubject<{email: string, password: string}>({email:"", password:""});

    ngOnInit(){}
}