import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: 'login', pathMatch: 'full', redirectTo: 'login' },
   { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
   { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
   { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
   { path: 'user-profile', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule) },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
