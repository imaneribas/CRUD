import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RolemanageComponent } from './rolemanage/rolemanage.component';
import { UsersmanageComponent } from './usersmanage/usersmanage.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteuserpopupComponent } from './deleteuserpopup/deleteuserpopup.component';
import { MatRippleModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    RolemanageComponent,
    UsersmanageComponent,
    HomeComponent,
    ProfilComponent,
    EditprofilComponent,
    AdduserComponent,
    UpdateuserComponent,
    DeleteuserpopupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule ,
    MatDialogModule,
    BrowserAnimationsModule ,
    MatButtonModule,
 // MatFormFieldModule,
  // MatInputModule,
   // MatRippleModule,
  ],
  exports: [

    MatButtonModule,
    
   // MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DeleteuserpopupComponent]
})
export class AppModule { }
