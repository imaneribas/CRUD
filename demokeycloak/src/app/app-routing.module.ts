import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolemanageComponent } from './rolemanage/rolemanage.component';
import { HomeComponent } from './home/home.component';
import { UsersmanageComponent } from './usersmanage/usersmanage.component';
import { ProfilComponent } from './profil/profil.component';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';


const routes: Routes = [
  {path:'profil/edit',component:EditprofilComponent},
  {path:'Role',component:RolemanageComponent},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'users',component:UsersmanageComponent},
  {path:'profil',component:ProfilComponent},
  {path:'users/add',component:AdduserComponent},
  {path:'users/update/:id',component:UpdateuserComponent},
  { path: '**', redirectTo: 'not-found' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
