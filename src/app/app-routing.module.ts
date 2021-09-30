import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {InscrireComponent} from'./inscrire/inscrire.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import { CadieComponent } from './cadie/cadie.component';
import { ClientComponent } from './client/client.component';
const routes: Routes = [
  {path:"product", component:ProductComponent},
  {path:"inscrire",component:InscrireComponent},
  {path:"",redirectTo:"/product",pathMatch:'full'},
  {path:"login", component:LoginComponent},
  {path:"logout", component:LogoutComponent},
  {path:"cadie", component:CadieComponent},
  {path:"client", component:ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
