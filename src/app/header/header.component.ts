import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    private isAuthenticated: boolean;

  constructor(private authService: AuthService){}


  ngOnInit(){
    this.authService.loggedUser.subscribe((user) =>{
      this.isAuthenticated=!!user;
    });

  }

}