import { NgModule } from '@angular/core';
import { 
  Routes, 
  RouterModule, 
  PreloadAllModules 
} from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'users', loadChildren: './users/users.module#UsersModule'},
  { path: 'payments', loadChildren: './payments/payments.module#PaymentsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
