import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { UsersmanageComponent } from './userComponent/usersmanage/usersmanage.component';
import { AdduserComponent } from './userComponent/adduser/adduser.component';
import { UpdateuserComponent } from './userComponent/updateuser/updateuser.component';
import { DeleteuserpopupComponent } from './userComponent/deleteuserpopup/deleteuserpopup.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    UsersmanageComponent,
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
    MatPaginatorModule,//to work [pageSizeOptions]="[5, 10, 20]"
    MatTableModule,//to work [dataSource]="dataSource"
 // MatFormFieldModule,
  // MatInputModule,
   // MatRippleModule,
   MatInputModule
   
  ],
  exports: [
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DeleteuserpopupComponent]
})
export class AppModule { }
