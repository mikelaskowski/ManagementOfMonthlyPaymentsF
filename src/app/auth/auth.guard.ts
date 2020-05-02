import { 
    CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    UrlTree, 
    Router 
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService,
                private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log('w authGuard');
    
        
        return this.authService.loggedUser.pipe(
             take(1),
             map((user)=>{
                 const isAuth = !!user;
                 if (isAuth){
                     console.log('w authGuard true');
                     return true;
                 }
                 console.log('w authGuard false');
                 return this.router.createUrlTree(['auth']);
             })
         )
    }
}