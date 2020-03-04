import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserModel } from '../Model/user.model';

import { Subscription } from 'rxjs';
import { DeleteuserpopupComponent, ConfirmDialogModel } from '../deleteuserpopup/deleteuserpopup.component';
//import { MatDialog } from '@angular/material';
import { HomeComponent } from '../home/home.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../common/services/user.service';

@Component({
  selector: 'app-usersmanage',
  templateUrl: './usersmanage.component.html',
  styleUrls: ['./usersmanage.component.css']
})
export class UsersmanageComponent implements OnInit {
  result: string = '';
  users: UserModel[];
  //userSubscription: Subscription;
  searchText;
  constructor(private userService: UserService,public matdialog:MatDialog) { }

  async ngOnInit() {
    // this.userSubscription = this.userService.userSubject.subscribe(
    //   (users: UserModel[]) => {
    //     console.log("sdfghjkl",users);
    //     this.users = users;
    //   }
    // );
    // this.userService.emitUsers();
    this.users=await this.userService.GetAllUsers().toPromise();
    
  }



  // ngOnDestroy() {
  //   this.userSubscription.unsubscribe();
  // }
  delete(id){
    const message="voulez vous supprimer ce user";
    const DialogBoite=new ConfirmDialogModel("Confirmation", message);
    const dialogRef = this.matdialog.open(DeleteuserpopupComponent
      , {
      maxWidth: "400px",
      data: DialogBoite
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if(this.result){
    //this.userService.deleteuser(id);
  
  }
 });

}
}

