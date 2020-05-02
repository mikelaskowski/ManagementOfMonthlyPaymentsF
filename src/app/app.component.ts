import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './users/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private isAuthenticated: boolean;

  constructor(private authService: AuthService) { }


  ngOnInit() {
    this.authService.loggedUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    });


    // retrieve logged user from local storage
    // it protects in the event of a page reload
    this.authService.autologin();


  }

}
