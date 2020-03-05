import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdduserComponent } from '../userComponent/adduser/adduser.component';
import { UsersmanageComponent } from '../userComponent/usersmanage/usersmanage.component';
import { UpdateuserComponent } from '../userComponent/updateuser/updateuser.component';







const routes: Routes = [

  {path:'users/update/:id',component:UpdateuserComponent},
  
  {path:'users',component:UsersmanageComponent},

  {path:'users/add',component:AdduserComponent},
  
  { path: '**', redirectTo: 'not-found' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
